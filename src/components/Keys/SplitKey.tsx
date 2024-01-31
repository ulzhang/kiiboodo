import { ReactNode } from "react";

type SplitKeyProps = {
  bottomText?: ReactNode;
  topText?: ReactNode;
  highlightBottom?: boolean;
  highlightTop?: boolean;
};

const SplitKey = ({
  bottomText,
  topText,
  highlightBottom,
  highlightTop,
}: SplitKeyProps) => {
  return (
    <div className="shrink-0 grow-0 size-16">
      <div
        className={`h-1/2 flex items-center justify-center text-xs border-black dark:border-gray-600 ${
          highlightTop
            ? "bg-slate-600 dark:bg-gray-600 text-white dark:text-black"
            : "border-2"
        } ${!topText ? "invisible" : ""} ${
          topText && bottomText ? "rounded-t-md border-b-[1px]" : "rounded-md"
        }`}
      >
        {topText}
      </div>
      <div
        className={`h-1/2 flex items-center justify-center text-xs border-black dark:border-gray-600 ${
          highlightBottom
            ? "bg-slate-600 dark:bg-gray-600 text-white dark:text-black"
            : "border-2"
        } ${!bottomText ? "invisible" : ""} ${
          topText && bottomText ? "rounded-b-md border-t-[1px]" : "rounded-md"
        }`}
      >
        {bottomText}
      </div>
    </div>
  );
};

export default SplitKey;
