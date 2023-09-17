import { ReactNode } from "react";
import RootLayout from "@/components/layouts/RootLayout";
import type { IProduct } from "@/interfaces/product";
import { Products } from "@/components/ui";
import { GetStaticProps } from "next";

const Home = ({ products }: { products: IProduct[] }) => {
  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default Home;

Home.getLayout = (page: ReactNode) => <RootLayout>{page}</RootLayout>;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params);
  const res = await fetch(`${process.env.SERVER_URI}/products`);
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};
