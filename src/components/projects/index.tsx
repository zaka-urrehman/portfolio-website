import React from 'react';
import { projects } from '@/data';
import ProjectCard from './projectCard';
import { ArrowLeft, ArrowRight, MoveRight } from 'lucide-react';
import MobileProjectCard from './mobileProjectCards';
import Link from 'next/link';

const Projects = () => {
    const firstFiveProjects = projects.slice(0, 5); // Take the first five projects

    return (
        <section className='mt-12'>
            <h1 className='font-bold text-2xl sm:text-3xl  md:text-4xl mb-10 text-center'>My Projects</h1>
            {/* view all button for small screens */}
            <div className='md:hidden   py-2 flex justify-end'>
                <Link className=' mr-4 w-fit  text-blue-400 hover:text-blue-700 duration-300 flex justify-end ' href={'/projects'}>
                    view all
                    <MoveRight className='mx-2' />
                </Link>
            </div>

            {/* project cards */}
            <div className='flex flex-wrap justify-center gap-4'>
                {firstFiveProjects.map((project, index) => (
                    <div key={index} className='my-4  mx-3 max-md:hidden'>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            techStack={project.techStack}
                            gitUrl={project.githubLink}
                            previewUrl={project.previewLink}
                        />
                    </div>
                ))}
                
                {/* view all button for larger screens */}
                <div className='w-60 xs:w-68 md:w-[350px] flex justify-center items-center '>
                    <div className=' max-md:hidden h-10   rounded-full bg-gray-600 hover:bg-gray-800 duration-300'>
                        <Link className=' w-fit py-2 px-4 text-gray-200 hover:text-blue-400 duration-300 flex justify-end ' href={'/projects'}>
                            view all
                            <MoveRight className='ml-2' />
                        </Link>
                    </div>
                </div>
            </div>

            {/* projects cards for smaller screens in form of slider */}
            <div className=' '>
                <MobileProjectCard />
            </div>
        </section>
    );
};

export default Projects;
