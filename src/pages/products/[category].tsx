import { ReactNode } from "react";
import RootLayout from "@/components/layouts/RootLayout";
import type { IProduct } from "@/interfaces/product";
import { GetStaticProps } from "next";
import { Products } from "@/components/ui";

const ProductsByCategory = ({ products }: { products: IProduct[] }) => {
  return <Products products={products} />;
};

export default ProductsByCategory;

ProductsByCategory.getLayout = (page: ReactNode) => (
  <RootLayout>{page}</RootLayout>
);

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.SERVER_URI}/products`);
  const data = await res.json();

  const paths = data.data.map((product: IProduct) => ({
    params: { category: product.category },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `${process.env.SERVER_URI}/products?category=${params?.category}`
  );
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};
