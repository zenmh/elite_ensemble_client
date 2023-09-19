import Link from "next/link";
import { FC, ReactNode } from "react";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

interface CustomLinkProps {
  label: string;
  href: string;
}

interface FooterBtnProps {
  children: ReactNode;
}

const FooterBtn: FC<FooterBtnProps> = ({ children }) => (
  <div className="text-white text-2xl shadow-lg font-normal h-11 w-11 align-center rounded-full outline-none focus:outline-none mr-2 bg-neutral-800 flex flex-row items-center justify-center border-neutral-400 hover:text-neutral-300 cursor-pointer">
    <span>{children}</span>
  </div>
);

const CustomLink: FC<CustomLinkProps> = ({ label, href }) => (
  <li>
    <Link
      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
      href={href}
    >
      {label}
    </Link>
  </li>
);

const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-row flex-wrap text-left lg:text-left">
          <div className="w-full  px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              Let&apos;s keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-wrap flex-col md:flex-row items-top mb-6 justify-between">
              <div className="mt-6 lg:mb-0 mb-6 flex-wrap flex-row flex items-start">
                <FooterBtn>
                  <BsFacebook />
                </FooterBtn>
                <FooterBtn>
                  <AiOutlineTwitter />
                </FooterBtn>
                <FooterBtn>
                  <BsLinkedin />
                </FooterBtn>
                <FooterBtn>
                  <BsYoutube />
                </FooterBtn>
                <FooterBtn>
                  <AiFillGithub />
                </FooterBtn>
              </div>
              <div className="px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <CustomLink label="About Us" href="/about" />
                  <CustomLink label="Blog" href="/blog" />
                  <CustomLink
                    label="GitHub"
                    href="https://github.com/mehedihasan2004"
                  />
                </ul>
              </div>
              <div className="px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <CustomLink
                    label="Terms & Conditions"
                    href="/terms_and_conditions"
                  />
                  <CustomLink label="Privacy Policy" href="/privacy_policy" />
                  <CustomLink label="Contact Us" href="/contact" />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2023&nbsp;</span>
              <Link className="hover:text-gray-400" href="/">
                Elite Ensembel
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
