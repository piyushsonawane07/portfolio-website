/* eslint-disable @next/next/no-img-element */
import Hero from "./Hero";
import Skills from "./skills/SkillGrid";
import Projects from "./Projects";
import About from "./About";

import { RevealLinks } from "./components/RevealLinks";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div id="top" className="px-[1rem] xl:px-[9rem] mt-[1.5rem] md:mt-0">
        <Hero />
      </div>
      <div className="px-[1.5rem] lg:px-[9rem] my-[6rem] mt-[7rem]">
        <Skills />
      </div>
      <div id="experience-section" className="mx-48 my-4">
        <h2 className="text-center font-bold text-sm font-jetbrains uppercase tracking-wider mb-6">
          <span className="inline-block px-1 text-lg relative">
            <span className="inline-block text-blue-500">Expericence</span>
          </span>
        </h2>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              <span className="text-green-600">June 2023 - Present</span>
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
              <span>Software Engineer</span> - <span>Bizaimca Software </span>
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              <ul className="space-y-4 mt-4">
                <li>
                  Led the design and implementation of critical features like
                  Rules Engine, Sanction Screening, and Validation Screen to
                  streamline trade finance operations.
                </li>
                <li>
                  Enhanced data retrieval accuracy by deploying LLM pipelines
                  with LangChain&apos;s RAG and OpenAI API.
                </li>
                <li>
                  Optimized MySQL CRUD operations and developed REST APIs for
                  faster and more efficient data access.
                </li>
                <li>
                  Reduced labeling time by 75% through the integration of Smart
                  Labeling on the DIY platform, boosting operational efficiency.
                </li>
                <li>
                  Built a robust Licensing Server using Angular, Flask, and
                  MySQL, improving customer management and tracking.
                </li>
              </ul>
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              June 2022 - May 2023
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Software Engineer Intern - Bizaimca Software
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              <ul className="space-y-4 mt-4">
                <li>
                  Development of internal software product izDox, a document
                  processing tool.
                </li>
                <li>
                  Built robust data pipelines improving efficiency, and
                  re-trained and developed various existing AI/ML models to
                  achieve accuracy above 90%.
                </li>
                <li>Developed a Chatbot leveraging the RASA Framework.</li>
                <li>
                  Enhanced platform security by adding LDAP Authentication to
                  the login process.
                </li>
              </ul>
            </p>
          </li>
        </ol>
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
