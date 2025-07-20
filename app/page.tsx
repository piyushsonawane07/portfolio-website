/* eslint-disable @next/next/no-img-element */
import Hero from "./Hero";
import Skills from "./skills/SkillGrid";
import Projects from "./Projects";
import About from "./About";
import { RevealLinks } from "./components/RevealLinks";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div id="top" className="px-[0rem] xl:px-[9rem] mt-[1.5rem] md:mt-0">
        <Hero />
      </div>
      <div className="px-[1.5rem] lg:px-[9rem] my-[6rem] mt-[7rem]">
        <About />
      </div>
      <div className="px-[1.5rem] lg:px-[9rem] my-[6rem] mt-[7rem]">
        <Skills />
      </div>
      <div>
        <Experience />
      </div>
      <div
        id="projects-section"
        className="px-[1.3rem] lg:px-[9rem] my-[6rem] "
      >
        <Projects />
      </div>
      
      <div className="px-[1rem] md:px-[9rem] my-[8rem] ">
        <RevealLinks />
      </div>
      
      <div className="my-[6rem]">
        <Contact />
      </div>
    </div>
  );
}
