"use client";

import { useState } from "react";
import Keyboard from "@/components/Keyboard";

const App = () => {
  const [pressedKeys, setPressedKeys] = useState(new Set<string>());

  const handleKeyDown = (event: React.KeyboardEvent) => {
    event.preventDefault();
    console.log("down", event.code);
    setPressedKeys((prev) => new Set(prev.add(event.code)));
  };

  const handleKeyUp = (event: React.KeyboardEvent) => {
    event.preventDefault();
    console.log("down", event.code);
    setPressedKeys((prev) => {
      prev.delete(event.code);
      return new Set(prev);
    });
  };

  return (
    <div
      className="w-screen flex justify-center"
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    >
      <Keyboard pressedKeys={pressedKeys} />
    </div>
  );
};

export default App;
