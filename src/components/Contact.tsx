import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send, ArrowRight, MessageSquare, Github, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "acde8231-4479-4392-ab8b-c97231790226",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "kumaresanofficial07@gmail.com",
      href: "mailto:kumaresanofficial07@gmail.com",
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "6374407524",
      href: "tel:6374407524",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Trichy, Tamil Nadu",
      href: "#",
      color: "text-rose-400",
      bg: "bg-rose-400/10"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "Kumaresan G",
      href: "https://www.linkedin.com/in/kumaresan-g-314b31277",
      color: "text-purple-400",
      bg: "bg-purple-400/10"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "kumaresan-007",
      href: "https://github.com/kumaresan-007",
      color: "text-gray-300",
      bg: "bg-gray-500/10"
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative overflow-hidden bg-transparent">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 mb-6 rounded-full glass bg-white/5 border border-white/10 shadow-lg"
          >
            <MessageSquare className="text-blue-400" size={24} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 tracking-tighter mb-6"
          >
            Let's Build Together
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl font-medium"
          >
            I'm currently open for new opportunities. Whether you have a project to discuss or just want to say hi, my inbox is open.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Contact Cards */}
          <div className="w-full lg:w-5/12 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-white mb-2 md:mb-4">Contact Information</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass p-5 md:p-6 rounded-[2rem] flex items-center gap-5 border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 group shadow-lg"
                >
                  <div className={`w-14 h-14 shrink-0 rounded-2xl ${info.bg} flex items-center justify-center ${info.color} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-inner`}>
                    {info.icon}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs md:text-sm text-gray-400 font-medium mb-1 uppercase tracking-wider">{info.label}</p>
                    <p className="text-white font-bold text-base md:text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all truncate">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-7/12"
          >
            <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] shadow-2xl relative overflow-hidden group">
              
              {/* Decorative Form Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-700" />
              
              <h3 className="text-3xl font-bold text-white mb-8 relative z-10">Send a Message</h3>
              
              <div className="space-y-6 relative z-10">
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 px-1">Your Name</label>
                    <input 
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter Your Name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all shadow-inner"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 px-1">Email Address</label>
                    <input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Enter Your Email"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all shadow-inner"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 px-1">Your Message</label>
                  <textarea 
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all shadow-inner resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <button 
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`flex-1 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                      isSubmitted 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50' 
                        : 'bg-white text-black hover:bg-gray-200 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : isSubmitted ? (
                      <>Sent <Send size={20} /></>
                    ) : (
                      <>Send Message <ArrowRight size={20} /></>
                    )}
                  </button>

                  <button 
                    type="button"
                    onClick={() => {
                      const waText = encodeURIComponent(
                        `Hi Kumaresan,\n\nI am ${formData.name || 'a visitor'} (${formData.email || 'no email provided'}).\n\n${formData.message || 'I would like to connect with you!'}`
                      );
                      window.open(`https://wa.me/916374407524?text=${waText}`, '_blank');
                    }}
                    className="flex-1 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white hover:scale-[1.02] shadow-[0_0_15px_rgba(37,211,102,0.1)] hover:shadow-[0_0_25px_rgba(37,211,102,0.4)]"
                  >
                    WhatsApp <MessageCircle size={20} />
                  </button>
                </div>
                
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
