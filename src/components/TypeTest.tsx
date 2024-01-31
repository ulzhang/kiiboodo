"use client";

import { useState, useEffect } from "react";
import { words } from "@/words";

type TypeTestProps = {
  typedText: string;
};

const TypeTest = ({ typedText }: TypeTestProps) => {
  const [shuffled, setShuffled] = useState([""]);

  useEffect(() => {
    setShuffled(words.sort(() => 0.5 - Math.random()));
  }, []);

  return (
    <div>
      <div>{shuffled.join(" ")}</div>
      <div>{typedText}</div>
    </div>
  );
};

export default TypeTest;
