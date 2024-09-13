"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

interface Props {
  projectList: Project[];
}

export interface Project {
  title: string;
  description: string;
  stack: string;
  github: string;
  live: string;
  isPrivate: boolean;
  isLive: boolean;
}

const ProjectGrid = ({ projectList }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectList.map((p, index) => (
        <ProjectCard
          id={index}
          key={p.title}
          description={p.description}
          stack={p.stack}
          title={p.title}
          github={p.github}
          isLive={p.isLive}
          live={p.live}
          isPrivate={p.isPrivate}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
