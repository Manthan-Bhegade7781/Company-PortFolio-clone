import { Zap, ShieldCheck, Gift, Globe, Headphones, User } from "lucide-react";

const features = [
  "⚡ No Hidden Charges",
  "💰 No VAT / GST",
  "🚀 3-Day Free Trial",
  "🌐 Free Hosting",
  "🛠 24/7 Support",
];

const stats = [
  { value: "500+", label: "PORTFOLIOS" },
  { value: "99.9%", label: "UPTIME" },
  { value: "24/7", label: "SUPPORT" },
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
      className="relative overflow-hidden bg-black text-white px-4 sm:px-6 lg:px-10 pt-14 pb-16"
    >
      <div
        className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] bg-blue-500/20 rounded-full blur-[350px]"
        id="fixed"
      ></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] bg-purple-500/20 rounded-full blur-[350px]"></div>
      <div className="mx-auto max-w-7xl overflow-hidden grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-start">
        {/* Left column */}
        <div>
          <h1 className="font-semibold leading-[1.01] text-4xl md:text-6xl lg:text-[95px] tracking-tight">
            <span className="block text-white">Get Your</span>
            <div className="flex flex-row lg:flex-col gap-2">
              <span className="block bg-gradient-to-r from-blue-400 via-pink-400 to-pink-500 bg-clip-text text-transparent">
              Dream
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-pink-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </span>
            </div>
          </h1>

          <p className="mt-6 text-lg lg:text-3xl font-bold text-white flex items-center gap-2">
            Starting Less Than a Burger 🍔
          </p>

          <p className="mt-5 text-gray-400 text-base sm:text-lg max-w-xl">
            Create a stunning portfolio website with modern recruiter-focused
            design and powerful personal branding.
          </p>

          {/* Perk pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {features.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>

          {/* CTAs */}
            <div className="mt-10 flex flex-col lg:flex-row gap-4">

              <button className="w-full lg:w-auto rounded-xl bg-gradient-to-r from-blue-600 to-pink-600 px-8 py-4 font-semibold transition hover:scale-105">
                Create My Portfolio
              </button>

              <button className="w-full lg:w-auto rounded-xl border border-zinc-700 px-8 py-4 font-semibold hover:bg-zinc-900">
                Login
              </button>

              <button className="w-full lg:w-auto rounded-xl border border-zinc-700 px-8 py-4 font-semibold hover:bg-zinc-900">
                View Demo
              </button>

            </div>

          {/* Stats */}
         <div className="mt-10 border-t border-white/10 pt-8 flex items-center grid grid-cols-3 gap-4">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-extrabold">{value}</p>
                <p className="mt-1 text-xs tracking-wide text-gray-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — profile preview card */}
        <div className="w-full max-w-full rounded-2xl border border-white/10 bg-[#111214] p-5 sm:p-6">
          <div className="flex items-start justify-between pb-5 border-b border-white/10">
            <div>
              <h3 className="text-xl font-bold">Emma Johnson</h3>
              <p className="text-gray-400 text-sm mt-1">Senior UI/UX Designer</p>
              <span className="inline-flex items-center gap-1.5 mt-3 rounded-full bg-green-500/10 text-green-400 text-xs font-medium px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Available for work
              </span>
            </div>
            <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              <User className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
          </div>

          {/* About */}
          <div className="mt-5 rounded-xl bg-white/[0.03] border border-white/5 p-4">
            <p className="text-xs font-semibold tracking-wide text-gray-400">
              ABOUT
            </p>
            <p className="mt-2 text-sm text-gray-300 leading-relaxed">
              I design modern, user-centric digital experiences focused on
              usability, performance and conversion.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-4 rounded-xl bg-white/[0.03] border border-white/5 p-4">
            <p className="text-xs font-semibold tracking-wide text-gray-400">
              SKILLS
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-white/[0.06] border border-white/10 text-xs text-gray-200 px-3 py-1.5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects / Experience stats */}
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-white/[0.03] border border-white/5 p-4">
              <p className="text-xs font-semibold tracking-wide text-gray-400">
                PROJECTS
              </p>
              <p className="mt-2 text-2xl font-extrabold">48+</p>
              <p className="mt-1 text-xs text-gray-500">
                Completed successfully
              </p>
            </div>
            <div className="rounded-xl bg-white/[0.03] border border-white/5 p-4">
              <p className="text-xs font-semibold tracking-wide text-gray-400">
                EXPERIENCE
              </p>
              <p className="mt-2 text-2xl font-extrabold">5+ Yrs</p>
              <p className="mt-1 text-xs text-gray-500">
                Industry experience
              </p>
            </div>
          </div>

          {/* Experience list */}
          <div className="mt-4 rounded-xl bg-white/[0.03] border border-white/5 p-4">
            <p className="text-xs font-semibold tracking-wide text-gray-400">
              EXPERIENCE
            </p>
            <ul className="mt-3 space-y-2">
              {experience.map((item) => (
                <li
                  key={item}
                  className="text-sm text-gray-300 flex items-start gap-2"
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