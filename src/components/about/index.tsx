import Image from 'next/image'
import React from 'react'
import SelectionTabs from './selectionTabs'

const About = () => {
    return (
        <section className='text-white my-8 lg:my-20'>
            <div className="md:grid md:grid-cols-2 gap-8">
                <div className=''>
                    <Image src={'/aboutme.jpg'} alt={'about'} height={400} width={400} />
                </div>
                <div className='mt-6 md:mt-2'>
                    <h1 className='font-bold text-2xl sm:text-3xl  md:text-4xl mb-4  w-fit' >About Me <hr className='h-1 w-full my-1 bg-white' /> </h1>
                    <p className='text-base sm:text-lg text-gray-400'>
                        I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working
                        with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
                        looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing
                        applications.
                    </p>
                    
                </div>
            </div>
            <SelectionTabs />
        </section>

    )
}
export default About