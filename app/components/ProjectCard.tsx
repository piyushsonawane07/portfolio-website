"use client";
import { Eye, GitMerge } from "lucide-react";

interface Props {
  id: number;
  title: string;
  description: string;
  stack: string;
  github: string;
  live: string;
  isPrivate: boolean;
  isLive: boolean;
}

const ProjectCard = ({
  id,
  title,
  description,
  stack,
  github,
  live,
  isPrivate,
  isLive,
}: Props) => {
  return (
    <div className="relative w-full bg-black/60 border border-gray/20 backdrop-blur-lg rounded-md p-1 m-1 lg:p-4 lg:m-4 shadow-lg hover:shadow-2xl transition-all flex flex-col transform hover:scale-95 duration-300 ease-out">
      {/* Image Preview */}
      {/* <div className="h-36 w-full relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div> */}

      {/* Card Content */}
      <div className="flex flex-col p-4 flex-1 justify-between">
        <div className="project_details">
          <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
          <small className="block text-gray-300 text-xs uppercase tracking-wide mb-3">
            {stack}
          </small>
          <p className="text-sm text-gray-200 font-light leading-relaxed mb-3 line-clamp-3 h-16">
            {description}
          </p>
        </div>

        {/* Card Footer with Links */}
        <div className="project_links flex gap-4 mt-4">
          {isLive && (
            <small className="hover:text-white transition">
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300"
              >
                <Eye size={16} className="mr-1 text-sm" /> Live
              </a>
            </small>
          )}

          {!isPrivate && (
            <small className="hover:text-white transition">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300"
              >
                <GitMerge size={16} className="mr-1 text-sm" /> Code
              </a>
            </small>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
