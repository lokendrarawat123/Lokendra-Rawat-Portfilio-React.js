import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  const stats = [
    { number: '5+', label: 'Projects Completed' },
    { number: '6+', label: 'Months Experience' },
    { number: '3+', label: 'Happy Clients' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  const timeline = [
    { year: '2024', title: 'Freelance Full Stack Developer', company: 'Self-Employed', description: 'Working on various web development projects and seeking new opportunities' },
    { year: '2024', title: 'Full Stack Developer Intern', company: 'Next Infosis Tech', description: 'Developed professional dashboard using React & Tailwind CSS, created APIs using Node.js & Express' },
    { year: '2023', title: 'Learning & Development', company: 'Self-Study', description: 'Focused on mastering React.js, Node.js, and full-stack development fundamentals' }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className={`text-5xl lg:text-6xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                  About <span className="text-blue-500">Me</span>
                </h1>
                <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                  I'm a passionate Full Stack Developer with 6 months of professional experience, specializing in React.js and Node.js development.
                </p>
              </div>
              <div className="space-y-6">
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                  During my internship at Next Infosis Tech, I developed professional dashboards using React and Tailwind CSS, 
                  and created robust APIs using Node.js and Express. I'm passionate about creating efficient, user-friendly web solutions.
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                  Currently working as a freelance developer while actively seeking new opportunities to contribute to innovative projects. 
                  I believe in continuous learning and staying updated with the latest web development trends and technologies.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className={`w-80 h-80 mx-auto rounded-full ${isDark ? 'bg-linear-to-br from-blue-500/20 to-purple-500/20' : 'bg-linear-to-br from-blue-500/10 to-purple-500/10'} flex items-center justify-center`}>
                <div className={`w-64 h-64 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/5'} flex items-center justify-center text-6xl`}>
                  👨‍💻
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-20 ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                  {stat.number}
                </div>
                <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} font-medium`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-black'}`}>
            My Journey
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  {index !== timeline.length - 1 && (
                    <div className={`w-0.5 h-20 ${isDark ? 'bg-white/20' : 'bg-black/20'} mt-2`}></div>
                  )}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-4">
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-500/10 text-blue-600'}`}>
                      {item.year}
                    </span>
                  </div>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                    {item.title}
                  </h3>
                  <p className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {item.company}
                  </p>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
