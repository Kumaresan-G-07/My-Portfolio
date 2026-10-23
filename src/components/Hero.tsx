import { motion } from 'framer-motion';
import { Download, ChevronDown, ArrowRight, Code2, Sparkles, Terminal, Database } from 'lucide-react';
import profileImg from '../assets/profile.png';
import resumePdf from '../assets/Kumaresan_G.pdf';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative px-6 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 w-full h-full -z-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px] mix-blend-screen" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass w-fit text-blue-400 font-medium text-sm border-blue-500/30"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            Available for opportunities
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 animate-gradient">
              Kumaresan G
            </span>
          </h1>

          <div className="flex items-center gap-3">
            <h2 className="text-2xl md:text-4xl text-gray-300 font-semibold tracking-wide flex items-center gap-3">
              <Terminal className="text-blue-400" size={32} />
              Software Engineer
            </h2>
          </div>

          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Crafting exceptional digital experiences. Specializing in Full-Stack Web Development, Test Automation, and UI/UX Design to build scalable, high-quality solutions.
          </p>

          <div className="flex flex-wrap gap-5 mt-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="group relative px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-xl font-medium transition-all shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] overflow-hidden flex items-center gap-2"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              <span className="relative">Get in touch</span>
              <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 glass rounded-xl font-medium hover:bg-white/10 transition-all flex items-center gap-3 border-white/10 hover:border-white/20 text-white"
            >
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Image / Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end mt-10 lg:mt-0"
        >
          {/* Glowing Aura behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/30 to-purple-600/30 rounded-full blur-[80px] -z-10"></div>

          <div className="relative">
            {/* Floating Tech Icons */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 md:-left-12 glass p-3 md:p-4 rounded-2xl border border-white/10 shadow-xl z-20 bg-[#0a0a0a]/80 backdrop-blur-md"
            >
              <Code2 className="text-blue-400" size={28} />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-1/3 -right-6 md:-right-10 glass p-4 rounded-2xl border border-white/10 shadow-xl z-20 bg-[#0a0a0a]/80 backdrop-blur-md"
            >
              <Database className="text-purple-400" size={28} />
            </motion.div>

            <motion.div
              animate={{ y: [-5, 15, -5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -bottom-6 left-1/4 glass p-3 md:p-4 rounded-2xl border border-white/10 shadow-xl z-20 bg-[#0a0a0a]/80 backdrop-blur-md"
            >
              <Sparkles className="text-yellow-400" size={24} />
            </motion.div>

            {/* Profile Image Card */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-72 h-[400px] md:w-80 md:h-[480px] lg:w-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden border-2 border-white/10 relative z-10 glass shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                src={profileImg}
                alt="Kumaresan Ganesan"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80'; // fallback
                }}
              />

              <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="glass p-4 rounded-xl border border-white/20 text-center backdrop-blur-md bg-black/40">
                  <p className="font-bold text-xl text-white">Kumaresan Ganesan</p>
                  <p className="text-sm text-blue-400 font-medium">Software Engineer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-textMuted uppercase tracking-widest font-medium">Scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="text-textMuted"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
