import KeyRow from "@/components/KeyRow";
import Key from "@/components/Keys/Key";
import SpecialKey, { TextPosition } from "@/components/Keys/SpecialKey";
import SplitKey from "@/components/Keys/SplitKey";

type KeyboardProps = {
  pressedKeys: Set<string>;
  keyMap: any;
};

const Keyboard = ({ pressedKeys, keyMap }: KeyboardProps) => {
  return (
    <div className="flex flex-col gap-2 dark:text-gray-400 select-none">
      <KeyRow>
        <Key {...keyMap.Backquote} highlight={pressedKeys.has("Backquote")} />
        <Key {...keyMap.Digit1} highlight={pressedKeys.has("Digit1")} />
        <Key {...keyMap.Digit2} highlight={pressedKeys.has("Digit2")} />
        <Key {...keyMap.Digit3} highlight={pressedKeys.has("Digit3")} />
        <Key {...keyMap.Digit4} highlight={pressedKeys.has("Digit4")} />
        <Key {...keyMap.Digit5} highlight={pressedKeys.has("Digit5")} />
        <Key {...keyMap.Digit6} highlight={pressedKeys.has("Digit6")} />
        <Key {...keyMap.Digit7} highlight={pressedKeys.has("Digit7")} />
        <Key {...keyMap.Digit8} highlight={pressedKeys.has("Digit8")} />
        <Key {...keyMap.Digit9} highlight={pressedKeys.has("Digit9")} />
        <Key {...keyMap.Digit0} highlight={pressedKeys.has("Digit0")} />
        <Key {...keyMap.Minus} highlight={pressedKeys.has("Minus")} />
        <Key {...keyMap.Equal} highlight={pressedKeys.has("Equal")} />
        <SpecialKey
          {...keyMap.Backspace}
          position={TextPosition.RIGHT}
          width="w-24"
          highlight={pressedKeys.has("Backspace")}
        />
      </KeyRow>
      <KeyRow>
        <SpecialKey
          {...keyMap.Tab}
          width="w-24"
          highlight={pressedKeys.has("Tab")}
        />
        <Key {...keyMap.KeyQ} highlight={pressedKeys.has("KeyQ")} />
        <Key {...keyMap.KeyW} highlight={pressedKeys.has("KeyW")} />
        <Key {...keyMap.KeyE} highlight={pressedKeys.has("KeyE")} />
        <Key {...keyMap.KeyR} highlight={pressedKeys.has("KeyR")} />
        <Key {...keyMap.KeyT} highlight={pressedKeys.has("KeyT")} />
        <Key {...keyMap.KeyY} highlight={pressedKeys.has("KeyY")} />
        <Key {...keyMap.KeyU} highlight={pressedKeys.has("KeyU")} />
        <Key {...keyMap.KeyI} highlight={pressedKeys.has("KeyI")} />
        <Key {...keyMap.KeyO} highlight={pressedKeys.has("KeyO")} />
        <Key {...keyMap.KeyP} highlight={pressedKeys.has("KeyP")} />
        <Key
          {...keyMap.BracketLeft}
          highlight={pressedKeys.has("BracketLeft")}
        />
        <Key
          {...keyMap.BracketRight}
          highlight={pressedKeys.has("BracketRight")}
        />
        <Key {...keyMap.Backslash} highlight={pressedKeys.has("Backslash")} />
      </KeyRow>
      <KeyRow>
        <SpecialKey
          {...keyMap.CapsLock}
          width="w-[7.25rem]"
          highlight={pressedKeys.has("CapsLock")}
        />
        <Key {...keyMap.KeyA} highlight={pressedKeys.has("KeyA")} />
        <Key {...keyMap.KeyS} highlight={pressedKeys.has("KeyS")} />
        <Key {...keyMap.KeyD} highlight={pressedKeys.has("KeyD")} />
        <Key {...keyMap.KeyF} highlight={pressedKeys.has("KeyF")} bump />
        <Key {...keyMap.KeyG} highlight={pressedKeys.has("KeyG")} />
        <Key {...keyMap.KeyH} highlight={pressedKeys.has("KeyH")} />
        <Key {...keyMap.KeyJ} highlight={pressedKeys.has("KeyJ")} bump />
        <Key {...keyMap.KeyK} highlight={pressedKeys.has("KeyK")} />
        <Key {...keyMap.KeyL} highlight={pressedKeys.has("KeyL")} />
        <Key {...keyMap.Semicolon} highlight={pressedKeys.has("Semicolon")} />
        <Key {...keyMap.Quote} highlight={pressedKeys.has("Quote")} />
        <SpecialKey
          {...keyMap.Enter}
          position={TextPosition.RIGHT}
          width="w-[7.25rem]"
          highlight={pressedKeys.has("Enter")}
        />
      </KeyRow>
      <KeyRow>
        <SpecialKey
          {...keyMap.ShiftLeft}
          width="w-[9.5rem]"
          highlight={pressedKeys.has("ShiftLeft")}
        />
        <Key {...keyMap.KeyZ} highlight={pressedKeys.has("KeyZ")} />
        <Key {...keyMap.KeyX} highlight={pressedKeys.has("KeyX")} />
        <Key {...keyMap.KeyC} highlight={pressedKeys.has("KeyC")} />
        <Key {...keyMap.KeyV} highlight={pressedKeys.has("KeyV")} />
        <Key {...keyMap.KeyB} highlight={pressedKeys.has("KeyB")} />
        <Key {...keyMap.KeyN} highlight={pressedKeys.has("KeyN")} />
        <Key {...keyMap.KeyM} highlight={pressedKeys.has("KeyM")} />
        <Key {...keyMap.Comma} highlight={pressedKeys.has("Comma")} />
        <Key {...keyMap.Period} highlight={pressedKeys.has("Period")} />
        <Key {...keyMap.Slash} highlight={pressedKeys.has("Slash")} />
        <SpecialKey
          {...keyMap.ShiftRight}
          position={TextPosition.RIGHT}
          width="w-[9.5rem]"
          highlight={pressedKeys.has("ShiftRight")}
        />
      </KeyRow>
      <KeyRow>
        <SpecialKey text="fn" />
        <SpecialKey
          {...keyMap.ControlLeft}
          highlight={pressedKeys.has("ControlLeft")}
        />
        <SpecialKey
          {...keyMap.AltLeft}
          highlight={pressedKeys.has("AltLeft")}
        />
        <SpecialKey
          {...keyMap.MetaLeft}
          width="w-20"
          highlight={pressedKeys.has("MetaLeft")}
        />
        <SpecialKey
          {...keyMap.Space}
          width="w-[22rem]"
          highlight={pressedKeys.has("Space")}
        />
        <SpecialKey
          {...keyMap.MetaRight}
          position={TextPosition.RIGHT}
          width="w-20"
          highlight={pressedKeys.has("MetaRight")}
        />
        <SpecialKey
          {...keyMap.AltRight}
          position={TextPosition.RIGHT}
          highlight={pressedKeys.has("AltRight")}
        />
        <SplitKey
          {...keyMap.ArrowLeft}
          highlightBottom={pressedKeys.has("ArrowLeft")}
        />
        <SplitKey
          {...keyMap.ArrowDown}
          {...keyMap.ArrowUp}
          highlightBottom={pressedKeys.has("ArrowDown")}
          highlightTop={pressedKeys.has("ArrowUp")}
        />
        <SplitKey
          {...keyMap.ArrowRight}
          highlightBottom={pressedKeys.has("ArrowRight")}
        />
      </KeyRow>
    </div>
  );
};

export default Keyboard;
