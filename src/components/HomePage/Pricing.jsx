import pricingData from "../../data/pricingData";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-black py-16 lg:py-25 px-5 sm:px-8 lg:px-20"
    >
      <div className="relative mx-auto max-w-[1400px] lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
            Simple Pricing
          </h2>

          <p className="mt-5 lg:mt-8 text-sm sm:text-base lg:text-xl text-gray-400 max-w-3xl mx-auto leading-7">
            Affordable portfolio websites designed to help you stand out.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 lg:mt-20 grid gap-6 lg:gap-8 lg:grid-cols-3">
          {pricingData.map((plan) =>
            plan.popular ? (
              <div
                key={plan.id}
                className="rounded-[24px] lg:rounded-[30px] bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 p-[1px] transition duration-300 hover:-translate-y-2"
              >
                <div className="relative h-full rounded-[23px] lg:rounded-[29px] bg-black backdrop-blur-xl p-6 lg:p-8">
                  <span className="inline-block rounded-full bg-white px-4 py-2 lg:px-5 text-xs lg:text-sm font-semibold text-black">
                    Most Popular
                  </span>

                  <h3 className="mt-5 lg:mt-6 text-2xl lg:text-3xl font-semibold">
                    {plan.title}
                  </h3>

                  <div className="mt-6 lg:mt-8 flex items-end gap-2">
                    <span className="text-5xl lg:text-6xl font-extrabold">
                      {plan.price}
                    </span>

                    <span className="mb-2 text-sm lg:text-base text-gray-400">
                      {plan.duration}
                    </span>
                  </div>

                  <div className="mt-8 lg:mt-10 space-y-4 lg:space-y-5">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm font-medium text-gray-400"
                      >
                        <Check
                          size={18}
                          className="lg:w-5 lg:h-5 flex-shrink-0"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-10 lg:mt-14 w-full rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 py-3 lg:py-4 text-base lg:text-lg font-semibold text-white transition">
                    {plan.button}
                  </button>
                </div>
              </div>
            ) : (
              <div
                key={plan.id}
                className="relative rounded-[24px] lg:rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 lg:p-8 transition duration-300 hover:-translate-y-2"
              >
                <h3 className="mt-2 lg:mt-6 text-2xl lg:text-3xl font-semibold">
                  {plan.title}
                </h3>

                <div className="mt-6 lg:mt-8 flex items-end gap-2">
                  <span className="text-5xl lg:text-6xl font-extrabold">
                    {plan.price}
                  </span>

                  <span className="mb-2 text-sm lg:text-base text-gray-400">
                    {plan.duration}
                  </span>
                </div>

                <div className="mt-8 lg:mt-10 space-y-4 lg:space-y-5">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm font-medium text-gray-400"
                    >
                      <Check
                        size={18}
                        className="lg:w-5 lg:h-5 flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-10 lg:mt-14 w-full rounded-2xl bg-white py-3 lg:py-4 text-base lg:text-lg font-semibold text-black transition hover:bg-gray-100">
                  {plan.button}
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;