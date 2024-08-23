"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Button } from "./ui/button";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div id="projekt" className="w-full h-full py-20">
      <h2 className="max-w-7xl mx-auto text-xl lg:text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
        Vill du se mina projekt?
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const BrainwaveContent = () => {
  return (
    <section>
      <div className="flex flex-col gap-10 pb-10">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          Att bygga Brainwave var som att lösa ett pussel. Jag började med en
          färdig lösning från JavaScript Mastery och försökte förstå varje bit.
          Det var en utmaning att sätta ihop alla pusselbitar, men när allt
          fungerade som det skulle var det en otroligt bra känsla. Det här
          projektet har gett mig självförtroendet att ta på mig mer komplexa
          uppgifter och samt bredda mina kunskaper.
        </p>
        <div className="flex justify-between">
          <Link target="_blank" href="https://brainwave-nu-weld.vercel.app/">
            <Button size={"lg"} variant={"default"} className="text-white">
              Besök hemsida
            </Button>
          </Link>
          <Link
            className="flex gap-2.5"
            target="_blank"
            href="https://github.com/vCqstro/brainwave"
          >
            <p className="text-muted-foreground">Vill du se mitt repo?</p>
            <GithubIcon />
          </Link>
        </div>
      </div>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"brainwave-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <Image
              src="/images/brainwave.png"
              alt="Brainwave project"
              height="1000"
              width="1000"
              className="h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </section>
  );
};

const PortfolioContent = () => {
  return (
    <section>
      <div className="flex flex-col gap-10 pb-10">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          Att bygga denna portfolio var som att ta sina första steg som
          webbutvecklare. Jag började med en utmärkt tutorial som gav mig en
          grund att stå på. Genom att följa guiden steg för steg kunde jag
          snabbt få en fungerande webbplats. Men det var först när jag började
          anpassa och utöka projektet som jag verkligen kände att jag lärde mig
          något. Det här projektet har gett mig självförtroendet att fortsätta
          utveckla mina färdigheter och ta mig an mer komplexa uppdrag.
        </p>
        <div className="flex justify-between">
          <Link
            target="_blank"
            href="https://portfolio-project-eight-omega.vercel.app/"
          >
            <Button size={"lg"} variant={"default"} className="text-white">
              Besök hemsida
            </Button>
          </Link>
          <Link
            className="flex gap-2.5"
            target="_blank"
            href="https://github.com/vCqstro/portfolio-project"
          >
            <p className="text-muted-foreground">Vill du se mitt repo?</p>
            <GithubIcon />
          </Link>
        </div>
      </div>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"portfolio-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <Image
              src="/public/images/portfolio-images/portfolio.png"
              alt="Picture of my portfolio website"
              height="1000"
              width="1000"
              className="md:w-full md:h-full h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </section>
  );
};

// const DummyContent = () => {
//   return (
//     <>
//       <div className="flex flex-col gap-10 pb-10">
//         <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
//           Att bygga Brainwave var som att lösa ett pussel. Jag började med en
//           färdig lösning från JavaScript Mastery och försökte förstå varje bit.
//           Det var en utmaning att sätta ihop alla pusselbitar, men när allt
//           fungerade som det skulle var det en otroligt bra känsla. Det här
//           projektet har gett mig självförtroendet att ta på mig mer komplexa
//           uppgifter och samt bredda mina kunskaper.
//         </p>
//         <div className="flex justify-between">
//           <Link target="_blank" href="https://brainwave-nu-weld.vercel.app/">
//             <Button size={"lg"} variant={"default"} className="text-white">
//               Besök hemsida
//             </Button>
//           </Link>
//           <Link
//             className="flex gap-2.5"
//             target="_blank"
//             href="https://github.com/vCqstro/brainwave"
//           >
//             <p className="text-muted-foreground">Vill du se mitt repo?</p>
//             <GithubIcon />
//           </Link>
//         </div>
//       </div>
//       {[...new Array(1).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <Image
//               src={`/images/brainwave.png`}
//               alt="Macbook mockup from Aceternity UI"
//               height="1000"
//               width="1000"
//               className="md:w-full md:h-full h-full w-full mx-auto object-contain"
//             />
//           </div>
//         );
//       })}
//     </>
//   );
// };

const data = [
  {
    technologies: [
      { name: "React" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
    title: "Brainwave",
    src: "/images/portfolio-images/brainwave.png",
    content: <BrainwaveContent />,
  },
  {
    technologies: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Next.JS" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
    title: "Portfolio",
    src: "/images/portfolio-images/portfolio.png",
    content: <PortfolioContent />,
  },
  // {
  //   technologies: [
  //     { name: "React" },
  //     { name: "Vite" },
  //     { name: "Tailwind CSS" },
  //   ],
  //   title: "Launching the new Apple Vision Pro.",
  //   src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   content: <DummyContent />,
  // },

  // {
  //   technologies: [
  //     { name: "React" },
  //     { name: "Vite" },
  //     { name: "Tailwind CSS" },
  //   ],
  //   title: "Maps for your iPhone 15 Pro Max.",
  //   src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   content: <DummyContent />,
  // },
  // {
  //   technologies: [
  //     { name: "React" },
  //     { name: "Vite" },
  //     { name: "Tailwind CSS" },
  //   ],
  //   title: "Photography just got better.",
  //   src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   content: <DummyContent />,
  // },
  // {
  //   technologies: [
  //     { name: "React" },
  //     { name: "Vite" },
  //     { name: "Tailwind CSS" },
  //   ],
  //   title: "Hiring for a Staff Software Engineer",
  //   src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   content: <DummyContent />,
  // },
];
