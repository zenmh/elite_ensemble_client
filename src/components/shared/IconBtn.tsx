import { ReactNode, FC } from "react";

interface IconBtnProps {
  label: string;
  children: ReactNode;
  onClick: () => void;
}

const IconBtn: FC<IconBtnProps> = ({ label, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-4 border-neutral-500 hover:border-neutral-600 w-full px-4 text-2xl rounded-full flex flex-row items-center justify-center gap-3 hover:text-gray-400 py-1"
    >
      {children}
      <span className="text-xl text-gray-300 font-semibold">{label}</span>
    </button>
  );
};

export default IconBtn;
