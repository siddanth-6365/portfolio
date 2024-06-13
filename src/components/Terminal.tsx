"use client"
import { ReactTerminal } from "react-terminal";

export default function App() {
  const commands = {
    whoami: "Siddanth Reddy",
    about: "Yet another developer from India with a passion for writing code and creating web applications that solve real-life challenges",
    education: "(B.Tech.) - CSE at JIIT,Noida (2022-2026)",
    email: "siddanth6365@gmail.com",
    socials: "LinkedIn: linkedin.com/in/siddanth-reddy \n GitHub: github.com/siddanth-6365 Website: siddanth.live",
    skills: "Front-end: React.js, Next.js, SvelteKit, TailwindCSS\nBack-end: Node.js, Express.js, GraphQL, Microservices, Monorepos (Turborepo), Redis\nDatabases: MySQL, MongoDB, PostgreSQL\nDevOps & Deployments: Docker, Git/GitHub, Serverless Backends (Cloudflare Workers), AWS (EC2)", // Added for showcasing your skills
    experience: "Teaching Assistant at 100xDevs (Dec 2023 - May 2024), Web Developer Intern at ONBO (Aug 2023 - Dec 2023)",
    help: "Available commands: whoami, about, education, email, socials, skills, experience, clear",
  };

  return (
    <div className="p-4 ml-0 md:ml-12 h-[500px] w-full mb-8">
      <h1 className="ml-4 text-2xl sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ">
        ~ terminal
      </h1>

      <ReactTerminal
        commands={commands}
        themes={{
          "my-custom-theme": {
            themeBGColor: "#272B36",
            themeToolbarColor: "#DBDBDB",
            themeColor: "#FFFEFC",
            themePromptColor: "#a917a8"
          }
        }}
        theme="my-custom-theme"
        welcomeMessage={"For a list, type `help`"}


      />
    </div>
  );
}