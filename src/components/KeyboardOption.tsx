type KeyboardOptionProps = {
  name: string;
  description: string;
  highlight: boolean;
  onClick: () => void;
};

const KeyboardOption = ({
  name,
  description,
  highlight,
  onClick,
}: KeyboardOptionProps) => {
  return (
    <div
      className={`max-w-64 rounded-xl p-4 border-2 cursor-pointer transition flex-1 ${
        highlight
          ? "border-black dark:border-gray-400 text-black dark:text-gray-400"
          : "border-gray-400 dark:border-gray-600 text-gray-600 hover:shadow-lg ease-in-out duration-300"
      }`}
      onClick={onClick}
    >
      <p className="text-lg font-medium mb-2">{name}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default KeyboardOption;
