import React from "react";
import { basics, experience, topImpact, skills, education, certifications } from "./lib/data";
import AnimatedBackground from "./components/AnimatedBackground";
import Splash from "./components/Splash";
import Hero from "./components/Hero";
import ImpactStrip from "./components/ImpactStrip";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SkillsMatrix from "./components/SkillsMatrix";
import EducationCertGrid from "./components/EducationCertGrid";

export default function App() {
  return (
    <main className="relative min-h-screen text-slate-100 selection:bg-blue-500/30">
      <Splash />
      <AnimatedBackground />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <Hero data={basics} />
        
        <section id="impact" className="py-20">
          <ImpactStrip items={topImpact} />
        </section>

        <section id="experience" className="py-20 scroll-mt-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <ExperienceTimeline experiences={experience} />
        </section>

        <section id="skills" className="py-20 scroll-mt-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Technical Proficiency
          </h2>
          <SkillsMatrix skills={skills} />
        </section>

        <section id="education" className="py-20 scroll-mt-20">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold mb-10 text-blue-400 flex items-center gap-3">
                Education
              </h2>
              <EducationCertGrid items={education} type="education" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-10 text-cyan-400 flex items-center gap-3">
                Certifications
              </h2>
              <EducationCertGrid items={certifications} type="certs" />
            </div>
          </div>
        </section>

        <footer className="py-32 border-t border-slate-800/50 flex flex-col items-center gap-10">
          <div className="flex flex-wrap justify-center gap-8">
            {basics.links.map(link => (
              <a 
                key={link.label} 
                href={link.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-all hover:-translate-y-1 font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-slate-500 text-sm font-medium">
              © {new Date().getFullYear()} {basics.name}
            </p>
            <p className="text-slate-600 text-xs uppercase tracking-[0.2em]">
              {basics.location}
            </p>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-[10px] text-slate-500 uppercase tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            System Status: Operational
          </div>
        </footer>
      </div>
    </main>
  );
}
