import React from 'react';
import {motion} from 'framer-motion';
import {Tilt} from "react-tilt";

import {styles} from "../styles.js";
import {github} from "../assets";
import {SectionWrapper} from "../hoc";
import {projects} from "../constants";
import {fadeIn, textVariant} from "../utils/motion";


const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.7)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1.05,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-[20px]
                sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    <img src={image}
                         alt="Project Picture"
                         className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                    <div onClick={() => window.open(source_code_link, "_blank")}
                         className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                    >
                        <img src={github}
                             alt={"github"}
                             className="w-1/2 h-1/2 object-contain"/>

                    </div>

                </div>
                {/*Use another div for a button for live demo and/or live URL*/}
                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary font-semibold text-[16px]">{description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    <h2 className=" mt-2 font-medium text-[10px]">{tags.map((tag =>
                            <p key={tag.name} className={`text-[14px] ${
                                tag.color
                            }`}>
                                #{tag.name}
                            </p>
                    ))}</h2>
                </div>

            </Tilt>
        </motion.div>
    )

}
const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My Work</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>
            <div className="w-full flex">
                <motion.p
                    variants={fadeIn('', "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    The following projects showcase my skills through examples of my work.
                    Each Project is given a brief description, including some of the technologies and
                    languages used in the making. Links to code repositories and Live Demo's are included as well.
                    These projects reflect my ability to solve problems work with different technologies, and manage
                    projects
                    effectively.

                </motion.p>

            </div>
            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}

            </div>


        </>
    )
}

export default SectionWrapper(Works, "")