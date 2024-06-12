"use client";
import Navbar from "@/components/Navbar"
import HomePage from "@/components/pages/Homepage"
import WorkExperience from "@/components/pages/WorkExperience"
import Projects from "@/components/pages/Projects"

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

    </>

  );
}


