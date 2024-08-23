import {
  GitBranchPlus,
  GitCommitHorizontal,
  Github,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  LucideGithub,
} from "lucide-react";
import Link from "next/link";
import React from "react";

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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-muted-foreground">
      <section className="py-16 gap-10 flex flex-col lg:flex-row justify-between">
        <div className="flex gap-5 flex-col">
          <ul className="font-semibold">
            Länkar
            <li className="flex flex-col gap-2 font-extralight py-3">
              {menuLinks.map((link) => (
                <Link
                  scroll={true}
                  key={link.href}
                  href={link.href}
                  className=""
                >
                  {link.title}
                </Link>
              ))}
            </li>
          </ul>
          <div className="text-sm">
            <p className="">All illustrations by</p>
            <Link
              className="text-sm  text-primary underline"
              href="https://www.freepik.com/"
              target="_blank"
            >
              Freepik
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm lg:Text-lg">
            Copyright {currentYear} &copy; All rights reserved.
          </p>
        </div>
        <div className="">
          <li className="flex gap-5">
            <Link
              target="_blank"
              href="https://instagram.com/victorpatriksson_dev/"
            >
              <InstagramIcon />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/victor-patriksson-80305a1bb/"
            >
              <LinkedinIcon />
            </Link>
            <Link target="_blank" href="https://github.com/vCqstro/">
              <GithubIcon />
            </Link>
          </li>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
