import React from "react";
import { motion } from "motion/react";
import { Code2, Cloud, Terminal, Activity, GitBranch, CheckCircle2 } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  desc: string;
}

interface SkillsMatrixProps {
  skills: {
    core: Skill[];
    additional: string[];
  };
}

const iconMap: Record<string, any> = {
  Kubernetes: "kubernetes",
  Cloud: Cloud,
  IaC: Terminal,
  "Python + Bash": "python",
  Nginx: "nginx",
  Prometheus: "prometheus",
  "CI/CD": "jenkins",
};

const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ skills }) => {
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.core.map((skill, index) => {
          const iconData = iconMap[skill.name];
          const isStringIcon = typeof iconData === "string";
          const Icon = isStringIcon ? null : iconData || Code2;
          const iconUrl = isStringIcon ? `https://cdn.simpleicons.org/${iconData}/60a5fa` : null;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-900/40 border border-slate-800 rounded-[2.5rem] hover:border-blue-500/40 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                {iconUrl ? (
                  <img src={iconUrl} alt="" className="w-20 h-20 object-contain grayscale invert" referrerPolicy="no-referrer" />
                ) : (
                  <Icon size={80} />
                )}
              </div>

              <div className="flex items-center gap-5 mb-6 relative z-10">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500"
                >
                  {iconUrl ? (
                    <img src={iconUrl} alt="" className="w-7 h-7 object-contain group-hover:invert group-hover:brightness-0" referrerPolicy="no-referrer" />
                  ) : (
                    <Icon size={28} />
                  )}
                </motion.div>
                <h3 className="text-2xl font-black text-white tracking-tight">{skill.name}</h3>
              </div>
              
              <p className="text-slate-400 mb-8 leading-relaxed font-medium relative z-10">
                {skill.desc}
              </p>

              <div className="flex gap-2 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1), duration: 0.4 }}
                    className={`h-2 flex-1 rounded-full origin-left ${
                      i < skill.level ? "bg-gradient-to-r from-blue-600 to-blue-400" : "bg-slate-800"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-10 bg-slate-900/20 border border-slate-800/50 rounded-[3rem] backdrop-blur-sm"
      >
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-px bg-blue-500" />
          <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.4em]">
            Ecosystem & Tooling
          </h3>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {skills.additional.map((skill, idx) => {
            const getIconUrl = (name: string) => {
              const mapping: Record<string, string> = {
                "Python": "python",
                "Shell Scripting": "gnubash",
                "Linux (Servers & Containers)": "linux",
                "Istio Service Mesh": "istio",
                "Karpenter": "https://d3g9o9u8re44ak.cloudfront.net/logo/55cad6f2-84cb-49a7-9d60-265f7e4ea91e/8a67fa7b-85bd-44e4-823c-d7d5690777b1.png",
                "Teleport": "https://nodesk.co/remote-companies/assets/logos/teleport.7e280f5f961500610342512a665e27ab99e3402f913655f545bcc274a9fadd63.png",
                "ELK Logging (ElasticSearch, Fluentd, Kibana)": "elasticsearch",
                "Git": "git",
                "GitHub Copilot": "github",
                "n8n AI Automation": "n8n",
                "Ethical Hacking": "https://pentesthacker.wordpress.com/wp-content/uploads/2020/12/artboard-3-100.jpg?w=1024",
                "Akamai": "https://e7.pngegg.com/pngimages/375/681/png-clipart-logo-akamai-technologies-content-delivery-network-font-brand-technology-firm-blue-text.png",
                "Cloudflare": "https://miro.medium.com/v2/0*VkJT7OxqPFNNts18.png"
              };
              const val = mapping[name];
              if (!val) return null;
              if (val.startsWith("http")) return val;
              return `https://cdn.simpleicons.org/${val}/60a5fa`;
            };

            const iconUrl = getIconUrl(skill);

            return (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  borderColor: "rgba(59, 130, 246, 0.3)",
                  color: "#60a5fa"
                }}
                className="px-6 py-3 bg-slate-800/30 text-slate-400 text-sm font-bold rounded-2xl border border-slate-700/50 transition-all cursor-default flex items-center gap-3 group/tag"
              >
                {iconUrl ? (
                  <motion.img 
                    src={iconUrl} 
                    alt={skill}
                    referrerPolicy="no-referrer"
                    className="w-5 h-5 object-contain opacity-70 group-hover/tag:opacity-100 transition-opacity"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  />
                ) : (
                  <CheckCircle2 size={14} className="text-blue-500/50" />
                )}
                {skill}
              </motion.span>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsMatrix;
