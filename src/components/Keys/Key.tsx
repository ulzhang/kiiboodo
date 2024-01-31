type KeyProps = {
  text: string;
  shiftText?: string;
  highlight?: boolean;
};

const Key = ({ text, shiftText, highlight }: KeyProps) => {
  return (
    <div
      className={`shrink-0 grow-0 size-16 rounded-md p-2 flex items-center justify-center text-xl ${
        highlight
          ? "bg-slate-600 dark:bg-gray-600 text-white dark:text-black border-0"
          : "border-2 border-black dark:border-gray-600"
      }`}
    >
      {shiftText ? (
        <div className="text-sm">
          <p>{shiftText}</p>
          <p>{text}</p>
        </div>
      ) : (
        text
      )}
    </div>
  );
};

export default Key;
