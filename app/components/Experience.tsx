import React from "react";

interface ExperienceItemProps {
  dateRange: string;
  title: string;
  company: string;
  tasks: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  dateRange,
  title,
  company,
  tasks,
}) => (
  <li className="mb-10 ms-4">
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
      {dateRange}
    </time>
    <h3 className="text-md font-semibold text-gray-900 dark:text-gray-200">
      <span>{title}</span> - <span>{company}</span>
    </h3>
    {/* Task list hidden on small screens, visible on larger screens */}
    <ul className="hidden sm:block list-disc list-inside mt-2 text-sm font-normal text-gray-500 dark:text-gray-400">
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  </li>
);

const Experience: React.FC = () => {
  const experiences = [
    {
      dateRange: "June 2023 - Present",
      title: "Software Engineer",
      company: "Bizaimca Software",
      tasks: [
        "Developed and implemented user-friendly web applications using React and Node.js.",
        "Collaborated with cross-functional teams to define, design, and ship new features.",
        "Enhanced application performance by optimizing components and API interactions.",
      ],
    },
    {
      dateRange: "June 2022 - May 2023",
      title: "Software Engineer Intern",
      company: "Bizaimca Software",
      tasks: [
        "Assisted in developing front-end applications using Angular and Tailwind CSS.",
        "Worked on integrating REST APIs with the front-end components.",
        "Contributed to improving code quality through peer reviews and unit tests.",
      ],
    },
  ];

  return (
    <div id="experience-section" className="mx-4 my-4 md:mx-48">
      <h2 className="text-center font-bold text-sm font-jetbrains uppercase tracking-wider mb-6">
        <span className="inline-block px-1 text-lg relative">
          <span className="inline-block text-blue-500">Experience</span>
        </span>
      </h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            dateRange={exp.dateRange}
            title={exp.title}
            company={exp.company}
            tasks={exp.tasks}
          />
        ))}
      </ol>
    </div>
  );
};

export default Experience;
