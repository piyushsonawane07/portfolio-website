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
  <h2 className="text-center font-bold text-sm font-jetbrains uppercase tracking-wider mb-6">
    <span className="inline-block px-1 text-lg relative">
      <span className="inline-block text-green-500">projects</span>
    </span>
  </h2>
);

const IntroText = () => (
  <p className="text-center text-xl sm:text-2xl mb-6 font-extrabold">
    Things I&apos;ve built{" "}
  </p>
);

const ShowAllLink = ({ showAll, onClick }: { showAll: boolean; onClick: () => void }) => (
  <div className="text-center mt-4">
    <button
      onClick={onClick}
      className="text-gray-50  hover:text-blue-700 transition"
    >
      {showAll ? "Show Less" : "Show More"}
    </button>
  </div>
);

export default Projects;
