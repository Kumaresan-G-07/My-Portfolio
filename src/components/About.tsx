import React from 'react';
import { motion } from 'framer-motion';
import { Code2, TestTube2, Palette, Briefcase, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Briefcase className="text-blue-400" size={24} />,
      title: "2+ Years",
      desc: "Professional Experience",
    },
    {
      icon: <TestTube2 className="text-purple-400" size={24} />,
      title: "Automation",
      desc: "Selenium & Playwright",
    },
    {
      icon: <Code2 className="text-emerald-400" size={24} />,
      title: "Full-Stack",
      desc: "MERN & Angular",
    },
    {
      icon: <Palette className="text-orange-400" size={24} />,
      title: "UI/UX",
      desc: "Figma Design",
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              About Me
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content - Text */}
            <div className="space-y-6">
              <motion.div 
                className="glass p-8 rounded-3xl relative border border-white/5 bg-gradient-to-br from-white/[0.05] to-transparent shadow-2xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none text-white">
                  <Code2 size={100} />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-white">The Journey So Far</h3>
                <p className="text-lg text-gray-400 leading-relaxed mb-6">
                  I am a <strong className="text-blue-400 font-semibold tracking-wide">Software Engineer with 3 years of experience</strong> spanning across Software Testing, Test Automation, UI/UX Design, and Full-Stack Web Development. My diverse skill set allows me to understand the complete software development lifecycle and deliver holistic solutions.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  I am highly skilled in <strong className="text-purple-400 font-semibold tracking-wide">Angular, Tailwind CSS, Node.js, Express.js, and MongoDB</strong> for web development, alongside <strong className="text-emerald-400 font-semibold tracking-wide">Selenium, Playwright, and Cypress</strong> for robust automation testing. Whether it's designing intuitive user-friendly interfaces in Figma or ensuring impeccable software quality, I am deeply passionate about building scalable, high-quality products.
                </p>
              </motion.div>
            </div>

            {/* Right Content - Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="glass p-6 md:p-8 rounded-3xl border border-white/5 flex flex-col justify-center bg-white/[0.02] hover:bg-white/[0.06] transition-all group shadow-xl"
                >
                  <div className="mb-5 p-3.5 rounded-2xl bg-white/5 w-fit group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm md:text-base text-gray-400 font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
