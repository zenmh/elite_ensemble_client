import RootLayout from "@/components/layouts/RootLayout";
import Link from "next/link";
import { ReactNode } from "react";

const TermsAndConditons = () => {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen">
      <h2 className="text-3xl font-bold text-center">
        Life Have No Rules Just Chill And Take Feel. . .&nbsp;
        <Link
          className="text-2xl text-blue-400 hover:text-blue-500 underline"
          href="/"
        >
          Back To Home
        </Link>
      </h2>
    </div>
  );
};

export default TermsAndConditons;

TermsAndConditons.getLayout = (page: ReactNode) => (
  <RootLayout>{page}</RootLayout>
);
