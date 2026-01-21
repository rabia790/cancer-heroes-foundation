import React from 'react';

const Hero: React.FC = () => {
  return (
    /* 1. INCREASED pt-20 to pt-32 to clear the fixed Header */
    /* 2. ADDED pb-32 to accommodate the card we are pushing lower */
    <section className="relative min-h-[90vh] flex items-center pt-44 px-6 pb-32">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-hope/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
            National Cancer Hero Day
          </div>
          <h1 className="text-6xl md:text-7xl font-serif text-charcoal leading-tight">
            A World That <br />
            <span className="italic text-primary">Holds You</span> <br />
            Through Cancer.
          </h1>
          <p className="text-xl text-slate-text max-w-lg leading-relaxed">
            We believe in a world where every individual and family affected by cancer feels supported, honoured, and empowered at every stage of their journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-charcoal text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-charcoal/90 transition-all shadow-xl">
              Our Vision
            </button>
            <button className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/5 transition-all">
              Join the Community
            </button>
          </div>
        </div>

        <div className="relative mb-20 lg:mb-0">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl relative z-10">
            <img 
              src="/img/BonnieCrombie.jpg" 
              alt="Cancer Heroes Event" 
              className="object-cover object-top w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xl font-serif mb-1">"Healing is not only medical. It is human. It is collective."</p>
              <p className="text-hope font-bold text-base">— Shirin Ariff, Founder</p>
            </div>
          </div>
          
          {/* 3. MOVED DOWN TO -bottom-24 TO STOP OVERLAPPING THE IMAGE SUBJECTS */}
          <div className="absolute -bottom-24 -left-6 bg-white p-6 rounded-2xl shadow-2xl hidden md:block max-w-xs border-t-4 border-hope z-20">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span className="font-bold text-charcoal">Supportive Community</span>
            </div>
            <p className="text-sm text-slate-text">Connecting thousands of heroes across the globe through shared experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;