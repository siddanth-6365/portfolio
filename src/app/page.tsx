"use client";
import Navbar from "@/components/Navbar"
import HomePage from "./components/Homepage"
import WorkExperience from "./components/WorkExperience"
import Projects from "./components/Projects"
import GeminiEffect from "./components/GeminiEffect"
import ContactForm from "./components/Contact"
import Skills from "./components/SkillsPage"
import {GithubCalender} from "./components/GithubCalender"
import { TerminalContextProvider } from "react-terminal";

export default function HeroHighlightDemo() {
  return (
    <>
      <Navbar />
      <HomePage />
      <div
        className="px-[1.5rem] lg:px-[9rem] my-[2rem] mt-[2rem]"
      >
        <Skills />
      </div>
      <div
        className="flex flex-col items-center justify-center p-4 md:p-0 my-[2rem]"
      >
      <GithubCalender />
      </div>
      <WorkExperience />
      <div data-aos="fade-right"
        className="px-[1.3rem] lg:px-[9rem] my-[6rem] "
      >
        <Projects />
      </div>
      <GeminiEffect />

      <TerminalContextProvider>
      <ContactForm />      
      </TerminalContextProvider>
      
    </>

  );
}


