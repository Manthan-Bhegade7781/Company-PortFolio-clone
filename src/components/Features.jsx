import featuresData from "../data/featuresData";

const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-black py-16 lg:py-25 px-5 sm:px-8 lg:px-20"
    >
      <div className="relative mx-auto max-w-[1400px] lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">
            Powerful Features
          </h2>

          <p className="mx-auto mt-5 lg:mt-8 max-w-3xl text-sm sm:text-base lg:text-xl leading-7 lg:leading-8 text-gray-400">
            Everything needed to build a recruiter-focused online portfolio.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 lg:mt-15 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-8">
          {featuresData.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="
                  rounded-3xl
                  lg:rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-6
                  lg:p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-purple-500/30
                "
              >
                {/* Icon */}
                <div
                  className="
                    h-14
                    w-14
                    lg:h-16
                    lg:w-16
                    rounded-2xl
                    lg:rounded-3xl
                    bg-gradient-to-br
                    from-[#3B82F6]
                    to-[#A855F7]
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    shadow-purple-500/20
                  "
                >
                  <Icon
                    size={24}
                    className="text-white lg:w-7 lg:h-7"
                    strokeWidth={2.2}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 lg:mt-8 text-2xl lg:text-[2rem] font-bold leading-tight text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-4 lg:mt-5 text-base lg:text-lg leading-7 lg:leading-8 text-gray-400">
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