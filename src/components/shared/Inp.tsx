import { FC } from "react";

interface InpProps {
  type: "text" | "email" | "password" | "number" | "file";
  placeholder: string;
  error?: boolean;
}

const Inp: FC<InpProps> = ({ type, placeholder, error }) => {
  return (
    <input
      className={`px-4 py-2 rounded-full border-2 bg-black text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 hover:border-teal-400 transition-colors duration-300
      ${error ? "border-rose-500" : "border-gray-300"}
      `}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Inp;
