import ArrowDown from "@/components/Icons/ArrowDown";
import ArrowUp from "@/components/Icons/ArrowUp";
import ArrowLeft from "@/components/Icons/ArrowLeft";
import ArrowRight from "@/components/Icons/ArrowRight";
import Command from "@/components/Icons/Command";
import Option from "@/components/Icons/Option";
import Control from "@/components/Icons/Control";

const dvorakKeyMap = {
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
    text: "[",
    shiftText: "{",
  },
  Equal: {
    text: "]",
    shiftText: "}",
  },
  Backspace: {
    text: "delete",
  },
  Tab: {
    text: "tab",
  },
  KeyQ: {
    text: "'",
    shiftText: '"',
  },
  KeyW: {
    text: ",",
    shiftText: "<",
  },
  KeyE: {
    text: ".",
    shiftText: ">",
  },
  KeyR: {
    text: "P",
  },
  KeyT: {
    text: "Y",
  },
  KeyY: {
    text: "F",
  },
  KeyU: {
    text: "G",
  },
  KeyI: {
    text: "C",
  },
  KeyO: {
    text: "R",
  },
  KeyP: {
    text: "L",
  },
  BracketLeft: {
    text: "/",
    shiftText: "?",
  },
  BracketRight: {
    text: "=",
    shiftText: "+",
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
    text: "O",
  },
  KeyD: {
    text: "E",
  },
  KeyF: {
    text: "U",
  },
  KeyG: {
    text: "I",
  },
  KeyH: {
    text: "D",
  },
  KeyJ: {
    text: "H",
  },
  KeyK: {
    text: "T",
  },
  KeyL: {
    text: "N",
  },
  Semicolon: {
    text: "S",
  },
  Quote: {
    text: "-",
    shiftText: "_",
  },
  Enter: {
    text: "return",
  },
  ShiftLeft: {
    text: "shift",
  },
  KeyZ: {
    text: ";",
    shiftText: ":",
  },
  KeyX: {
    text: "Q",
  },
  KeyC: {
    text: "J",
  },
  KeyV: {
    text: "K",
  },
  KeyB: {
    text: "X",
  },
  KeyN: {
    text: "B",
  },
  KeyM: {
    text: "M",
  },
  Comma: {
    text: "W",
  },
  Period: {
    text: "V",
  },
  Slash: {
    text: "Z",
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

export default dvorakKeyMap;
