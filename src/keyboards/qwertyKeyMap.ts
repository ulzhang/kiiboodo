import ArrowDown from "@/components/Icons/ArrowDown";
import ArrowUp from "@/components/Icons/ArrowUp";
import ArrowLeft from "@/components/Icons/ArrowLeft";
import ArrowRight from "@/components/Icons/ArrowRight";
import Command from "@/components/Icons/Command";
import Option from "@/components/Icons/Option";
import Control from "@/components/Icons/Control";

const qwertyKeyMap = {
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
    text: "E",
    value: "e",
    shiftValue: "E",
  },
  KeyR: {
    text: "R",
    value: "r",
    shiftValue: "R",
  },
  KeyT: {
    text: "T",
    value: "t",
    shiftValue: "T",
  },
  KeyY: {
    text: "Y",
    value: "y",
    shiftValue: "Y",
  },
  KeyU: {
    text: "U",
    value: "u",
    shiftValue: "U",
  },
  KeyI: {
    text: "I",
    value: "i",
    shiftValue: "I",
  },
  KeyO: {
    text: "O",
    value: "o",
    shiftValue: "O",
  },
  KeyP: {
    text: "P",
    value: "p",
    shiftValue: "P",
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
    text: "S",
    value: "s",
    shiftValue: "S",
  },
  KeyD: {
    text: "D",
    value: "d",
    shiftValue: "D",
  },
  KeyF: {
    text: "F",
    value: "f",
    shiftValue: "F",
  },
  KeyG: {
    text: "G",
    value: "g",
    shiftValue: "G",
  },
  KeyH: {
    text: "H",
    value: "h",
    shiftValue: "H",
  },
  KeyJ: {
    text: "J",
    value: "j",
    shiftValue: "J",
  },
  KeyK: {
    text: "K",
    value: "k",
    shiftValue: "K",
  },
  KeyL: {
    text: "L",
    value: "l",
    shiftValue: "L",
  },
  Semicolon: {
    text: ";",
    shiftText: ":",
    value: ";",
    shiftValue: ":",
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
    text: "N",
    value: "n",
    shiftValue: "N",
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

export default qwertyKeyMap;
