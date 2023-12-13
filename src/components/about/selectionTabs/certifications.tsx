import { certifications } from "@/data"
const Certifications = () => {

    return (
        <div className="mt-4 text-sm sm:text-lg">
            {certifications.map((certificate, index) => (
                <div key={index} className="my-2">
                    <div className="flex items-center font-bold text-gray-200 xs:text-lg md:text-xl lg:text-2xl ">
                        <div className="w-2 h-2 bg-white rounded-full mr-4 " />
                        <p className=" ">
                            {certificate.name}
                        </p>
                    </div>

                    <p
                        className="ml-6 font-semibold bg-gradient-to-br from-primary-400 to-secondary-500 text-transparent bg-clip-text"
                    >
                        {certificate.institution}
                    </p>
                    <p className="ml-6 text-gray-400">{certificate.date}</p>
                </div>
            ))}

        </div>
    )
}

export default Certifications