import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";





const ServiceCard = ({ index, title, icon, description, technologies }) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card ${styles.serviceCard}`}  // Apply the class from the CSS Module
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        {/* <p className="text-white text-sm text-center mt-2">{description}</p> */}
        <p className="text-white text-xs text-center mt-1 italic">{technologies}</p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a <strong>B.Tech student</strong> with expertise in <strong >C++, Java, JavaScript</strong>, and <strong >Data Structures & Algorithms (DSA)</strong>, 
        specializing in building <strong>efficient</strong>, <strong >scalable</strong>, and <strong>impactful solutions</strong> to real-world challenges.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        With a proven track record in prestigious <strong>hackathons</strong> (Top 10, <strong>Smart India Hackathon Runner-up</strong>, and <strong>ISRO Hackathons</strong>), 
        I excel at solving complex problems. My expertise includes <strong>Scopus-indexed</strong> and <strong>Google Scholar-verified</strong> research in <strong>AI</strong> and <strong>ML</strong>, 
        using both coding and a research-driven mindset to drive <strong>meaningful change</strong>.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
