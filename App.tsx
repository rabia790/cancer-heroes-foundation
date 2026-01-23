
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FounderSection from './components/FounderSection';
import PillarsSection from './components/PillarsSection';
import ValuesSection from './components/ValuesSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import AICompanion from './components/AICompanion';
import GetInvolved from './src/pages/GetInvolved';

const App: React.FC = () => {
  const [showCompanion, setShowCompanion] = useState(false);

  return (
   <Router>
      <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-cream">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* MAIN HOME PAGE ROUTE */}
            <Route path="/" element={
              <>
                <Hero />
                <div id="our-why">
                  <FounderSection />
                </div>

                <section id="mission" className="py-24 bg-white px-6">
                  <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Our Mission</h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">Why We Exist</h3>
                    <p className="text-xl text-slate-text leading-relaxed mb-12">
                      Our mission is to provide mental, emotional, educational, and community-based support to individuals and families impacted by cancer...
                    </p>
                    <div className="h-px w-24 bg-primary/20 mx-auto"></div>
                  </div>
                </section>

                <div id="values"><ValuesSection /></div>
                <div id="pillars"><PillarsSection /></div>
                <div id="leadership"><TeamSection /></div>

                <section id="call-to-action" className="bg-primary py-24 px-6 text-white text-center relative overflow-hidden">
                  <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="text-4xl font-serif mb-6">Cancer changes lives. Community changes outcomes.</h2>
                    <button 
                      onClick={() => setShowCompanion(true)}
                      className="bg-hope text-charcoal px-8 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-xl"
                    >
                      Get Supported Today
                    </button>
                  </div>
                </section>
              </>
            } />

            {/* NEW GET INVOLVED ROUTE */}
            <Route path="/get-involved" element={<GetInvolved />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
    
  );
};

export default App;
