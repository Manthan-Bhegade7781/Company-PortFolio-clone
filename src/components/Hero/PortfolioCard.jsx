import portfolioData from "../../data/portfolioData";
import { FiUser } from "react-icons/fi";

const PortfolioCard = () => {
  return (
    <div className="relative flex justify-center lg:justify-end">

      {/* Glow */}
      <div className="absolute -right-10 top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="relative w-full max-w-[600px] rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.35)] overflow-hidden p-8">

        <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/10 pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between">

          <div>
            <h2 className="text-4xl font-bold">
              {portfolioData.profile.name}
            </h2>

            <p className="mt-1 text-gray-400">
              {portfolioData.profile.role}
            </p>

            <div className="mt-5 flex items-center gap-2">

              <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>

              <span className="text-sm text-gray-400">
                Available for work
              </span>

            </div>

          </div>

          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500">
            <FiUser className="text-3xl text-white" />
          </div>

        </div>

        {/* About */}

        <div className="mt-8 rounded-3xl border border-zinc-800 bg-black/[0.4] p-4 ">

          <h3 className="mb-4 text-xl font-semibold">
            About
          </h3>

          <p className="leading-8 text-gray-400">
            {portfolioData.about}
          </p>

        </div>

        {/* Skills */}

        <div className="mt-6 rounded-3xl border border-zinc-800 bg-black/[0.4] p-5">

          <h3 className="mb-4 text-xl font-semibold">
            Skills
          </h3>

          <div className="flex flex-wrap gap-3">

            {portfolioData.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-gray-300"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

        {/* Stats */}

        <div className="mt-6 grid grid-cols-2 gap-5">

          {portfolioData.stats.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-zinc-800 bg-black/[0.4] p-5"
            >

              <p className="text-gray-400">
                {item.title}
              </p>

              <h2 className="mt-3 text-5xl font-bold">
                {item.value}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                {item.subtitle}
              </p>

            </div>

          ))}

        </div>

        {/* Experience */}

        <div className="mt-6 rounded-3xl border border-zinc-800 bg-black/[0.4] p-5">

          <h3 className="mb-4 text-xl font-semibold">
            Experience
          </h3>

          <ul className="space-y-4 text-gray-400">

            {portfolioData.experience.map((item) => (

              <li key={item} className="flex gap-3">

                <span className="mt-2 h-2 w-2 rounded-full bg-white"></span>

                <span>{item}</span>

              </li>

            ))}

          </ul>

        </div>

      </div>

    </div>
  );
};

export default PortfolioCard;