import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "File Sharing Dapp",
    year: "Mar2024",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://github.com/shrimanvj/File-Sharing-dapp",
  },
  {
    name: "Medical Record System",
    year: "Sept2024",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "BookLoop Platform",
    year: "Jan2025",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "https://github.com/shrimanvj/Bookloop_Platform",
  },
  {
    name: "Decentralized Voting System",
    year: "Feb2025",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "https://github.com/shrimanvj/voting-dapp",
  },
  {
    name: "MERN AI Blog App",
    year: "May2024",
    align: "right",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", // Unsplash: coding/AI/blog theme
    link: "https://github.com/shrimanvj/AI-Powered_BlogPlatform",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
