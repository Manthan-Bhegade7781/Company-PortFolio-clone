import { Zap, ShieldCheck, Gift, Globe, Headphones, User } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "⚡ No Hidden Charges",
  "💰 No VAT / GST",
  "🚀 3-Day Free Trial",
  "🌐 Free Hosting",
  "🛠 24/7 Support",
];

const stats = [
  { value: "500+", label: "Portfolios" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

const skills = ["UI Design", "UX Research", "User Testing"];

const experience = [
  "Designed SaaS dashboards for startup clients",
  "Improved user conversion rates by 35%",
  "Built scalable design systems for web & mobile",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black text-white px-5 sm:px-6 lg:px-10 pt-10 lg:pt-7 pb-10 lg:pb-4"
    >
      <div
        className="absolute z-0 top-0 left-0 lg:top-10 lg:left-20 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[400px] bg-blue-500/60 rounded-full blur-[250px]"
        id="fixed"
      ></div>

      <div className="absolute z-0 top-0 right-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[700px] lg:h-[600px] bg-purple-500/20 rounded-full blur-[200px]"></div>
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-center lg:items-start lg:pe-13 lg:pl-12">
        {/* Left column */}
        <div>
          <h1 className="relative z-10 font-extrabold leading-[1.20] text-4xl sm:text-5xl md:text-6xl lg:text-[95px] tracking-normal">
            <span className=" text-white">Get Your</span>
            <div className="flex flex-row lg:flex-col gap-2">
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-purple-400 bg-clip-text text-transparent">
              Dream
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </span>
            </div>
          </h1>

          <p className="relative z-10 mt-6 text-xl sm:text-2xl lg:text-5xl font-bold text-white flex items-center gap-2">
            Starting Less Than a Burger 🍔
          </p>

          <p className="relative z-10 mt-8 text-gray-400 text-base lg:text-xl leading-7 max-w-xl">
            Create a stunning portfolio website with modern recruiter-focused
            design and powerful personal branding.
          </p>

          {/* Perk pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {features.map((item) => (
                <div
                  key={item}
                  className="rounded-full bg-zinc-900 px-3 py-2 text-xs sm:text-sm text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>

          {/* CTAs */}
            <div className="relative z-10 mt-12 flex flex-col lg:flex-row gap-4">

       <Link to="/register">
              <button className="w-full lg:w-auto rounded-xl bg-gradient-to-r from-blue-600 to-purple-500 px-8 py-4 lg:px-13 lg:py-5 font-medium text-sm transition hover:scale-105">
                Create My <br/>
                Portfolio
              </button>
       </Link>

       <Link to="/login">
              <button  className="w-full lg:w-auto bg-zinc-800 rounded-xl border border-zinc-700 px-8 py-4 lg:px-10 lg:py-7 font-medium text-sm hover:bg-black">
                Login
              </button>
       </Link>

       <Link to="/demo">
       <button className="w-full lg:w-auto bg-zinc-800 rounded-xl border border-zinc-700 px-8 py-4 lg:px-10 lg:py-4 font-medium text-sm hover:bg-black">
                View <br/>
                Demo
              </button>
       </Link>

            </div>

          {/* Stats */}
         <div className="mt-10 pt-7 flex items-center grid grid-cols-3 gap-4">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl lg:text-4xl font-extrabold">{value}</p>
                <p className="mt-0.5 text-xs lg:text-sm text-gray-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — profile preview card */}
        <div className="w-full max-w-full rounded-2xl border border-white/10 bg-[#111214] p-5 lg:p-6 mt-8 lg:mt-17">
          <div className="flex justify-between">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold">Emma Johnson</h3>
              <p className="text-gray-300 text-sm mt-2">Senior UI/UX Designer</p>
              <span className="inline-flex items-center gap-1.5 mt-4 text-gray-300 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Available for work
              </span>
            </div>
            <div className="h-14 w-14 lg:h-18 lg:w-18 shrink-0 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <User className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
          </div>

          {/* About */}
          <div className="mt-5 rounded-3xl bg-black p-4 lg:p-5">
            <p className="text-10px font-bold tracking-wide text-white">
              About
            </p>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              I design modern, user-centric digital experiences focused on
              usability, performance and conversion.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-6 rounded-3xl bg-black p-4 lg:p-5">
            <p className="text-10px font-bold tracking-wide text-white">
              Skills
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-white/[0.09] border border-white/10 text-xs text-gray-200 px-3 py-1.5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects / Experience stats */}
          <div className="mt-5 grid grid-cols-2 gap-5">
            <div className="rounded-3xl bg-black p-4 lg:p-5">
              <p className="text-5px font-medium tracking-wide text-white">
                Projects
              </p>
              <p className="mt-3 text-3xl lg:text-4xl font-bold">48+</p>
              <p className="mt-1 text-xs text-gray-400">
                Completed successfully
              </p>
            </div>
            <div className="rounded-3xl bg-black p-4 lg:p-5">
              <p className="text-5px font-medium tracking-wide text-white">
                Experience
              </p>
              <p className="mt-3 text-3xl lg:text-4xl font-bold">5+ Yrs</p>
              <p className="mt-1 text-xs text-gray-400">
                Industry experience
              </p>
            </div>
          </div>

          {/* Experience list */}
          <div className="mt-5 rounded-3xl bg-black p-4 lg:p-5">
            <p className="text-10px font-semibold tracking-wide text-white">
              Experience
            </p>
            <ul className="mt-4 space-y-2">
              {experience.map((item) => (
                <li
                  key={item}
                  className="text-sm text-gray-300 flex items-start gap-1"
                >
                  <span className="mt-2 w-1 h-1 rounded-full bg-gray-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}