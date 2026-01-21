
import React from 'react';

const members = [
  {
    name: "Shirin Ariff",
    role: "Director of Community Engagement",
    desc: "Shirin leads community partnerships, fundraising, and public engagement, bringing vision and heart to building awareness worldwide.",
    img: "/img/Shirin.png"
  },
  {
    name: "Chetan Salwan",
    role: "Director of Clinical Programs",
    desc: "Chetan oversees support group design and health education integrity, ensuring services align with patient-centered care principles.",
    img: "/img/Chetan.png"
  },
  {
    name: "Ambarish Sharma",
    role: "Director of Operations",
    desc: "Ambarish leads digital infrastructure, operational strategy, and patient platforms to scale the Foundation's impact securely.",
    img: "/img/Ambarish.png"
  }
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-24 bg-cream/20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Leadership</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-charcoal">The Hearts Behind the Mission</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {members.map((m, idx) => (
            <div key={idx} className="group">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-xl relative border-b-4 border-primary/20 group-hover:border-hope transition-colors duration-500">
                <img 
                  src={m.img} 
                  alt={m.name} 
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h4 className="text-2xl font-serif text-charcoal font-bold mb-1">{m.name}</h4>
              <p className="text-primary font-bold text-sm uppercase tracking-wider mb-4">{m.role}</p>
              <p className="text-slate-text leading-relaxed text-sm">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
