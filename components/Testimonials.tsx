import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <section id="omdomen">
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h2 className="font-semibold lg:text-3xl py-5">
          Fina ord om mitt arbete...
        </h2>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
          className="text-black"
          pauseOnHover
        />
      </div>
    </section>
  );
}

const testimonials: {
  quote: string;
  name: string;
  title: string;
  src: string;
  id: string; // Ensure each item has a unique ID
}[] = [
  {
    quote:
      "Fina, duktiga, ambitiösa Victor. Jag hade äran att få ha denna trevliga kille i mitt team på Webbhuset. 'Öga för design' har han verkligen! Mina varmaste rekommendationer till dig Victor, lyckos den arbetsgivaren som får en sån här lojal och driven medarbetare!",
    name: "Rebecca Sandberg",
    title: "Föredetta avdelningschef, Webbhuset",
    src: "/images/rebecca_sandberg.png",
    id: "testimonial1", // Unique identifier for the first item
  },
  {
    quote:
      "Fina, duktiga, ambitiösa Victor. Jag hade äran att få ha denna trevliga kille i mitt team på Webbhuset. 'Öga för design' har han verkligen! Mina varmaste rekommendationer till dig Victor, lyckos den arbetsgivaren som får en sån här lojal och driven medarbetare!",
    name: "Rebecca Sandberg",
    title: "Föredetta avdelningschef, Webbhuset",
    src: "/images/rebecca_sandberg.png",
    id: "testimonial2", // Unique identifier for the second item
  },
  // ... other testimonials with unique IDs
];
