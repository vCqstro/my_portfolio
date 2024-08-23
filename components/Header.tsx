import React from "react";
import Link from "next/link";
import { SheetDemo } from "./Hamburger";
import logo from "@/public/images/logo_white.svg";
import Image from "next/image";

const menuLinks = [
  {
    title: "Omdömen",
    href: "#omdomen",
  },
  {
    title: "Projekt",
    href: "#projekt",
  },
  {
    title: "Om mig",
    href: "#om-mig",
  },
];

const Header = () => {
  return (
    <div className="flex justify-between items-center py-8">
      <div className="">
        <Link href="/">
          <Image src={logo} alt="logo" width={100} height={100} />
        </Link>
      </div>
      <div className="flex flex-row ml-auto">
        <div className="hidden lg:flex gap-5 w-full p-4 rounded-md">
          {menuLinks.map((link) => (
            <Link key={link.href} href={link.href} className="">
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-5">
        <SheetDemo />
      </div>
    </div>
  );
};

export default Header;
