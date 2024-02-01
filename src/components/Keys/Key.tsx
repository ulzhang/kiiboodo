type KeyProps = {
  text: string;
  shiftText?: string;
  highlight?: boolean;
  bump?: boolean;
  hint?: boolean;
};

const Key = ({ text, shiftText, highlight, bump, hint }: KeyProps) => {
  return (
    <div
      className={`shrink-0 grow-0 size-16 rounded-md p-2 flex items-center justify-center text-xl leading-relaxed border-black dark:border-gray-500 ${
        highlight
          ? "bg-slate-600 dark:bg-gray-500 text-white dark:text-black border-0"
          : hint
          ? "bg-yellow-500 dark:bg-yellow-600 dark:text-black dark:border-0"
          : "border-2"
      } `}
    >
      {shiftText ? (
        <div className="text-sm">
          <p>{shiftText}</p>
          <p>{text}</p>
        </div>
      ) : (
        <p
          className={`${
            highlight
              ? "border-white dark:border-black"
              : hint
              ? "border-black dark:border-black"
              : "border-black dark:border-gray-400"
          } ${bump ? "border-b-2" : ""}`}
        >
          {text}
        </p>
      )}
    </div>
  );
};

export default Key;
