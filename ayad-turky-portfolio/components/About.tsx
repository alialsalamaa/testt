
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ABOUT_DATA, SCHOLAR_LINK } from '../constants';
import { ExternalLink, RefreshCw } from 'lucide-react';
import { getLiveScholarStats } from '../services/geminiService';
import { AnimatePresence } from 'framer-motion';

const CountUp = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    if (isInView) {
      let start = count; // Start from current count if updating
      const end = to;
      
      if (start === end) return;

      const duration = 2000;
      const startTime = performance.now();
      
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out quart
        const ease = 1 - Math.pow(1 - progress, 4);
        
        const current = Math.floor(start + (end - start) * ease);
        setCount(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, to]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const { title, subtitle, paragraphs, stats, profileImage } = ABOUT_DATA;

  // State for stats (initialized with constants, updated by AI)
  const [citations, setCitations] = useState(stats.value2);
  const [hIndex, setHIndex] = useState(stats.value3);
  // Publications is now static based on constants
  const publications = stats.value1;
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      setIsUpdating(true);
      const liveStats = await getLiveScholarStats();
      if (liveStats) {
        setCitations(liveStats.citations);
        setHIndex(liveStats.hIndex);
      }
      setIsUpdating(false);
    };

    fetchStats();
  }, []);

  return (
    <section id="about" className="py-24 bg-dark-lighter relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
            style={{ y }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-black relative z-10 group shadow-2xl shadow-primary/10">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 transform"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
            </div>
            {/* Decorative background element */}
            <motion.div 
              animate={{ rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/30 rounded-2xl z-0" 
            />
             <motion.div 
              animate={{ rotate: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
              className="absolute -top-6 -left-6 w-full h-full border border-secondary/20 rounded-2xl z-0" 
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2 flex items-center gap-2">
              <span className="w-10 h-[1px] bg-primary"></span>
              {title}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">{subtitle}</span>
            </h3>
            
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              {paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex gap-8 border-t border-gray-800 pt-8 relative">
              {/* Updating Indicator */}
              <AnimatePresence>
                 {isUpdating && (
                   <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-2 right-0 text-xs text-primary/50 flex items-center gap-1"
                   >
                     <RefreshCw size={12} className="animate-spin" /> Live Syncing...
                   </motion.div>
                 )}
              </AnimatePresence>

              <a 
                href={SCHOLAR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col group cursor-pointer"
              >
                <span className="block text-4xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  <CountUp to={publications} suffix="+" />
                </span>
                <span className="text-sm text-gray-500 uppercase tracking-wide group-hover:text-primary/80 transition-colors duration-300 flex items-center gap-1">
                  {stats.label1}
                  <ExternalLink size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </span>
              </a>
              
              <a 
                href={SCHOLAR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col group cursor-pointer"
              >
                <span className="block text-4xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  <CountUp to={citations} suffix="+" />
                </span>
                <span className="text-sm text-gray-500 uppercase tracking-wide group-hover:text-primary/80 transition-colors duration-300 flex items-center gap-1">
                  {stats.label2}
                  <ExternalLink size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </span>
              </a>

              <a 
                href={SCHOLAR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col group cursor-pointer"
              >
                <span className="block text-4xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                   <CountUp to={hIndex} />
                </span>
                <span className="text-sm text-gray-500 uppercase tracking-wide group-hover:text-primary/80 transition-colors duration-300 flex items-center gap-1">
                  {stats.label3}
                  <ExternalLink size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
