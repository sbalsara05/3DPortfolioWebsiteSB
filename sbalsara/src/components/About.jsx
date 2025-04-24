import React from 'react';
import {Tilt} from "react-tilt";
import {motion} from 'framer-motion';
import {styles} from '../styles.js';

import {services} from "../constants";
import {fadeIn, textVariant} from '../utils/motion.js';
import {SectionWrapper} from '../hoc';

const ServiceCard = ({index, title, icon}) => {
    return (
        <Tilt className="xs:w-[250px] w-full ">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.7)}
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card fill-white'
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className="bg-tertiary rounded-[20px]
                     py-5 px-12 min-h-[280px] flex
                     justify-evenly items-center flex-col"
                >
                    <img src={icon} alt="title"
                         className="w-16 h-16 object-contain fill-white"
                    />
                    <h3
                        className="text-white text-[20px] font-bold text-center"
                    >{title}</h3>


                </div>

            </motion.div>
        </Tilt>
    )
}
const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn('', "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                My name is Sohum Balsara, and I am currently a student at <span className= "font-bold text-red-600">Northeastern</span> <span className="font-bold text-white">University</span> studying Computer Science and
                Finance with a concentration in Fintech. Right now, I am currently the <span className="font-bold text-white">Director of Engineering at Commerce Hive LLC </span>
                and am a current <span className='font-bold text-white'>SWE Intern at Reality AI Labs</span>.

                I look forward to meeting and coordinating with all of you!
            </motion.p>
            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");