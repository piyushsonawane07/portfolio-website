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
  <li className="relative mb-12 ml-4 pl-8">
    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1.5 ring-4 ring-gray-900"></div>
    <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full hover:bg-gray-900/90 max-w-5xl mx-auto">
      <time className="block mb-2 text-sm font-medium text-blue-400">
        {dateRange}
      </time>
      <h3 className="text-xl font-bold text-white mb-4">
        {title}
        <span className="text-gray-300 font-normal block text-base mt-1">@ {company}</span>
      </h3>
      <ul className="space-y-4 text-gray-300 text-[15px] leading-relaxed">
        {tasks.map((task, index) => (
          <li key={index} className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-blue-400 before:rounded-full before:mt-0.5">
            {task}
          </li>
        ))}
      </ul>
    </div>
  </li>
);

const Experience: React.FC = () => {
  const experiences = [
    {
      dateRange: "June 2023 - Present",
      title: "Software Engineer",
      company: "BizAmica Software",
      tasks: [
        "Designed and implemented key features across izdox platform and functionalities in the applications, improving efficiency and user experience.",
        "Developed and integrated critical features, including a Rules Engine, Sanction Screening, and Validation Screen, optimizing trade finance operations by boosting efficiency, compliance, and operational accuracy.",
        "Built LLM pipelines utilizing LangChain's RAG and OpenAI API to enhance data retrieval and response accuracy.",
        "Developed REST APIs and optimized MySQL CRUD operations for improved data access and performance.",
        "Streamlined document labeling processes on the DIY Platform by implementing the Smart Labeling feature, resulting in a 75% reduction in labeling time.",
        "Built a Licensing Server for customer management using Angular, Flask, and MySQL.",
        "Implemented Vision Language Model (LLM) pipelines to extract structured data from images, integrating tools like Claude and FastAPI.",
        "Designed and deployed a chatbot using Retrieval-Augmented Generation (RAG) chains to interact with documents for data extraction."
      ]
    },
    {
      dateRange: "June 2022 - June 2023",
      title: "Software Engineer Intern",
      company: "BizAmica Software",
      tasks: [
        "Contributed to the development of izDox, a document processing tool.",
        "Built robust data pipelines improving efficiency, and re-trained various AI/ML models to achieve accuracy above 90%.",
        "Developed a Chatbot leveraging the RASA Framework.",
        "Enhanced platform security by implementing LDAP Authentication for the login process."
      ]
    }
  ];

  return (
    <div id="experience-section" className="mx-auto max-w-6xl px-8 py-12 sm:px-10 lg:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-3">
          Work Experience
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </div>
      <ol className="relative">
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
