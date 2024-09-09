"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    src: string;
    id: string; // Assuming each item has a unique ID
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Clone each item and append it to the scroller
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      switch (speed) {
        case "fast":
          containerRef.current.style.setProperty("--animation-duration", "20s");
          break;
        case "normal":
          containerRef.current.style.setProperty("--animation-duration", "40s");
          break;
        case "slow":
          containerRef.current.style.setProperty("--animation-duration", "80s");
          break;
        default:
          break;
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.id} // Use the item's unique ID as the key
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
            }}
          >
            <blockquote className="flex flex-col">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              />
              <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
            </blockquote>
            <div className="relative z-20 gap-3 pt-10 flex flex-row items-center">
              <div className="">
                <Image
                  src={item.src}
                  width={50}
                  height={50}
                  alt={item.name}
                  className="border rounded-full"
                />
              </div>
              <span className="flex flex-col gap-1">
                <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                  {item.name}
                </span>
                <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                  {item.title}
                </span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};