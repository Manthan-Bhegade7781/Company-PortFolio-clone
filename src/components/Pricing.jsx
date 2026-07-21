import pricingData from "../data/pricingData";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="relative overflow-hidden bg-black py-10">

      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[150px]" />
      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-purple-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-4xl  lg:text-6xl font-extrabold">
            Simple Pricing
          </h2>

          <p className="mt-8 text-xl text-gray-400">
            Affordable portfolio websites designed to help you stand out.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {pricingData.map((plan) => (

            <div
              key={plan.id}
              className={`relative rounded-[30px] border backdrop-blur-xl p-8 transition duration-300 hover:-translate-y-2
                ${
                  plan.popular
                    ? "border-purple-500 bg-black shadow-[0_0_40px_rgba(139,92,246,.15)]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
            >

              {plan.popular && (
                <span className="inline-block rounded-full bg-white px-5 py-2 text-sm font-semibold text-black">
                  Most Popular
                </span>
              )}

              <h3 className="mt-6 text-4xl font-bold">
                {plan.title}
              </h3>

              <div className="mt-8 flex items-end gap-2">

                <span className="text-6xl font-extrabold">
                  {plan.price}
                </span>

                <span className="mb-2 text-gray-400">
                  {plan.duration}
                </span>

              </div>

              <div className="mt-10 space-y-5">

                {plan.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3 text-lg"
                  >
                    <Check size={20} />

                    <span>{feature}</span>
                  </div>

                ))}

              </div>

              <button
                className={`mt-14 w-full rounded-2xl py-4 text-lg font-semibold transition
                  ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
              >
                {plan.button}
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Pricing;