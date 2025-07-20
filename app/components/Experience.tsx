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
        "Participated in code reviews and team discussions.",
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
                  {exp.date}
                </motion.div>

                <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 -translate-y-[0.5px] top-0">
                  <div className="relative">
                    <div className="absolute inset-0 -m-[1px] " />
                    
                    <motion.div
                      initial={{ scale: 0, rotate: 0 }}
                      whileInView={{
                        scale: 1,
                        rotate: 360,
                        transition: {
                          scale: { duration: 0.5 },
                          rotate: { duration: 1, ease: "easeOut" },
                        },
                      }}
                      viewport={{ once: true }}
                      className="relative w-7 h-7 flex items-center justify-center"
                    >
                     
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
                    "w-full sm:w-[calc(50%-3rem)]",
                    "sm:mt-12",
                    idx % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"
                  )}
                >
                  <CardHoverEffect>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-3 sm:mb-4">
                        <span className="font-medium">{exp.company}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{exp.location}</span>
                      </div>
                      <ul className="mt-2 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardHoverEffect>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
