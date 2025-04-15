"use client"
import Navbar from "@/components/Navbar";
import HomePage from "./components/Homepage";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import GeminiEffect from "./components/GeminiEffect";
import ContactForm from "./components/Contact";
import Skills from "./components/SkillsPage";
import { GithubCalender } from "./components/GithubCalender";

export default function HeroHighlightDemo() {
  return (
    <>
      {/* Static Navbar */}
      <Navbar />

      {/* HomePage */}
      <div>
        <HomePage />
      </div>

      {/* Skills section */}
      <div className="px-[1.5rem] lg:px-[9rem] my-[2rem] mt-[2rem]">
        <Skills />
      </div>

      {/* Work Experience */}
      <div>
        <WorkExperience />
      </div>

      {/* Github Calendar */}
      <div className="flex flex-col items-center justify-center p-4 md:p-0 my-[2rem]">
        <GithubCalender />
      </div>

      {/* Projects section */}
      <div className="px-[1.3rem] lg:px-[9rem] my-[6rem]">
        <Projects />
      </div>

      <GeminiEffect />
      <ContactForm />
    </>
  );
}
