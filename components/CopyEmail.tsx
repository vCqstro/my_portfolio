"use client";

import { MailIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function CopyMail() {
  const [copied, setCopied] = useState(false);
  const email = "patriksson.victor@gmail.com";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed top copy text: ", err);
      });
  };

  return (
    <div id="#email" className="flex p-10 justify-center">
      <div className="flex flex-col items-center justify-center gap-7">
        <h2 className="text-lg lg:text-3xl font-semibold">
          Vill du kontakta mig?
        </h2>
        <p className="text-muted-foreground max-w-prose lg:text-xl">
          Tryck på knappen nere för att kopiera min mail. {""}
        </p>
        <Button
          variant={"secondary"}
          className="w-fit p-7"
          onClick={handleCopy}
        >
          <MailIcon className="mr-2" />
          <span className={copied ? "hidden" : "inline text-white text-lg"}>
            Kopiera min mail!
          </span>
          {copied && <span className="text-white text-lg">Kopierad!</span>}
        </Button>
      </div>
    </div>
  );
}
