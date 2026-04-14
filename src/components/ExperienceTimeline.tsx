import React from "react";
import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, ChevronRight, Zap, Sparkles } from "lucide-react";

interface Role {
  role: string;
  date: string;
  bullets: string[];
}

interface Experience {
  company: string;
  location: string;
  roles: Role[];
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <div className="space-y-16 relative">
      {/* Center Line */}
      <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-slate-800 to-transparent -translate-x-1/2 hidden lg:block" />

      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          {/* Timeline Dot */}
          <div className="absolute left-0 lg:left-1/2 top-10 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 z-20 hidden lg:block shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <motion.div 
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 bg-blue-400 rounded-full opacity-50"
            />
          </div>

          {/* Content Card */}
          <div className="w-full lg:w-[45%]">
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative bg-slate-900/40 border border-slate-800 rounded-[2rem] p-8 lg:p-10 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-500 shadow-2xl"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex flex-col mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      className="p-3 rounded-2xl bg-blue-500/10 text-blue-400"
                    >
                      <Briefcase size={24} />
                    </motion.div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full">
                      <MapPin size={14} className="text-blue-500" />
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {exp.company}
                  </h3>
                </div>

                <div className="space-y-12">
                  {exp.roles.map((role, rIdx) => (
                    <div key={rIdx} className="relative">
                      {/* Promotion Line */}
                      {rIdx < exp.roles.length - 1 && (
                        <div className="absolute left-3 top-10 bottom-[-3rem] w-0.5 bg-gradient-to-b from-blue-500/30 to-transparent" />
                      )}
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                          </div>
                          <h4 className="text-xl font-bold text-slate-100">{role.role}</h4>
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-800/30 px-3 py-1 rounded-lg">
                          {role.date}
                        </span>
                      </div>

                      <ul className="space-y-4 mb-6 ml-9">
                        {role.bullets.map((bullet, bIdx) => (
                          <motion.li 
                            key={bIdx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (bIdx * 0.1) }}
                            className="flex gap-4 text-slate-400 text-sm md:text-base leading-relaxed group/item"
                          >
                            <div className="mt-1.5 flex-shrink-0">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover/item:bg-blue-500 transition-colors" />
                            </div>
                            <span className="group-hover/item:text-slate-200 transition-colors">{bullet}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Empty space for timeline alignment */}
          <div className="hidden lg:block lg:w-[45%]" />
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
