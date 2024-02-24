"use client";

import { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import Keyboard from "@/components/Keyboard";
import KeyboardOption from "@/components/KeyboardOption";
import TypeTest from "@/components/TypeTest";
import qwertyKeyMap from "@/keyboards/qwertyKeyMap";
import dvorakKeyMap from "@/keyboards/dvorakKeyMap";
import colemakKeyMap from "@/keyboards/colemakKeyMap";
import { romanjiMap } from "@/words";
import LightBulb from "@/components/Icons/LightBulb";

const MobileBanner = dynamic(() => import("@/components/MobileBanner"), {
  ssr: false,
});

enum KeyboardLayout {
  QWERTY,
  DVORAK,
  COLEMAK,
}

const KeyMap = {
  [KeyboardLayout.QWERTY]: qwertyKeyMap,
  [KeyboardLayout.DVORAK]: dvorakKeyMap,
  [KeyboardLayout.COLEMAK]: colemakKeyMap,
};

const App = () => {
  // Keyboard configuration
  const [keyboardLayout, setKeyboardLayout] = useState(KeyboardLayout.QWERTY);
  const keyMap = KeyMap[keyboardLayout] as any;

  // Keys that are currently pressed down. For visual keyboard
  const [pressedKeys, setPressedKeys] = useState(new Set<string>());

  const [shiftLeft, setShiftLeft] = useState(false);
  const [shiftRight, setShiftRight] = useState(false);
  const shift = shiftLeft || shiftRight;

  const [metaLeft, setMetaLeft] = useState(false);
  const [metaRight, setMetaRight] = useState(false);
  const meta = metaLeft || metaRight;

  const resetKeys = () => {
    setPressedKeys(new Set());
    setShiftLeft(false);
    setShiftRight(false);
    setMetaLeft(false);
    setMetaRight(false);
  };

  // Store if should show hints
  const [showHints, setShowHints] = useState(false);

  const getHintKey = () => {
    if (!showHints) {
      return undefined;
    }

    if (incorrectText.length > 0) {
      return "Backspace";
    }

    return Object.keys(keyMap).find(
      (key) =>
        keyMap[key].value === restText[0] ||
        keyMap[key].shiftValue === restText[0]
    );
  };

  // Store type test data
  const [typeTestState, setTypeTestState] = useState({
    finishedText: "", // Complete words that have been finished
    typedText: "", // The text currently being typed
    unfinishedText: "", // All text that is incomplete (including typedText)
  });

  const { correctText, incorrectText, restText } = useMemo(() => {
    const { typedText, unfinishedText } = typeTestState;

    // Find the index of the first incorrect character in typedText
    let incorrectIndex = 0;
    while (
      incorrectIndex < typedText.length &&
      incorrectIndex < unfinishedText.length &&
      typedText[incorrectIndex] === unfinishedText[incorrectIndex]
    ) {
      incorrectIndex++;
    }

    // Handle logic to display typed text correctly
    const correctText = typedText.slice(0, incorrectIndex);
    const incorrectText = typedText
      .slice(incorrectIndex)
      .replace(/ /g, "\u00A0");
    const restText = unfinishedText.slice(incorrectIndex);

    return { correctText, incorrectText, restText };
  }, [typeTestState]);

  useEffect(() => {
    // Get an array of the keys from romanjiMap
    const keys = Object.keys(romanjiMap);

    // Randomize the order of the keys
    const randomizedKeys = keys.sort(() => 0.5 - Math.random());

    // Optionally, convert these keys to their hiragana equivalents if needed
    const hiraganaWords = randomizedKeys.map((key) => romanjiMap[key].hiragana);

    // Set the type test state with the randomized keys (or their hiragana equivalents) joined into a string
    setTypeTestState({
      finishedText: "",
      typedText: "",
      unfinishedText: randomizedKeys.join(" "), // Use randomizedKeys.join(" ") if you want the romanji instead
    });
  }, []);

  useEffect(() => {
    // Add more words to type if its running low
    const { unfinishedText } = typeTestState;

    // Get an array of the keys from romanjiMap
    const keys = Object.keys(romanjiMap);

    if (unfinishedText !== "" && unfinishedText.length < 500) {
      setTypeTestState((prev) => ({
        ...prev,
        unfinishedText:
          prev.unfinishedText +
          " " +
          keys.sort(() => 0.5 - Math.random()).join(" "),
      }));
    }
  }, [typeTestState]);

  const handleTypeTestKeyDown = (code: string) => {
    if (code === "Backspace" && meta) {
      // Special feature, remove all incorrect text on cmd + backspace
      setTypeTestState((prev) => {
        // Find the index of the first incorrect character in typedText
        let incorrectIndex = 0;
        while (
          incorrectIndex < prev.typedText.length &&
          incorrectIndex < prev.unfinishedText.length &&
          prev.typedText[incorrectIndex] === prev.unfinishedText[incorrectIndex]
        ) {
          incorrectIndex++;
        }

        return {
          ...prev,
          typedText: prev.typedText.slice(0, incorrectIndex),
        };
      });

      // When you cmd+key, the key stays down
      // this is to artificially KeyUp the Backspace button
      setPressedKeys((prev) => {
        prev.delete("Backspace");
        return new Set(prev);
      });
    }

    // Handle backspace separately
    else if (code === "Backspace") {
      setTypeTestState((prev) => {
        const currentTypedText = prev.typedText;
        // Remove the last character from typedText
        const updatedTypedText = currentTypedText.slice(0, -1);

        return {
          ...prev,
          typedText: updatedTypedText,
        };
      });
    } else {
      if (meta) {
        // If performing a command, ignore the typed letter
        return;
      }
      if (code === "Space") {
        // Ignore spaces for now.
        return;
      }

      // Handle normal case when letter is typed
      const typedLetter =
        (shift ? keyMap[code].shiftValue : keyMap[code].value) || "";

      setTypeTestState((prev) => {
        let updatedTypedText = prev.typedText + typedLetter;
        let updatedFinishedText = prev.finishedText;
        let updatedUnfinishedText = prev.unfinishedText;

        // Check if the updatedTypedText matches the next part of the unfinishedText
        // If it's a complete match, update the finishedText and clear typedText
        if (updatedUnfinishedText.startsWith(updatedTypedText)) {
          // Check if the updatedTypedText exactly matches the next segment of unfinishedText
          if (updatedUnfinishedText.startsWith(updatedTypedText)) {
            // Check if the updatedTypedText matches the unfinishedText exactly (implying the segment is complete)
            if (
              updatedTypedText === updatedUnfinishedText ||
              updatedUnfinishedText.startsWith(updatedTypedText + " ")
            ) {
              updatedFinishedText += updatedTypedText + " "; // Add the completed segment and a space to finishedText
              updatedUnfinishedText = updatedUnfinishedText
                .substring(updatedTypedText.length)
                .trimStart(); // Advance past the matched segment
              updatedTypedText = ""; // Reset typedText since it's now part of finishedText
            }
          }
        } else {
          // Handle incorrect input; this is where you might flash the background red, etc.
          // Since you're looking to not confirm correctness with a space, incorrect handling logic might be adjusted here
        }

        return {
          finishedText: updatedFinishedText,
          typedText: updatedTypedText,
          unfinishedText: updatedUnfinishedText,
        };
      });
    }
  };

  // Handle new line
  const handleNewLine = () => {
    setTypeTestState((prev) => {
      return {
        ...prev,
        finishedText: "",
      };
    });
  };

  // KeyboardEvent Handlers
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.code === "ShiftLeft") {
      setShiftLeft(true);
    }
    if (event.code === "ShiftRight") {
      setShiftRight(true);
    }
    if (event.code === "MetaLeft") {
      setMetaLeft(true);
    }
    if (event.code === "MetaRight") {
      setMetaRight(true);
    }

    // Set highlighted key on visual keyboard
    setPressedKeys((prev) => new Set(prev.add(event.code)));

    handleTypeTestKeyDown(event.code);
  };

  const handleKeyUp = (event: React.KeyboardEvent) => {
    if (event.code === "ShiftLeft") {
      setShiftLeft(false);
    }
    if (event.code === "ShiftRight") {
      setShiftRight(false);
    }
    if (event.code === "MetaLeft") {
      setMetaLeft(false);
    }
    if (event.code === "MetaRight") {
      setMetaRight(false);
    }

    // Unset highlighted key on visual keyboard
    setPressedKeys((prev) => {
      prev.delete(event.code);
      return new Set(prev);
    });
  };

  return (
    <div>
      <MobileBanner />
      <div
        className="p-12 w-screen h-screen max-w-6xl m-auto outline-none"
        autoFocus
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onBlur={() => resetKeys()}
      >
        <div className="mb-4 flex items-start gap-8">
          <div className="text-right shrink-0 grow">
            <button
              tabIndex={-1}
              className="outline-none"
              onClick={() => setShowHints((prev) => !prev)}
              onKeyUp={(e) => e.preventDefault()}
            >
              <LightBulb lit={showHints} />
            </button>
          </div>
        </div>

        <div className="mb-4">
          <TypeTest
            finishedText={typeTestState.finishedText}
            correctText={correctText}
            incorrectText={incorrectText}
            restText={restText}
            handleNewLine={handleNewLine}
          />
        </div>
        <div className="w-full flex justify-center mb-4">
          <Keyboard
            pressedKeys={pressedKeys}
            keyMap={keyMap}
            hintKey={getHintKey()}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
