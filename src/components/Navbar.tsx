import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple section tracking for active state highlighting
      const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
      let current = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      if (current) {
        const formatted = current.charAt(0).toUpperCase() + current.slice(1);
        setActiveSection(formatted);
      } else if (window.scrollY < 100) {
        setActiveSection('Home');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 flex justify-center ${isScrolled ? 'pt-4 px-4' : 'pt-6 px-6'}`}
    >
      {/* Floating Pill Container */}
      <div className={`w-full max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 ${isScrolled ? 'px-6 py-3 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] bg-black/40 backdrop-blur-xl' : 'bg-transparent py-2'}`}>

        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5 group">
          <img className='w-8 mr-5' src={logo} alt="logo" />
          <span className="text-xl md:text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 animate-gradient group-hover:scale-105 transition-transform duration-300">
            KUMARESAN
          </span>
          <span className="text-xl md:text-2xl font-light tracking-widest text-textMain group-hover:text-blue-400 transition-colors duration-300 hidden sm:block">
            G
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 glass px-2 py-1.5 rounded-full border border-white/5 bg-white/[0.02]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.name)}
                className={`relative px-5 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-full ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </div>

        {/* CTA Button / Extra Info (Desktop) */}
        <div className="hidden md:block">
          <a href="#contact" className="px-5 py-2.5 text-sm font-semibold rounded-full bg-blue-600/10 text-blue-400 border border-blue-500/30 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-[0_0_15px_-3px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_-3px_rgba(59,130,246,0.5)]">
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-xl glass border border-white/10 text-textMain hover:bg-white/5 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-[calc(100%+0.5rem)] left-4 right-4 glass rounded-2xl border border-white/10 shadow-2xl overflow-hidden p-2 bg-[#0a0a0a]/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="h-px w-full bg-white/10 my-2"></div>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-2 mb-2 mt-1 py-3 text-center rounded-xl bg-primary text-white font-medium shadow-lg hover:bg-blue-600 transition-colors"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
