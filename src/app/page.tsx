"use client"
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HomePage from "./components/Homepage";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import GeminiEffect from "./components/GeminiEffect";
import ContactForm from "./components/Contact";
import Skills from "./components/SkillsPage";
import { GithubCalender } from "./components/GithubCalender";

// Define different animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const slideLeft = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const flipIn = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: { opacity: 1, rotateY: 0 },
};

export default function HeroHighlightDemo() {
  return (
    <>
      {/* Static Navbar */}
      <Navbar />

      {/* HomePage with fade in/up animation */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <HomePage />
      </motion.div>

      {/* Skills section with zoom in effect */}
      <motion.div
        className="px-[1.5rem] lg:px-[9rem] my-[2rem] mt-[2rem]"
        variants={zoomIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Skills />
      </motion.div>

      {/* Work Experience with slide from left */}
      <motion.div
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <WorkExperience />
      </motion.div>

      {/* Github Calendar with flip in effect */}
      <motion.div
        className="flex flex-col items-center justify-center p-4 md:p-0 my-[2rem]"
        variants={flipIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <GithubCalender />
      </motion.div>

      {/* Projects section with slide from right */}
      <motion.div
        className="px-[1.3rem] lg:px-[9rem] my-[6rem]"
        variants={slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Projects />
      </motion.div>



      <GeminiEffect />


      <ContactForm />

    </>
  );
}
