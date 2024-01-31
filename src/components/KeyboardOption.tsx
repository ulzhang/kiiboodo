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
      className={`w-64 rounded-xl p-4 border-2 cursor-pointer transition ${
        highlight
          ? "border-black text-black"
          : "border-gray-400 text-gray-700 hover:shadow-lg ease-in-out duration-300"
      }`}
      onClick={onClick}
    >
      <p className="text-lg font-medium mb-2">{name}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default KeyboardOption;
