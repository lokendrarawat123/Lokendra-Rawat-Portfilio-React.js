import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useEffect } from "react";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/", section: "home" },
    { name: "About", path: "/about", section: "about" },
    { name: "Skills", path: "/skills", section: "skills" },
    { name: "Projects", path: "/projects", section: "projects" },
    { name: "Contact", path: "/contact", section: "contact" },
  ];

  useEffect(() => {
    const sectionMap = {
      '/': 'home',
      '/about': 'about',
      '/skills': 'skills', 
      '/projects': 'projects',
      '/contact': 'contact'
    };
    
    const section = sectionMap[location.pathname];
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname]);

  const handleNavClick = (path, section) => {
    navigate(path);
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur ${isDark ? "bg-black/40 border-white/10" : "bg-white/40 border-black/10"} border-b`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className={`text-xl font-bold tracking-wide ${isDark ? "text-white" : "text-black"}`}
        >
          Lokendra Rawat<span className="text-blue-500">.</span>
        </Link>

        <ul
          className={`hidden md:flex gap-8 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavClick(item.path, item.section)}
                className={`${isDark ? "hover:text-white" : "hover:text-black"} transition cursor-pointer`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleTheme}
          className={`p-2 rounded-lg ${isDark ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20"} transition`}
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
