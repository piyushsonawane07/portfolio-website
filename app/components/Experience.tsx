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
        "Designed and implemented key features across izdox platform and functionalities in the applications, which impacts improving efficiency & user experience.",
        "Development and integration of critical features, including a Rules Engine, Sanction Screening, and a Validation Screen, optimizing trade finance operations by boosting efficiency, compliance, and operational accuracy.",
        "Deployed LLM pipelines utilizing LangChain's RAG) and OpenAI API to enhance data retrieval and response accuracys.",
        "Streamlined document labeling processes on the DIY Platform by implementing the Smart Labeling feature, resulting in a 75% reduction in labeling time and significantly improving operational efficiency."
      ],
    },
    {
      dateRange: "June 2022 - May 2023",
      title: "Software Engineer Intern",
      company: "Bizaimca Software",
      tasks: [
        "Built robust data pipelines improving efficiency, and re-trained and developed various existing AI/ML models to achieve accuracy above 90 %.",
        "Enhanced platform security by adding LDAP Authentication to the login process.",
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
