"use client";
import React from "react";
import { TracingBeam } from "../ui/tracing-beam";

export default function WorkExp() {
    return (
      
        <TracingBeam className="px-6">
              <h1  className="text-2xl text-center sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">  Experience</h1>
            <div className="max-w-2xl mx-auto antialiased px-4  pt-4 relative">
                {contents.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        <h2 className="bg-black text-white rounded-full text-sm w-fit mb-2">
                            {item.date}
                        </h2>
                        <p className="text-2xl mb-4">
                            {item.title}
                        </p>
                        <div className="text-md text-gray-400 px-4 prose prose-sm dark:prose-invert">
                            <div className="pl-4">
                                <ul className="list-disc">
                                    {item.description.map((desc, index) => (
                                        <li key={index}>
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const contents = [
    {
        title: "Teaching Assistant - 100xDevs (full Stack Bootcamp)",
        description: [

            "Supported students in their journey from beginners to full-stack developers, guiding them through a comprehensive curriculum covering MERN stack development, DevOps principles, and system design.",
            "Engaged with students in the Discord server, providing hand-on support, offering guidance and solutions for their coding challenges",
            "Offered personalized feedback on projects, ensuring students understood core concepts, applied best practices, and successfully completed their learning objectives."

        ],
        date: "Dec 2023 - May 2024",
    },
    {
        title: "Web developer Intern - ONBO",
        description: [

            "Refactored and migrated the codebase from a traditional component-based structure to a modular MVVM architecture, enhancing maintainability and collaboration for future development.",
            "Demonstrated strong understanding of modern web technologies like Svelte, SvelteKit, TypeScript, and MVVM architecture."

        ],
        date: "Aug 2023 – Dec 2023",
    },

];
