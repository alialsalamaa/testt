import React, { useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { HERO_TITLE, HERO_SUBTITLE } from '../constants';
import { motion, useMotionValue, useTransform, useSpring, Variants } from 'framer-motion';

const Hero: React.FC = () => {
  // Mouse parallax logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Calculate normalized mouse position (-0.5 to 0.5)
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const springConfig = { stiffness: 100, damping: 30 };
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);
  
  // Parallax transforms for different layers
  const blob1X = useTransform(xSpring, [-0.5, 0.5], [-100, 100]);
  const blob1Y = useTransform(ySpring, [-0.5, 0.5], [-100, 100]);
  
  const blob2X = useTransform(xSpring, [-0.5, 0.5], [100, -100]);
  const blob2Y = useTransform(ySpring, [-0.5, 0.5], [100, -100]);

  const blob3X = useTransform(xSpring, [-0.5, 0.5], [-50, 50]);
  const blob3Y = useTransform(ySpring, [-0.5, 0.5], [50, -50]);

  // Text Animation Variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 12 } },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Interactive Background Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <motion.div 
          style={{ x: blob1X, y: blob1Y }}
          className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" 
        />
        <motion.div 
          style={{ x: blob2X, y: blob2Y }}
          className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" 
        />
        <motion.div 
           style={{ x: blob3X, y: blob3Y }}
          className="absolute bottom-[0%] left-[30%] w-[600px] h-[600px] bg-pink-600/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000" 
        />
        {/* Grid overlay for texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.div variants={item} className="mb-6">
             <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary text-sm font-semibold hover:bg-white/10 transition-colors cursor-default">
              Welcome to my digital space
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight text-white mb-6 leading-tight">
            <motion.span variants={item} className="block text-white">
              Create.
            </motion.span>
            <motion.span variants={item} className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-pink-500 block pb-2">
              Innovate.
            </motion.span>
          </h1>

          <motion.p variants={item} className="mt-4 text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            {HERO_SUBTITLE}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-all shadow-lg shadow-primary/25 flex items-center gap-2 group relative overflow-hidden"
            >
              <span className="relative z-10">View Work</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform relative z-10" size={20} />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white font-medium transition-all"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 cursor-pointer hover:text-white transition-colors z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => {
          const aboutSection = document.getElementById('about');
          aboutSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;