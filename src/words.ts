// romanji
export const words = [
  "a",
  "i",
  "u",
  "e",
  "o",
  "ka",
  "ki",
  "ku",
  "ke",
  "ko",
  "sa",
  "shi",
  "su",
  "se",
  "so",
  "ta",
  "chi",
  "tsu",
  "te",
  "to",
  "na",
  "ni",
  "nu",
  "ne",
  "no",
  "ha",
  "hi",
  "fu",
  "he",
  "ho",
  "ma",
  "mi",
  "mu",
  "me",
  "mo",
  "ya",
  "yu",
  "yo",
  "ra",
  "ri",
  "ru",
  "re",
  "ro",
  "wa",
  "wo",
  "n",
  // "ga",
  // "gi",
  // "gu",
  // "ge",
  // "go",
  // "za",
  // "ji",
  // "zu",
  // "ze",
  // "zo",
  // "da",
  // "de",
  // "do",
  // "ba",
  // "bi",
  // "bu",
  // "be",
  // "bo",
  // "pa",
  // "pi",
  // "pu",
  // "pe",
  // "po",
];

// hiragana
export const hiragana = [
  "あ",
  "い",
  "う",
  "え",
  "お",
  "か",
  "き",
  "く",
  "け",
  "こ",
  "さ",
  "し",
  "す",
  "せ",
  "そ",
  "た",
  "ち",
  "つ",
  "て",
  "と",
  "な",
  "に",
  "ぬ",
  "ね",
  "の",
  "は",
  "ひ",
  "ふ",
  "へ",
  "ほ",
  "ま",
  "み",
  "む",
  "め",
  "も",
  "や",
  "ゆ",
  "よ",
  "ら",
  "り",
  "る",
  "れ",
  "ろ",
  "わ",
  "を",
  "ん",
  // "が",
  // "ぎ",
  // "ぐ",
  // "げ",
  // "ご",
  // "ざ",
  // "じ",
  // "ず",
  // "ぜ",
  // "ぞ",
  // "だ",
  // "ぢ",
  // "づ",
  // "で",
  // "ど",
  // "ば",
  // "び",
  // "ぶ",
  // "べ",
  // "ぼ",
  // "ぱ",
  // "ぴ",
  // "ぷ",
  // "ぺ",
  // "ぽ",
];

// katakana
export const katakana = [
  "ア",
  "イ",
  "ウ",
  "エ",
  "オ",
  "カ",
  "キ",
  "ク",
  "ケ",
  "コ",
  "サ",
  "シ",
  "ス",
  "セ",
  "ソ",
  "タ",
  "チ",
  "ツ",
  "テ",
  "ト",
  "ナ",
  "ニ",
  "ヌ",
  "ネ",
  "ノ",
  "ハ",
  "ヒ",
  "フ",
  "ヘ",
  "ホ",
  "マ",
  "ミ",
  "ム",
  "メ",
  "モ",
  "ヤ",
  "ユ",
  "ヨ",
  "ラ",
  "リ",
  "ル",
  "レ",
  "ロ",
  "ワ",
  "ヲ",
  "ン",
  // "ガ",
  // "ギ",
  // "グ",
  // "ゲ",
  // "ゴ",
  // "ザ",
  // "ジ",
  // "ズ",
  // "ゼ",
  // "ゾ",
  // "ダ",
  // "ヂ",
  // "ヅ",
  // "デ",
  // "ド",
  // "バ",
  // "ビ",
  // "ブ",
  // "ベ",
  // "ボ",
  // "パ",
  // "ピ",
  // "プ",
  // "ペ",
  // "ポ",
];

type RomanjiMapType = {
  [key: string]: { hiragana: string; katakana: string };
};

export const romanjiMap: RomanjiMapType = {
  a: { hiragana: "あ", katakana: "ア" },
  i: { hiragana: "い", katakana: "イ" },
  u: { hiragana: "う", katakana: "ウ" },
  e: { hiragana: "え", katakana: "エ" },
  o: { hiragana: "お", katakana: "オ" },
  ka: { hiragana: "か", katakana: "カ" },
  ki: { hiragana: "き", katakana: "キ" },
  ku: { hiragana: "く", katakana: "ク" },
  ke: { hiragana: "け", katakana: "ケ" },
  ko: { hiragana: "こ", katakana: "コ" },
  sa: { hiragana: "さ", katakana: "サ" },
  shi: { hiragana: "し", katakana: "シ" },
  su: { hiragana: "す", katakana: "ス" },
  se: { hiragana: "せ", katakana: "セ" },
  so: { hiragana: "そ", katakana: "ソ" },
  ta: { hiragana: "た", katakana: "タ" },
  chi: { hiragana: "ち", katakana: "チ" },
  tsu: { hiragana: "つ", katakana: "ツ" },
  te: { hiragana: "て", katakana: "テ" },
  to: { hiragana: "と", katakana: "ト" },
  na: { hiragana: "な", katakana: "ナ" },
  ni: { hiragana: "に", katakana: "ニ" },
  nu: { hiragana: "ぬ", katakana: "ヌ" },
  ne: { hiragana: "ね", katakana: "ネ" },
  no: { hiragana: "の", katakana: "ノ" },
  ha: { hiragana: "は", katakana: "ハ" },
  hi: { hiragana: "ひ", katakana: "ヒ" },
  fu: { hiragana: "ふ", katakana: "フ" },
  he: { hiragana: "へ", katakana: "ヘ" },
  ho: { hiragana: "ほ", katakana: "ホ" },
  ma: { hiragana: "ま", katakana: "マ" },
  mi: { hiragana: "み", katakana: "ミ" },
  mu: { hiragana: "む", katakana: "ム" },
  me: { hiragana: "め", katakana: "メ" },
  mo: { hiragana: "も", katakana: "モ" },
  ya: { hiragana: "や", katakana: "ヤ" },
  yu: { hiragana: "ゆ", katakana: "ユ" },
  yo: { hiragana: "よ", katakana: "ヨ" },
  ra: { hiragana: "ら", katakana: "ラ" },
  ri: { hiragana: "り", katakana: "リ" },
  ru: { hiragana: "る", katakana: "ル" },
  re: { hiragana: "れ", katakana: "レ" },
  ro: { hiragana: "ろ", katakana: "ロ" },
  wa: { hiragana: "わ", katakana: "ワ" },
  wo: { hiragana: "を", katakana: "ヲ" },
  n: { hiragana: "ん", katakana: "ン" },
};
