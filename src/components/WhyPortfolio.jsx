import whyPortfolioData from "../data/whyPortfolioData";

const WhyPortfolio = () => {
  return (
    <section className="relative bg-black py-15 overflow-hidden border-t border-white/6">

      {/* Background Glow */}
      <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-purple-600/10 blur-[160px]" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">

            Why You Need a Portfolio Website

          </h2>

          <p className="mt-3 max-w-4xl mx-auto text-gray-400 text-xl md:text-xl leading-8">

            A professional portfolio helps recruiters and clients trust you
            faster, discover your work easily and remember your personal brand.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-12 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {whyPortfolioData.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.id}
                className="group h-[200px] lg:h-[250px] rounded-[32px] border border-white/10
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
                p-3
                "
              >

                {/* Icon */}

                <div
                  className="
                  h-15
                  w-15
                  rounded-[26px]
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
                    size={36}
                    strokeWidth={2.2}
                    className="text-white"
                  />

                </div>

                {/* Title */}

                <h3 className="mt-8 px-8 text-xl md:text-xl font-medium leading-tight text-white">

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