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
    AngularIcon
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
      title: "#C Developer",
      company_name: "#C",
      icon: Csharp,
      iconBg: "#383E56",
      points: [
        "During my studies I acquired a solid understanding of #C programming in a practical and focused way.",
         "I have acquired the necessary knowledge and skills to effectively use C# for software development.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "reactpro",
      icon: reactpro,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "During my studies I acquired basic knowledge and understanding of React, a JavaScript library for building user interfaces.",
        "I gained familiarity with the core concepts and components of React and developed a basic skill set for creating interactive web applications..",
      ],
    },
    {
      title: "Angular Developer",
      company_name: "Angular",
      icon: Angular1,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "During my studies, I acquired knowledge and a foundational understanding of Angular, a popular TypeScript-based framework for building web applications. I gained familiarity with the key concepts and features of Angular and developed a basic skill set to develop robust and scalable web applications using this framework.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "As a full-stack developer, I have acquired comprehensive knowledge and practical skills in both front-end and back-end development. On the front-end side, I have expertise in HTML, CSS, JavaScript, and frameworks like Angular and React, enabling me to create intuitive and visually appealing user interfaces. On the back-end side, I have proficiency in languages such as C# and frameworks like ASP.NET Core, allowing me to build scalable and efficient server-side applications. Additionally, I have experience working with databases like SQL Server and using version control systems like Git. With this skill set, I am capable of handling end-to-end development tasks and creating robust software solutions..",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "ShortenUrl",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "C",
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
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "C",
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
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: Portfolio,
      source_code_link: "https://github.com/Tomershaw/Portfolio",
    },
  ];
  
  export { services, technologies, experiences,  projects };