import { ReactNode } from "react";

export enum TextPosition {
  LEFT,
  RIGHT,
}

type SpecialKeyProps = {
  text: string;
  icon?: ReactNode;
  position?: TextPosition;
  highlight?: boolean;
  width?: string;
};

const SpecialKey = ({
  text,
  icon,
  position,
  highlight,
  width,
}: SpecialKeyProps) => {
  return (
    <div
      className={`shrink-0 grow-0 rounded-md p-2 h-16  ${
        width ? width : "w-16"
      } ${
        highlight
          ? "bg-slate-600 dark:bg-gray-600 text-white dark:text-black border-0"
          : "border-2 border-black dark:border-gray-600"
      }`}
    >
      <div
        className={`h-1/2 flex items-start text-[0.8rem]  ${
          position === TextPosition.RIGHT ? "" : "justify-end"
        }`}
      >
        {icon}
      </div>
      <div
        className={`h-1/2 flex items-end text-[0.8rem]  ${
          position === TextPosition.RIGHT ? "justify-end" : ""
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default SpecialKey;
