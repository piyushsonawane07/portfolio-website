
const techLinks = {
  linkedin:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
  twitter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg",
  github:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
};

const {
  linkedin,
  twitter,
  github,
} = techLinks;


export const projects = [
  {
    title: "Doc Chat",
    description: "Built a scalable PDF Q&A system enabling users to interact with documents using natural language, leveraging LangChain, OpenAI embeddings, and Chroma for fast and accurate context retrieval",
    github: "https://github.com/piyushsonawane07/doc-chat",
    live: "",
    stack: "Python + FastAPI + Celery + OpenAI + Chroma + LangChain",
    isPrivate: false,
    isLive: false,
  },
  {
    title: "Embed Org",
    description: "A full-stack, containerized platform enabling document management, vector embeddings generation, and semantic search for organizations.",
    github: "https://github.com/VajraM-dev/embedorg",
    live: "",
    stack: "Next JS + Typescript + Python + Postgresql",
    isPrivate: false, 
    isLive: false,
  },
  {
    title: "Notify",
    description: "Notify is a web application that allows users to post, pin, and manage important messages or notifications on a collaborative pinboard.",
    github: "https://github.com/piyushsonawane07/Notify",
    live: "",
    stack: "Next JS + Typescript + Python + FastAPI",
    isPrivate: false, 
    isLive: false,
  },
  {
    title: "Netflix GPT",
    description: "Netflix Clone built using React JS and OpenAI API.",
    github: "https://github.com/piyushsonawane07/Netflix-GPT",
    live:"https://netflix-gpt-eta-lyart.vercel.app/",
    stack: "React JS + Javascript + OpenAI",
    isPrivate: false,
    isLive: true,
  }, 
  {
    title: "Secure Pass",
    description: "An Android App made in Kotlin to store the user's password.",
    github: "https://github.com/piyushsonawane07/Password-Manager-App",
    live: "",
    isLive: false,
    stack: "Android + Kotlin + Firebase",
    isPrivate: false,
  },

  {
    title: "Covid 19 Tracker App",
    description: "An real-time Covid-19 Tracker App.",
    github: "https://github.com/piyushsonawane07/Covid-19-Tracker-App",
    live:"",
    isLive: false,
    stack: "Android + Java",
    isPrivate: false,
  },
  {
    title: "Open Chat",
    description: "Custom a11y Compliant Datepicker.",
    github: "https://github.com/piyushsonawane07/open-chat",
    live: "https://open-chat-cd9cd.web.app/",
    stack: "React JS + Javascript + Firebase",
    isPrivate: false,
    isLive: true,
  },
  // {
  //   title: "Text Utils",
  //   description: "Utility functions to manipulate text in JavaScript.",
  //   github: "https://github.com/piyushsonawane07/Text-Utils-React",
  //   live:"https://piyushsonawane07.github.io/Text-Utils-React/",
  //   stack: "React JS + Javascript",
  //   isPrivate: false,
  //   isLive: true,
  // },
  // {
  //   title: "News App",
  //   description: "Stay informed with news app - your one-stop destination for breaking news and updates, right at your fingertips.",
  //   github: "https://github.com/piyushsonawane07/news_app",
  //   live:"",
  //   stack: "Android + Kotlin",
  //   isPrivate: false,
  //   isLive: false,
  // }
]

export const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/piyush-sonawane-ps/",
    icon: linkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/piyush_s0nawane",
    icon: twitter,
  },
  {
    name: "Github",
    url: "https://github.com/piyushsonawane07",
    icon: github,
  },
  {
    name: "Email",
    url: "mailto:piyushsonawane2023@gmail.com",
    icon: "https://cdn-icons-png.flaticon.com/512/3621/3621435.png",
  },
];
