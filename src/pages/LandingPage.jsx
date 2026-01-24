import { useTheme } from "../contexts/ThemeContext";
import Hero from "../components/Hero";
import About from "./About";
import SkillsPage from "./SkillsPage";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  const { isDark } = useTheme();

  return (
    <div className={`${isDark ? "" : "bg-white"}`}>
      <section id="home" className="min-h-screen"></section>
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      <section id="about" className="min-h-screen">
        <About />
      </section>

      <section id="skills" className="min-h-screen">
        <SkillsPage />
      </section>

      <section id="projects" className="min-h-screen">
        <Projects />
      </section>

      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </div>
  );
};

export default LandingPage;
