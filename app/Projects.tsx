"use client";
import React, { useState } from "react";
import { projects } from "./data/data";
import Link from "next/link";
import ProjectGrid from "./components/ProjectGrid";

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
  <div className="text-center mt-4">
    <Link href="https://github.com/piyushsonawane07?tab=repositories">
    <button
      className="text-gray-50  hover:text-blue-700 transition"
    >
      {"Show More"}
    </button>
    </Link>
  </div>
);

export default Projects;
