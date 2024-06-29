import React from "react";
import { projectList } from "@/data";
import ProjectGrid from "@/components/ProjectGrid";

const Projects = () => {
    
    return (
        <div className="relative" id="Projects">
             <h1  className="text-3xl text-center sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">  Projects</h1>
            <p className="text-center text-xl sm:text-2xl mb-6 font-bold">
                - I&apos;ve built{" "}
            </p>

            <ProjectGrid projectList={projectList} />

        </div>
    );
};

export default Projects;