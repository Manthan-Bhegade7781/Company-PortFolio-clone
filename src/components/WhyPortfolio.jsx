import whyPortfolioData from "../data/whyPortfolioData";

const WhyPortfolio = () => {
  return (
    <section className="relative overflow-hidden bg-black py-16 lg:py-15 px-5 sm:px-8 lg:px-20">
      <div className="relative mx-auto max-w-[1400px] lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Why You Need a Portfolio
            <br className="hidden lg:block" />
            <span className="lg:inline"> Website</span>
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-sm sm:text-base lg:text-xl leading-7 lg:leading-8 text-gray-400">
            A professional portfolio helps recruiters and clients trust you
            faster, discover your work easily and remember your personal brand.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {whyPortfolioData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="
                  group
                  h-[180px]
                  sm:h-[200px]
                  lg:h-[250px]
                  rounded-[24px]
                  lg:rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  flex
                  flex-col
                  justify-center
                  items-center
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  p-5
                "
              >
                {/* Icon */}
                <div
                  className="
                    h-14
                    w-14
                    lg:h-15
                    lg:w-15
                    rounded-2xl
                    lg:rounded-[26px]
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
                    size={28}
                    strokeWidth={2.2}
                    className="text-white lg:w-9 lg:h-9"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 lg:mt-8 px-2 lg:px-8 text-lg sm:text-xl font-medium leading-snug text-white">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyPortfolio;