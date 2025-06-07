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
      "Architected and developed full-stack decentralized applications using React, Node.js, and Solidity.",
      "Implemented secure smart contracts with comprehensive testing using Hardhat and Chai.",
      "Built responsive frontend interfaces with React and integrated Web3 functionality using ethers.js.",
      "Designed and implemented backend services for blockchain data indexing and API management.",
    ],
  },
  {
    job: "Backend Developer Intern",
    company: "KTPS Kota",
    date: "December,2024 - January,2025",
    responsibilities: [
      "Engineered scalable backend systems using Node.js, Express.js, and MongoDB for enterprise applications.",
      "Developed RESTful APIs and implemented real-time features using WebSocket for dynamic applications.",
      "Integrated blockchain data with traditional databases for hybrid application architecture.",
      "Implemented authentication systems and secure data handling practices for sensitive information.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center max-w-full px-4 py-6">
      {experiences.map((experience, index) => (
        <div key={index} className="flex items-center gap-4">
          <SingleExperience experience={experience} cardClass="section-card" />
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
