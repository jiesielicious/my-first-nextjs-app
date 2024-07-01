'use client';

import { FaArrowTrendUp } from "react-icons/fa6";
import SectionWrapper from "@/components/SectionWrapper";
import Heading from "@/components/Heading";
import data from '../data/projects';
import Image from "next/image";
import Modal from "./Modal";
import { useState } from 'react';

const Projects = () => {
    const [state, setState] = useState(false);
    const [details, setDetails] = useState(null);

    const toggleModal = () => {
        setState(!state)
    }

    return (
        <>
            <Modal state={state} details={details} toggleModal={toggleModal} />
            <SectionWrapper>
                <Heading>Projects</Heading>
                {data.map(project =>(
                    <div className="flex flex-wrap gap-5 w-full 3xl:w-8/12 mb-10" key={project.id}>
                        <div className="relative w-full md:w-[120px] pt-[56.25%] md:pt-0 md:h-20 rounded-lg overflow-hidden">
                            <Image 
                                src={project.image}
                                fill
                                className="w-full h-full absolute top-0 left-0 bottom-0 right-0"
                                alt="Project Image"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-3">
                                <h2 className="text-lg md:text-xl font-bold text-zinc-700 dark:text-zinc-400 leading-[24px]">
                                    {project.title}
                                </h2>
                                <FaArrowTrendUp 
                                    className="text-zinc-900 dark:text-white cursor-pointer" 
                                    size={24} 
                                    onClick={() => {
                                        toggleModal();
                                        setDetails(project);
                                    }}
                                />
                            </div>
                            <p className="text-base font-semibold text-zinc-500 dark:text-zinc-400 mt-2">
                                {project.description.length > 100 ? (
                                    <span>{project.description.slice(0,100)}...</span>
                                ) : (
                                    project.decription
                                )}
                            </p>
                        </div>
                    </div>
                ))}
            </SectionWrapper>
        </>
    );
}

export default Projects;