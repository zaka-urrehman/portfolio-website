import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TypeAnimation from './typeAnimation'

const HeroSection = () => {
    return (
        <section className='min-h-screen flex justify-center items-center '>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                            Hello!  I&apos;m{" "}
                        </span> <TypeAnimation/>
                    </h1>
                    <p className='text-gray-400 text-base sm:text-lg lg:text-xl'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel suscipit possimus sapiente
                        odio eaque facere, quia dolor voluptates impedit sint ipsam? Quod, doloremque?
                    </p>
                    <div className='mt-6 lg:mt-3'>
                        <Link
                            href="/"
                            className="px-6 text-center inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 hover:scale-105 duration-500 text-white"
                        >
                            Hire Me
                        </Link>
                        <Link
                            href="/"
                            className="px-1 text-center inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 hover:scale-105 duration-300 text-white mt-3"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </Link>
                    </div>
                </div>

                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='relative  rounded-full bg-black w-[250px] h-[250px] '>
                        <Image
                            src='/heroImage.jpg'
                            alt='hero image'
                            width={300}
                            height={300}
                            className='mx-auto rounded-full '
                        />
                        <div className='absolute ' />
                    </div>


                </div>
            </div>
        </section>
    )
}

export default HeroSection