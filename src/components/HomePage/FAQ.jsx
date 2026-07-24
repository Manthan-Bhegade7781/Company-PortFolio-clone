import faqData from "../../data/faqData";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-black py-16 lg:py-25 px-5 sm:px-8"
    >
      <div className="mx-auto max-w-7xl lg:px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 lg:mt-6 text-sm sm:text-base lg:text-xl text-gray-400 max-w-3xl mx-auto leading-7">
            Everything you need to know before getting started.
          </p>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-12 lg:mt-20 max-w-5xl space-y-4 lg:space-y-6">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl lg:rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-6 lg:p-8"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                {item.question}
              </h3>

              <p className="mt-4 lg:mt-5 text-sm sm:text-base lg:text-lg leading-7 lg:leading-8 text-gray-400">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;