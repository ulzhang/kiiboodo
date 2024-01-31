import ArrowDown from "@/components/Icons/ArrowDown";
import ArrowUp from "@/components/Icons/ArrowUp";
import ArrowLeft from "@/components/Icons/ArrowLeft";
import ArrowRight from "@/components/Icons/ArrowRight";
import Command from "@/components/Icons/Command";
import Option from "@/components/Icons/Option";
import Control from "@/components/Icons/Control";

const colemakKeyMap = {
  Backquote: {
    text: "`",
    shiftText: "~",
  },
  Digit1: {
    text: "1",
    shiftText: "!",
  },
  Digit2: {
    text: "2",
    shiftText: "@",
  },
  Digit3: {
    text: "3",
    shiftText: "#",
  },
  Digit4: {
    text: "4",
    shiftText: "$",
  },
  Digit5: {
    text: "5",
    shiftText: "%",
  },
  Digit6: {
    text: "6",
    shiftText: "^",
  },
  Digit7: {
    text: "7",
    shiftText: "&",
  },
  Digit8: {
    text: "8",
    shiftText: "*",
  },
  Digit9: {
    text: "9",
    shiftText: "(",
  },
  Digit0: {
    text: "0",
    shiftText: ")",
  },
  Minus: {
    text: "-",
    shiftText: "_",
  },
  Equal: {
    text: "=",
    shiftText: "+",
  },
  Backspace: {
    text: "delete",
  },
  Tab: {
    text: "tab",
  },
  KeyQ: {
    text: "Q",
  },
  KeyW: {
    text: "W",
  },
  KeyE: {
    text: "F",
  },
  KeyR: {
    text: "P",
  },
  KeyT: {
    text: "G",
  },
  KeyY: {
    text: "J",
  },
  KeyU: {
    text: "L",
  },
  KeyI: {
    text: "U",
  },
  KeyO: {
    text: "Y",
  },
  KeyP: {
    text: ";",
    shiftText: ":",
  },
  BracketLeft: {
    text: "[",
    shiftText: "{",
  },
  BracketRight: {
    text: "]",
    shiftText: "}",
  },
  BackSlash: {
    text: "\\",
    shiftText: "|",
  },
  CapsLock: {
    text: "caps lock",
  },
  KeyA: {
    text: "A",
  },
  KeyS: {
    text: "R",
  },
  KeyD: {
    text: "S",
  },
  KeyF: {
    text: "T",
  },
  KeyG: {
    text: "D",
  },
  KeyH: {
    text: "H",
  },
  KeyJ: {
    text: "N",
  },
  KeyK: {
    text: "E",
  },
  KeyL: {
    text: "I",
  },
  Semicolon: {
    text: "O",
  },
  Quote: {
    text: "'",
    shiftText: '"',
  },
  Enter: {
    text: "return",
  },
  ShiftLeft: {
    text: "shift",
  },
  KeyZ: {
    text: "Z",
  },
  KeyX: {
    text: "X",
  },
  KeyC: {
    text: "C",
  },
  KeyV: {
    text: "V",
  },
  KeyB: {
    text: "B",
  },
  KeyN: {
    text: "K",
  },
  KeyM: {
    text: "M",
  },
  Comma: {
    text: ",",
    shiftText: "<",
  },
  Period: {
    text: ".",
    shiftText: ">",
  },
  Slash: {
    text: "/",
    shiftText: "/",
  },
  ShiftRight: {
    text: "shift",
  },
  ControlLeft: {
    text: "control",
    Icon: Control,
  },
  AltLeft: {
    text: "option",
    Icon: Option,
  },
  MetaLeft: {
    text: "command",
    Icon: Command,
  },
  Space: {
    text: "",
  },
  MetaRight: {
    text: "command",
    Icon: Command,
  },
  AltRight: {
    text: "option",
    Icon: Option,
  },
  ArrowLeft: {
    BottomIcon: ArrowLeft,
  },
  ArrowUp: {
    TopIcon: ArrowUp,
  },
  ArrowDown: {
    BottomIcon: ArrowDown,
  },
  ArrowRight: {
    BottomIcon: ArrowRight,
  },
};

export default colemakKeyMap;
