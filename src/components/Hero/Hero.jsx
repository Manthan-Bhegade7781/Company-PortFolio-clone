import PortfolioCard from "./PortfolioCard";

const features = [
  "⚡ No Hidden Charges",
  "💰 No VAT / GST",
  "🚀 3-Day Free Trial",
  "🌐 Free Hosting",
  "🛠 24/7 Support",
];

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute left-45 top-32 h-90 w-90 rounded-full bg-blue-600/50 blur-[150px]" />
      <div className="absolute right-30 top-0 h-110 w-110 rounded-full bg-purple-600/50 blur-[180px]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-10 lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <h1 className=" text-4xl md:text-5xl lg:text-6xl  font-extrabold leading-none md:text-7xl lg:text-8xl">

              <span className="block">Get Your</span>

              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-2">
                <span className="mt-2 md:mt-3 block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Dream
                </span>

                <span className="mt-3 block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </div>

            </h1>

            <h2 className="mt-8 text-2xl font-bold leading-tight md:text-5xl">
              Starting Less Than a
              <br />
              Burger 🍔
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              Create a stunning portfolio website with modern
              recruiter-focused design and powerful personal branding.
            </p>

            {/* Feature Pills */}

            <div className="mt-8 flex flex-wrap gap-3">
              {features.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-col lg:flex-row gap-4">

              <button className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-5 font-semibold transition hover:scale-105">
                Create My Portfolio
              </button>

              <button className="rounded-xl border border-zinc-700 px-8 py-5 font-semibold hover:bg-zinc-900">
                Login
              </button>

              <button className="rounded-xl border border-zinc-700 px-8 py-5 font-semibold hover:bg-zinc-900">
                View Demo
              </button>

            </div>

            {/* Stats */}

            <div className="mt-16 flex flex-row lg:flex-row lg:gap-21 gap-10 items-center justify-center">

              <div>
                <h3 className="text-4xl font-bold">500+</h3>
                <p className="text-gray-400">Portfolios</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">99.9%</h3>
                <p className="text-gray-400">Uptime</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">24/7</h3>
                <p className="text-gray-400">Support</p>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <PortfolioCard />

        </div>
      </div>
    </section>
  );
};

export default Hero;