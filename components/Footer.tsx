
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-cream pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                CH
              </div>
              <span className="font-serif text-xl font-bold text-charcoal">
                Cancer Heroes
              </span>
            </div>
            <p className="text-slate-text text-sm leading-relaxed mb-6">
              Building compassionate global communities where emotional resilience, human dignity, and collective care are accessible to all.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-charcoal hover:bg-primary hover:text-white transition-colors cursor-pointer shadow-sm">
                f
              </div>
              <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-charcoal hover:bg-primary hover:text-white transition-colors cursor-pointer shadow-sm">
                t
              </div>
              <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-charcoal hover:bg-primary hover:text-white transition-colors cursor-pointer shadow-sm">
                in
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-charcoal mb-6 uppercase tracking-widest text-xs border-b border-hope inline-block pb-1">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-text mt-4">
              <li><a href="#" className="hover:text-primary transition-colors">Playbook</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Education Tools</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Advocacy Programs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Docuseries</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-charcoal mb-6 uppercase tracking-widest text-xs border-b border-hope inline-block pb-1">Foundation</h4>
            <ul className="space-y-4 text-sm text-slate-text mt-4">
              <li><a href="#" className="hover:text-primary transition-colors">Our Why</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">National Cancer Hero Day</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mission & Vision</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Leadership</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-charcoal mb-6 uppercase tracking-widest text-xs border-b border-hope inline-block pb-1">Newsletter</h4>
            <p className="text-sm text-slate-text mb-4 mt-4">Stay updated on our community outreach and initiatives.</p>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-cream/50 border-none rounded-lg px-4 py-2 text-sm flex-grow focus:ring-2 focus:ring-primary outline-none"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:shadow-md transition-all">Join</button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-cream flex flex-col md:flex-row justify-between items-center text-slate-text text-xs opacity-70">
          <p>© 2024 Cancer Heroes Foundation. Built with compassion.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-charcoal transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-charcoal transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-charcoal transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
