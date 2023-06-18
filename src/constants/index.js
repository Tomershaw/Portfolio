import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    Sql,
    nodejs,
    mongodb,
    git,
    docker,
    C,
    meta,
    starbucks,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    reactpro,
    ShortenUrl,
    Flight,
    Csharp,
    Angular1,
    Portfolio,
    AngularIcon,
    FullStack
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Experience",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "full stack developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: Sql,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Angular",
      icon: AngularIcon,
    },
    {
      name: "#C",
      icon: C,
    },
  ];
  
  const experiences = [
    {
      title: "Full stack Developer",
      company_name: "C#",
      icon: FullStack,
      iconBg: "#383E56",
      points: [
        "I have acquired practical skills in both front-end and back-end development through the course. On the front-end side, I have gained knowledge and experience in essential web technologies such as HTML, CSS, and JavaScript. Additionally, I have expertise in popular frameworks like Angular and React, which have equipped me to create visually appealing and user-friendly interfaces. In terms of back-end development, I possess proficiency in languages such as C# and have hands-on experience with frameworks like ASP.NET Core. This expertise enables me to build server-side applications that are scalable and efficient. Furthermore, I have extensive experience working with databases, particularly SQL Server, and utilizing version control systems like Git. These skills contribute to my ability to handle end-to-end development tasks and deliver robust software solutions.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "react",
      icon: reactpro,
      iconBg: "#E6DEDD",
      points: [
        "React Redux",
        "Conditionals and Lists: Working with conditional rendering and dynamically rendering lists of elements.",
        "Components Properties, State & Lifecycle: Managing component properties, state, and lifecycle methods for dynamic and interactive behavior.",
        "Routing: Implementing routing in React applications to enable navigation between different pages or components.",
        "Forms: Building and handling forms in React, including input validation and form submission.",
        "Reaching out to the Web (HTTP/Fetch): Interacting with external APIs and fetching data from the web using HTTP requests.",
        "I learned Three.js, a powerful JavaScript library for creating 3D graphics and animations on the web."
      ],
    },
    {
      title: "Angular Developer",
      company_name: "Angular",
      icon: Angular1,
      iconBg: "#383E56",
      points: [
        " Typescript",
        "Angular Architecture",
        " Components And Modules and how to build them well",
        "Data Binding",
      ],
    },
    {
      title: ".net core",
      company_name: "",
      icon: Csharp,
      iconBg: "#E6DEDD",
      points: [
        "C#",
        "object oriented design",
        "asp.net core",
        "web api",
        "wpf",
        "entity framework"
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "ShortenUrl",
      description:
        "url shortner similar to tiny url",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "java script",
          color: "green-text-gradient",
        },
        {
          name: "webApi",
          color: "pink-text-gradient",
        },
      ],
      image: ShortenUrl,
      source_code_link: "https://github.com/Tomershaw/ShortenUrl",
    },
    {
      name: "FlightNavigatorApi",
      description:
        "airport run way management system with test simulator ",
        
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "Angular",
          color: "green-text-gradient",
        },
        {
          name: "webApi",
          color: "pink-text-gradient"
        },
      ],
      image: Flight,
      source_code_link: "https://github.com/Tomershaw/FlightNavigatorApi",
    },
    {
      name: "Portfolio",
      description:
        "Resume in react that uses three/fiber",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "three fiber",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: Portfolio,
      source_code_link: "https://github.com/Tomershaw/Portfolio",
    },
  ];
  
  export { services, technologies, experiences,  projects };