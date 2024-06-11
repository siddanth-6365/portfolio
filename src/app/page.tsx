"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Navbar from "@/components/Navbar"
import { IconCloud } from "@/components/iconCloud"

export default function HeroHighlightDemo() {
  return (
    <>
      <Navbar />
      <HeroHighlight className="flex flex-col md:flex-row  items-center justify-center">
      <IconCloud />
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-xl px-4 md:text-2xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          <p className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            HEY, I'M Siddanth
            <br />
          </p>
          <p className="relative mb-2 z-10 text-3xl md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            A full Stack developer <br />
          </p>
          building <Highlight>seamless</Highlight> interfaces
          <br />  and <Highlight>robust</Highlight> backends
        </motion.h1>
      </HeroHighlight>
      
    </>

  );
}


