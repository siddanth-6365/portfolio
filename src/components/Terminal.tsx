"use client";
import React, { useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

export default function App() {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key={0}>Welcome! For a list of available commands, type `help`</TerminalOutput>
  ]);

  const commands : any = {
    whoami: "Siddanth Reddy",
    about: "Yet another developer from India with a passion for writing code and creating web applications that solve real-life challenges",
    education: "(B.Tech.) - CSE at JIIT,Noida (2022-2026)",
    email: "siddanth6365@gmail.com",
    socials: "LinkedIn: linkedin.com/in/siddanth-reddy\nGitHub: github.com/siddanth-6365\nWebsite: siddanth.live",
    skills: "Front-end: React.js, Next.js, SvelteKit, TailwindCSS\nBack-end: Node.js, Express.js, GraphQL, Microservices, Monorepos (Turborepo), Redis\nDatabases: MySQL, MongoDB, PostgreSQL\nDevOps & Deployments: Docker, Git/GitHub, Serverless Backends (Cloudflare Workers), AWS (EC2)",
    experience: "Teaching Assistant at 100xDevs (Dec 2023 - May 2024), Web Developer Intern at ONBO (Aug 2023 - Dec 2023)",
    help: "Available commands: whoami, about, education, email, socials, skills, experience"
  };

  const handleTerminalInput = (terminalInput :string ) => {
    const newTerminalLineData = [...terminalLineData, <TerminalOutput key={terminalLineData.length}>$ {terminalInput}</TerminalOutput>];

    const command = terminalInput.trim();
    if (command === "clear") {
      setTerminalLineData([]);
    } else if (commands[command]) {
      newTerminalLineData.push(
        <TerminalOutput key={newTerminalLineData.length}>{commands[command]}</TerminalOutput>
      );
    } else {
      newTerminalLineData.push(
        <TerminalOutput key={newTerminalLineData.length}>Command not found: {command}</TerminalOutput>
      );
    }

    setTerminalLineData(newTerminalLineData);
  };

  return (
    <div className="p-4 ml-0 md:ml-12 h-[500px] w-full mb-8">
      <h1 className="ml-4 mb-2 text-2xl sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        ~ terminal
      </h1>
<div className="text-sm">
      <Terminal
        name='Terminal'
        colorMode={ColorMode.Dark}
        onInput={handleTerminalInput}
        height="340px"
      >
        {terminalLineData}
      </Terminal>
      </div>
    </div>
  );
}
