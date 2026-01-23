import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO - Clicking this now removes /get-involved and goes to Home */}
        <Link to="/" className="flex items-center ml-8">
          <img 
            src="/img/Cancer Heroes.png" 
            alt="Cancer Heroes Foundation" 
            className="h-28 w-auto object-contain transition-transform duration-300 hover:scale-105" 
          />
        </Link>
        
        <div className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-wider">
          {/* Use /#ID so the browser knows to go to the root domain first */}
          <a href="/#our-why" className="text-slate-text hover:text-primary transition-colors">Our Why</a>
          <a href="/#values" className="text-slate-text hover:text-primary transition-colors">Values</a>
          <a href="/#pillars" className="text-slate-text hover:text-primary transition-colors">What We Do</a>
          <a href="/#leadership" className="text-slate-text hover:text-primary transition-colors">Team</a>
        </div>

        <div className="flex space-x-4">
          <Link to="/get-involved">
            <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-primary/90 transition-all hover:shadow-xl">
              Get Involved
            </button>
          </Link>
          <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-primary/90 transition-all hover:shadow-xl">
            Donate
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;