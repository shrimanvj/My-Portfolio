import { FaCode, FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiSolidity, SiRust, SiEthers } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import SingleSkill from "./SingleSkill";

const skills = [
  {
    skill: "C++",
    icon: FaCode, // placeholder for C++
  },
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Node.js",
    icon: FaNodeJs,
  },
  {
    skill: "Express.js",
    icon: SiExpress,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "Solidity",
    icon: SiSolidity,
  },
  {
    skill: "Rust",
    icon: SiRust,
  },
  {
    skill: "ethers.js",
    icon: SiEthers,
  },
];
const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
