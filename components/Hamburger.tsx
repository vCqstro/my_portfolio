import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
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

export function SheetDemo() {
  return (
    <div className="flex lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <MenuIcon className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="flex w-full justify-center">
              <Link href="/">
                <Image
                  src="/images/logo_white.svg" 
                  alt="logo"
                  width={100}
                  height={100}
                />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="flex pt-16 justify-center">
            <div className="flex flex-col gap-10">
              {menuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex justify-center w-full"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
