"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { IconCloud } from "@/components/iconCloud";
import ShinyButton from "@/components/ui/shiny-button";
import { AnimatedTooltip } from "@/components/socialinks";
import { socials } from "@/data";
import ScrollDownButton from "@/components/ui/scroll-down-btn";
import { useHydration } from "@/hooks/useHydration";
import { resumeLink } from "@/data";

export default function HeroPage() {
  const isHydrated = useHydration();
  return (
    <>
      <div className="relative min-h-screen flex flex-col justify-center items-center">
        <HeroHighlight className="flex flex-col md:flex-row items-center justify-center w-full">
          <IconCloud />
          <div className="flex flex-col items-center justify-center">
            {isHydrated && <Hero />}
            <ShinyButton
              text="Resume"
              link={resumeLink}
            />
            <div className="flex flex-row items-center justify-center mt-4 mr-6 md:mt-6 w-full">
              <AnimatedTooltip items={socials} />
            </div>
          </div>
        </HeroHighlight>
        <div className="hidden md:block">
          <ScrollDownButton />
        </div>
      </div>
    </>
  );
}

const Hero = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [20, -5, 0] }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className=" text-xl px-4 md:text-2xl lg:text-3xl font-bold text-neutral-700 dark:text-neutral-200 max-w-4xl leading-relaxed lg:leading-snug text-center  mx-auto "
    >
      <p className=" md:text-7xl text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 py-2 md:py-4">
        Hi, I&apos;m Siddanth
      </p>
      {/* <p className=" md:text-3xl text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
      A CS Student &amp; Developer
      </p> */}
      <p className=" md:text-2xl text-xl font-bold relative z-20 bg-clip-text text-neutral-400 max-w-2xl  py-2">
        A developer who loves coding and building web apps
      </p>

      {/* Building <Highlight>web apps</Highlight> and
      <br /> <Highlight>generative AI</Highlight> solutions
      <br />  */}
      <p className=" md:text-2xl text-xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
        Time Zone: {time} IST
      </p>
    </motion.h1>
  );
};
