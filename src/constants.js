import menu from "./assets/menu-app.jpeg";
import optiva from "./assets/optiva.jpg";
import hcmatrix from "./assets/hcmatrix.png";
import acme from "./assets/acme.jpeg";
import colour from "./assets/colour.jpeg";
export const HERO_CONTENT = ``;

export const ABOUT_TEXT = `I am a passionate developer from Lagos, Nigeria bringing you web 
development and design from the future. My expertise is developing next-level
websites and web applications including full frontend design.`;

export const EXPERIENCES = [
  {
    year: "Aug 2023 - Present",
    role: "Frontend Developer",
    company: "Snapnet Solutions",
    description: `Assist in the development and maintenance of frontend components for client's projects.
    Conduct testing and debugging to ensure the functionality of web applications.  
    Develop responsive applications utilizing third-party technologies like React, Typescript and Antd for desktop and mobile platforms.
    Design and build an interactive, user-friendly web application for Optiva and automated company processes.
    Develop and maintain code for in-house software web applications.`,
    technologies: ["Typescript", "React.js", "ANTD", "Tailwind", "React Query"],
  },
  {
    year: "Jan 2023 - Aug 2023",
    role: "Graduate Intern - Frontend Developer ",
    company: "Snapnet Solution",
    description: `Collaborated with senior developers in testing, debugging, and enhancing in-house web applications.
    Actively participated in the development of multiple software platforms, contributing code to in-house
    applications to improve functionality and user experience. Gained hands-on experience with agile
    methodologies, working efficiently within sprint cycles and utilizing project management tools.`,
    technologies: ["Javascript", "React.JS", "Microsoft Azure", "React Query"],
  },
  {
    year: "Aug 2022 - Dec 2022",
    role: "Graduate Trainee - Analyst",
    company: "Prospa Technology Limited",
    description: `Conducted thorough analysis of existing systems, identifying areas for improvement and proposing innovative solutions.
    Actively participated in training programs and collaborated with multiple departments across the
    organization to gain a comprehensive understanding of company operations. Conducted research and collected
    data from various sources, employing analytical techniques to derive meaningful insights.
    Translated analysis findings into actionable business insights, providing valuable recommendations to drive informed decision-making.
    `,
    technologies: ["3CX", "Freshdesk", "Jira", "Intercom"],
  },
  {
    year: "Aug 2021 - Jul 2022",
    role: "Bootcamp Student",
    company: "International Centre for Professional Development, FUNAAB",
    description: `Cloned the Barter Student Ambassador landing page using REACT.
    Developed a recipes application using REACT.
    Built a calculator application using HTML, SCSS and JAVASCRIPT.
    `,
    technologies: ["HTML", "CSS", "Javascript", "React.JS"],
  },
];

export const PROJECTS = [
  {
    title: "HCMatrix",
    image: hcmatrix,
    description: `An HR application`,
    technologies: [
      "React",
      "React query",
      "ANTD",
      "Typescript",
      "HTML",
      "CSS",
      "Javacript",
    ],
    link: `https://app.hcmatrix.com`,
  },
  {
    title: "Optiva",
    image: optiva,
    description: `A citizen application`,
    technologies: [
      "React",
      "React query",
      "ANTD",
      "Typescript",
      "HTML",
      "CSS",
      "Javacript",
    ],
    link: `https://optiva-app.netlify.app`,
  },
  {
    title: "Menu App",
    image: menu,
    description: `A simple menu app`,
    technologies: ["HTML", "CSS", "Javacript"],
    link: `https://my-menu-app-proj.netlify.app/`,
  },

  {
    title: "Acme",
    image: acme,
    description: "A responsive clone of the Acme website",
    technologies: ["HTML", "CSS"],
    link: `https://acme-clone.netlify.app/`,
  },
  {
    title: "Color Generator",
    image: colour,
    description: `A simple colour generator app`,
    technologies: ["HTML", "CSS", "Javascript"],
    link: `https://colourgeneratorapp.netlify.app/`,
  },
];

export const CONTACT = {
  address: "Lagos, Nigeria",
  email: "gamubode@gmail.com",
};
