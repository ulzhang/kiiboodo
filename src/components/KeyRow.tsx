import { ReactNode } from "react";

const KeyRow = ({ children }: { children: ReactNode }) => {
  return <div className="flex gap-2">{children}</div>;
};
export default KeyRow;
