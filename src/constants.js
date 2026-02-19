// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import mcLogo from "./assets/tech_logo/mc.png";



// Education Section Logo's
import kvs_logo from "./assets/education_logo/kvs_logo.png";
import lpu_logo from "./assets/education_logo/lpu_logo.png";

// Project Section Logo's
import doodledesk from "./assets/work_logo/doodledesk.jpeg";
import quote from "./assets/work_logo/quote.png";
import eleganza from "./assets/work_logo/eleganza.png";
import crypto from "./assets/work_logo/crypto.png";


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: lpu_logo,
      school: "Lovely Professional University, Jalandhar",
      date: "Since Aug 2023",
      grade: "7.18",
      desc: "I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering from Lovely Professional University (LPU), with a specialization in Full Stack Web Development. Throughout my academic journey, I have built a strong foundation in Data Structures, Web Technologies, and Software Development. I have worked on multiple projects using technologies like React, Node.js, and MongoDB, applying theoretical concepts to create practical, real-world applications and continuously improving my problem-solving and development skills.",
      degree: "Bachelor of Technology - CSE (Computer Science Engineering)",
    },
    {
      id: 1,
      img: kvs_logo,
      school: "Kendriya Vidyalaya, Thane",
      date: "Apr 2022 - Mar 2023",
      grade: "77%",
      desc: "I completed my Class 12 from Kendriya Vidyalaya AFS Thane (CBSE) with Physics, Chemistry, Mathematics, Computer Science, Hindi, and English. This phase strengthened my analytical thinking and introduced me to programming, shaping my path toward Computer Science engineering.",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 2,
      img: kvs_logo,
      school: "Kendriya Vidyalaya, Thane",
      date: "Apr 2020 - Mar 2021",
      grade: "94.4%",
      desc: "I completed my Class 10 under the CBSE board. My schooling here built a strong academic foundation and helped me develop discipline, consistency, and an early interest in technology.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
    id: 0,
    title: "Doodle Desk Daycare Enrollment System",
    description: "A responsive and user-friendly daycare enrollment web application designed to simplify the registration process for parents and administrators. The system features a multi-step enrollment form that collects parent details, supports multiple child registrations, allows optional medical record uploads, and enables program selection with proper form validation. Built with a clean Tailwind-based UI and structured data handling, the app focuses on usability, accessibility, and smooth form interactions across devices.",
    image: doodledesk,
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "PHP"],
    github: "https://github.com/SaakshiJha29/Doodle-desk",
    },
    {
      id: 1,
      title: "Crypto Market Trend Dashboard",
      description: "A modern cryptocurrency dashboard built using React and Chart.js that visualizes real-time market trends with interactive data representation. The application integrates the CoinGecko API to fetch live 7-day price data for multiple cryptocurrencies and dynamically updates the chart based on user selection. It features a fully custom-styled dropdown component, smooth light/dark theme switching, responsive design, and structured state management using React hooks. The project focuses on API integration, dynamic rendering, data visualization, and clean UI implementation.",
      image: crypto, 
      tags: ["React.js", "Chart.js", "JavaScript", "CSS", "API Integration"],
      github: "https://github.com/SaakshiJha29/Cryptovista-react",
      webapp: "https://crypto-alpha-drab.vercel.app/",

    },
    {
      id: 2,
      title: "Eleganza Fashion E-Commerce Website",
      description:"A modern and responsive fashion e-commerce website designed to deliver a premium shopping experience. The platform features a dynamic hero carousel, categorized product collections for men, women, and kids, animated testimonials, and interactive UI elements like dark/light mode, newsletter popup, and stats modal with charts. Built with a clean Tailwind-based design and smooth JavaScript interactions, the project focuses on performance, visual appeal, and user-friendly navigation across all devices.",
      image: eleganza,
      tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Chart.js"],
      github: "https://github.com/SaakshiJha29/Eleganza",
      webapp: "https://cheery-piroshki-044276.netlify.app/",

    },
    {
      id: 3,
      title: "Random Quote Machine",
      description: "An interactive quote generator web application built as part of the freeCodeCamp Frontend Libraries certification. The app fetches and displays random quotes with dynamic styling, smooth transitions, and social sharing functionality. Users can generate new quotes instantly and share them on Twitter, while the responsive layout and clean UI ensure an engaging experience across devices. The project focuses on DOM manipulation, API handling, and interactive frontend design.",
      image: quote,
      tags: ["HTML", "CSS", "JavaScript", "API", "Frontend"],
      github: "https://github.com/SaakshiJha29/Quote-machine-FCC-PROJECT-",
      webapp: "https://quotemachine-flame.vercel.app/",
    }
  ];  