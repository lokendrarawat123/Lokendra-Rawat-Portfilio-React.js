import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'lokey973@gmail.com',
      link: 'mailto:lokey973@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+977 9826549379',
      link: 'tel:+9779826549379'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Nepalgunj, Nepal',
      link: '#'
    },
    {
      icon: '🔗',
      title: 'LinkedIn',
      value: 'linkedin.com/in/lokendra-rawat973',
      link: 'https://www.linkedin.com/in/lokendra-rawat973/'
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className={`text-5xl lg:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            Get In <span className="text-blue-500">Touch</span>
          </h1>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto leading-relaxed`}>
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} border rounded-2xl p-8`}>
              <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>
                Send Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-white/10 border-white/20 text-white placeholder-gray-400' : 'bg-white border-black/20 text-black placeholder-gray-500'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-white/10 border-white/20 text-white placeholder-gray-400' : 'bg-white border-black/20 text-black placeholder-gray-500'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-white/10 border-white/20 text-white placeholder-gray-400' : 'bg-white border-black/20 text-black placeholder-gray-500'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Project Discussion"
                    required
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-white/10 border-white/20 text-white placeholder-gray-400' : 'bg-white border-black/20 text-black placeholder-gray-500'} border focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
                  Contact Information
                </h2>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed mb-8`}>
                  Feel free to reach out through any of these channels. I typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className={`flex items-center gap-4 p-4 rounded-xl ${isDark ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-black/5 hover:bg-black/10 border-black/10'} border transition-colors group`}
                  >
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-black'} group-hover:text-blue-500 transition-colors`}>
                        {info.title}
                      </h3>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability */}
              <div className={`${isDark ? 'bg-green-500/20 border-green-500/30' : 'bg-green-500/10 border-green-500/30'} border rounded-xl p-6`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                    Available for Work
                  </h3>
                </div>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-sm`}>
                  I'm currently available for freelance projects and full-time opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
