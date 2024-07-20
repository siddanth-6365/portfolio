"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { GoArrowUpRight } from "react-icons/go";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface Props {
    id: number;
    image: string | StaticImageData;
    title: string;
    description: string;
    tech: (string | StaticImageData)[];
    url?: string | undefined;
    github: string;
    ytEmbeedUrl?: string;
}

const ProjectCard = ({
    id,
    image,
    title,
    description,
    tech,
    url,
    github,
    ytEmbeedUrl
}: Props) => {
    const [open, setOpen] = useState(false)
    return (
        <Tilt
            glareColor="#ffffff"
            glarePosition="bottom"
            glareBorderRadius="7px"
            className="h-fit"
        >
            <div data-aos="fade-up" className=" border relative  dark:bg-black-900">
                {/* <div className="absolute -left-1 top-0">
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
                </div> */}

                <div onClick={() => setOpen(true)} className="cursor-pointer">
                    <Image
                        className=""
                        src={image}
                        alt={title}
                        style={{ height: '220px', width: "100%" }}
                    />
                </div>

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button variant="ghost" className="absolute pl-[90%]">
                            <PlayIcon className="w-6 h-6" />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="w-full max-w-3xl p-0">
                        <DialogHeader className="mt-4 ml-4 bg-black">
                            <DialogTitle>Project Video {ytEmbeedUrl ? "" : "(Sorry Currently demo video  is not avaliable)"}</DialogTitle>
                            {ytEmbeedUrl ? (
                                <p></p>
                            ) : (
                                <p className="underline font-semibold text-red-600 text-center text-2xl">
                                    <Link href={github} > View Github URL</Link>
                                </p>
                            )}
                        </DialogHeader>
                        <div className="relative w-full h-0 pb-[56.25%]">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={ytEmbeedUrl ? ytEmbeedUrl : "https://www.youtube.com/embed/dQw4w9WgXcQ"}
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />

                        </div>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setOpen(false)}>
                                Close
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <Link href={url || `/`}>
                            <h3 className=" font-bold my-3 hover:text-gray-500 ">
                                {title}
                            </h3>
                        </Link>
                        {/* {url && (
                            <a
                                className="rounded bg-green-100  text-green-800 text-xs me-2 px-2.5 py-0.5 dark:bg-gray-700 dark:text-gray-300"
                                href={url}
                                target="_blank"
                            >
                                Live
                            </a>
                        )} */}
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

function PlayIcon(props : any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="6 3 20 12 6 21 6 3" />
        </svg>
    )
}


function XIcon(props :any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}