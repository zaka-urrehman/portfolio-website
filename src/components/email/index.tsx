'use client'
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image"
import Link from "next/link"
import { FormEvent, useState } from "react";

// Typing for error handling
class HttpError extends Error {
    constructor(status: number, message: string) {
        super(message);
        this.name = 'HttpError';
        this.status = status;
    }

    status: number;
}

const Email = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // static typing for e.target
        const target = e.target as typeof e.target & {
            email: { value: string };
            name: {value: string};
            subject: { value: string };
            message: { value: string };
        };

        const data = {
            email: target.email.value,
            name: target.name.value,
            subject: target.subject.value,
            message: target.message.value,
        };

        try {
            const req = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/send`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            console.log(process.env.NEXT_PUBLIC_BASE_URL)

            if (!req.ok) {
                throw new Error(`HTTP error! Status: ${req.status}`);
            }

            const response = await req.json();
            setEmailSubmitted(true);
            
        } catch (error) {
            if (error instanceof HttpError) {
                console.error(`HTTP error! Status: ${error.status}, Message: ${error.message}`);
            } else {
                console.error('An unexpected error occurred:', (error as any).message);
            }
        }



        // clear the form after submission
        target.email.value = '';
        target.subject.value = '';
        target.message.value = '';


        
    };
    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
        >
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">
                    Let&apos;s Connect
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll
                    try my best to get back to you!
                </p>
                <div className='flex mt-5 gap-x-3 md:gap-x-4'>
                    <div className='bg-gray-600 rounded-lg p-1'><Linkedin className='h-5 w-5  md:h-6 md:w-6' /></div>
                    <div className='bg-gray-600 rounded-lg p-1'><Github className='h-5 w-5  md:h-6 md:w-6' /></div>
                    <div className='bg-gray-600 rounded-lg p-1'><Facebook className='h-5 w-5  md:h-6 md:w-6' /></div>
                    <div className='bg-gray-600 rounded-lg p-1'><Twitter className='h-5 w-5  md:h-6 md:w-6' /></div>
                </div>
            </div>
            <div>
                {emailSubmitted ? (
                    <p className="text-green-500 text-sm mt-2">
                        Email sent successfully!
                    </p>
                ) : (
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="text-white block mb-2 text-sm font-medium"
                            >
                                Your email
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="abc@xyz.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="text-white block mb-2 text-sm font-medium"
                            >
                                Your Name
                            </label>
                            <input
                                name="name"
                                type="text"
                                id="name"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Ex: Jacob"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="subject"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Subject
                            </label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Just saying hi"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Let's talk about..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                        >
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </section>
    )
}

export default Email