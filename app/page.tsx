import AboutMe from "@/components/AboutMe";
import CopyMail from "@/components/CopyEmail";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CopyMail />
      <AboutMe />
      <Testimonials />
      <Projects />
      <Footer />
    </div>
  );
};

export default page;
