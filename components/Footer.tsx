import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-cream pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/img/Cancer Heroes.png" 
                alt="Logo" 
                className="w-12 h-12 object-contain" 
              />
              <span className="font-serif text-xl font-bold text-charcoal">
                Cancer Heroes
              </span>
            </div>
            <p className="text-slate-text text-sm leading-relaxed max-w-xs">
              Building a world where emotional resilience and collective care are accessible to all.
            </p>
          </div>

          {/* Column 2: Quick Links (Your actual sections) */}
          <div>
            <h4 className="font-bold text-charcoal mb-6 uppercase tracking-widest text-xs border-b border-hope inline-block pb-1">Explore</h4>
            <ul className="space-y-4 text-sm text-slate-text mt-4">
              <li><a href="#our-why" className="hover:text-primary transition-colors">Our Why</a></li>
              <li><a href="#values" className="hover:text-primary transition-colors">Values</a></li>
              <li><a href="#pillars" className="hover:text-primary transition-colors">What We Do</a></li>
              <li><a href="#leadership" className="hover:text-primary transition-colors">Our Team</a></li>
            </ul>
          </div>

          {/* Column 3: Socials & Support */}
          <div>
            <h4 className="font-bold text-charcoal mb-6 uppercase tracking-widest text-xs border-b border-hope inline-block pb-1">Join Us</h4>
            <p className="text-sm text-slate-text mt-4 mb-4">Support our mission to empower cancer heroes worldwide.</p>
            <div className="flex space-x-4 mb-6">
      <div className="flex space-x-4">
            {/* Facebook Profile */}
            <a 
              href="https://www.facebook.com/profile.php?id=61586926441142" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-charcoal hover:bg-primary hover:text-white transition-all shadow-sm"
              aria-label="Facebook"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* Instagram Profile */}
            <a 
              href="https://www.instagram.com/cancerheroesfoundation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-charcoal hover:bg-primary hover:text-white transition-all shadow-sm"
              aria-label="Instagram"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
            </div>
          
          </div>

        </div>
        
        {/* Bottom Bar: Simple & Honest */}
        <div className="pt-10 border-t border-cream flex flex-col md:flex-row justify-between items-center text-slate-text text-xs opacity-70">
          <p>© 2026 Cancer Heroes Foundation. Built with compassion.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* If you don't want a PDF, just leave a 'Contact' link here instead of legal stuff */}
            <a href="mailto:info@cancerheroesfoundation.com" className="hover:text-charcoal transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;