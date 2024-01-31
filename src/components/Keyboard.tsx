import KeyRow from "@/components/KeyRow";
import Key from "@/components/Keys/Key";
import SpecialKey, { TextPosition } from "@/components/Keys/SpecialKey";
import SplitKey from "@/components/Keys/SplitKey";
import ArrowDown from "@/components/Icons/ArrowDown";
import ArrowUp from "@/components/Icons/ArrowUp";
import ArrowLeft from "@/components/Icons/ArrowLeft";
import ArrowRight from "@/components/Icons/ArrowRight";
import Command from "@/components/Icons/Command";
import Option from "@/components/Icons/Option";
import Control from "@/components/Icons/Control";

type KeyboardProps = {
  pressedKeys: Set<string>;
};

const Keyboard = ({ pressedKeys }: KeyboardProps) => {
  return (
    <div className="flex flex-col gap-2 dark:text-gray-400 p-8">
      <KeyRow>
        <Key text="`" shiftText="~" highlight={pressedKeys.has("Backquote")} />
        <Key text="1" shiftText="!" highlight={pressedKeys.has("Digit1")} />
        <Key text="2" shiftText="@" highlight={pressedKeys.has("Digit2")} />
        <Key text="3" shiftText="#" highlight={pressedKeys.has("Digit3")} />
        <Key text="4" shiftText="$" highlight={pressedKeys.has("Digit4")} />
        <Key text="5" shiftText="%" highlight={pressedKeys.has("Digit5")} />
        <Key text="6" shiftText="^" highlight={pressedKeys.has("Digit6")} />
        <Key text="7" shiftText="&" highlight={pressedKeys.has("Digit7")} />
        <Key text="8" shiftText="*" highlight={pressedKeys.has("Digit8")} />
        <Key text="9" shiftText="(" highlight={pressedKeys.has("Digit9")} />
        <Key text="0" shiftText=")" highlight={pressedKeys.has("Digit0")} />
        <Key text="-" shiftText="_" highlight={pressedKeys.has("Minus")} />
        <Key text="=" shiftText="+" highlight={pressedKeys.has("Equal")} />
        <SpecialKey
          text="delete"
          position={TextPosition.RIGHT}
          width="w-24"
          highlight={pressedKeys.has("Backspace")}
        />
      </KeyRow>
      <KeyRow>
        <SpecialKey
          text="tab"
          width="w-24"
          highlight={pressedKeys.has("Tab")}
        />
        <Key text="Q" highlight={pressedKeys.has("KeyQ")} />
        <Key text="W" highlight={pressedKeys.has("KeyW")} />
        <Key text="E" highlight={pressedKeys.has("KeyE")} />
        <Key text="R" highlight={pressedKeys.has("KeyR")} />
        <Key text="T" highlight={pressedKeys.has("KeyT")} />
        <Key text="Y" highlight={pressedKeys.has("KeyY")} />
        <Key text="U" highlight={pressedKeys.has("KeyU")} />
        <Key text="I" highlight={pressedKeys.has("KeyI")} />
        <Key text="O" highlight={pressedKeys.has("KeyO")} />
        <Key text="P" highlight={pressedKeys.has("KeyP")} />
        <Key
          text="["
          shiftText="{"
          highlight={pressedKeys.has("BracketLeft")}
        />
        <Key
          text="]"
          shiftText="}"
          highlight={pressedKeys.has("BracketRight")}
        />
        <Key text="\" shiftText="|" highlight={pressedKeys.has("BackSlash")} />
      </KeyRow>
      <KeyRow>
        <SpecialKey
          text="caps lock"
          width="w-[7.25rem]"
          highlight={pressedKeys.has("CapsLock")}
        />
        <Key text="A" highlight={pressedKeys.has("KeyA")} />
        <Key text="S" highlight={pressedKeys.has("KeyS")} />
        <Key text="D" highlight={pressedKeys.has("KeyD")} />
        <Key text="F" highlight={pressedKeys.has("KeyF")} />
        <Key text="G" highlight={pressedKeys.has("KeyG")} />
        <Key text="H" highlight={pressedKeys.has("KeyH")} />
        <Key text="J" highlight={pressedKeys.has("KeyJ")} />
        <Key text="K" highlight={pressedKeys.has("KeyK")} />
        <Key text="L" highlight={pressedKeys.has("KeyL")} />
        <Key text=";" shiftText=":" highlight={pressedKeys.has("Semicolon")} />
        <Key text="'" shiftText='"' highlight={pressedKeys.has("Quote")} />
        <SpecialKey
          text="return"
          position={TextPosition.RIGHT}
          width="w-[7.25rem]"
          highlight={pressedKeys.has("Enter")}
        />
      </KeyRow>
      <KeyRow>
        <SpecialKey
          text="shift"
          width="w-[9.5rem]"
          highlight={pressedKeys.has("ShiftLeft")}
        />
        <Key text="Z" highlight={pressedKeys.has("KeyZ")} />
        <Key text="X" highlight={pressedKeys.has("KeyX")} />
        <Key text="C" highlight={pressedKeys.has("KeyC")} />
        <Key text="V" highlight={pressedKeys.has("KeyV")} />
        <Key text="B" highlight={pressedKeys.has("KeyB")} />
        <Key text="N" highlight={pressedKeys.has("KeyN")} />
        <Key text="M" highlight={pressedKeys.has("KeyM")} />
        <Key text="," shiftText="<" highlight={pressedKeys.has("Comma")} />
        <Key text="." shiftText=">" highlight={pressedKeys.has("Period")} />
        <Key text="/" shiftText="?" highlight={pressedKeys.has("Slash")} />
        <SpecialKey
          text="shift"
          position={TextPosition.RIGHT}
          width="w-[9.5rem]"
          highlight={pressedKeys.has("ShiftRight")}
        />
      </KeyRow>
      <KeyRow>
        <SpecialKey text="fn" />
        <SpecialKey
          text="control"
          icon={<Control />}
          highlight={pressedKeys.has("ControlLeft")}
        />
        <SpecialKey
          text="option"
          icon={<Option />}
          highlight={pressedKeys.has("AltLeft")}
        />
        <SpecialKey
          text="command"
          icon={<Command />}
          width="w-20"
          highlight={pressedKeys.has("MetaLeft")}
        />
        <SpecialKey
          text=""
          width="w-[22rem]"
          highlight={pressedKeys.has("Space")}
        />
        <SpecialKey
          text="command"
          icon={<Command />}
          position={TextPosition.RIGHT}
          width="w-20"
          highlight={pressedKeys.has("MetaRight")}
        />
        <SpecialKey
          text="option"
          icon={<Option />}
          position={TextPosition.RIGHT}
          highlight={pressedKeys.has("AltRight")}
        />
        <SplitKey
          bottomText={<ArrowLeft />}
          highlightBottom={pressedKeys.has("ArrowLeft")}
        />
        <SplitKey
          bottomText={<ArrowDown />}
          topText={<ArrowUp />}
          highlightBottom={pressedKeys.has("ArrowDown")}
          highlightTop={pressedKeys.has("ArrowUp")}
        />
        <SplitKey
          bottomText={<ArrowRight />}
          highlightBottom={pressedKeys.has("ArrowRight")}
        />
      </KeyRow>
    </div>
  );
};

export default Keyboard;
