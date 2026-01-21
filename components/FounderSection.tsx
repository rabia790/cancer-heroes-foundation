
import React from 'react';

const FounderSection: React.FC = () => {
  const experiences = [
    "Surviving metastatic thyroid cancer",
    "Enduring radioactive iodine chemotherapy",
    "Living with hidden disabilities post-treatment",
    "Navigating illness as a single mother",
    "Rebuilding through emotional self-care"
  ];

  return (
    <section className="py-24 bg-cream/50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Our Why</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">
              From Survival to <span className="text-primary">Service</span>
            </h3>
            <div className="space-y-6 text-lg text-slate-text leading-relaxed">
              <p>
                I am a mother of four, an immigrant woman, and a cancer survivor. I have lived the cancer journey in ways few people talk about.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm border-l-4 border-hope">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-charcoal">{exp}</span>
                  </div>
                ))}
              </div>
              <p className="font-serif italic text-2xl text-charcoal border-l-4 border-primary pl-6 my-8">
                "Healing is not only medical. It is emotional. It is human. It is collective."
              </p>
              <p>
                By turning lived experience into purpose, I created a movement that recognizes cancer patients, survivors, caregivers, and families as heroes.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-square rounded-full border-[16px] border-white shadow-2xl overflow-hidden">
                <img 
                  src="/img/DSCF5665.JPG" 
                  alt="Founder Shirin Ariff" 
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-4 right-12 bg-primary text-white p-6 rounded-2xl shadow-xl max-w-[240px] border-b-8 border-hope">
                <h4 className="font-serif text-xl mb-1">Shirin Ariff</h4>
                <p className="text-cream/90 text-sm">Founder of National Cancer Hero Day & Cancer Heroes Foundation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
