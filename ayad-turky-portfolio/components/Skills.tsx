
import React, { useRef } from 'react';
import { SKILLS, EXPERIENCE, SKILLS_HEADER, EXPERIENCE_HEADER } from '../constants';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code, Palette, Server, Globe, Cpu, Smartphone, Brain, Database, Cloud, Terminal } from 'lucide-react';

const iconMap: Record<string, React.FC<any>> = {
  Code, Palette, Server, Globe, Cpu, Smartphone, Brain, Database, Cloud, Terminal
};

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse movement
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate percentage from center (-0.5 to 0.5)
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}) rotateY(${rotateY}) scale3d(1, 1, 1)`;
  
  // Dynamic gradient position based on mouse
  const bgX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const bgY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      <div style={{ transform: "translateZ(75px)" }}>
        {children}
      </div>
      {/* Shine effect */}
      <motion.div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl pointer-events-none"
        style={{
          background: useMotionTemplate`radial-gradient(circle at ${mouseXSpring.get() * 100 + 50}% ${mouseYSpring.get() * 100 + 50}%, rgba(255,255,255,0.15), transparent 80%)`
        }}
      />
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-dark relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            {SKILLS_HEADER.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            {SKILLS_HEADER.subtitle}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Skills Grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SKILLS.map((skill, index) => {
                const Icon = iconMap[skill.icon] || Code;
                return (
                  <div key={skill.name} className="group perspective-container">
                    <TiltCard 
                      className="bg-white/5 border border-white/10 p-6 rounded-xl h-full backdrop-blur-sm"
                    >
                      <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 bg-primary/20 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-lg shadow-primary/20">
                            <Icon size={24} />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-200">{skill.name}</h4>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full relative"
                          >
                             <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 animate-pulse" />
                          </motion.div>
                        </div>
                        <span className="text-xs text-gray-500 mt-2 block text-right font-mono">{skill.level}%</span>
                      </motion.div>
                    </TiltCard>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Experience Timeline */}
          <div id="experience">
            <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-secondary pl-4">{EXPERIENCE_HEADER.title}</h3>
            <div className="space-y-8 border-l border-gray-800 ml-3 pl-8 relative">
              {EXPERIENCE.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-dark bg-gray-700 group-hover:bg-secondary transition-colors duration-300 shadow-[0_0_0_4px_rgba(15,23,42,1)]" />
                  
                  <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                    <div className="mb-2 flex justify-between items-start flex-wrap gap-2">
                      <span className="text-sm text-primary font-medium px-2 py-1 bg-primary/10 rounded border border-primary/20">{exp.period}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white group-hover:text-secondary transition-colors duration-300">{exp.role}</h4>
                    <h5 className="text-lg text-gray-400 mb-3">{exp.company}</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
