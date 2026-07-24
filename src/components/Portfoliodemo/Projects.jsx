import { FaGithub, FaExternalLinkAlt, FaRocket } from "react-icons/fa";
import { projects } from "../../data/projectsData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#f4f6fa] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-5xl lg:text-6xl font-bold text-[#0B1736]">
            Recent Projects
          </h2>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#182640] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Title */}

              <div className="flex items-center gap-3">

                <FaRocket className="text-pink-500 text-xl" />

                <h3 className="text-white text-lg lg:text-2xl font-medium">
                  {project.title}
                </h3>

              </div>

              {/* Description */}

              <p className="text-gray-300 mt-2 lg:mt-5 leading-6 lg:leading-8">
                {project.description}
              </p>

              {/* Tag */}

              <div className="mt-4 lg:mt-6 bg-[#2a3b57] rounded-lg px-5 py-2 lg:px-4 lg:py-3 text-sm text-gray-300">
                {project.tag}
              </div>

              {/* Buttons */}

              <div className="flex flex-col lg:flex-row gap-4 mt-5 lg:mt-8">

                <a
                  href={project.code}
                  className="border border-cyan-400 text-cyan-400 px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-cyan-400 hover:text-black transition"
                >
                  <FaGithub />
                  CODE
                </a>

                <a
                  href={project.demo}
                  className="bg-cyan-400 text-black px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-cyan-500 transition"
                >
                  <FaExternalLinkAlt />
                  LIVE DEMO
                </a>

              </div>

            </div>
          ))}

        </div>

        {/* CTA */}

        <div className="text-center mt-22">

          <p className="uppercase tracking-normal text-[#0B1736] font-bold mb-6">
            Want to see more of my work?
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-3 bg-cyan-400 text-black text-[12px] font-bold px-5 py-3 rounded-xl hover:bg-cyan-500 transition shadow-lg"
          >
            <FaGithub />
            VISIT MY GITHUB
          </a>

        </div>

      </div>
    </section>
  );
};

export default Projects;