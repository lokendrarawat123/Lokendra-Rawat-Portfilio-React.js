import { useTheme } from "../contexts/ThemeContext";

const SkillsPage = () => {
  const { isDark } = useTheme();

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 95, icon: "📜" },
        { name: "TypeScript", level: 85, icon: "🔷" },
        { name: "HTML/CSS", level: 95, icon: "🎨" },
        { name: "Tailwind CSS", level: 90, icon: "🌊" },
        { name: "Next.js", level: 80, icon: "▶️" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express.js", level: 80, icon: "🚀" },
        { name: "MongoDB", level: 75, icon: "🍃" },
        { name: "PostgreSQL", level: 70, icon: "📊" },
        { name: "REST APIs", level: 90, icon: "🔗" },
        { name: "GraphQL", level: 65, icon: "🔍" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90, icon: "🌳" },
        { name: "Docker", level: 70, icon: "📦" },
        { name: "AWS", level: 65, icon: "☁️" },
        { name: "Figma", level: 80, icon: "🎨" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Webpack", level: 75, icon: "📦" },
      ],
    },
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1
            className={`text-5xl lg:text-6xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}
          >
            My <span className="text-blue-500">Skills</span>
          </h1>
          <p
            className={`text-xl ${isDark ? "text-gray-300" : "text-gray-700"} max-w-3xl mx-auto leading-relaxed`}
          >
            Here are the technologies and tools I work with to bring ideas to
            life.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`${isDark ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border rounded-2xl p-8 space-y-8`}
              >
                <h2
                  className={`text-2xl font-bold ${isDark ? "text-white" : "text-black"} text-center`}
                >
                  {category.title}
                </h2>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span
                            className={`font-medium ${isDark ? "text-white" : "text-black"}`}
                          >
                            {skill.name}
                          </span>
                        </div>
                        <span
                          className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className={`w-full ${isDark ? "bg-white/10" : "bg-black/10"} rounded-full h-2`}
                      >
                        <div
                          className="bg-linear-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className={`py-20 ${isDark ? "bg-white/5" : "bg-black/5"}`}>
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2
            className={`text-3xl font-bold ${isDark ? "text-white" : "text-black"}`}
          >
            Always Learning
          </h2>
          <p
            className={`text-lg ${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}
          >
            Technology evolves rapidly, and I'm committed to continuous
            learning. I regularly explore new frameworks, attend tech
            conferences, and work on side projects to stay current with industry
            trends.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["Learning", "Experimenting", "Building", "Growing"].map(
              (item, index) => (
                <span
                  key={index}
                  className={`px-6 py-3 rounded-full ${isDark ? "bg-blue-500/20 text-blue-400" : "bg-blue-500/10 text-blue-600"} font-medium`}
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
