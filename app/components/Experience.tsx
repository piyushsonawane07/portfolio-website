'use client';

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "../../utils/cn";
import { CardHoverEffect } from "../ui/card-hover-effect";
import { FaBriefcase, FaLaptopCode, FaServer } from "react-icons/fa6";
import { Briefcase } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  icon?: React.ComponentType<{ className?: string }>;
}

const experienceIcons = [FaBriefcase, FaBriefcase, FaBriefcase];

export default function ExperienceSection() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 30,
    restDelta: 0.001,
    mass: 0.1,
  });

  const experiences: Experience[] = [
    {
      title: "Software Engineer",
      company: "BizAmica Software",
      location: "Pune, India",
      date: "Jun 2023 - Present",
      description: [
        "Designed and implemented key features across izdox platform, improving efficiency and user experience.",
        "Developed critical features including Rules Engine, Sanction Screening, and Validation Screen.",
        "Built LLM pipelines using LangChain's RAG and OpenAI API for enhanced data retrieval.",
        "Optimized MySQL CRUD operations and developed REST APIs for better performance.",
        "Implemented Smart Labeling feature, reducing document labeling time by 75%.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "BizAmica Software",
      location: "Pune, India",
      date: "Jun 2022 - May 2023",
      description: [
        "Contributed to the development of document processing features.",
        "Assisted in building and maintaining backend services.",
        "Integrated LDAP Authentication.",
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <section id="experience" className="py-12 sm:py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-3 sm:mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
            My professional journey
          </p>
        </motion.div>

        <div className="relative" ref={ref}>
          <div className="hidden sm:block absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-blue-500/20" />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="hidden sm:block absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-[1px]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600 via-blue-500 to-transparent [mask-image:linear-gradient(to_bottom,white_70%,transparent_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-transparent opacity-50" />
          </motion.div>

          <div className="relative">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative mb-12 sm:mb-24 last:mb-0">
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={cn(
                    "text-sm text-blue-500 font-medium mb-2",
                    "sm:absolute sm:top-0",
                    "sm:mb-0",
                    idx % 2 === 0
                      ? "sm:right-[51%] sm:pr-4"
                      : "sm:left-[51%] sm:pl-4"
                  )}
                >
                  {/* {exp.date} */}
                </motion.div>

                <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 -translate-y-[0.5px] top-0">
                  <div className="relative">
                    <div className="absolute inset-0 -m-[1px]" />
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{
                        scale: 1,
                        opacity: 1,
                        transition: {
                          duration: 0.5,
                          type: "spring",
                          stiffness: 200,
                          damping: 15
                        }
                      }}
                      viewport={{ once: true }}
                      className="relative w-5 h-5 flex items-center justify-center"
                    >
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full ring-4 ring-blue-500/20"></div>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.2,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  className={cn(
                    "w-full sm:w-[calc(50%-3rem)] group",
                    "sm:mt-12",
                    idx % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"
                  )}
                >
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute -inset-0.5 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-200 group-hover:duration-500"></div>
                    
                    {/* Glass card */}
                    <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg dark:shadow-2xl transition-all duration-300 hover:bg-white hover:shadow-xl dark:hover:bg-white/10 dark:hover:border-white/20">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-gray-600 dark:text-neutral-400 mt-1">
                            <span className="font-medium text-gray-800 dark:text-gray-200">{exp.company}</span>
                            <span className="hidden sm:inline text-gray-400 dark:text-neutral-500">•</span>
                            <span className="text-gray-600 dark:text-neutral-400">{exp.location}</span>
                          </div>
                        </div>
                        <div className="bg-blue-100 dark:bg-blue-500/10 px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-400">
                          {exp.date}
                        </div>
                      </div>
                      
                      <ul className="space-y-3 mt-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start group-hover:translate-x-1 transition-transform duration-200">
                            <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Bottom gradient accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
