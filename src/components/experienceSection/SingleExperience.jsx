import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="w-full max-w-md border-2 border-orange border-dashed rounded-2xl mt-12 p-6 mx-auto bg-white/5 backdrop-blur-md shadow-cyanShadow"
    >
      <p className="font-bold text-cyan text-lg mb-1">{experience.job}</p>
      <p className="text-orange font-medium mb-1">{experience.company}</p>
      <p className="text-lightGrey text-sm mb-3">{experience.date}</p>

      <ul className="list-disc pl-5 text-white space-y-2 text-sm">
        {experience.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
