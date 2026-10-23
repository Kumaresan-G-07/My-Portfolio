import { motion } from 'framer-motion';
import { Github, MonitorSmartphone, Rocket, Users, Gamepad2, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "QuickDelivery",
    role: "Full-Stack Developer",
    client: "Kuwait Client Project",
    date: "03/2025 – 11/2025",
    description: [
      "Developed highly responsive web applications using Angular and Tailwind CSS.",
      "Architected REST APIs using Node.js, Express.js, and TypeScript.",
      "Integrated MongoDB for scalable and efficient data management."
    ],
    tags: ["Angular", "Tailwind CSS", "Node.js", "Express.js", "TypeScript"],
    icon: <Rocket size={28} className="text-blue-400" />,
    color: "from-blue-500 to-cyan-400",
    shadow: "group-hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.3)]",
    featured: true
  },
  {
    title: "Squad Sports",
    role: "UI/UX Designer & Tester",
    date: "07/2023 – 02/2025",
    description: [
      "Designed complete UI/UX for complex web and mobile applications using Figma.",
      "Performed rigorous manual testing ensuring seamless functionality and usability."
    ],
    tags: ["Figma", "UI/UX", "Manual Testing"],
    icon: <Users size={24} className="text-purple-400" />,
    color: "from-purple-500 to-pink-500",
    shadow: "group-hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)]",
    featured: false
  },
  {
    title: "Sportsplays",
    role: "Backend & UI/UX",
    date: "12/2025 – 06/2026",
    description: [
      "Designed complete UI/UX workflows and modern interfaces using Figma.",
      "Engineered robust backend services using Node.js and Express.js."
    ],
    tags: ["Figma", "Node.js", "Express.js", "Backend"],
    icon: <Gamepad2 size={24} className="text-emerald-400" />,
    color: "from-emerald-400 to-teal-500",
    shadow: "group-hover:shadow-[0_0_40px_-10px_rgba(52,211,153,0.3)]",
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 relative overflow-hidden bg-transparent">
      {/* Abstract Background Shapes */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
            <span className="px-4 py-2 rounded-full glass border border-white/10 text-purple-400 text-sm font-medium tracking-wide mb-4 inline-flex items-center gap-2">
              <MonitorSmartphone size={16} /> Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-600 tracking-tight">
              Featured Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group glass rounded-[2.5rem] border border-white/5 transition-all duration-500 relative overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] ${project.shadow} ${project.featured ? 'lg:col-span-2' : 'lg:col-span-1'}`}
              >
                {/* Hover Gradient Aura */}
                <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-bl ${project.color} opacity-0 group-hover:opacity-20 blur-[60px] rounded-full transition-opacity duration-700 pointer-events-none`} />

                <div className={`flex flex-col h-full p-8 md:p-10 ${project.featured ? 'lg:flex-row lg:items-center gap-10' : 'gap-6'}`}>
                  
                  {/* Left Side (or Top) Content */}
                  <div className={`flex flex-col flex-1 ${project.featured ? 'lg:w-3/5' : 'w-full'}`}>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-10`} />
                        {project.icon}
                      </div>
                      
                      {/* Action Links */}
                      <div className="flex gap-2">
                        <a href="https://github.com/kumaresan-007" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-1">
                          <Github size={20} />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full glass border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-1">
                          <ArrowUpRight size={20} />
                        </a>
                      </div>
                    </div>

                    {project.client && (
                      <span className={`inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-widest rounded-md bg-gradient-to-r ${project.color} text-white w-fit mb-5 shadow-lg`}>
                        {project.client}
                      </span>
                    )}

                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 font-medium mb-6 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                      {project.role}
                    </p>

                    <div className="space-y-3 mb-8 flex-grow relative z-10">
                      {project.description.map((desc, i) => (
                        <p key={i} className="text-gray-400 text-sm md:text-base leading-relaxed">
                          {desc}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 text-gray-300 rounded-xl group-hover:border-white/20 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Side Decor for Featured Project */}
                  {project.featured && (
                    <div className="hidden lg:flex flex-1 items-center justify-center h-full relative">
                      <div className="relative w-full aspect-square max-w-[300px] flex items-center justify-center">
                        {/* Abstract Decorative Element replacing an image */}
                        <div className="absolute inset-0 rounded-full border-[1px] border-dashed border-blue-400/20 animate-[spin_30s_linear_infinite]" />
                        <div className="absolute inset-8 rounded-full border-[1px] border-white/10 animate-[spin_20s_linear_infinite_reverse]" />
                        <div className="absolute inset-16 rounded-full border-[1px] border-dashed border-purple-400/20 animate-[spin_25s_linear_infinite]" />
                        
                        <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-full blur-[50px] opacity-30 group-hover:opacity-60 transition-opacity duration-700 animate-pulse" />
                        
                        {/* Floating Glass Icon */}
                        <motion.div 
                          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                          className="w-28 h-28 glass rounded-3xl border border-white/20 flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(56,189,248,0.2)] bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-xl"
                        >
                          <Rocket size={48} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                        </motion.div>
                        
                        {/* Small floating particles */}
                        <motion.div 
                          animate={{ y: [10, -15, 10], x: [5, -5, 5] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute top-10 right-10 w-4 h-4 bg-cyan-400 rounded-full blur-[2px]"
                        />
                        <motion.div 
                          animate={{ y: [-10, 15, -10], x: [-5, 5, -5] }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                          className="absolute bottom-10 left-10 w-6 h-6 bg-blue-500 rounded-full blur-[3px]"
                        />
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
