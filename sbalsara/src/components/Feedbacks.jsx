import React from 'react'
import {motion} from 'framer-motion';

import {styles} from "../styles";
import {testimonials} from "../constants/index.js";
import {SectionWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion.js";

const FeedbackCard = ({index, testimonial, name, designation, company, image}) => (
    <motion.div
      variants={fadeIn("", "spring", 0.5 * index, 0.7)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1 ">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-2">
          <div className="flex-1 flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-2 text-secondary font-semibold text-[14px]">
              {designation}, {company}
            </p>
          </div>
          <img className="w-1/2 h-1/2 object-contain rounded-full" src={image} alt={`feedback-by-${name}`} />

        </div>
      </div>

    </motion.div>
)


const Feedbacks = () => {
  return (
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} `}>What others say</p>
            <h2 className={`${styles.heroHeadText} `}>Testimonials.</h2>

          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index) => (
              <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
  )
}

export default SectionWrapper(Feedbacks, "")