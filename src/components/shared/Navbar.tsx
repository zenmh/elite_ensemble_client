import Image from "next/image";
import { Btn, Dropdown } from ".";
import logo from "@/assets/images/logo.jpg";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex flex-row items-center justify-between py-1 px-2">
      <div
        onClick={() => router.push("/")}
        className="border-2 border-red-50 flex flex-row items-center pr-2 cursor-pointer"
      >
        <Image src={logo} alt="logo" width={36} height={36} />
        <h2 className="text-2xl font-bold ml-2">Elite Ensemble</h2>
      </div>
      <div className="flex flex-row items-center">
        <div>
          <Dropdown />
        </div>
        <Btn variant="primary" size="md" label="PC Builder" />
      </div>
    </nav>
  );
};

export default Navbar;
