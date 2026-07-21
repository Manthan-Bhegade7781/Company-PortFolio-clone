import featuresData from "../data/featuresData";

const Features = () => {
  return (
    <section id="features" className="relative bg-black py-15 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-0 top-40 h-80 w-80 rounded-full bg-blue-600/10 blur-[150px]" />
      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-purple-600/10 blur-[150px]" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-5xl lg:text-6xl font-extrabold text-white">
            Powerful Features
          </h2>

          <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto">
            Everything needed to build a recruiter-focused online portfolio.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-15 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {featuresData.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.id}
                className="
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-purple-500/30
                "
              >

                {/* Icon */}

                <div className="
                    h-16
                    w-16
                    rounded-3xl
                    bg-gradient-to-br
                    from-[#3B82F6]
                    to-[#A855F7]
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    shadow-purple-500/20
                  ">

                  <Icon
                    size={28}
                    className="text-white"
                    strokeWidth={2.2}
                  />

                </div>

                {/* Title */}

                <h3 className="mt-8 text-[2rem] font-bold text-white leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}

                <p className="mt-5 text-lg leading-8 text-gray-400">
                  {feature.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
};

export default Features;