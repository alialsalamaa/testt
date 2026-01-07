
import React from 'react';
import { Mail, MapPin, Phone, Send, Building2, Linkedin, GraduationCap, BookOpen, Globe, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONTACT_INFO, CONTACT_SECTION_TEXT } from '../constants';

const Contact: React.FC = () => {
  const getIcon = (platform: string) => {
    const p = platform.toLowerCase();
    if (p.includes('linkedin')) return Linkedin;
    if (p.includes('scholar')) return GraduationCap;
    if (p.includes('scopus')) return BookOpen;
    if (p.includes('researchgate')) return Globe;
    if (p.includes('university')) return Building2;
    return LinkIcon;
  };

  return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">{CONTACT_SECTION_TEXT.title}</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 whitespace-pre-line">{CONTACT_SECTION_TEXT.subtitle}</h3>
            <p className="text-gray-400 mb-12 text-lg">
              {CONTACT_SECTION_TEXT.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-medium break-all">{CONTACT_INFO.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary flex-shrink-0">
                  <Building2 size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Office</p>
                  <p className="text-lg font-medium">{CONTACT_INFO.office}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Affiliation</p>
                  <p className="text-lg font-medium">{CONTACT_INFO.phone}</p>
                </div>
              </div>

               <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-lg font-medium">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <h4 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                Connect Online
              </h4>
              <div className="flex gap-4 flex-wrap">
                {CONTACT_INFO.socials.map((social, i) => {
                  const Icon = getIcon(social.platform);
                  return (
                    <a 
                      key={i} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all duration-300"
                      aria-label={social.platform}
                    >
                      <Icon size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-dark-lighter px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-700 pointer-events-none">
                        {social.platform}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 h-64 w-full rounded-2xl overflow-hidden border border-white/10 relative group shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.683648580598!2d55.46919207604513!3d25.281329229655655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f675c9629fb%3A0x6d9f95754593922d!2sUniversity%20of%20Sharjah!5e0!3m2!1sen!2sae!4v1709400000000!5m2!1sen!2sae" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                title="University of Sharjah Map"
              ></iframe>
              {/* Overlay needed to enable scrolling but prevent trapping mouse when simply scrolling page */}
              <div className="absolute inset-0 pointer-events-none border-2 border-primary/20 rounded-2xl"></div>
            </div>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 h-fit"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                  <input type="text" id="name" className="w-full bg-dark/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <input type="email" id="email" className="w-full bg-dark/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="email@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                <input type="text" id="subject" className="w-full bg-dark/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Research Collaboration" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea id="message" rows={5} className="w-full bg-dark/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Hello Dr. Ayad..."></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
