
import React from 'react';
import { PROJECTS, PROJECTS_HEADER } from '../constants';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-dark-lighter relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            {PROJECTS_HEADER.title}
          </motion.h2>
          <p className="text-gray-400">{PROJECTS_HEADER.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden bg-dark border border-white/5 shadow-2xl hover:shadow-primary/20 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent opacity-90 transition-opacity duration-300" />
                
                {/* Floating Icon */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <ArrowUpRight className="text-white" size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: 'auto', opacity: 1 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-75 md:absolute md:-translate-y-full md:bg-dark/95 md:p-4 md:rounded-lg md:backdrop-blur-sm md:-mt-12 md:shadow-xl">
                    {project.description}
                  </p>
                  {/* Mobile fallback description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2 md:hidden">
                    {project.description}
                  </p>
                </motion.div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:border-primary/50 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 translate-y-4 group-hover:translate-y-0">
                  <a href={project.link} className="flex items-center gap-2 text-white hover:text-primary transition-colors text-sm font-bold uppercase tracking-wider group/link">
                    <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform"/> Live Demo
                  </a>
                  <a href="#" className="flex items-center gap-2 text-white hover:text-primary transition-colors text-sm font-bold uppercase tracking-wider group/link">
                    <Github size={16} className="group-hover/link:scale-110 transition-transform" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.6)] font-medium tracking-wide"
          >
            View Github Archive
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
