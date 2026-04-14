import React from "react";
import { motion } from "motion/react";
import { ChevronDown, Mail, Phone, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import profileImg from "../assets/profile.png";

interface HeroProps {
  data: {
    name: string;
    title: string;
    subTitle: string;
    location: string;
    email: string;
    phone: string;
    summary: string;
    image: string;
    links: { label: string; url: string }[];
  };
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 2.2, // Wait for splash
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const nameLetters = data.name.split("");

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-10 relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
      >
        <div className="flex-1 order-2 lg:order-1 min-w-0">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 flex whitespace-nowrap">
            {nameLetters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 2.2 + (i * 0.05),
                  type: "spring",
                  stiffness: 100 
                }}
                className="inline-block hover:text-blue-500 transition-colors cursor-default"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>
          
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-4xl font-medium text-slate-400 mb-8 max-w-4xl leading-tight"
          >
            {data.title}
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light"
          >
            {data.summary}
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-8 mb-16"
          >
            <div className="flex items-center gap-3 text-slate-500 text-sm group cursor-default">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-blue-500/50 transition-colors">
                <MapPin size={16} className="text-blue-500" />
              </div>
              {data.location}
            </div>
            <a href={`mailto:${data.email}`} className="flex items-center gap-3 text-slate-500 hover:text-white transition-all text-sm group">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-blue-500/50 transition-colors">
                <Mail size={16} className="text-blue-500" />
              </div>
              {data.email}
            </a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-6 items-center"
          >
            <motion.button 
              onClick={scrollToExperience}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl transition-all overflow-hidden shadow-2xl shadow-blue-600/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-3">
                Explore My Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Profile Image Section */}
        <motion.div
          variants={itemVariants}
          className="relative order-1 lg:order-2"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-slate-800">
              <motion.img
                src={profileImg}
                alt={data.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Background Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 2.5 }}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px] -z-10 pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-slate-600"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-slate-800 rounded-full flex justify-center p-1"
        >
          <motion.div 
            animate={{ height: [4, 12, 4] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 bg-blue-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
