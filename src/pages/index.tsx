import { ReactNode } from "react";
import RootLayout from "@/components/layouts/RootLayout";
import { Card } from "@/components/ui";
import image from "@/assets/images/logo.jpg";

const Home = () => {
  return (
    <div className="flex flex-col ml-12">
      <h2>Hello World !</h2>
      <Card
        category="Power Supply Unit"
        image={image}
        price={4000}
        product_name="Trident Z Royals"
        rating={4}
        status="In Stock"
      />
    </div>
  );
};

export default Home;

Home.getLayout = (page: ReactNode) => <RootLayout>{page}</RootLayout>;
