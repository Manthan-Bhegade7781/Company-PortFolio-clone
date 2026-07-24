import {
  technicalSkills,
  technologies,
} from "../../data/skillsData";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#09142d] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <h2 className="text-white text-5xl lg:text-6xl font-bold">
            Skills & Technologies
          </h2>

          <div className="w-20 h-1 bg-white rounded-full mx-auto mt-5 lg:mt-6"></div>

        </div>

        {/* Two Columns */}

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}

          <div>

            <h3 className="text-cyan-400 text-xl lg:text-4xl font-normal mb-10">
              Technical Proficiency
            </h3>

            <div className="space-y-8">

              {technicalSkills.map((skill, index) => (
                <div key={index}>

                  <div className="flex justify-between text-white font-semibold mb-2">

                    <span>{skill.name}</span>

                    <span>{skill.percentage}%</span>

                  </div>

                  <div className="h-3 rounded-full bg-gray-200 overflow-hidden">

                    <div
                      className="h-full bg-cyan-400 rounded-full transition-all duration-700"
                      style={{
                        width: `${skill.percentage}%`,
                      }}
                    />

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-cyan-400 text-xl lg:text-4xl font-normal mb-10">
              Technologies I Work With
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-[#1c2b45] rounded-xl py-4 text-center text-white font-semibold transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:-translate-y-2 cursor-pointer"
                >
                  {tech}
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;