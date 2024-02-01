"use client";

import { useState, useEffect } from "react";
import Keyboard from "@/components/Keyboard";
import KeyboardOption from "@/components/KeyboardOption";
import TypeTest from "@/components/TypeTest";

import qwertyKeyMap from "@/keyboards/qwertyKeyMap";
import dvorakKeyMap from "@/keyboards/dvorakKeyMap";
import colemakKeyMap from "@/keyboards/colemakKeyMap";
import { words } from "@/words";

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

  // Store type test data
  const [typeTestState, setTypeTestState] = useState({
    finishedText: "", // Complete words that have been finished
    typedText: "", // The text currently being typed
    unfinishedText: "", // All text that is incomplete (including typedText)
  });

  useEffect(() => {
    // Set type test to a set of random words
    setTypeTestState({
      finishedText: "",
      typedText: "",
      unfinishedText: words.sort(() => 0.5 - Math.random()).join(" "),
    });
  }, []);

  useEffect(() => {
    // Add more words to type if its running low
    const { unfinishedText } = typeTestState;

    if (unfinishedText !== "" && unfinishedText.length < 500) {
      setTypeTestState((prev) => ({
        ...prev,
        unfinishedText:
          prev.unfinishedText +
          " " +
          words.sort(() => 0.5 - Math.random()).join(" "),
      }));
    }
  }, [typeTestState]);

  const handleTypeTestKeyDown = (code: string) => {
    if (code === "Backspace") {
      // Remove 1 from typedText if applicable
      setTypeTestState((prev) => {
        if (prev.typedText.length === 0) {
          return {
            ...prev,
          };
        }

        return {
          ...prev,
          typedText: prev.typedText.slice(0, prev.typedText.length - 1),
        };
      });
    } else if (code === "Space") {
      setTypeTestState((prev) => {
        const nextUnfinishedWord = prev.unfinishedText.slice(
          0,
          prev.unfinishedText.indexOf(" ")
        );

        if (prev.typedText === nextUnfinishedWord) {
          // Handle when a word is typed correctly by:
          // 1. Remove word from unfinishedText
          // 2. Add word to finishedText
          // 3. Reset typedText
          return {
            finishedText: prev.finishedText + nextUnfinishedWord + " ",
            typedText: "",
            unfinishedText: prev.unfinishedText.slice(
              prev.unfinishedText.indexOf(" ") + 1
            ),
          };
        } else {
          // If word is typed incorrectly, just add as usual
          return {
            ...prev,
            typedText: prev.typedText + " ",
          };
        }
      });
    } else {
      // Handle normal case when letter is typed
      const typedLetter =
        (shift ? keyMap[code].shiftValue : keyMap[code].value) || "";

      setTypeTestState((prev) => ({
        ...prev,
        typedText: prev.typedText + typedLetter,
      }));
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
    event.preventDefault();

    if (event.code === "ShiftLeft") {
      setShiftLeft(true);
    }
    if (event.code === "ShiftRight") {
      setShiftRight(true);
    }

    // Set highlighted key on visual keyboard
    setPressedKeys((prev) => new Set(prev.add(event.code)));

    handleTypeTestKeyDown(event.code);
  };

  const handleKeyUp = (event: React.KeyboardEvent) => {
    event.preventDefault();

    if (event.code === "ShiftLeft") {
      setShiftLeft(false);
    }
    if (event.code === "ShiftRight") {
      setShiftRight(false);
    }

    // Unset highlighted key on visual keyboard
    setPressedKeys((prev) => {
      prev.delete(event.code);
      return new Set(prev);
    });
  };

  return (
    <div
      className="p-12 w-screen max-w-6xl m-auto outline-0"
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    >
      <div className="flex gap-4 mb-4">
        <KeyboardOption
          name="QWERTY"
          description="The de facto keyboard layout since 1873, when it was first used in typewriters."
          highlight={keyboardLayout === KeyboardLayout.QWERTY}
          onClick={() => setKeyboardLayout(KeyboardLayout.QWERTY)}
        />
        <KeyboardOption
          name="Dvorak"
          description="Designed for a fast and ergonomic typing experience."
          highlight={keyboardLayout === KeyboardLayout.DVORAK}
          onClick={() => setKeyboardLayout(KeyboardLayout.DVORAK)}
        />
        <KeyboardOption
          name="Colemak"
          description="Resembles QWERTY while being more efficient and comfortable."
          highlight={keyboardLayout === KeyboardLayout.COLEMAK}
          onClick={() => setKeyboardLayout(KeyboardLayout.COLEMAK)}
        />
      </div>
      <div className="mb-4">
        <TypeTest
          finishedText={typeTestState.finishedText}
          typedText={typeTestState.typedText}
          unfinishedText={typeTestState.unfinishedText}
          handleNewLine={handleNewLine}
        />
      </div>
      <div className="w-full flex justify-center mb-4">
        <Keyboard pressedKeys={pressedKeys} keyMap={keyMap} />
      </div>
    </div>
  );
};

export default App;
