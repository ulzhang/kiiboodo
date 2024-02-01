"use client";

import { ReactNode } from "react";
import { useRef, useState, useEffect, forwardRef } from "react";

type TypeTestProps = {
  finishedText: string;
  typedText: string;
  unfinishedText: string;
  handleNewLine: () => void;
};

type LetterProps = {
  children: ReactNode;
  current?: boolean;
  incorrect?: boolean;
};

const Letter = forwardRef<HTMLSpanElement, LetterProps>(
  ({ children, current, incorrect }, ref) => (
    <span
      ref={ref}
      className={`border-l-2 ${
        current ? "border-black animate-cursor" : "border-transparent"
      } ${incorrect ? "bg-red-100" : ""}`}
    >
      {children}
    </span>
  )
);

const TypeTest = ({
  finishedText,
  typedText,
  unfinishedText,
  handleNewLine,
}: TypeTestProps) => {
  // Find the index of the first incorrect character in typedText
  let incorrectIndex = 0;
  while (
    incorrectIndex < typedText.length &&
    incorrectIndex < unfinishedText.length &&
    typedText[incorrectIndex] === unfinishedText[incorrectIndex]
  ) {
    incorrectIndex++;
  }

  // Handle logic to display typed text correctly
  const correctText = typedText.slice(0, incorrectIndex);
  const incorrectText = typedText.slice(incorrectIndex).replace(/ /g, "\u00A0");
  const restText = unfinishedText.slice(incorrectIndex);

  // Create refs to find when newlines start
  const ref = useRef<HTMLSpanElement>(null);
  const [yPosition, setYPosition] = useState(0);

  useEffect(() => {
    const newYPosition = ref.current?.offsetTop || 0;

    if (
      newYPosition > yPosition &&
      yPosition !== 0 &&
      incorrectText.length === 0
    ) {
      handleNewLine();
    }

    setYPosition(newYPosition);
  }, [ref.current?.offsetTop]);

  return (
    <p className="text-2xl leading-relaxed tracking-tighter	h-[5rem] overflow-hidden select-none">
      <span>
        {finishedText.split("").map((letter, index) => (
          <Letter key={`finished-${letter}-${index}`}>{letter}</Letter>
        ))}
      </span>
      <span>
        {correctText.split("").map((letter, index) => (
          <Letter key={`correct-${letter}-${index}`}>{letter}</Letter>
        ))}
      </span>
      <span className="text-red-500">
        {incorrectText.split("").map((letter, index) => (
          <Letter incorrect key={`incorrect-${letter}-${index}`}>
            {letter}
          </Letter>
        ))}
      </span>
      <span className="text-gray-600 ">
        {restText.split("").map((letter, index) => (
          <Letter
            current={index === 0}
            ref={index === 0 ? ref : undefined}
            key={`rest-${letter}-${index}`}
          >
            {letter}
          </Letter>
        ))}{" "}
      </span>
    </p>
  );
};

export default TypeTest;
