
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
            CH
          </div>
          <span className={`font-serif text-xl font-bold transition-colors ${scrolled ? 'text-charcoal' : 'text-charcoal'}`}>
            Cancer Heroes <span className="hidden sm:inline">Foundation</span>
          </span>
        </a>
        
        <div className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-wider">
          <a href="#our-why" className="text-slate-text hover:text-primary transition-colors">Our Why</a>
          <a href="#values" className="text-slate-text hover:text-primary transition-colors">Values</a>
          <a href="#pillars" className="text-slate-text hover:text-primary transition-colors">What We Do</a>
          <a href="#leadership" className="text-slate-text hover:text-primary transition-colors">Team</a>
        </div>

        <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-primary/90 transition-all hover:shadow-xl">
          Donate
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
