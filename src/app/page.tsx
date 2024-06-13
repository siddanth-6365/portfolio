"use client";
import Navbar from "@/components/Navbar"
import HomePage from "./components/Homepage"
import WorkExperience from "./components/WorkExperience"
import Projects from "./components/Projects"
import GeminiEffect from "./components/GeminiEffect"
import ContactForm from "./components/ContactForm"

export default function HeroHighlightDemo() {
  return (
    <>
      <Navbar />
      <HomePage />
      <WorkExperience />
      <div data-aos="fade-right"
        className="px-[1.3rem] lg:px-[9rem] my-[6rem] "
      >
        <Projects />
      </div>
      <GeminiEffect />
      <ContactForm />

    </>

  );
}


