import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Award, Calendar, CheckCircle2 } from "lucide-react";

interface EducationItem {
  degree: string;
  school: string;
  date: string;
  details: string;
}

interface EducationCertGridProps {
  items: any[];
  type: "education" | "certs";
}

const EducationCertGrid: React.FC<EducationCertGridProps> = ({ items, type }) => {
  if (type === "education") {
    return (
      <div className="space-y-6">
        {items.map((item: EducationItem, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-blue-500/20 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                <GraduationCap size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">{item.degree}</h4>
                <p className="text-blue-400 text-sm font-medium">{item.school}</p>
                <div className="flex items-center gap-4 mt-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} /> {item.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} /> {item.details}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((cert: string, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          viewport={{ once: true }}
          className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl flex items-center gap-3 hover:border-cyan-500/20 transition-all group"
        >
          <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
            <Award size={18} />
          </div>
          <span className="text-sm font-medium text-slate-300">{cert}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default EducationCertGrid;
