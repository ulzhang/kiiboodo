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
    text: "-",
    shiftText: "_",
    value: "-",
    shiftValue: "_",
  },
  Equal: {
    text: "=",
    shiftText: "+",
    value: "=",
    shiftValue: "+",
  },
  Backspace: {
    text: "delete",
  },
  Tab: {
    text: "tab",
  },
  KeyQ: {
    text: "Q",
    value: "q",
    shiftValue: "Q",
  },
  KeyW: {
    text: "W",
    value: "w",
    shiftValue: "W",
  },
  KeyE: {
    text: "F",
    value: "f",
    shiftValue: "F",
  },
  KeyR: {
    text: "P",
    value: "p",
    shiftValue: "P",
  },
  KeyT: {
    text: "G",
    value: "g",
    shiftValue: "G",
  },
  KeyY: {
    text: "J",
    value: "j",
    shiftValue: "J",
  },
  KeyU: {
    text: "L",
    value: "l",
    shiftValue: "L",
  },
  KeyI: {
    text: "U",
    value: "u",
    shiftValue: "U",
  },
  KeyO: {
    text: "Y",
    value: "y",
    shiftValue: "Y",
  },
  KeyP: {
    text: ";",
    shiftText: ":",
    value: ";",
    shiftValue: ":",
  },
  BracketLeft: {
    text: "[",
    shiftText: "{",
    value: "[",
    shiftValue: "{",
  },
  BracketRight: {
    text: "]",
    shiftText: "}",
    value: "]",
    shiftValue: "}",
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
    text: "R",
    value: "r",
    shiftValue: "R",
  },
  KeyD: {
    text: "S",
    value: "s",
    shiftValue: "S",
  },
  KeyF: {
    text: "T",
    value: "t",
    shiftValue: "T",
  },
  KeyG: {
    text: "D",
    value: "d",
    shiftValue: "D",
  },
  KeyH: {
    text: "H",
    value: "h",
    shiftValue: "H",
  },
  KeyJ: {
    text: "N",
    value: "n",
    shiftValue: "N",
  },
  KeyK: {
    text: "E",
    value: "e",
    shiftValue: "E",
  },
  KeyL: {
    text: "I",
    value: "i",
    shiftValue: "I",
  },
  Semicolon: {
    text: "O",
    value: "o",
    shiftValue: "O",
  },
  Quote: {
    text: "'",
    shiftText: '"',
    value: "'",
    shiftValue: '"',
  },
  Enter: {
    text: "return",
  },
  ShiftLeft: {
    text: "shift",
  },
  KeyZ: {
    text: "Z",
    value: "z",
    shiftValue: "Z",
  },
  KeyX: {
    text: "X",
    value: "x",
    shiftValue: "X",
  },
  KeyC: {
    text: "C",
    value: "c",
    shiftValue: "C",
  },
  KeyV: {
    text: "V",
    value: "v",
    shiftValue: "V",
  },
  KeyB: {
    text: "B",
    value: "b",
    shiftValue: "B",
  },
  KeyN: {
    text: "K",
    value: "k",
    shiftValue: "K",
  },
  KeyM: {
    text: "M",
    value: "m",
    shiftValue: "M",
  },
  Comma: {
    text: ",",
    shiftText: "<",
    value: ",",
    shiftValue: "<",
  },
  Period: {
    text: ".",
    shiftText: ">",
    value: ".",
    shiftValue: ">",
  },
  Slash: {
    text: "/",
    shiftText: "?",
    value: "/",
    shiftValue: "?",
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

export default colemakKeyMap;
