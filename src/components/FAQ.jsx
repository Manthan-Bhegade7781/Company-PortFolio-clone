import { useState } from "react";
import { ChevronDown } from "lucide-react";
import faqData from "../data/faqData";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-black py-25 border-t border-white/6"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-5xl lg:text-6xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-xl text-gray-400">
            Everything you need to know before getting started.
          </p>

        </div>

        {/* FAQ */}

        <div className="mx-auto mt-20 max-w-5xl space-y-6">

          {faqData.map((item, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                overflow-hidden
                transition-all
                duration-300
                "
              >

                <button
                  onClick={() => handleToggle(index)}
                  className="
                  flex
                  w-full
                  items-center
                  justify-between
                  px-8
                  py-7
                  text-left
                  "
                >

                  <h3 className="text-xl font-bold text-white">
                    {item.question}
                  </h3>

                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />

                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <p className="px-8 pb-7 text-gray-400 leading-8">
                      {item.answer}
                    </p>

                  </div>

                </div>

              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
};

export default FAQ;