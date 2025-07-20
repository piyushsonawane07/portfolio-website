"use client";
import React, { useState } from "react";
import { projects } from "./data/data";
import Link from "next/link";
import ProjectGrid from "./components/ProjectGrid";
import { ArrowRight, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Display only the first 6 projects by default, or all if `showAll` is true
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div className="relative">
      <Heading />
      <IntroText />
      <ProjectGrid projectList={displayedProjects} />
      <ShowAllLink showAll={showAll} onClick={() => setShowAll(!showAll)} />
    </div>
  );
};

const Heading = () => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-3">
      Projects
    </h2>
    <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
    <p className="text-xl font-extrabold text-gray-700 dark:text-gray-300">
      Things I&apos;ve built
    </p>
  </div>
);

const IntroText = () => null;

const ShowAllLink = ({ showAll, onClick }: { showAll: boolean; onClick: () => void }) => (
  <div className="text-center mt-8">
    <Link href="https://github.com/piyushsonawane07?tab=repositories">
      <div className="inline-block relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r  rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200 group-hover:duration-500"></div>
        <button 
          className="relative px-8 py-3.5 bg-white/90 dark:bg-black/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full text-gray-900 dark:text-white font-medium transition-all duration-200 group-hover:bg-white dark:group-hover:bg-black/60 shadow-md hover:shadow-lg"
        >
          <div className="relative flex items-center justify-center space-x-2">
            <span className="transition-transform duration-300 group-hover:-translate-x-2">View More Projects</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-2" />
          </div>
        </button>
      </div>
    </Link>
  </div>
);

export default Projects;
