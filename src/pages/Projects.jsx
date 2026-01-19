import { useTheme } from '../contexts/ThemeContext';

const Projects = () => {
  const { isDark } = useTheme();

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: '🛍️',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '📋',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current weather data and forecasts using external APIs with beautiful visualizations.',
      image: '🌦️',
      technologies: ['JavaScript', 'Chart.js', 'Weather API', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS, featuring dark/light mode and smooth animations.',
      image: '💼',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Blog Platform',
      description: 'A full-featured blog platform with content management, user authentication, and SEO optimization.',
      image: '📝',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with private messaging, group chats, and file sharing capabilities.',
      image: '💬',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className={`text-5xl lg:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            My <span className="text-blue-500">Projects</span>
          </h1>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto leading-relaxed`}>
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className={`text-3xl font-bold mb-12 ${isDark ? 'text-white' : 'text-black'}`}>
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {featuredProjects.map((project, index) => (
              <div key={index} className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} border rounded-2xl p-8 space-y-6 hover:scale-105 transition-transform duration-300`}>
                <div className="text-6xl text-center">{project.image}</div>
                <div className="space-y-4">
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                    {project.title}
                  </h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 text-sm rounded-full ${isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-500/10 text-blue-600'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <a href={project.liveUrl} className={`px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors`}>
                      Live Demo
                    </a>
                    <a href={project.githubUrl} className={`px-6 py-3 ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'} rounded-lg font-medium transition-colors`}>
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <h2 className={`text-3xl font-bold mb-12 ${isDark ? 'text-white' : 'text-black'}`}>
            Other Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} border rounded-xl p-6 space-y-4 hover:scale-105 transition-transform duration-300`}>
                <div className="text-4xl text-center">{project.image}</div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                  {project.title}
                </h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm leading-relaxed`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className={`px-2 py-1 text-xs rounded-full ${isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-500/10 text-blue-600'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a href={project.liveUrl} className={`flex-1 text-center py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors`}>
                    Demo
                  </a>
                  <a href={project.githubUrl} className={`flex-1 text-center py-2 ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'} rounded-lg text-sm font-medium transition-colors`}>
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
