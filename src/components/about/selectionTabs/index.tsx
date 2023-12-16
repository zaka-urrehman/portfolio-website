// this component will alow to select between education, cirtification
// and skills
'use client'

import Education from "./education"
import MySkills from "./mySkills"
import Certifications from "./certifications"
import { useState, useTransition } from "react"




interface DisplayOptions {
    "My Skills": JSX.Element
    "Education": JSX.Element
    "Certifications": JSX.Element
}

const SelectionTabs = ({certifications , education, skills}:any) => {
    
    const [isPending, startTransition] = useTransition()
    const tabOptions = ["My Skills", "Education", "Certifications"]
    const displayOptions : DisplayOptions = {
        "My Skills": <MySkills skills={skills} />,
        "Education": <Education education={education} />,
        "Certifications": <Certifications  certifications={certifications}/>
    }
   
    const [active, setActive] = useState<keyof DisplayOptions>("My Skills")
    
    const setActiveTab = (option: keyof DisplayOptions) => { 
        startTransition(() => {
            setActive(option);
          });
    }

    return (
        
        <section className="mt-12 lg:mt-14">
            <div className='max-w-3xl mx-auto rounded-full  flex outline-white border-2 items-center justify-between '>
                {tabOptions.map((tab, index) => (
                    <div
                        onClick={() => setActiveTab(tab as keyof DisplayOptions)}
                        key={index}
                        className={`group px-3  sm:px-4 lg:px-8 py-2.5 lg:py-4 rounded-full cursor-pointer  text-center text-sm sm:text-base md:text-lg lg:text-xl ${tab == active ?  "bg-gradient-to-br from-primary-500 to-secondary-500" : ""}`}
                    >
                        <h3 className="lg:-mb-0.5">{tab}</h3>
                        <hr className={` h-0.5 sm:h-1 lg:h-1.5 ${tab == active ?  "group-hover:w-0 h-0" : "group-hover:w-full"} w-0 border-none rounded-full duration-300 md:duration-500 group-hover:bg-gradient-to-tr from-primary-500 to-secondary-500 outline-none `} />
                    </div>
                ))}
            </div>
            <div className="max-w-3xl mx-auto my-5 md:my-10">
                {displayOptions[active]} 
            </div>
            
        </section>

    )
}

export default SelectionTabs