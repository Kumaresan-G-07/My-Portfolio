import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-transparent">
      
      {/* Top Gradient Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Brand Name */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 animate-gradient">
              KUMARESAN
            </span>
            <span className="text-white ml-2 md:ml-4 font-light tracking-widest">
              GANESAN
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-medium tracking-[0.2em] uppercase">
            Frontend Developer & UI/UX Designer
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-4 mb-12"
        >
          {[
            { icon: <Github size={20} />, href: "https://github.com/kumaresan-007" },
            { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/kumaresan-g-314b31277" },
            { icon: <Mail size={20} />, href: "mailto:kumaresanofficial07@gmail.com" }
          ].map((social, index) => (
            <a 
              key={index}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 border border-white/5 bg-white/[0.02] hover:border-white/20 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5"
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Kumaresan G. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
          >
            Back to top 
            <ArrowUpCircle size={18} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
        
      </div>
    </footer>
  );
};

export default Footer;
