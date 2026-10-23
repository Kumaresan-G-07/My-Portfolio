import { motion } from 'framer-motion';
import {
  Code2, FileCode2, FileJson, Paintbrush, Wind,
  Server, Network, ShieldCheck, Database,
  Figma, Layout, Layers, Workflow, MonitorSmartphone,
  GitBranch, Github, Flame, Hexagon, Cog
} from 'lucide-react';

const skillCategories = [
  {
    title: "Development",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "Angular", icon: Hexagon, color: "text-red-500" },
      { name: "TypeScript", icon: Code2, color: "text-blue-400" },
      { name: "JavaScript", icon: FileJson, color: "text-yellow-400" },
      { name: "HTML5", icon: FileCode2, color: "text-orange-500" },
      { name: "CSS3", icon: Paintbrush, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: Wind, color: "text-cyan-400" },
      { name: "Node.js", icon: Server, color: "text-green-500" },
      { name: "Express.js", icon: Cog, color: "text-gray-400" },
      { name: "REST API", icon: Network, color: "text-purple-400" },
      { name: "Auth", icon: ShieldCheck, color: "text-indigo-400" },
      { name: "MongoDB", icon: Database, color: "text-green-600" }
    ]
  },
  {
    title: "UI/UX Design",
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "Figma", icon: Figma, color: "text-pink-500" },
      { name: "Wireframing", icon: Layout, color: "text-blue-300" },
      { name: "Prototyping", icon: Layers, color: "text-purple-300" },
      { name: "User Flow Design", icon: Workflow, color: "text-green-300" },
      { name: "Responsive Design", icon: MonitorSmartphone, color: "text-teal-400" }
    ]
  },
  {
    title: "Tools & Collaboration",
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "Git", icon: GitBranch, color: "text-orange-600" },
      { name: "GitHub", icon: Github, color: "text-white" },
      { name: "Firebase", icon: Flame, color: "text-yellow-500" }
    ]
  }
];

const languages = [
  { name: "Tamil", level: 5 },
  { name: "English", level: 4 }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-transparent">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </div>

          <div className="space-y-10 md:space-y-16">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-3 h-10 rounded-full bg-gradient-to-b ${category.color}`} />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills Container (Flex Wrap to prevent overflow) */}
                <div className="flex flex-wrap gap-4 pl-7">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex items-center gap-3 px-5 py-3 glass rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all cursor-default shadow-lg bg-white/[0.02]"
                    >
                      <div className={`transition-transform duration-300 group-hover:scale-110 ${skill.color}`}>
                        <skill.icon size={20} strokeWidth={2} />
                      </div>
                      <span className="font-medium text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Languages Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-10 mt-10 border-t border-white/10"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-3 h-10 rounded-full bg-gradient-to-b from-emerald-500 to-teal-400" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">Languages</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 max-w-2xl pl-7">
                {languages.map((lang, index) => (
                  <div key={index} className="flex flex-col gap-3 glass p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
                    <span className="font-semibold text-white text-lg">{lang.name}</span>
                    <div className="flex gap-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-full h-1.5 rounded-full transition-colors duration-500 ${
                            i < lang.level 
                              ? 'bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]' 
                              : 'bg-white/10'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
