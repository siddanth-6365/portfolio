import emailClassifyImg from "../../public/email-classify.png";
import portfolioImg from "../../public/portfolio.png";
import leetcodeStatsImg from "../../public/leetcode-stats.png";
import nodejsImg from "../../public/nodejs.png";
import cppImg from "../../public/c++.png";
import ethereumImg from "../../public/ethereum.svg";
import propxImg from "../../public/propx.png";
import frescoGuardImg from "../../public/frescoGuard.png"

export const projectList = [
  {
    id: 4,
    title: "Email Classifier-GPT",
    category: "full Stack",
    tag: "top",
    image: emailClassifyImg,
    description:
      "This web application allows users to seamlessly manage their Gmail inbox by classifying emails into various categories using the power of OpenAI's GPT",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
    ],
    url: undefined,
    github: "https://github.com/ankitrajxd/myapp-config.git",
    features: [""],
    detailedDescription:
      "This project implements GitOps methodology for managing infrastructure, specifically for a web application. It utilizes Argo CD for continuous delivery and integrates with Kubernetes for container orchestration.",
  },
  {
    id: 1,
    tag: "top",
    title: "Flight-Booking-Backend",
    category: "backend",
    image: nodejsImg,
    description:
      "Developed complete backend microservices-based project including four services: Flights, Booking, Authentication, Notification using: ExpressJs, MySQL, REST APIs , rabbitmq and npm packages (rate limiter,proxy,cron jobs,JWT) also Solved common booking problems",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
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
      "Sleek personal portfolio website made with NextJs, ShadcnUI and Framer Motion.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
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
    id: 5,
    title: "FrescoGuard",
    category: "full Stack",
    image: frescoGuardImg,
    description:
      "Fresco Guard is a groundbreaking crop management solution that seamlessly integrates a dynamic Next.js frontend with a Python backend powered by advanced machine learning models. This single repository houses the complete source code, documentation, and resources for the Fresco Guard project, developed by Team Skyshots during the InnovateNSUT'24.",
    tech: [
      
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
    ],
    url: undefined,
    github: "https://github.com/siddanth-6365/FrescoGuard",
    features: [],
    detailedDescription:
      "Fresco Guard is a groundbreaking crop management solution that seamlessly integrates a dynamic Next.js frontend with a Python backend powered by advanced machine learning models. This single repository houses the complete source code, documentation, and resources for the Fresco Guard project, developed by Team Skyshots during the InnovateNSUT'24.",
  },
];

export const skills = [
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
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    name: "Git",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
    name: "Kubernetes",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    name: "Linux",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
    name: "Jenkins",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
    name: "Terraform",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
    name: "Ansible",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    name: "Python",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    name: "Docker",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    name: "Java",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    name: "AWS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg",
    name: "Prometheus",
  },
  // {
  //   url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  //   name: "Figma",
  // },
  // {
  //   url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
  //   name: "GitLab",
  // },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg",
    name: "ArgoCD",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
];

export const socials = [
  {
    name: "Github",
    url: "https://github.com/siddanth-6365",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/siddanth-reddy/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg",
  },
  {
    name: "Twitter",
    url: "https://x.com/Siddanth6365",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg",
  },
];

export const WorkExpcontents = [
  {
    title: "Teaching Assistant - 100xDevs (full Stack Bootcamp)",
    description: [
      "Supported students in their journey from beginners to full-stack developers, guiding them through a comprehensive curriculum covering MERN stack development, DevOps principles, and system design.",
      "Engaged with students in the Discord server, providing hand-on support, offering guidance and solutions for their coding challenges",
      "Offered personalized feedback on projects, ensuring students understood core concepts, applied best practices, and successfully completed their learning objectives.",
    ],
    date: "Dec 2023 - May 2024",
  },
  {
    title: "Web developer Intern - ONBO",
    description: [
      "Refactored and migrated the codebase from a traditional component-based structure to a modular MVVM architecture, enhancing maintainability and collaboration for future development.",
      "Demonstrated strong understanding of modern web technologies like Svelte, SvelteKit, TypeScript, and MVVM architecture.",
    ],
    date: "Aug 2023 – Dec 2023",
  },
];
