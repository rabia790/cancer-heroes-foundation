
import React from 'react';

const values = [
  { title: "Compassion", desc: "No one should walk the cancer journey alone.", icon: "🤍" },
  { title: "Dignity", desc: "Every story matters and every experience deserves respect.", icon: "👑" },
  { title: "Community", desc: "Healing grows stronger when we care together.", icon: "🤝" },
  { title: "Resilience", desc: "Strength can be taught, practiced, and shared.", icon: "🌿" },
  { title: "Hope", desc: "One spark of hope can change a life.", icon: "✨" },
  { title: "Transformation", desc: "Cancer can be transformed into growth and purpose.", icon: "🦋" }
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
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform inline-block bg-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-inner">
                {val.icon}
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
