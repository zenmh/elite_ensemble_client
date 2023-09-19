import { ReactNode } from "react";
import { Footer, Navbar } from "../shared";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1464px] mx-auto">
      <Navbar />
      <div className="px-2">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
