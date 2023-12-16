'use client'
import ProjectCard from './projectCard'
// import { projects } from '@/data'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const MobileProjectCard = ({ myProjects }: any) => {
    // console.log(myProjects.items)
    const projects = myProjects.items   
    
    

    let [index, setIndex] = useState(0)

    // this is will be used for displaying the left right arrow if previous and next card is present
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
                     {/* mapping through asset array to match the id of image with the
                      id inside current index of projects array */}
                    {myProjects.includes.Asset.map((a: any) => (<div>
                        {projects[index].fields.image.sys.id == a.sys.id ? <div>
                            <ProjectCard
                                title={projects[index].fields.name}
                                description={projects[index].fields.description}
                                imgUrl={"https:" + a.fields.file.url}
                                techStack={projects[index].fields.techStack}
                                gitUrl={projects[index].fields.githubLink}
                                previewUrl={projects[index].fields.previewLink}
                            />
                        </div> : <div></div>}
                    </div>))}

                    {/* <ProjectCard
                        title={projects[index].title}
                        description={projects[index].description}
                        imgUrl={projects[index].image}
                        techStack={projects[index].techStack}
                        gitUrl={projects[index].githubLink}
                        previewUrl={projects[index].previewLink}
                    /> */}


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