import { Btn } from "@/components/shared";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
  const { push } = useRouter();

  setTimeout(() => {
    push("/");
  }, 3000);

  return (
    <div className="h-screen w-screen bg-gray-950 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
        <div className="w-full lg:w-1/2 mx-8">
          <div className="text-7xl text-gray-500 font-dark font-extrabold mb-8">
            404
          </div>
          <p className="text-2xl md:text-3xl font-normal leading-normal mb-8 text-gray-500">
            Sorry We Couldn&apos;t Find The Page You&apos;re Looking For...
          </p>

          <Link href="/">
            <Btn label="Take Me Home" variant="primary" size="md" />
          </Link>
        </div>
        <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
          <Image
            src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
            width={1000}
            height={800}
            alt="Page not found"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
