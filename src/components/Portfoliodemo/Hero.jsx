import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";


const Hero = () => {
  return (
    <section
      id="home"
      className="bg-black text-white min-h-screen flex items-center py-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 w-full">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left */}

          <div className="order-2 lg:order-1 text-center lg:text-left">

            <h1 className="font-normal leading-tight text-3xl lg:text-6xl xl:text-7xl">

              Hi, I'm{" "}

              <span className="text-cyan-400">
                Ashwani
              </span>

              <br />

              Kumar Chauhan

            </h1>

            <h2 className="mt-5 lg:mt-8 text-xl md:text-4xl font-medium text-zinc-400">

              MERN Stack Developer

            </h2>

            <p className="mt-6 lg:mt-8 text-gray-400 text-[15px] lg:text-xl leading-5 lg:leading-8 max-w-xl mx-auto lg:mx-0">

              Passionate about creating responsive
              applications.

            </p>

            <div className="mt-9 lg:mt-10 flex items-center justify-center lg:justify-start gap-6 lg:ml-40">

              <button className="bg-cyan-400 hover:bg-cyan-500 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-lg">

                DOWNLOAD CV

              </button>

              <a
                href="#"
                className="text-3xl hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="text-3xl hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="order-1 lg:order-2 flex justify-center">

            <div className="relative">

              <div className="w-55 h-55 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] rounded-full border-[5px] border-cyan-400 overflow-hidden">

                <img
                  src={""}
                  alt="profile"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;