import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronRight, Briefcase, Building2 } from 'lucide-react';

const experiences = [
  {
    id: "exp-1",
    role: "Software Developer",
    company: "Umaiyaal Infotech",
    location: "Trichy, TN",
    date: "02/2025 – Present",
    points: [
      "Developed responsive web applications using Angular and Tailwind CSS.",
      "Built robust REST APIs using Node.js and Express.js backend architecture.",
      "Integrated MongoDB for efficient data management and retrieval.",
      "Collaborated with UI/UX designers and developers to deliver scalable solutions."
    ],
    color: "from-blue-400 to-indigo-500",
    shadow: "shadow-blue-500/20"
  },
  {
    id: "exp-2",
    role: "QA Engineer & UI/UX",
    company: "Leonido Technologies",
    location: "Tiruchirappalli, TN",
    date: "07/2023 – 02/2025",
    points: [
      "Developed advanced automation frameworks using Selenium, Playwright, and Cypress.",
      "Created wireframes, prototypes, and responsive UI designs using Figma.",
      "Executed comprehensive end-to-end testing lifecycles for major client applications.",
      "Bridged the gap between design and quality assurance teams."
    ],
    color: "from-purple-400 to-pink-500",
    shadow: "shadow-purple-500/20"
  }
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="py-24 md:py-32 px-6 relative overflow-hidden bg-transparent">
      {/* Dynamic Background Glow based on active index (Desktop only) */}
      <div className="hidden lg:block absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div 
          animate={{ 
            background: `radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))`
          }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-20 bg-gradient-to-r ${experiences[activeIndex].color}`}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-600 tracking-tight">
              Where I've Been
            </h2>
            <p className="text-gray-400 mt-4 text-base md:text-lg">My professional journey and collaborations.</p>
          </div>

          {/* =======================
              MOBILE VIEW (Vertical Cards)
              ======================= */}
          <div className="lg:hidden flex flex-col gap-6">
            {experiences.map((exp, index) => (
              <motion.div 
                key={`mobile-${exp.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 sm:p-8 rounded-3xl border border-white/5 relative overflow-hidden"
              >
                {/* Subtle Background Glow */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-bl ${exp.color} opacity-[0.15] blur-[40px] rounded-full pointer-events-none`} />
                
                <div className="flex flex-col gap-4 relative z-10">
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  
                  <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
                    <span className="flex items-center gap-1.5 text-blue-400">
                      <Building2 size={16} />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-400">
                      <MapPin size={16} />
                      {exp.location}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 w-fit">
                    <Calendar size={14} className={`text-transparent bg-clip-text bg-gradient-to-r ${exp.color}`} />
                    {exp.date}
                  </div>
                  
                  <div className="w-full h-px bg-white/5 my-2" />
                  
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                        <ChevronRight size={18} className={`shrink-0 mt-0.5 opacity-80`} style={{ color: exp.color.split(' ')[0].replace('from-', '') }} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>


          {/* =======================
              DESKTOP VIEW (Hover Reveal Menu)
              ======================= */}
          <div className="hidden lg:flex flex-row gap-12 lg:gap-20">
            
            {/* Left Side: Giant Typography Menu */}
            <div className="w-1/2 flex flex-col justify-center gap-8">
              {experiences.map((exp, index) => {
                const isActive = activeIndex === index;
                
                return (
                  <div 
                    key={exp.id}
                    className="relative cursor-pointer group py-2"
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="flex items-center gap-6 transition-transform duration-500 origin-left" style={{ transform: isActive ? 'scale(1.05)' : 'scale(1)' }}>
                      {/* Active Indicator Line */}
                      <motion.div 
                        initial={false}
                        animate={{ 
                          height: isActive ? '40px' : '0px',
                          opacity: isActive ? 1 : 0
                        }}
                        className={`w-1.5 rounded-full bg-gradient-to-b ${exp.color}`}
                      />
                      
                      <h3 className={`text-5xl lg:text-6xl font-black uppercase tracking-tighter transition-all duration-500
                        ${isActive 
                          ? 'text-white' 
                          : 'text-transparent bg-clip-text'}`}
                        style={!isActive ? { WebkitTextStroke: '1px rgba(255,255,255,0.2)' } : {}}
                      >
                        {exp.company}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Side: Interactive Glass Panel */}
            <div className="w-1/2 relative min-h-[450px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <div className={`h-full glass p-10 rounded-[2.5rem] border border-white/10 shadow-2xl bg-white/[0.03] backdrop-blur-2xl flex flex-col justify-between ${experiences[activeIndex].shadow}`}>
                    
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className={`p-3 rounded-2xl bg-gradient-to-tr ${experiences[activeIndex].color} text-white`}>
                          <Briefcase size={24} />
                        </span>
                        <div>
                          <h4 className="text-3xl font-bold text-white leading-tight">
                            {experiences[activeIndex].role}
                          </h4>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-8">
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                          <Calendar size={16} className="text-gray-400" />
                          {experiences[activeIndex].date}
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                          <MapPin size={16} className="text-gray-400" />
                          {experiences[activeIndex].location}
                        </div>
                      </div>

                      <div className="space-y-4">
                        {experiences[activeIndex].points.map((point, i) => (
                          <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            key={i} 
                            className="flex items-start gap-3 group"
                          >
                            <ChevronRight size={20} className={`mt-0.5 shrink-0 transition-colors bg-clip-text text-transparent bg-gradient-to-r ${experiences[activeIndex].color} opacity-70 group-hover:opacity-100`} />
                            <p className="text-gray-400 leading-relaxed text-base group-hover:text-gray-200 transition-colors">
                              {point}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
