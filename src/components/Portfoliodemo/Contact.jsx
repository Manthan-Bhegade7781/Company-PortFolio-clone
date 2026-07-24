import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#f5f5f5] py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-14 lg:mb-20">

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1736]">
            Get In Touch
          </h2>

        </div>

        {/* Main Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left Side */}

          <div>

            <h3 className="text-2xl md:text-4xl text-[#0B1736] mb-8">
              Contact Information
            </h3>

            {/* Email */}

            <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-5 flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-4 md:gap-5 mb-5 shadow-sm">

              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-cyan-400 text-lg md:text-xl" />
              </div>

              <div>

                <p className="uppercase text-center lg:text-start text-[10px] tracking-[1px] text-gray-500 font-semibold">
                  Email
                </p>

                <p className="font-semibold text-[#0B1736] text-sm md:text-base break-all">
                  Ashwanikumarchauhan014@gmail.com
                </p>

              </div>

            </div>

            {/* Phone */}

            <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-5 flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-4 md:gap-5 mb-5 shadow-sm">

              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                <FaPhoneAlt className="text-cyan-400 text-lg md:text-xl" />
              </div>

              <div>

                <p className="uppercase text-center lg:text-start text-[10px] tracking-[1px] text-gray-500 font-semibold">
                  Phone
                </p>

                <p className="font-semibold text-[#0B1736] text-sm md:text-base">
                  9616129738
                </p>

              </div>

            </div>

            {/* Location */}

            <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-5 flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-4 md:gap-5 mb-5 shadow-sm">

              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-cyan-400 text-lg md:text-xl" />
              </div>

              <div>

                <p className="uppercase text-center lg:text-start text-[10px] tracking-[1px] text-gray-500 font-semibold">
                  Location
                </p>

                <p className="font-semibold text-[#0B1736] text-sm md:text-base">
                  U.P, INDIA
                </p>

              </div>

            </div>

            {/* Opportunity Card */}

            <div className="bg-[#182640] rounded-2xl p-6 md:p-8 mt-6">

              <h3 className="text-2xl md:text-4xl text-white mb-5">
                Open for Opportunities
              </h3>

              <p className="text-gray-300 leading-7 text-sm md:text-base">
                I'm actively looking for entry-level MERN Stack Developer
                roles and internship opportunities. If you have an exciting
                project or role, feel free to connect with me!
              </p>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-[#182640] rounded-3xl p-6 md:p-8">

            <h3 className="text-2xl md:text-4xl text-white mb-8">
              Send me a Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg bg-white px-4 py-3 md:py-3 outline-none border border-black focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg bg-white px-4 py-3 md:py-3 outline-none border border-black "
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full rounded-lg bg-white px-4 py-3 md:py-4 outline-none resize-none border border-black"
              />

              <button
                type="submit"
                className="w-full sm:w-fit flex justify-center items-center gap-3 bg-cyan-400 hover:bg-cyan-500 transition-all duration-300 text-white font-semibold px-8 py-3 md:py-4 rounded-xl"
              >
                <FaPaperPlane />
                SEND MESSAGE
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;