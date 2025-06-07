import ContactForm from "./ContactForm";
import ContactText from "./ContactText";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsFileEarmarkText } from "react-icons/bs";

const ContactMain = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/shrimanvj",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://linkedin.com/in/shrimanvj", // Update with your LinkedIn URL
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      link: "https://x.com/ShrimanVj",
    },
  ];

  return (
    <div id="contact" className="max-w-[1200px] mx-auto px-4 mt-[100px]">
      <div className="flex flex-col md:flex-row gap-12 items-start justify-between section-card p-8">
        {/* Left Side: Contact Text and Form */}
        <div className="flex-1 flex flex-col gap-8 min-w-[300px]">
          <ContactText />
          <ContactForm />
        </div>
        {/* Right Side: Social Links and Resume */}
        <div className="flex-1 flex flex-col items-center gap-8 min-w-[250px] w-full md:items-end">
          <div className="flex flex-col gap-6 items-center md:items-end w-full">
            <h3 className="text-2xl text-orange font-bold mb-2">Connect</h3>
            <div className="flex gap-6 justify-center md:justify-end w-full">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-lightGrey hover:text-orange transition-all duration-500"
                  title={social.name}
                >
                  <social.icon />
                </a>
              ))}
            </div>
            <a
              href="/resume/shriman_vijay.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-lg text-lightGrey border border-orange px-6 py-2 rounded-full transition-all duration-500 hover:bg-orange hover:text-black mt-4"
            >
              <BsFileEarmarkText className="transition-all duration-500 group-hover:text-black" /> View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain; 