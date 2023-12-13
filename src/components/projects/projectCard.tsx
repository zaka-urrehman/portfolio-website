import React from "react";
// import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Code2, Eye } from "lucide-react"
import Link from "next/link";

interface Props {
    imgUrl: string,
    title: string,
    description: string,
    techStack: string,
    gitUrl: string,
    previewUrl: string
}
const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, techStack }: Props) => {
    return (
        <div className="w-60 xs:w-68 md:w-[350px] ">
            <div
                className="h-36  md:h-52 rounded-t-xl relative group"
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
            >
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] hidden group-hover:flex  bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-700   ">
                    <Link
                        href={gitUrl}
                        className="h-14 w-14 mx-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                        <Code2 className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                    </Link>
                    <Link
                        href={previewUrl}
                        className="h-14 w-14 mx-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                        <Eye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                    </Link>
                </div>
            </div>
            <div className="text-white  rounded-b-xl my-3 bg-[#181818] py-3 md:py-6 px-4 ">
                <h5 className="text-lg md:text-xl font-semibold mb-2">{title}</h5>
                <p className=" text-[#ADB7BE]">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;