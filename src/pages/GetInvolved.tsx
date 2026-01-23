import React from 'react';
import { Heart, Users, HandHeart, ArrowRight } from 'lucide-react';

const GetInvolved: React.FC = () => {
  const engagementOptions = [
    {
      title: "Volunteer Your Time",
      description: "Join our team on the ground to help organize events, provide peer support, or assist with administrative tasks.",
      icon: <Users className="w-8 h-8 text-primary" />,
      cta: "Apply to Volunteer"
    },
    {
      title: "Become a Partner",
      description: "We collaborate with healthcare providers, local businesses, and corporate sponsors to expand our reach.",
      icon: <HandHeart className="w-8 h-8 text-hope" />,
      cta: "Partner With Us"
    },
    {
      title: "Support Our Cause",
      description: "Your donations directly fund mental health resources and educational materials for families in need.",
      icon: <Heart className="w-8 h-8 text-rose-500" />,
      cta: "Make a Donation"
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Header Section - pt-52 moves content further down */}
      <section className="bg-primary pt-52 pb-24 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Get Involved</h1>
          <p className="text-xl text-cream/90 leading-relaxed">
            There are many ways to support the Cancer Heroes Foundation. Together, we can ensure 
            no one faces their journey alone.
          </p>
        </div>
      </section>

      {/* Ways to Help Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {engagementOptions.map((option, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col h-full"
            >
              <div className="mb-6 bg-cream w-16 h-16 rounded-full flex items-center justify-center">
                {option.icon}
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">{option.title}</h3>
              <p className="text-slate-text mb-8 flex-grow leading-relaxed">
                {option.description}
              </p>
              <button className="flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all group">
                {option.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="bg-white py-20 px-6 border-y border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-charcoal mb-6 text-center">Share Your Story</h2>
          <p className="text-lg text-slate-text text-center mb-10 leading-relaxed">
            Are you a survivor or a caregiver? Your journey can inspire others. We are always 
            looking for community members willing to share their experiences in our newsletter 
            or at our monthly meetups.
          </p>
          <div className="bg-cream p-8 rounded-xl border-l-4 border-hope italic text-charcoal">
            "Community is the foundation of resilience. By sharing our stories, we turn 
            individual pain into collective strength."
          </div>
        </div>
      </section>

      {/* Simple Contact CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-serif mb-4">Have other ideas on how to help?</h3>
          <p className="text-slate-text mb-8">
            We are always open to new initiatives and community-led projects.
          </p>
          <a 
            href="mailto:contact@cancerheroes.org" 
            className="inline-block bg-charcoal text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
          >
            Reach Out to Our Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;