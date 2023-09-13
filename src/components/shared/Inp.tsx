import { FC } from "react";

interface InpProps {
  type: "text" | "email" | "password" | "number" | "file";
  placeholder: string;
  error?: boolean;
  register: any;
  name: string;
  error_message: string;
}

const Inp: FC<InpProps> = ({
  type,
  placeholder,
  error,
  register,
  name,
  error_message,
}) => {
  return (
    <input
      className={`px-4 py-2 rounded-full border-2 bg-black autofill:bg-black text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 hover:border-teal-400 transition-colors duration-300 w-full
      ${error ? "border-rose-500" : "border-gray-300"}
      `}
      type={type}
      placeholder={placeholder}
      {...register(name as string, {
        required: error_message,
      })}
    />
  );
};

export default Inp;
