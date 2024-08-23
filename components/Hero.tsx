"use client";

import React, { useState, useRef } from "react";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "./ui/button";
import Image from "next/image";
import vector_hero from "@/public/images/vector-hero.svg";
import { useRouter } from "next/router";

const words = `Hej, mitt namn är Victor. Här är min digitala portfolio.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}

export function GridBackgroundDemo() {
  return (
    <div className="h-fit lg:py-8 dark:bg-[#121212] bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div>
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#121212] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
    </div>
  );
}

const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      // Fetch the CV file from the server
      const response = await fetch("/images/CV/Victor Patriksson CV.pdf"); // Replace "/your-cv.pdf" with the actual path to your CV file

      if (!response.ok) {
        throw new Error("Failed to fetch CV file");
      }

      // Create a Blob from the response data
      const blob = await response.blob();

      // Create a URL for the blob
      const url = URL.createObjectURL(blob);

      // Set the download link's href and download attributes
      downloadLinkRef.current!.href = url;
      downloadLinkRef.current!.download = "Victor Patriksson CV.pdf"; // Adjust the filename as needed

      // Trigger the download
      downloadLinkRef.current!.click();

      // Clean up the temporary URL
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading CV:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="">
      <div>
        {/* Hidden download link */}
        <a ref={downloadLinkRef} style={{ display: "none" }} />
      </div>

      <Spotlight />
      <div className="flex flex-col-reverse lg:flex-row items-center w-full justify-between">
        <div className="flex flex-col gap-7 lg:gap-10 pb-10">
          <TextGenerateEffectDemo />
          <p>
            Välkommen till min kreativa hörna. Här hittar du en samling av de
            webbplatser jag byggt med kärlek och kod.
          </p>
          <div className="flex gap-5">
            <Button className="text-white" variant={"default"}>
              Mina projekt
            </Button>
            <Button
              variant={"secondary"}
              onClick={handleDownload}
              disabled={isDownloading}
            >
              {isDownloading ? "Laddar..." : "Ladda ner CV"}
            </Button>
          </div>
        </div>
        <div className="flex justify-end w-full">
          <Image src={vector_hero} alt="vector illustration" />
        </div>
        {/* <GridBackgroundDemo /> */}
      </div>
    </div>
  );
};

export default Hero;
