import { FC } from "react";

interface BtnProps {
  label: string;
  size: "xs" | "sm" | "md" | "lg";
  variant: "primary" | "secondary" | "denger";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const Btn: FC<BtnProps> = ({
  label,
  size,
  variant,
  onClick,
  disabled,
  loading,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      group overflow-hidden bg-gradient-to-br  text-white font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transform transition-transform focus:outline-none disabled:bg-gray-600
      ${size === "xs" && "scale-50"}
      ${size === "sm" && "scale-75"}
      ${size === "md" && "scale-90"}
      ${size === "lg" && "scale-100"}
      ${
        !disabled &&
        variant === "primary" &&
        "from-sky-600 via-purple-600 to-pink-600 hover:from-sky-700 hover:via-purple-700 hover:to-pink-700"
      }
      ${
        !disabled &&
        variant === "secondary" &&
        "from-slate-600 via-teal-600 to-fuchsia-600 hover:from-slate-700 hover:via-teal-700 hover:to-fuchsia-700"
      }
      ${
        !disabled &&
        variant === "denger" &&
        "from-rose-400 via-red-600 to-pink-400 hover:from-rose-500 hover:via-red-700 hover:to-pink-500"
      } ${loading && "cursor-progress"}
    `}
    >
      {label}
    </button>
  );
};

export default Btn;
