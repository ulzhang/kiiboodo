"use client";

import { useState } from "react";
import Keyboard from "@/components/Keyboard";
import KeyboardOption from "@/components/KeyboardOption";

import qwertyKeyMap from "@/keyboards/qwertyKeyMap";
import dvorakKeyMap from "@/keyboards/dvorakKeyMap";
import colemakKeyMap from "@/keyboards/colemakKeyMap";

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
  const [pressedKeys, setPressedKeys] = useState(new Set<string>());
  const [keyboardLayout, setKeyboardLayout] = useState(KeyboardLayout.QWERTY);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    event.preventDefault();
    setPressedKeys((prev) => new Set(prev.add(event.code)));
  };

  const handleKeyUp = (event: React.KeyboardEvent) => {
    event.preventDefault();
    setPressedKeys((prev) => {
      prev.delete(event.code);
      return new Set(prev);
    });
  };

  return (
    <div
      className="p-12 w-screen h-screen"
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    >
      <div className="flex gap-4">
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
      <div className="w-full flex justify-center">
        <Keyboard pressedKeys={pressedKeys} keyMap={KeyMap[keyboardLayout]} />
      </div>
    </div>
  );
};

export default App;
