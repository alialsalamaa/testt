
import React from 'react';
import { PUBLICATIONS, PUBLICATIONS_HEADER, SCHOLAR_LINK } from '../constants';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Calendar, GraduationCap } from 'lucide-react';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-24 bg-dark-lighter relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            {PUBLICATIONS_HEADER.title}
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{PUBLICATIONS_HEADER.subtitle}</p>
        </div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {PUBLICATIONS.map((pub, index) => (
            <motion.a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-dark border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <BookOpen size={24} />
                  </div>
                  <ExternalLink size={18} className="text-gray-500 group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {pub.title}
                </h3>
                
                <div className="flex flex-wrap gap-3 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <GraduationCap size={14} />
                    {pub.journal}
                  </span>
                  <span className="flex items-center gap-1 text-gray-500">
                    <Calendar size={14} />
                    {pub.year}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                {pub.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5 group-hover:border-primary/20 group-hover:text-primary/80 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
        
        {/* Scholar Button */}
        <div className="text-center">
          <motion.a 
            href={SCHOLAR_LINK}
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold tracking-wide shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
          >
            <GraduationCap size={20} />
            Access Full Publication Record
          </motion.a>
          <p className="mt-4 text-sm text-gray-500">View complete profile on Google Scholar</p>
        </div>

      </div>
    </section>
  );
};

export default Publications;
