import aboutData from "../../data/aboutData";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#f5f6fa] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-5xl lg:text-6xl font-extrabold text-[#0b1736]">
            About Me
          </h2>

          <div className="w-20 h-1 bg-[#0b1736] rounded-full mx-auto mt-5"></div>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

          {aboutData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-[#182640] rounded-3xl p-10 text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                <Icon
                  className="text-cyan-400 mx-auto mb-8"
                  size={42}
                />

                <h3 className="text-white text-xl lg:text-3xl font-bold mb-6">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-[17px] lg:text-lg leading-7 lg:leading-8">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default About;