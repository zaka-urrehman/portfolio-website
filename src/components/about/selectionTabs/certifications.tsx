


const Certifications = ({certifications}: any) => {
   

    return (
        <div className="mt-4 text-sm sm:text-lg">

            {certifications.map((certificate: singleCertificate, index: number) => (
                <div key={index} className="my-2 md:my-6">
                    <div className="flex items-center font-bold text-gray-200 xs:text-lg md:text-xl lg:text-2xl ">
                        <div className="w-2 h-2 bg-white rounded-full mr-4 " />
                        <p className=" ">
                            {certificate.name}
                        </p>
                    </div>
                    <p className=" ml-6 font-semibold text-lg">
                        {certificate.organization}
                        <span
                            className="ml-2 font-semibold bg-gradient-to-br from-primary-400 to-secondary-500 text-transparent bg-clip-text"
                        >
                            ( {certificate.by} )
                        </span>
                    </p>
                    <p className="ml-6 text-gray-400">{certificate.completionDate}</p>
                </div>
            ))}

        </div>
    )
}

export default Certifications