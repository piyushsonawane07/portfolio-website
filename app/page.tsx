/* eslint-disable @next/next/no-img-element */
import Hero from "./Hero";
import Skills from "./skills/SkillGrid";
import Projects from "./Projects";
import About from "./About";
import { RevealLinks } from "./components/RevealLinks";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div id="top" className="px-[0rem] xl:px-[9rem] mt-[1.5rem] md:mt-0">
        <Hero />
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

      {/* <div className="bg-transparent relative border-t border-b bg-[#f9fafb] px-[1.2rem] gap-y-11 py-[2rem] md:py-[2rem] lg:px-[9rem] my-[6rem] flex flex-col gap-8">
        <div
          className="flex flex-col relative  p-4  md:flex-row justify-between items-center"
         
        >
          <About />
          <List />
        </div>
      </div> */}

      <div className="px-[1rem] md:px-[9rem] my-[8rem] ">
        <RevealLinks />
      </div>
    </div>
  );
}
