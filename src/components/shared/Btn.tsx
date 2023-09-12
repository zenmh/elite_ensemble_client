import { FC } from "react";

interface BtnProps {
  label: string;
  sm: boolean;
  md: boolean;
  lg: boolean;
  onClick: () => void;
}

const Btn: FC<BtnProps> = ({ label, sm, md, lg, onClick }) => {
  return (
    <button onClick={onClick} className={`font-semibold bg-green-800`}>
      {label}
    </button>
  );
};

export default Btn;
