import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/lokendrarawat123",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/lokendra-rawat973/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/lokendra.rawat.700040",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:lokey973@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z" />
        </svg>
      ),
    },
  ];

  const services = [
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
  ];

  const quickLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <footer
      className={`relative ${isDark ? "bg-linear-to-br from-gray-900 via-black to-gray-900" : "bg-linear-to-br from-gray-50 via-white to-gray-100"} mt-auto overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${isDark ? "ffffff" : "000000"}' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <a
              href="#home"
              className={`inline-block text-3xl font-bold tracking-wide ${isDark ? "text-white" : "text-black"}`}
            >
              Lokendra Rawat<span className="text-blue-500">.</span>
            </a>
            <p
              className={`${isDark ? "text-gray-300" : "text-gray-700"} text-lg leading-relaxed max-w-md`}
            >
              Full Stack Developer specializing in React.js and Node.js. Currently freelancing and seeking new opportunities.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`group relative w-12 h-12 ${isDark ? "bg-white/10 hover:bg-blue-500/20 border-white/20" : "bg-black/5 hover:bg-blue-500/10 border-black/10"} border rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  title={social.name}
                >
                  <div
                    className={`${isDark ? "text-gray-300 group-hover:text-blue-400" : "text-gray-600 group-hover:text-blue-600"} transition-colors`}
                  >
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3
              className={`${isDark ? "text-white" : "text-black"} text-xl font-semibold`}
            >
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span
                    className={`${isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"} transition cursor-pointer flex items-center group`}
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3
              className={`${isDark ? "text-white" : "text-black"} text-xl font-semibold`}
            >
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className={`${isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"} transition group flex items-center`}
                  >
                    <span className="w-2 h-2 bg-transparent group-hover:bg-blue-500 rounded-full mr-3 transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t ${isDark ? "border-white/10" : "border-black/10"} pt-8 flex flex-col md:flex-row justify-between items-center gap-4`}
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p
              className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm`}
            >
              © {currentYear} Lokendra Rawat. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className={`${isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"} transition`}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className={`${isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"} transition`}
              >
                Terms of Service
              </a>
            </div>
          </div>
          <p
            className={`${isDark ? "text-gray-500" : "text-gray-500"} text-sm flex items-center gap-2`}
          >
            <span>Made with</span>
            <span className="text-red-500 animate-pulse">♥</span>
            <span>using React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
