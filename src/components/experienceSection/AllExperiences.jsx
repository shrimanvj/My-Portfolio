import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Blockchain Developer Intern",
    company: "Blockverse Infotech Solutions",
    date: "April,2024 - September,2024",
    responsibilities: [
      "Developing and deploying smart contracts using Solidity.",
      "Creating and maintaining decentralized applications (dApps).",
      "Integrating blockchain with front-end using ethers.js and React.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center max-w-full px-4 py-6">
      {experiences.map((experience, index) => (
        <div key={index} className="flex items-center gap-4">
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="hidden lg:block"
            >
              <FaArrowRightLong className="text-4xl text-orange" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperiences;
