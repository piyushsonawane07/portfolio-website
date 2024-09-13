/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

// import { skills } from "../data/data";
import { RiNextjsFill } from "react-icons/ri";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaGit,
  FaJava,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiMaterialdesign,
  SiOpenai,
  SiLangchain,
  SiDjango,
  SiFlask,
  SiRedis,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="relative">
      <div className="text-center mb-6">
        <h2 className="font-bold text-sm font-jetbrains uppercase tracking-wider">
          <span className="inline-block px-1 text-xl relative">
            <span className="inline-block text-pink-600">Skills</span>
          </span>
        </h2>
        <p className="text-xl pt-4 sm:text-2xl font-extrabold">
          Technologies I work with
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-[1rem] relative">
        <div className="flex border p-2 rounded-sm cursor-pointer">
          <RiNextjsFill className="text-gray-500" size={24} />
          <span className="ms-2">Next Js</span>
        </div>
        <div className="flex border p-2 rounded-sm cursor-pointer">
          <FaReact className="text-gray-500" size={24} />
          <span className="ms-2">React</span>
        </div>

        <div className="flex border p-2 rounded-sm cursor-pointer">
          <FaAngular className="text-gray-500" size={24} />
          <span className="ms-2">Angular</span>
        </div>

        <div className="flex border p-2 rounded-sm cursor-pointer">
          <FaNodeJs className="text-gray-500" size={24} />
          <span className="ms-2">Node.js</span>
        </div>

        <div className="flex border p-2 rounded-sm cursor-pointer">
          <SiMongodb className="text-gray-500" size={24} />
          <span className="ms-2">MongoDB</span>
        </div>

        <div className="flex border p-2 rounded-sm cursor-pointer">
          <SiMysql className="text-gray-500" size={24} />
          <span className="ms-2">MySQL</span>
        </div>

        <div className="flex border p-2 rounded-sm cursor-pointer">
          <FaGit className="text-gray-500" size={24} />
          <span className="ms-2">Git</span>
        </div>

        <div className="flex border p-2 rounded-sm cursor-pointer">
          <SiPython className="text-gray-500" size={24} />
          <span className="ms-2">Python</span>
        </div>

        <div className="flex border p-2 rounded-sm cursor-pointer">
          <SiCplusplus className="text-gray-500" size={24} />
          <span className="ms-2">C++</span>
        </div>

        <div className="flex border p-2 rounded-sm cursor-pointer">
          <FaJava className="text-gray-500" size={24} />
          <span className="ms-2">Java</span>
        </div>

        <div className="flex border p-2 rounded-sm cursor-pointer">
          <SiJavascript className="text-gray-500" size={24} />
          <span className="ms-2">JavaScript</span>
        </div>

        <div className="flex border p-2 rounded-sm cursor-pointer">
          <SiTypescript className="text-gray-500" size={24} />
          <span className="ms-2">TypeScript</span>
        </div>

        <div className="flex border p-2 rounded-sm cursor-pointer">
          <SiTailwindcss className="text-gray-500" size={24} />
          <span className="ms-2">Tailwind CSS</span>
        </div>

        <div className="flex border p-2 rounded-sm cursor-pointer">
          <SiFirebase className="text-gray-500" size={24} />
          <span className="ms-2">Firebase</span>
        </div>

        <div className="flex border p-2 rounded-sm cursor-pointer">
          <SiMaterialdesign className="text-gray-500" size={24} />
          <span className="ms-2">Material Design</span>
        </div>

        <div className="flex border p-2 rounded-sm cursor-pointer">
          <SiOpenai className="text-gray-500" size={24} />
          <span className="ms-2">OpenAI</span>
        </div>

        <div className="flex border p-2 rounded-sm cursor-pointer">
          <SiLangchain className="text-gray-500" size={24} />
          <span className="ms-2">LangChain</span>
        </div>

        <div className="flex border p-2 rounded-sm cursor-pointer">
          <SiDjango className="text-gray-500" size={24} />
          <span className="ms-2">Django</span>
        </div>

        <div className="flex border p-2 rounded-sm cursor-pointer">
          <SiFlask className="text-gray-500" size={24} />
          <span className="ms-2">Flask</span>
        </div>

        <div className="flex border p-2 rounded-sm cursor-pointer">
          <SiRedis className="text-gray-500" size={24} />
          <span className="ms-2">Redis</span>
        </div>

        <div className="flex border p-2 rounded-sm cursor-pointer">
          <FaAws className="text-gray-500" size={24} />
          <span className="ms-2">AWS</span>
        </div>

        <div className="flex border p-2 rounded-sm cursor-pointer">
          <FaDocker className="text-gray-500" size={24} />
          <span className="ms-2">Docker</span>
        </div>

        {/* {skills.map((skill) => (
          <Skill key={skill.url} skill={skill} />
        ))} */}
      </div>
    </div>
  );
};

export default Skills;
