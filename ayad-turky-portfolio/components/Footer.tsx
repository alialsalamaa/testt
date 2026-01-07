
import React from 'react';
import { Hexagon, Twitter, Linkedin, Github, Instagram, Globe, BookOpen, GraduationCap, Building2, Link as LinkIcon } from 'lucide-react';
import { FOOTER_DATA, CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  
  const getIcon = (platform: string) => {
    const p = platform.toLowerCase();
    if (p.includes('twitter')) return Twitter;
    if (p.includes('linkedin')) return Linkedin;
    if (p.includes('github')) return Github;
    if (p.includes('instagram')) return Instagram;
    if (p.includes('scholar')) return GraduationCap;
    if (p.includes('scopus')) return BookOpen;
    if (p.includes('researchgate')) return Globe;
    if (p.includes('university')) return Building2;
    return LinkIcon;
  };

  return (
    <footer className="bg-dark border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row mb-12">
          
          <div className="flex flex-col items-center md:items-start">
             <a href="#" className="flex items-center gap-2 mb-4">
              <Hexagon className="text-primary" size={32} />
              <span className="text-2xl font-bold tracking-tighter text-white">
                {FOOTER_DATA.brandName}<span className="text-primary">{FOOTER_DATA.brandSuffix}</span>
              </span>
            </a>
            <p className="text-gray-500 max-w-sm text-center md:text-left">
              {FOOTER_DATA.tagline}
            </p>
          </div>

          <div className="flex gap-6">
            {CONTACT_INFO.socials.map((social, i) => {
              const Icon = getIcon(social.platform);
              return (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all tooltip-container relative group"
                  aria-label={social.platform}
                >
                  <Icon size={18} />
                  <span className="absolute -top-10 bg-dark-lighter px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-700 pointer-events-none">
                    {social.platform}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} {FOOTER_DATA.copyright}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
