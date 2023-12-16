// import { projects } from "@/data"
import ProjectCard from "@/components/projects/projectCard"
import { fetchProjects } from '@/data';
import { MoveRight } from "lucide-react";
import Link from "next/link";

const Projects = async() => {
    // fetching projects data
    const myProjects = await fetchProjects()

  return (
    <section className='mt-12'>
            <h1 className='font-bold text-2xl sm:text-3xl  md:text-4xl mb-8 text-center'>My Projects</h1>

            <div className='flex flex-wrap justify-center gap-4'>
                {/* mapping */}
                {myProjects.items.map((project: any, index: any) => (

                    <div key={project.sys.id} className='my-4  mx-3 max-md:hidden'>
                        {/* mapping once again to match the id of images in asset array
                         and then displaying the image which id is equal to that of current project data */}
                        {myProjects.includes.Asset.map((img: any) => (<div key={project.fields.image.sys.id}>
                            {project.fields.image.sys.id == img.sys.id ? <div >
                                <ProjectCard
                                title={project.fields.name}
                                description={project.fields.description}
                                imgUrl={"https:" + img.fields.file.url}
                                techStack={project.fields.techStack}
                                gitUrl={project.fields.githubLink}
                                previewUrl={project.fields.previewLink}
                            /></div> : <div></div>}
                        </div>))}

                        
                    </div>
                ))}

                
            </div>

           
        </section>
  )
}

export default Projects