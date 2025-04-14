import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center text-lightGrey">
      <h2 className="text-5xl md:text-6xl font-bold text-cyan mb-8">About Me</h2>
      <p className="leading-relaxed text-base md:text-lg text-gray-300 max-w-xl">
        I’m <span className="text-orange font-semibold">Shriman Vijay</span>, a blockchain developer passionate about decentralized technologies and building real-world Web3 applications. <br /><br />
        I specialize in Ethereum smart contracts using Solidity and work with tools like Hardhat, IPFS, and React for full-stack dApp development. I enjoy exploring blockchain scalability, security, and cross-chain integrations. <br /><br />
        My work focuses on creating efficient, secure, and user-friendly decentralized solutions that push the boundaries of innovation in the blockchain space.
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
