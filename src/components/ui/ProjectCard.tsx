"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { GoArrowUpRight } from "react-icons/go";

interface Props {
    id: number;
    image: string | StaticImageData;
    title: string;
    description: string;
    tech: (string | StaticImageData)[];
    url?: string | undefined;
    github: string;
}

const ProjectCard = ({
    id,
    image,
    title,
    description,
    tech,
    url,
    github,
}: Props) => {
    return (
        <Tilt
            glareColor="#ffffff"
            glarePosition="bottom"
            glareBorderRadius="7px"
            className="h-fit"
        >
            <div data-aos="fade-up" className=" border relative  dark:bg-black-900">
                <div className="absolute -left-1 top-0">
                    <span className="w-3 h-[1.2px] bg-white bg-opacity-70 absolute"></span>
                    <span className="w-3 h-[1.2px] rotate-90 bg-white  bg-opacity-70 absolute"></span>
                </div>

                <div className="absolute right-1 top-0">
                    <span className="w-3 h-[1.2px] bg-white bg-opacity-70 absolute"></span>
                    <span className="w-3 h-[1.2px] rotate-90 bg-white  bg-opacity-70 absolute"></span>
                </div>
                <div className="absolute -left-1 bottom-0">
                    <span className="w-3 h-[1.2px] bg-white bg-opacity-70 absolute"></span>
                    <span className="w-3 h-[1.2px] rotate-90 bg-white  bg-opacity-70 absolute"></span>
                </div>
                <div className="absolute bottom-0 right-1">
                    <span className="w-3 h-[1.2px] bg-white bg-opacity-70 absolute"></span>
                    <span className="w-3 h-[1.2px] rotate-90 bg-white  bg-opacity-70 absolute"></span>
                </div>

                <Link href={url || `/`} className="border-b">
                    <Image
                        className=""
                        src={image}
                        alt={title}
                        style={{ height: '220px',width:"100%" }}
                    />
                </Link>

                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <Link href={url || `/`}>
                            <h3 className=" font-bold my-3 hover:text-violet-500 ">
                                {title}
                            </h3>
                        </Link>
                        {url && (
                            <a
                                className="rounded bg-green-100  text-green-800 text-xs me-2 px-2.5 py-0.5 dark:bg-gray-700 dark:text-gray-300"
                                href={url}
                                target="_blank"
                            >
                                Live
                            </a>
                        )}
                    </div>

                    <p className="line-clamp-6 opacity-80 text-gray-300  text-sm">{description}</p>

                    <div className="flex justify-between items-center mt-3 gap-1">
                        <div className="flex relative ">
                            {tech.map((t, i) => (
                                <div
                                    key={i}
                                    className={`p-[3px] bg-black border border-zinc-700 rounded-full ${i !== 0 ? "-ml-2" : ""
                                        }`}
                                >
                                    <Image
                                        className="rounded-full"
                                        width={21}
                                        height={21}
                                        key={i}
                                        src={t}
                                        alt={i + ""}
                                    />
                                </div>
                            ))}
                        </div>
                        <a
                            href={github}
                            target="_blank"
                            className="p-2  text-sm dark:bg-zinc-800 dark:hover:bg-zinc-950 bg-zinc-100 hover:bg-zinc-200 rounded-md"
                        >
                            <GoArrowUpRight />
                        </a>
                    </div>
                </div>
            </div>
        </Tilt>
    );
};

export default ProjectCard;