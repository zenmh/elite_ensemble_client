import { ReactNode } from "react";
import RootLayout from "@/components/layouts/RootLayout";
import type { IProduct } from "@/interfaces/product";
import { CarouselComponent, Products } from "@/components/ui";
import { GetStaticProps } from "next";

const carousel_items = [
  {
    image: "https://i.ytimg.com/vi/sLGJhTePLIE/maxresdefault.jpg",
    title: "LIKE ANIME",
  },
  {
    image:
      "https://www.custompc.com/wp-content/sites/custompc/2023/05/AT-AT.jpg",
    title: "BUILD WORKSTATION",
  },

  {
    image: "https://media.mmorpg.com/images/heroes/posts/127065.jpg",
    title: "NZXT H9 ELITE",
  },
  {
    image:
      "https://www.siliconera.com/wp-content/uploads/2023/01/ironside-vshojo-pc-cases-will-be-available-for-six-months.jpg",
    title: "MAEK LIFE COLORFUL",
  },
];

const Home = ({ products }: { products: IProduct[] }) => {
  return (
    <div>
      <CarouselComponent items={carousel_items} />
      <Products products={products} />
    </div>
  );
};

export default Home;

Home.getLayout = (page: ReactNode) => <RootLayout>{page}</RootLayout>;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.SERVER_URI}/products`);
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
    revalidate: 40,
  };
};
