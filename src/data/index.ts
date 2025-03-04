import emailClassifyImg from "../../public/email-classify.png";
import portfolioImg from "../../public/portfolio.png";
import leetcodeStatsImg from "../../public/leetcode-stats.png";
import nodejsImg from "../../public/nodejs.png";
import cppImg from "../../public/c++.png";
import ethereumImg from "../../public/ethereum.svg";
import propxImg from "../../public/propx.png";
import frescoGuardImg from "../../public/frescoGuard.png";
import gitImg from "../../public/git.png";
import vercelLiteImg from "../../public/vercelLite.png";
import pysqlImg from "../../public/pysql.png";
import cctvproject from "../../public/cctvproject.png";

export const projectList = [
  {
    id: 12,
    tag: "top",
    title: "vercelLite",
    category: "backend",
    image: vercelLiteImg,
    ytEmbeedUrl: "https://www.youtube.com/embed/hsuV1CAn7SQ",
    description:
      "Developed a Vercel like platform, for automated frontend website hosting by implementing a microservices architecture using Node.js, Docker, and AWS services (ECR, ECS, S3) and built an API server that manages project deployments, interacts with AWS ECS to spin up containers, and utilizes Redis for real-time logging. Created a reverse proxy server to handle the routing of user requests to the appropriate files in the S3 bucket and Incorporated real-time communication using Socket.io for live build logs.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    ],
    url: undefined,
    github: "https://github.com/siddanth-6365/vercelLite",
    features: [],
  },
  {
    id: 12,
    tag: "top",
    title: "pySql",
    category: "AI",
    image: pysqlImg,
    ytEmbeedUrl: "https://www.youtube.com/embed/aSfLUx28RIg",
    description:
      "Developed a SQL chatbot using Groq, integrated into Slack, enabling users to access database results through simple language queries. Automated translation of natural language queries to SQL, facilitating direct interaction with SQL databases and improving data accessibility. Enhanced decision-making for non-technical users by simplifying complex data retrieval through Slack, integrating Groq API and SQL database interactions.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg",
    ],
    url: "https://github.com/siddanth-6365/pySql",
    github: "https://github.com/siddanth-6365/pySql",
    features: [],
  },
  {
    id: 13,
    tag: "top",
    title: "Intelligent_Video_Recording_for_CCTV",
    category: "AI",
    image: cctvproject,
    // ytEmbeedUrl: "https://www.youtube.com/embed/aSfLUx28RIg",
    description:
      "Developed an Intelligent Video Recording Optimization system for CCTV footage that reduces storage overhead by selectively recording only activity-rich segments. Utilized frame subtraction for efficient motion detection combined with YOLOv8-based object detection to trigger recording when significant events occur. This hybrid approach improved real-time responsiveness and enhanced the overall effectiveness of surveillance systems.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    ],
    url: "https://github.com/siddanth-6365/Intelligent_Video_Recording_for_CCTV",
    github:
      "https://github.com/siddanth-6365/Intelligent_Video_Recording_for_CCTV",
    features: [],
  },
  {
    id: 1,
    // tag: "top",
    title: "Flight-Booking-Backend",
    category: "backend",
    image: nodejsImg,
    description:
      "Developed complete backend microservices-based project including four services: Flights, Booking, Authentication, Notification using: ExpressJs, MySQL, REST APIs , rabbitmq and npm packages (rate limiter,proxy,cron jobs,JWT) also Solved common booking problems",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
      "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
    ],
    url: undefined,
    github: "https://github.com/siddanth-6365/Flight-Booking-Backend",
    features: [],
  },

  {
    id: 2,
    title: "leetcode-stats-api",
    category: "backend",
    image: leetcodeStatsImg,
    description:
      "This project aims to enhance the accessibility and ease of integration for developers using LeetCode data by converting the existing LeetCode API, which is based on GraphQL, into a RESTful API. The primary goal is to provide a straightforward way for developers to retrieve valuable statistics and information about LeetCode users and their problem-solving activities.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
    ],
    url: "https://leetcode-restful-api.vercel.app/",
    github: "https://github.com/siddanth-6365/leetcode-Stats-api",
    features: [],
  },
  {
    id: 3,
    title: "Personal Portfolio",
    category: "frontend",
    image: portfolioImg,
    description:
      "portfolio website, built with Next.js along with Aceternity UI and Tailwind CSS showcases my skills, work experience and projects. The site includes a contact form, powered by Nodemailer, allowing you to easily reach out to me.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://ui.aceternity.com/_next/image?url=%2Flogo.png&w=128&q=75",
    ],
    url: "siddanth.live",
    github: "https://github.com/siddanth-6365/portfolio",
    features: [
      "Sleek and modern design",
      "Built with Next.js for server-side rendering",
      "Utilizes Tailwind CSS for responsive styling",
      "Animated transitions powered by Framer Motion",
    ],
    detailedDescription:
      "This project is a personal portfolio website showcasing the developer's skills and projects. It features a sleek and modern design implemented with Next.js, a React framework for server-side rendering.",
  },
  {
    id: 4,
    title: "Jaypee-Maps",
    category: "c++",
    image: cppImg,
    description:
      "created Jaypee Maps, a campus navigation system utilizing graph data structures and algorithms to optimize movement within College.The system calculates shortest paths based on user-selected locations and transportation modes",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    ],
    url: undefined,
    github: "https://github.com/siddanth-6365/Jaypee-Maps",
    features: [],
    detailedDescription:
      "created Jaypee Maps, a campus navigation system utilizing graph data structures and algorithms to optimize movement within College.The system calculates shortest paths based on user-selected locations and transportation modes, streamlining navigation with features like location selection and travel time estimation. This project showcased my skills in applying data structures and algorithms to solve real-world problems",
  },
  {
    id: 5,
    title: "Prop-X",
    tag: "top",
    category: "blockchain",
    image: propxImg,
    description:
      "PropX is a cutting-edge platform dedicated to revolutionizing real estate transactions and property management using blockchain technology, specifically Ethereum. Our mission is to enhance transparency, security, and efficiency in property dealings, making it more accessible to a global audience.",
    tech: [
      ethereumImg,
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    ],
    url: undefined,
    github: "https://github.com/siddanth-6365/Prop-X",
    features: [],
    detailedDescription:
      "PropX is a cutting-edge platform dedicated to revolutionizing real estate transactions and property management using blockchain technology, specifically Ethereum. Our mission is to enhance transparency, security, and efficiency in property dealings, making it more accessible to a global audience.",
  },

  {
    id: 6,
    title: "FrescoGuard",
    category: "AI",
    image: frescoGuardImg,
    description:
      "Fresco Guard is a groundbreaking crop management solution that seamlessly integrates a dynamic Next.js frontend with a Python backend powered by advanced machine learning models. This single repository houses the complete source code, documentation, and resources for the Fresco Guard project, developed by Team Skyshots during the InnovateNSUT'24.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    ],
    url: undefined,
    github: "https://github.com/siddanth-6365/FrescoGuard",
    features: [],
    detailedDescription:
      "Fresco Guard is a groundbreaking crop management solution that seamlessly integrates a dynamic Next.js frontend with a Python backend powered by advanced machine learning models. This single repository houses the complete source code, documentation, and resources for the Fresco Guard project, developed by Team Skyshots during the InnovateNSUT'24.",
  },
  {
    id: 7,
    title: "Email Classifier-GPT",
    category: "full Stack",
    image: emailClassifyImg,
    description:
      "This web application allows users to seamlessly manage their Gmail inbox by classifying emails into various categories using the power of OpenAI's GPT",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
    ],
    url: "https://email-classifications-gpt-149g.vercel.app/",
    github: "https://github.com/ankitrajxd/myapp-config.git",
    features: [""],
    detailedDescription:
      "This project implements GitOps methodology for managing infrastructure, specifically for a web application. It utilizes Argo CD for continuous delivery and integrates with Kubernetes for container orchestration.",
  },
  {
    id: 8,
    tag: "top",
    title: "gitLite",
    category: "backend",
    image: gitImg,
    description:
      "GitLite is a lightweight version control system inspired by Git. It was created to gain a deeper understanding of Git's internals and to offer a simplified alternative for basic version control operations",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    ],
    url: "https://github.com/siddanth-6365/gitLite",
    github: "https://github.com/siddanth-6365/gitLite",
    features: [],
  },
];

export const skills = [
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    name: "Python",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    name: "NextJS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    name: "React",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    name: "TailwindCSS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    name: "TypeScript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    name: "C++",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
    name: "Svelte",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    name: "postgresql",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
    name: "GraphQL",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    name: "Git",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
    name: "Terraform",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    name: "Docker",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    name: "AWS",
  },
  {
    url: "https://pbs.twimg.com/profile_images/1584620135490338816/tCCcROZD_200x200.png",
    name: "turborepo",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    name: "Redis",
  },
];

export const socials = [
  {
    id: 1,
    name: "Twitter",
    username: "Siddanth6365",
    url: "https://x.com/Siddanth6365",
    image:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Github",
    username: "siddanth-6365",
    url: "https://github.com/siddanth-6365",
    image:
      "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
  },
  {
    id: 3,
    name: "LinkedIn",
    username: "siddanth-reddy",
    url: "https://www.linkedin.com/in/siddanth-reddy/",
    image:
      "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kNS0xMF8xLnBuZw.png",
  },
];

export const WorkExpcontents = [
  {
    title: "Backend Developer Intern - (Maxint, Inc)",
    description: [
      "Implemented budgeting system by creating materialized views using user transactions and identify recurring bills.",
      "Developed a transaction categorizer using an DeBERTa zero shot classification model, fine-tuned it with transaction dataset, and deployed it on an AWS sagemaker inference.",
      "Developing a RAG chatbot from scratch using open sources models(llama,sqlcoder-2) for user queries related to their transactions and offers by generating SQL queries and matching embeddings",
    ],
    date: "Sep 2024 - Jan 2025",
  },
  {
    title: "Full Stack Developer Intern - (Nomorede)",
    description: [
      "Designed and developed landing pages and interactive dashboards using Next.js, using libraries such as Shadcn, Framer Motion, and TailwindCSS, in collaboration with UI/UX designers. live results at nomorede.com",
      "Collaborated with backend developers for designing and integrate APIs and contributed to the deployment of services on Google Cloud Platform (GCP) and Worked on vector-based product recommendation system for personalized user experiences.",
    ],
    date: "July 2024 - Sep 2024",
  },
  {
    title: "Teaching Assistant - (100xDevs (Full Stack Bootcamp))",
    description: [
      "Supported students in their journey from beginners to full-stack developers, guiding them through a curriculum covering MERN stack development, DevOps, and system design.",
      "Actively engaged with students in the Discord server, providing hands-on support, personalized feedback, and guidance on projects and coding challenges.",
    ],
    date: "Dec 2023 - May 2024",
  },
  {
    title: "Frontend Developer Intern - (ONBO)",
    description: [
      "Converted Figma designs into dynamic, component-driven front-end experiences using SvelteKit, TypeScript, and TailwindCSS, collaborating with design and product teams.",
      "Refactored the codebase to MVVM architecture, improving maintainability and ease of future development and Built key features like auto-saving data with localStorage and a quick action button for enhanced usability.",
    ],
    date: "Aug 2023 – Dec 2023",
  },
];

export const commandsAnswers = {
  whoami: "Siddanth Reddy",
  about:
    "Yet another developer from India with a passion for writing code and creating web applications that solve real-life challenges",
  education: "(B.Tech.) - CSE at JIIT, Noida (2022-2026)",
  email: "siddanth6365@gmail.com",
  socials:
    "LinkedIn: linkedin.com/in/siddanth-reddy\nGitHub: github.com/siddanth-6365\nWebsite: siddanth.live",
  skills:
    "Front-end: React.js, Next.js, SvelteKit, TailwindCSS\nBack-end: Node.js, Express.js, GraphQL, Microservices, Monorepos (Turborepo), Redis\nDatabases: MySQL, MongoDB, PostgreSQL\nDevOps & Deployments: Docker, Git/GitHub, Serverless Backends (Cloudflare Workers), AWS (EC2)",
  experience:
    "Teaching Assistant at 100xDevs (Dec 2023 - May 2024) \n Web Developer Intern at ONBO (Aug 2023 - Dec 2023)",
  help: "Available commands: whoami, about, education, email, socials, skills, experience",
};

export const resumeLink =
  "https://www.canva.com/design/DAGJgD_5ee4/yngItTDh9gkAD7mREbAh3A/view?utm_content=DAGJgD_5ee4&utm_campaign=designshare&utm_medium=link&utm_source=editor";
