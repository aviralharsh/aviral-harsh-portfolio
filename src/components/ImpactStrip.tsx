import React from "react";
import { motion } from "motion/react";

interface ImpactItem {
  metric: string;
  context: string;
}

interface ImpactStripProps {
  items: ImpactItem[];
}

const ImpactStrip: React.FC<ImpactStripProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-slate-800/50">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <span className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-br from-white to-slate-500 bg-clip-text text-transparent">
            {item.metric}
          </span>
          <span className="text-sm text-slate-500 uppercase tracking-wider font-medium max-w-[200px]">
            {item.context}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default ImpactStrip;
