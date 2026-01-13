
import React from 'react';

const pillars = [
  {
    title: "Emotional Resilience",
    subtitle: "Psychosocial Support",
    items: ["Resilience workshops", "Emotional self-care education", "Peer support circles", "Coaching-based healing tools"],
    accent: "bg-hope"
  },
  {
    title: "Education & Resources",
    subtitle: "Empowerment Tools",
    items: ["The Cancer Heroes Playbook", "Patient & caregiver education", "Advocacy tools", "Community learning modules"],
    accent: "bg-primary"
  },
  {
    title: "Human-Centred Advocacy",
    subtitle: "Storytelling & Awareness",
    items: ["Cancer Heroes book series", "Docuseries & Podcasts", "Awareness campaigns", "Compassionate care advocacy"],
    accent: "bg-hope"
  },
  {
    title: "Recognition & Outreach",
    subtitle: "Community Engagement",
    items: ["National Cancer Hero Day", "Municipal partnerships", "Acts of kindness", "Volunteer mobilization"],
    accent: "bg-primary"
  },
  {
    title: "Family Support",
    subtitle: "Care for the Whole Unit",
    items: ["Family resilience resources", "Caregiver programs", "Community donation drives", "Dependents scholarships"],
    accent: "bg-hope"
  }
];

const PillarsSection: React.FC = () => {
  return (
    <section className="py-24 bg-charcoal px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Framework</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Our Five Pillars</h3>
          <p className="text-cream/60 text-lg max-w-2xl">
            We deliver bold service through programs designed to scale compassion, dignity, and empowerment across the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all flex flex-col group">
              <div className={`w-12 h-1 ${p.accent} mb-6 transition-all group-hover:w-20`}></div>
              <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-1">{p.subtitle}</h4>
              <h5 className="text-2xl font-serif text-white mb-6">{p.title}</h5>
              <ul className="space-y-3 flex-grow">
                {p.items.map((item, i) => (
                  <li key={i} className="flex items-center text-cream/80 space-x-3 text-sm">
                    <span className={`w-1.5 h-1.5 rounded-full ${p.accent}`}></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 text-primary font-bold text-sm hover:underline flex items-center group/btn">
                Learn more 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ))}
          {/* Decorative Callout for the 6th spot */}
          <div className="bg-primary p-8 rounded-3xl flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-hope opacity-20 -mr-8 -mt-8 rounded-full"></div>
            <h4 className="text-white text-3xl font-serif mb-4 relative z-10">Together, we turn stories into strength.</h4>
            <p className="text-cream opacity-80 mb-6 relative z-10">Join our mission to empower cancer heroes worldwide.</p>
            <button className="bg-hope text-charcoal px-6 py-3 rounded-full font-bold hover:brightness-110 transition-all relative z-10 shadow-lg">
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
