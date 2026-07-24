import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{
    background:
        "linear-gradient(180deg, #030E2E 0%, #031339 65%, #031F48 100%)",
    }}
   className=" text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 py-7">

        {/* Top */}

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">

          {/* Left */}

          <div>

            <h2 className="text-5xl md:text-6xl font-extrabold text-cyan-400 lowercase">
              ashwani
            </h2>

            <p className="mt-5 lg:mt-7 lg:font-bold text-gray-500 text-lg lg:text-xl max-w-lg leading-7 lg:leading-8">
              Building digital experiences with precision and passion.
            </p>

          </div>

          {/* Right */}

          <div className="flex items-center gap-6">

            <a
              href="#"
              className="text-4xl hover:text-cyan-400 transition hover:-translate-y-2"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="text-4xl hover:text-cyan-400 transition hover:-translate-y-2"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="text-4xl hover:text-cyan-400 transition hover:-translate-y-2"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-[#233454] my-15"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between gap-5 text-gray-400 text-sm lg:text-lg ">

          <p className="text-start">
            © 2026 Ashwani kumar chauhan. All rights reserved.
          </p>

          <p className="text-start">
            Lucknow, Uttar Pradesh, India
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;