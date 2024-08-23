import React from "react";
import Image from "next/image";
import profilePicture from "../public/images/about-me-vector.svg"; // Ersätt med din bilds sökväg

interface AboutMeProps {
  name: string;
  title: string;
  description: number;
}

const AboutMeProps = {
  name: "Victor Patriksson",
  title: "Frontend utvecklare",
  description:
    "Hej! Jag heter Victor och jag är en 22-årig frontend-utvecklare som älskar att koda och spela fotboll. Jag är född och uppvuxen i Stenungsund och har alltid varit nyfiken på hur saker fungerar i den digitala världen. När jag inte sitter framför datorn hittar du mig antagligen på en fotbollsplan eller så sitter jag och programmerar. Jag är en social person som älskar att samarbeta med andra och jag tror att min positiva attityd smittar av sig på alla projekt jag är med i.",
};

function AboutMe() {
  return (
    <section id="om-mig" className="pt-10">
      <h2 className="font-semibold text-center lg:text-3xl">Vem är jag?</h2>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex w-full mr-auto">
          <Image src={profilePicture} alt="vector illustration" />
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center w-full justify-between">
          <div className="flex flex-col gap-7 lg:gap-5 pb-10">
            <div className="flex flex-col gap-1">
              <h3 className="tracking-widest text-primary uppercase">
                {AboutMeProps.title}
              </h3>
              <h2 className="text-2xl font-semibold">{AboutMeProps.name}</h2>
            </div>
            <p className="text-muted-foreground">{AboutMeProps.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
