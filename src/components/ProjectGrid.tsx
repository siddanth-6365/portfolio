"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import AnimatedDiv from "./ui/AnimatedDiv";
import ProjectCard from "./ui/ProjectCard";

interface Props {
    projectList: Project[];
}

export interface Project {
    id: number;
    tag?: string;
    title: string;
    category: string;
    image: any;
    description: string;
    tech: (string | any)[];
    url?: string;
    github: string;
    detailedDescription?: string;
    features: string[];
}

const ProjectGrid = ({ projectList }: Props) => {
    const [selectedCategory, setSelectedCategory] = useState("top");
    const onCategoryChange = (category: string) => {
        setSelectedCategory(category);
    }
    const categories = Array.from(new Set(projectList.map((p) => p.category)));
    const TopprojectList = projectList.filter((p) => p.tag === "top");

    return (
        <Tabs defaultValue="all" className="p-0">
            <TabsList className="flex flex-wrap bg-transparent  rounded-none">
                <TabsTrigger className={`rounded-none border ${selectedCategory == "top" ? 'bg-white text-black' : ''}`} value="all"
                    onClick={() => onCategoryChange("top")}>
                    Top
                </TabsTrigger>
                {categories.map((category, index) => (
                    <TabsTrigger
                        key={category}
                        className={`rounded-none border ${selectedCategory == category ? 'bg-white text-black' : ''}`}
                        value={category}
                        onClick={() => onCategoryChange(category)}>
                        {category.toUpperCase()}
                    </TabsTrigger>
                ))}
            </TabsList>

            <TabsContent className="mt-16 md:mt-8" value="all">
                <AnimatedDiv ClassName="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-8 sm:gap-5">
                    {TopprojectList.map((p) => (
                        <ProjectCard
                            key={p.title}
                            {...p}
                        />
                    ))}
                </AnimatedDiv>
            </TabsContent>


            {categories.map((category) => (
                <TabsContent className="mt-16 md:mt-8" key={category} value={category}>
                    <AnimatedDiv ClassName="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-4 sm:gap-5">
                        {projectList
                            .filter((p) => p.category === category)
                            .map((p) => (
                                <ProjectCard key={p.title} {...p} />
                            ))}
                    </AnimatedDiv>
                </TabsContent>
            ))}
        </Tabs>
    );
};

export default ProjectGrid;