import proj from "./assets/proj.jpg";
export const HERO_CONTENT = `I am a frontend developer living in Lgaos, Nigeria. With 2 years of hands-on 
experience, I love building user interfaces in React and Typescript.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating 
efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a
variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web
development began with a deep curiosity for how things work, and it has evolved into a career where I
continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy
solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active,
exploring new technologies, and contributing to open-source projects.`;

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
    title: "E-Commerce Website",
    image: proj,
    description: `A fully functional e- commerce website with features like product listing, shopping cart, and 
    user authentication.`,
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: proj,
    description: `      An application for managing tasks and projects, with features such as task creation, assignment, and 
      progress tracking.`,
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: proj,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: proj,
    description: `     A platform for creating and publishing blog posts, with features like rich text editing, commenting, 
      and user profiles`,
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Lagos, Nigeria",
  phoneNo: "+234 810 292 9070",
  email: "gamubode@gmail.com",
};
