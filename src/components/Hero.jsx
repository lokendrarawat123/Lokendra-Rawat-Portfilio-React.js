import ImageSlider from "./ImageSlider";
import img1 from "../assets/img/lokendra.jpg";


const Hero = () => {
  const images = [
    img1,
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800",
  ];

  return (
    <section className="min-h-screen flex items-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <span className="text-blue-400 text-sm font-medium">
                👋 Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Building
              <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {" "}
                Digital{" "}
              </span>
              Experiences
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed">
              I craft beautiful, responsive websites and applications with
              modern technologies. Transforming ideas into elegant digital
              solutions.
            </p>

            <div className="flex gap-4 pt-4">
              <a href="#projects" className="px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:-translate-y-1">
                View Projects
              </a>
              <a href="#contact" className="px-8 py-4 border-2 border-white/20 rounded-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all">
                Contact Me
              </a>
            </div>

            <div className="flex gap-8 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-blue-400">5+</h3>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-purple-400">50+</h3>
                <p className="text-gray-400 text-sm">Projects Done</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-pink-400">30+</h3>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Slider */}
          <div className="relative h-125 lg:h-150">
            <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-2xl blur-3xl opacity-20"></div>
            <div className="relative h-120">
              <ImageSlider images={images} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
