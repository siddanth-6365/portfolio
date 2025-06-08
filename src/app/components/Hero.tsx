"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { IconCloud } from '@/components/iconCloud';

import { resumeLink } from '@/data';
import Social from '@/components/social';
import { ArrowDown } from 'lucide-react';

export default function HeroPage() {


    const scrollToContact = () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16  transition-colors">
            {/* Globe Icon */}
            <div className="">
                <IconCloud />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="text-center max-w-4xl mx-auto"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
                    Hi, I&apos;m <span className="text-neutral-700 dark:text-neutral-300">Siddanth</span>
                </h1>
                <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mb-4 font-light">
                    A Full Stack Developer & Software Engineer
                </p>
                {/* <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                A developer who loves coding and building web apps
                </p> */}

                {/* Social Links */}

                <div className="flex justify-center space-x-6 mb-8">
                    <Social />
                </div>


                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <button
                        onClick={() => window.open(resumeLink, '_blank')}
                        className="px-8 py-3 bg-neutral-700 text-white rounded-full hover:bg-neutral-800 transition transform hover:scale-105 font-medium"
                    >
                        Resume
                    </button>
                    <button
                        onClick={scrollToContact}
                        className="px-8 py-3 border-2 border-neutral-600 text-neutral-600 dark:text-neutral-200 rounded-full hover:border-neutral-700 hover:text-neutral-700 transition transform hover:scale-105 font-medium"
                    >
                        Get In Touch
                    </button>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <button

                className="animate-bounce p-2 text-neutral-400 hover:text-neutral-600 transition-colors"
            >
                <ArrowDown size={24} />
            </button>


        </section>
    );
}
