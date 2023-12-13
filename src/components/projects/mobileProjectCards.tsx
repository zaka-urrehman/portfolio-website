'use client'
import ProjectCard from './projectCard'
import { projects } from '@/data'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const MobileProjectCard = () => {
    let [index, setIndex] = useState(0)

    let previousAvailable = index > 0
    let nextAvailable = index < (projects.length - 1)


    return (
        <div>
            <div className='grid grid-cols-[10%,80%,10%]  md:hidden justify-center items-center '>


                <button className='  mx-auto bg-gray-500 rounded-full '>
                    {previousAvailable && <ArrowLeft
                        className='m-0.5'
                        onClick={() => setIndex(index - 1)} size={20}
                    />}
                </button>

                <div className=' flex justify-center items-center mx-1'>
                    <ProjectCard
                        title={projects[index].title}
                        description={projects[index].description}
                        imgUrl={projects[index].image}
                        techStack={projects[index].techStack}
                        gitUrl={projects[index].githubLink}
                        previewUrl={projects[index].previewLink}
                    />

                </div>

                <button className=' mx-auto bg-gray-500 rounded-full  '>
                    {nextAvailable && <ArrowRight
                        className='m-0.5'
                        onClick={() => setIndex(index + 1)} size={20}
                    />}
                </button>


            </div>
        </div>
    )
}

export default MobileProjectCard