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
    text: "E",
  },
  KeyR: {
    text: "R",
  },
  KeyT: {
    text: "T",
  },
  KeyY: {
    text: "Y",
  },
  KeyU: {
    text: "U",
  },
  KeyI: {
    text: "I",
  },
  KeyO: {
    text: "O",
  },
  KeyP: {
    text: "P",
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
    text: "S",
  },
  KeyD: {
    text: "D",
  },
  KeyF: {
    text: "F",
  },
  KeyG: {
    text: "G",
  },
  KeyH: {
    text: "H",
  },
  KeyJ: {
    text: "J",
  },
  KeyK: {
    text: "K",
  },
  KeyL: {
    text: "L",
  },
  Semicolon: {
    text: ";",
    shiftText: ":",
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
    text: "N",
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
    shiftText: "?",
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

export default qwertyKeyMap;
