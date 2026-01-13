
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FounderSection from './components/FounderSection';
import PillarsSection from './components/PillarsSection';
import ValuesSection from './components/ValuesSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import AICompanion from './components/AICompanion';

const App: React.FC = () => {
  const [showCompanion, setShowCompanion] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-cream">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <div id="our-why">
          <FounderSection />
        </div>

        <section id="mission" className="py-24 bg-white px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Our Mission</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">
              Why We Exist
            </h3>
            <p className="text-xl text-slate-text leading-relaxed mb-12">
              Our mission is to provide mental, emotional, educational, and community-based support to individuals and families impacted by cancer, helping them build resilience, access resources, and feel recognized and uplifted through every stage of their journey.
            </p>
            <div className="h-px w-24 bg-primary/20 mx-auto"></div>
          </div>
        </section>

        <div id="values">
          <ValuesSection />
        </div>

        <div id="pillars">
          <PillarsSection />
        </div>

        <div id="leadership">
          <TeamSection />
        </div>

        <section className="bg-primary py-24 px-6 text-white text-center relative overflow-hidden">
          {/* Decorative Hope Amber Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-hope opacity-20 blur-3xl -mr-16 -mt-16 rounded-full"></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl font-serif mb-6">Cancer changes lives. Community changes outcomes.</h2>
            <p className="text-xl text-cream opacity-90 mb-10">
              Whether you are a patient, survivor, caregiver, supporter, or ally, there is a place for you in the Cancer Heroes community.
            </p>
            <button 
              onClick={() => setShowCompanion(true)}
              className="bg-hope text-charcoal px-8 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-xl"
            >
              Get Supported Today
            </button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Action Button for AI Companion */}
      {!showCompanion && (
        <button
          onClick={() => setShowCompanion(true)}
          className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-primary/90 transition-all transform hover:scale-110 z-40 group"
          title="Talk to our Resilience Companion"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="absolute right-full mr-4 bg-charcoal text-white text-sm px-3 py-1 rounded hidden group-hover:block whitespace-nowrap">
            Need a moment of support?
          </span>
        </button>
      )}

      {showCompanion && (
        <AICompanion onClose={() => setShowCompanion(false)} />
      )}
    </div>
  );
};

export default App;
