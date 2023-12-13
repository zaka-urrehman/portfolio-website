import { projects } from "@/data"
import ProjectCard from "@/components/projects/projectCard"

const Projects = () => {
  return (
    <section className='mt-12'>
            <h1 className='font-bold text-2xl sm:text-3xl  md:text-4xl mb-8 text-center'>My Projects</h1>

            <div className='flex flex-wrap justify-center gap-4'>
                {projects.map((project, index) => (
                    <div key={index} className='my-4  md:mx-3 '>
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
            </div>           

           
        </section>
  )
}

export default Projects