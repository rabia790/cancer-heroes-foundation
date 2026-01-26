import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Added useLocation

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Hook to check current URL
  
  // Check if we are on the home page
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logic: Always show white background if NOT on home page OR if scrolled
  const navBgClass = (!isHome || scrolled) 
    ? 'bg-white shadow-md py-2' 
    : 'bg-transparent py-4';

  // Logic: Ensure text is always readable (slate-text works on white bg)
  // If you want white text on the home-page-transparent-view, let me know!
  const linkColorClass = 'text-slate-text hover:text-primary';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center ml-8">
          <img 
            src="/img/Cancer Heroes.png" 
            alt="Cancer Heroes Foundation" 
            className="h-28 w-auto object-contain transition-transform duration-300 hover:scale-105" 
          />
        </Link>
        
        <div className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-wider">
          <a href="/#our-why" className={`${linkColorClass} transition-colors`}>Our Why</a>
          <a href="/#values" className={`${linkColorClass} transition-colors`}>Values</a>
          <a href="/#pillars" className={`${linkColorClass} transition-colors`}>What We Do</a>
          <a href="/#leadership" className={`${linkColorClass} transition-colors`}>Team</a>
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