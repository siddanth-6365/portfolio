"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { WorkExpcontents } from "@/data";

export default function WorkExp() {
    return (

        <TracingBeam className="px-6" >
            <h1 id="Experience" className="text-2xl text-center sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">  Experience</h1>
            <div className="max-w-2xl mx-auto antialiased px-4  pt-4 relative">
                {WorkExpcontents.map((item, index) => (
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

