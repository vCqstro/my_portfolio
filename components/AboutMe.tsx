import React from "react";
import Image from "next/image";
import profilePicture from "../public/images/about-me-vector.svg"; // Ersätt med din bilds sökväg
import Link from "next/link";

type AboutMeProps = {
  name: string;
  title: string;
  description: string;
};

const AboutMeProps = {
  name: "Victor Patriksson",
  title: "Frontend utvecklare",
  description:
    "Hej! Jag heter Victor, en 22-årig frontend-utvecklare från Stenungsund med en passion för kodning och fotboll. Min nyfikenhet på den digitala världen har drivit mig att utveckla mina programmeringsfärdigheter. Jag är en positiv och lösningsorienterad person som ser varje utmaning som en chans att lära mig något nytt.",
};

function AboutMe() {
  return (
    <section id="om-mig" className="pt-20">
      <h2 className="font-semibold text-center lg:text-3xl">
        Lär känna mig bättre...
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex w-full mr-auto">
          <Image src={profilePicture} alt="vector illustration" />
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center w-full justify-between">
          <div className="flex flex-col gap-7 lg:gap-5 pb-10">
            <div className="flex flex-col gap-1">
              <h3 className="tracking-widest text-primary uppercase text-sm lg">
                {AboutMeProps.title}
              </h3>
              <h2 className="text-2xl font-semibold">{AboutMeProps.name}</h2>
            </div>
            <p className="font-normal max-w-prose text-white">
              {AboutMeProps.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
