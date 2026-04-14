import React from "react";
import { motion } from "motion/react";
import { Trophy, ExternalLink, Award } from "lucide-react";

interface Achievement {
  title: string;
  rank: string;
  organization: string;
  date: string;
  description: string;
  image: string;
  link: string;
}

interface AchievementsProps {
  achievements: Achievement[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative bg-slate-900/40 border border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-blue-500/40 transition-all duration-500"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="lg:w-1/2 relative h-[450px] lg:h-auto overflow-hidden">
                <motion.img
                  src={achievement.image}
                  alt={achievement.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950/50" />
                
                {/* Rank Badge */}
                <div className="absolute top-6 left-6">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="px-4 py-2 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-2xl shadow-blue-600/20 flex items-center gap-2"
                  >
                    <Trophy size={14} />
                    {achievement.rank}
                  </motion.div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                    <Award size={24} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">
                    {achievement.organization} • {achievement.date}
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight group-hover:text-blue-400 transition-colors">
                  {achievement.title}
                </h3>

                <p className="text-slate-400 text-lg leading-relaxed mb-8 font-medium">
                  {achievement.description}
                </p>

                <motion.a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-widest group/link"
                >
                  View Official Announcement
                  <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </div>

            {/* Decorative Gradient */}
            <div className="absolute -inset-px bg-gradient-to-br from-blue-500/5 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
