import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to <span className="text-purple">launch</span> your career with
          internships?
        </h1>

        <p className="text-white-200 md:mt-10 my-5 text-center lg:max-w-[45vw]">
          Join us at the Internship Expo to connect with top companies and take the next step in your career!
        </p>
        <a href="#">
          <MagicButton
            title="Register Now"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          For any queries, feel free to contact us:<br />
          <span className="block mt-2">
            <strong>Lincy:</strong> <a href="tel:+91 95615 41145" className="text-blue-500 hover:underline">+91 95615 41145</a>
          </span>
          <span className="block mt-2">
            <strong>Arya:</strong> <a href="tel:+91 81044 36969" className="text-blue-500 hover:underline">+91 81044 36969</a>
          </span>
        </p>                    
        <div className="flex items-center md:gap-3 gap-6">
          <div className="mt-5 lg:mt=0 w-full cursor-pointer flex justify-center items-center">
            <a
              href="https://maps.app.goo.gl/hNUmioy3As6hLXtC7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-200 hover:underline"
            >
              Fr. Conceicao Rodrigues College of Engineering,<br /> Bandra, Mumbai - 400050
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
