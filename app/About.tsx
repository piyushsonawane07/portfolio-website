/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import profilepic from "@/public/profilePicture.jpg";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div id="about" className="w-full max-w-5xl mx-auto px-4 sm:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-3">
          About Me
        </h2>
        <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
        <p className="text-xl font-extrabold text-gray-700 dark:text-gray-300">
          Get to know me better
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 md:w-56 md:h-56 relative">
          <Image
            src={profilepic}
            alt="Piyush Sonawane"
            className="object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
            fill
            priority
          />
        </div>
        
        <div className="flex-1 mt-6 md:mt-0">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Piyush Sonawane
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
            I am a skilled <span className="font-bold text-gray-900 dark:text-white">Frontend Web Developer</span> and <span className="font-bold text-gray-900 dark:text-white">Full Stack Engineer</span> with a strong foundation in building responsive, high-performance web applications using technologies like <span className="font-bold text-gray-900 dark:text-white">React</span>, <span className="font-bold text-gray-900 dark:text-white">Angular</span>, and <span className="font-bold text-gray-900 dark:text-white">TypeScript</span>. I complement my frontend expertise with solid backend development experience in <span className="font-bold text-gray-900 dark:text-white">Python</span>, leveraging frameworks such as <span className="font-bold text-gray-900 dark:text-white">Flask</span>, <span className="font-bold text-gray-900 dark:text-white">FastAPI</span>, and <span className="font-bold text-gray-900 dark:text-white">Django</span> to create robust, scalable, and production-ready solutions. Passionate about clean architecture and seamless user experiences, I thrive on solving complex problems and delivering end-to-end software that is both efficient and impactful.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="#contact"
              className="relative px-6 py-3 bg-gray-200/20 dark:bg-black/80 backdrop-blur-md shadow-sm dark:text-white text-black font-medium rounded-full transition-all duration-300 flex items-center gap-2 group overflow-hidden"
            >
              <span className="absolute inset-0opacity-90 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              <span className="absolute inset-0 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300 rounded-full" />
              <span className="relative z-10 flex items-center gap-2">
                Contact Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
