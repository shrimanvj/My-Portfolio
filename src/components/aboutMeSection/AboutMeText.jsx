import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center text-lightGrey">
      <h2 className="text-5xl md:text-6xl font-bold text-cyan mb-8">About Me</h2>
      <p className="leading-relaxed text-base md:text-lg text-gray-300 max-w-xl">
        I'm <span className="text-orange font-semibold">Shriman Vijay</span>, a full-stack developer with a deep passion for blockchain technology and decentralized systems. I combine modern web development expertise with blockchain innovation to build robust, scalable applications. <br /><br />
        My technical arsenal includes React and Node.js for full-stack development, Solidity and Hardhat for smart contracts, and MongoDB for database management. I specialize in creating seamless bridges between traditional web applications and blockchain networks, ensuring optimal user experiences while maintaining security and performance. <br /><br />
        Whether it's building decentralized applications, implementing smart contracts, or developing scalable backend systems, I focus on creating solutions that push the boundaries of what's possible in both Web2 and Web3 spaces.
      </p>

      <button className="border border-orange rounded-full py-3 px-6 text-lg font-medium flex gap-2 items-center mt-10 hover:bg-orange hover:text-black transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
