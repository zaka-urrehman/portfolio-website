'use client'
import Link from 'next/link'
import { useState } from 'react'

const MobNav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className={`md:hidden absolute  w-full top-0 right-0 `} >

            <div className='relative '>
                <div className='z-50 right-5 top-3 absolute' onClick={handleClick}>

                    <div className={`rounded-lg w-6 h-[2px] my-1.5 bg-gray-100 duration-300 ${isOpen ? "transform rotate-45 translate-y-2 duration-300" : ""}`}></div>
                    <div className={`rounded-lg w-6 h-[2px] my-1.5 bg-gray-100 transition ease-in-out duration-500 ${isOpen ? "hidden duration-300 " : ""}`}></div>
                    <div className={`rounded-lg w-6 h-[2px] my-1.5 bg-gray-100 duration-300 ${isOpen ? "transform -rotate-45  duration-300" : ""}`}></div>

                </div>
            </div>

            <div className={` bg-gray-800 opacity-90 h-screen flex justify-center items-center  absolute top-0 bottom-0 right-0 ${isOpen ? "w-full " : "w-0"} duration-500`}>

                <div className={`   ${isOpen ? "w-full " : "w-0"} duration-300 overflow-hidden`}>
                    <ul className='flex flex-col items-center gap-y-3'>
                        <li onClick={handleClick} className='border-b border-gray-400 text-gray-100 active:text-gray-500'><Link href={'/'}>About</Link></li>
                        <li onClick={handleClick} className='border-b border-gray-400 text-gray-100 active:text-gray-500'><Link href={'/projects'}>Projects</Link></li>
                        <li onClick={handleClick} className='border-b border-gray-400 text-gray-100 active:text-gray-500'><Link href={'/#email'}>Contact</Link></li>
                    </ul>
                </div>

            </div>

        </div>
    ) 
}

export default MobNav