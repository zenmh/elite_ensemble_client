import Image from "next/image";
import { FC } from "react";
import { Btn } from "../shared";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface CardProps {
  image: string;
  product_name: string;
  category:
    | "CPU / Processor"
    | "Motherboard"
    | "RAM"
    | "Power Supply Unit"
    | "Storage Device"
    | "Monitor"
    | "Others";
  price: number;
  status: "In Stock" | "Out Of Stock";
  rating: number;
}

const Card: FC<CardProps> = ({
  image,
  product_name,
  category,
  price,
  status,
  rating,
}) => {
  return (
    <div className="flex flex-col w-[320px] rounded-md bg-gray-900 hover:shadow-2xl">
      <div className="relative group overflow-hidden">
        <Image
          src={image}
          alt={product_name}
          width={320}
          height={300}
          className="w-full h-auto transition-transform transform scale-100 group-hover:scale-105 duration-300 rounded-t-md group-hover:rounded-t-md"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-60 text-white text-xl font-semibold transition-opacity duration-300 cursor-pointer">
          Add To Cart
        </div>
      </div>
      <div className="m-2">
        <h3 className="text-2xl font-semibold text-gray-300 text-ellipsis">
          {product_name}
        </h3>
        <div className="flex flex-row justify-between items-center mr-2 my-2">
          <p className="border-2 border-slate-300 hover:border-slate-400 px-3 rounded-full w-fit text-xs text-gray-300 hover:text-gray-400 font-semibold">
            {category}
          </p>
          <div className="flex flex-row items-center justify-center gap-1">
            <span className="font-semibold text-gray-400">
              {rating.toFixed(1)}
            </span>
            <AiFillStar className="text-xl text-yellow-500" />
          </div>
        </div>
        <p className="flex flex-row items-center gap-5">
          <span className="text-gray-400">
            <del>Tk. {price + 200}</del>
          </span>
          <span className="text-xl font-semibold text-gray-200">
            <ins>Tk. {price}</ins>
          </span>
        </p>
        <div className="flex flex-row justify-start items-center gap-3 text-2xl text-amber-400 my-3">
          {Array(5)
            .fill(null)
            .map((_, i: number) => (
              <AiOutlineStar key={i} />
            ))}
        </div>
        <div className="flex flex-row items-center justify-between">
          <h4 className="border-2 border-slate-300 hover:border-slate-400 px-2 rounded-full text-gray-300 hover:text-gray-400 font-semibold">
            {status}
          </h4>
          <Btn label="View Details" size="md" variant="secondary" />
        </div>
      </div>
    </div>
  );
};

export default Card;
