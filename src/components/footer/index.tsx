import { Facebook, Github, Linkedin, Mail, Phone, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className=' bg-gray-900 border-y border-gray-700'>
      <div className='max-w-7xl mx-auto p-6 lg:p-8'>
        <div className='grid md:grid-cols-2 '>

          <div className='my-4'>
            <h3 className='my-1 md:my-3 font-extrabold text-xl relative bg-gradient-to-tr from-primary-500 to-secondary-500 text-transparent bg-clip-text'>ZU</h3>
            <Link href={'/'}><p className='text-gray-400 md:my-1'>About</p></Link>
            <Link href={'/'}><p className='text-gray-400 md:my-1'>Projects</p></Link>
          </div>

          <div className='my-4'>
            <h3 className='my-1 md:my-3 font-semibold text-lg md:text-xl relative'>Contact Me</h3>
            <p className='text-gray-400 flex items-center gap-x-2 text-sm md:text-base'> <Phone size={15} /> +92 3402281180</p>
            <p className='text-gray-400 flex items-center gap-x-2 text-sm md:text-base'> <Mail size={15} />zk.na2486@gmail.com</p>

            <div className='flex mt-5 gap-x-3 md:gap-x-4'>
              <div className='bg-gray-600 rounded-lg p-1'><Linkedin className='h-5 w-5  md:h-6 md:w-6' /></div>
              <div className='bg-gray-600 rounded-lg p-1'><Github className='h-5 w-5  md:h-6 md:w-6' /></div>
              <div className='bg-gray-600 rounded-lg p-1'><Facebook className='h-5 w-5  md:h-6 md:w-6' /></div>
              <div className='bg-gray-600 rounded-lg p-1'><Twitter className='h-5 w-5  md:h-6 md:w-6' /></div>
            </div>
          </div>




        </div>
      </div>
    </section>
  )
}

export default Footer