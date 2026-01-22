
import React from 'react';

const values = [
  { title: "Compassion", desc: "No one should walk the cancer journey alone.", image: "/img/compassion.png" },
  { title: "Dignity", desc: "Every story matters and every experience deserves respect.", image: "/img/dignity.png" },
  { title: "Community", desc: "Healing grows stronger when we care together.", image: "/img/community.png" },
  { title: "Resilience", desc: "Strength can be taught, practiced, and shared.", image: "/img/resilience.png" },
  { title: "Hope", desc: "One spark of hope can change a life.", image: "/img/hope.png" },
  { title: "Transformation", desc: "Cancer can be transformed into growth and purpose.", image: "/img/transformation.png" }
];

const ValuesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Foundation</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-charcoal">Our Core Values</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="group p-8 bg-cream/30 rounded-3xl border border-transparent hover:border-primary/20 hover:bg-cream/50 transition-all duration-300 shadow-sm hover:shadow-md">
             <div className="mb-6 overflow-hidden rounded-2xl w-20 h-20 shadow-md group-hover:scale-110 transition-transform duration-500">
              <img 
                src={val.image} 
                alt={val.title} 
                className="w-full h-full object-cover" 
              />
            </div>
              <h4 className="text-xl font-serif font-bold text-charcoal mb-3">{val.title}</h4>
              <p className="text-slate-text leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
