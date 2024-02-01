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
    value: "`",
    shiftValue: "~",
  },
  Digit1: {
    text: "1",
    shiftText: "!",
    value: "1",
    shiftValue: "!",
  },
  Digit2: {
    text: "2",
    shiftText: "@",
    value: "2",
    shiftValue: "@",
  },
  Digit3: {
    text: "3",
    shiftText: "#",
    value: "3",
    shiftValue: "#",
  },
  Digit4: {
    text: "4",
    shiftText: "$",
    value: "4",
    shiftValue: "$",
  },
  Digit5: {
    text: "5",
    shiftText: "%",
    value: "5",
    shiftValue: "%",
  },
  Digit6: {
    text: "6",
    shiftText: "^",
    value: "6",
    shiftValue: "^",
  },
  Digit7: {
    text: "7",
    shiftText: "&",
    value: "7",
    shiftValue: "&",
  },
  Digit8: {
    text: "8",
    shiftText: "*",
    value: "8",
    shiftValue: "*",
  },
  Digit9: {
    text: "9",
    shiftText: "(",
    value: "9",
    shiftValue: "(",
  },
  Digit0: {
    text: "0",
    shiftText: ")",
    value: "0",
    shiftValue: ")",
  },
  Minus: {
    text: "[",
    shiftText: "{",
    value: "[",
    shiftValue: "{",
  },
  Equal: {
    text: "]",
    shiftText: "}",
    value: "]",
    shiftValue: "}",
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
    value: "'",
    shiftValue: '"',
  },
  KeyW: {
    text: ",",
    shiftText: "<",
    value: ",",
    shiftValue: "<",
  },
  KeyE: {
    text: ".",
    shiftText: ">",
    value: ".",
    shiftValue: ">",
  },
  KeyR: {
    text: "P",
    value: "p",
    shiftValue: "P",
  },
  KeyT: {
    text: "Y",
    value: "y",
    shiftValue: "Y",
  },
  KeyY: {
    text: "F",
    value: "f",
    shiftValue: "F",
  },
  KeyU: {
    text: "G",
    value: "g",
    shiftValue: "G",
  },
  KeyI: {
    text: "C",
    value: "c",
    shiftValue: "C",
  },
  KeyO: {
    text: "R",
    value: "r",
    shiftValue: "R",
  },
  KeyP: {
    text: "L",
    value: "l",
    shiftValue: "L",
  },
  BracketLeft: {
    text: "/",
    shiftText: "?",
    value: "/",
    shiftValue: "?",
  },
  BracketRight: {
    text: "=",
    shiftText: "+",
    value: "=",
    shiftValue: "+",
  },
  Backslash: {
    text: "\\",
    shiftText: "|",
    value: "\\",
    shiftValue: "|",
  },
  CapsLock: {
    text: "caps lock",
  },
  KeyA: {
    text: "A",
    value: "a",
    shiftValue: "A",
  },
  KeyS: {
    text: "O",
    value: "o",
    shiftValue: "O",
  },
  KeyD: {
    text: "E",
    value: "e",
    shiftValue: "E",
  },
  KeyF: {
    text: "U",
    value: "u",
    shiftValue: "U",
  },
  KeyG: {
    text: "I",
    value: "i",
    shiftValue: "I",
  },
  KeyH: {
    text: "D",
    value: "d",
    shiftValue: "D",
  },
  KeyJ: {
    text: "H",
    value: "h",
    shiftValue: "H",
  },
  KeyK: {
    text: "T",
    value: "t",
    shiftValue: "T",
  },
  KeyL: {
    text: "N",
    value: "n",
    shiftValue: "N",
  },
  Semicolon: {
    text: "S",
    value: "s",
    shiftValue: "S",
  },
  Quote: {
    text: "-",
    shiftText: "_",
    value: "-",
    shiftValue: "_",
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
    value: ";",
    shiftValue: ":",
  },
  KeyX: {
    text: "Q",
    value: "q",
    shiftValue: "Q",
  },
  KeyC: {
    text: "J",
    value: "j",
    shiftValue: "J",
  },
  KeyV: {
    text: "K",
    value: "k",
    shiftValue: "K",
  },
  KeyB: {
    text: "X",
    value: "x",
    shiftValue: "X",
  },
  KeyN: {
    text: "B",
    value: "b",
    shiftValue: "B",
  },
  KeyM: {
    text: "M",
    value: "m",
    shiftValue: "M",
  },
  Comma: {
    text: "W",
    value: "w",
    shiftValue: "W",
  },
  Period: {
    text: "V",
    value: "v",
    shiftValue: "V",
  },
  Slash: {
    text: "Z",
    value: "z",
    shiftValue: "Z",
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
    value: " ",
    shiftValue: " ",
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
