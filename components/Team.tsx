
import React, { useState } from 'react';

const teamMembers = [
  {
    name: "Sarah Jenkins",
    role: "Founder & CEO",
    bio: "A pioneer in relational marketing with over 12 years of experience building bridge-communities between Fortune 500 brands and global creators. Sarah believes that the future of commerce lies in community, not just clicks. She has spent her career mentoring creators and advising brands on how to maintain soul in a digital-first world.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Marcus Chen",
    role: "Chief Strategy Officer",
    bio: "The architect behind our proprietary AI insights. Marcus specializes in translating complex audience data into actionable, human-centric narratives. Before co-founding the agency, he led data teams at major social platforms, giving him an unparalleled 'under-the-hood' perspective on algorithm behavior and trend velocity.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Creative",
    bio: "An award-winning visual storyteller who ensures every piece of content produced in our network carries the distinct DNA of our brand partners. Elena's background in fine arts and cinematography allows her to bridge the gap between high-end production and the raw, authentic aesthetic that modern social audiences crave.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

interface TeamMemberCardProps {
  member: typeof teamMembers[0];
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative flex flex-col h-full">
      <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl transition-all duration-500 group-hover:shadow-brand-gold/20 group-hover:-translate-y-2">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
        
        {/* Corner Accent */}
        <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-brand-gold rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <div className="mt-8 space-y-2 flex-grow flex flex-col">
        <div className="flex items-center justify-between">
          <h4 className="text-2xl font-bold text-slate-900 font-serif">{member.name}</h4>
          <div className="h-0.5 w-12 bg-brand-gold/30 group-hover:w-20 transition-all duration-500"></div>
        </div>
        <p className="text-brand-gold font-bold text-xs uppercase tracking-widest">{member.role}</p>
        
        <div className="pt-2 relative">
          <p className={`text-slate-500 leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
            {member.bio}
          </p>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-brand-gold font-bold text-sm flex items-center space-x-1 hover:opacity-80 transition-opacity group/btn"
          >
            <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <h2 className="text-brand-gold font-bold text-sm tracking-[0.2em] uppercase">The Visionaries</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Meet the Minds Behind the Connections</h3>
        <p className="text-slate-500 text-lg">
          Our leadership team combines decades of experience in brand building, data science, and creative direction.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
