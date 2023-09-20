import { ReactNode } from "react";
import RootLayout from "@/components/layouts/RootLayout";
import type { IProduct } from "@/interfaces/product";
import { GetStaticPaths, GetStaticProps } from "next";
import { ProductDetails } from "@/components/ui";

const ProductDetailsPage = ({ product }: { product: IProduct }) => {
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = (page: ReactNode) => (
  <RootLayout>{page}</RootLayout>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.SERVER_URI}/products`);
  const data = await res.json();

  const paths = data.data.map((product: IProduct) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`${process.env.SERVER_URI}/products/${params?.id}`);
  const data = await res.json();

  return {
    props: {
      product: data.data,
    },
    revalidate: 40,
  };
};
