"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { IconCloud } from "@/components/iconCloud"
import ShinyButton from "@/components/ui/shiny-button"

export default function HeroPage() {
    return (
        <>
            <HeroHighlight className="flex flex-col md:flex-row  items-center justify-center">
                <IconCloud />
                <div className="flex flex-col items-center justify-center ">
                    <Hero />
                    <ShinyButton text="Resume" />
                </div>
            </HeroHighlight>
        </>

    );
}


const Hero = () => {
    return (
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="text-xl px-4 md:text-2xl lg:text-3xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto " 
        >
            <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
                HEY, I&apos;M Siddanth
            </p>
            <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
                A full Stack developer
                <br />
            </p>

            building <Highlight>seamless</Highlight> interfaces
            <br /> &nbsp; and <Highlight>robust</Highlight> backends
        </motion.h1>
    );
};

