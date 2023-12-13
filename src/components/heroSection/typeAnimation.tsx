'use client'
import { TypeAnimation as TypeAnimationText } from "react-type-animation"

const TypeAnimation = () => {
    return (
        <div className="min-h-[90px] xs:min-h-[60px] min-w-full">
            <TypeAnimationText
                sequence={[
                    "Zaka Urrehman",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "JAM Stack Specialist",
                    1000,
                    "Generative AI Engineer",
                    1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            />
        </div>
    )
}

export default TypeAnimation