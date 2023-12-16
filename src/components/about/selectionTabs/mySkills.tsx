
const MySkills = ({skills}: Skills) => {
   
    return (
        <div className="mt-4 text-sm sm:text-lg md:text-xl lg:text-2xl ">
            {skills.map((skill:any, index:number) => (
                <div key={index} className="flex items-center my-1">
                   <div className="h-1.5 w-1.5 lg:w-2 lg:h-2 bg-white rounded-full mr-4 "/> 
                   {skill}
                </div>
            ))}

        </div>
    )
}

export default MySkills