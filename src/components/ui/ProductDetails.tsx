import type { IProduct } from "@/interfaces/product";
import Image from "next/image";
import { FC, ReactNode } from "react";
import { Btn } from "../shared";
import { toast } from "react-toastify";

interface KeyInfoProps {
  label: string;
  value: string | number;
}

interface KeyFeatureProps {
  label: string;
  value: string;
}

interface ProductDetailsProps {
  product: IProduct;
}

const KeyInfo: FC<KeyInfoProps> = ({ label, value }) => (
  <span className="border-gray-400 hover:border-gray-500 border-2 text-gray-300 hover:text-gray-400 px-3 py-1 rounded-full text-sm">
    <strong>{label}:</strong> {value}
    {label === "Price" && " Tk"} {label === "Regular Price" && " Tk"}
  </span>
);

const KeyFeature: FC<KeyFeatureProps> = ({ label, value }) => (
  <span className="block mt-1">
    <strong>{label}:</strong> {value}
  </span>
);

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  const { image, product_name, price, key_features, status } = product;
  const { brand, specification, type, port, resolution, voltage, model } =
    key_features;

  const onClick = () => {
    toast.info("Will Implement Later ^_^");
  };

  return (
    <section className="flex md:flex-row flex-col gap-4 mx-2">
      <div className="w-full">
        <Image
          src={image}
          alt={product_name}
          height={500}
          width={500}
          layout="responsive"
        />
      </div>
      <div className="w-full">
        <h2 className="text-neutral-300 font-semibold text-lg">
          {product_name}
        </h2>
        <div className="mt-3 flex flex-row items-center justify-start gap-3 flex-wrap">
          <KeyInfo label="Price" value={price} />
          <KeyInfo label="Regular Price" value={price + 300} />
          <KeyInfo label="Brand" value={brand} />
          <KeyInfo label="Status" value={status} />
        </div>
        <p className="my-4">
          <strong>Model:</strong> {model}
        </p>
        <div>
          <h4 className="text-xl font-semibold underline">Key Features</h4>
          <div className="text-gray-200">
            {specification &&
              specification.map((item, index) => {
                const [key, value] = Object.entries(item)[0];

                return (
                  <span className="block mt-1" key={index}>
                    <strong>{key}:</strong> {value as ReactNode}
                  </span>
                );
              })}
            {type && <KeyFeature label="Type" value={type} />}
            {port && <KeyFeature label="Port" value={port} />}
            {resolution && <KeyFeature label="Resolution" value={resolution} />}
            {voltage && <KeyFeature label="Voltage" value={voltage} />}
          </div>
        </div>
        <div className="flex felx-row items-center justify-around mt-3">
          <Btn
            onClick={onClick}
            label="Add To Builder"
            size="md"
            variant="primary"
          />

          <Btn
            onClick={onClick}
            label="Buy Now"
            size="md"
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
