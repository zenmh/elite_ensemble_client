import RootLayout from "@/components/layouts/RootLayout";
import Link from "next/link";
import { ReactNode } from "react";

const Contact = () => {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen">
      <h2 className="text-3xl font-bold text-center">
        Under Developing. . .&nbsp;
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

export default Contact;

Contact.getLayout = (page: ReactNode) => <RootLayout>{page}</RootLayout>;
