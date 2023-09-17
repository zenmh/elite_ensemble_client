import { IProduct } from "@/interfaces/product";
import { FC } from "react";
import { Card } from ".";

interface ProductsProps {
  products: IProduct[];
}

const Products: FC<ProductsProps> = ({ products }) => {
  return (
    <section className="flex flex-row flex-wrap gap-5 justify-center">
      {products.length > 0 &&
        products.map(
          (
            {
              category,
              image,
              price,
              product_name,
              individual_rating,
              status,
              id,
            },
            i
          ) => (
            <Card
              key={i}
              image={image}
              product_name={product_name}
              category={category}
              price={price}
              status={status}
              rating={individual_rating}
              id={id!}
            />
          )
        )}
    </section>
  );
};

export default Products;
