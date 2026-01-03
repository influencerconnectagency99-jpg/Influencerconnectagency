
import React from 'react';

interface ServiceItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, icon }) => (
  <div className="group bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_20px_40px_rgba(255,203,5,0.15)] transition-all duration-500 hover:-translate-y-1">
    <div className="w-14 h-14 bg-brand-gold/10 text-brand-gold rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-slate-900 transition-colors duration-300">
      {icon}
    </div>
    <h4 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-brand-gold transition-colors">{title}</h4>
    <p className="text-slate-500 leading-relaxed text-sm">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const coreServices = [
    {
      title: "Influencer Marketing Campaigns",
      description: "End-to-end campaign execution tailored to drive engagement and brand awareness across platforms.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
    },
    {
      title: "Creator & Influencer Management",
      description: "We bridge the gap between talent and brand, managing relations to ensure seamless collaborations.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    },
    {
      title: "Brand Collaborations & Sponsorships",
      description: "Strategic match-making that pairs your brand with creators who share your core values and vision.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
    {
      title: "Social Media Promotions",
      description: "Amplified visibility through creative content that resonates with the unique culture of each platform.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
    },
    {
      title: "Campaign Strategy & Consulting",
      description: "Data-backed planning to ensure every dollar of your marketing spend delivers maximum ROI.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    },
    {
      title: "Performance Tracking & Reporting",
      description: "Transparent analytics and comprehensive reports that show the real-world impact of your campaigns.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-brand-gold font-bold text-sm tracking-[0.2em] uppercase">Our Services</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Influencer Marketing That Drives Real Growth</h3>
        <p className="text-slate-500 text-lg md:text-xl font-medium">
          We help brands grow through strategic influencer campaigns and creator collaborations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreServices.map((service, index) => (
          <ServiceItem 
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>

      <div className="mt-20 p-10 bg-slate-900 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-brand-gold font-bold text-xl">Ready to scale your brand?</p>
            <p className="text-slate-400">Join our network and start your growth journey today.</p>
          </div>
          <a 
            href="#footer" 
            className="px-10 py-5 bg-brand-gold text-slate-900 rounded-2xl text-lg font-bold hover:scale-[1.05] transition-all flex items-center gap-3 shadow-xl shadow-brand-gold/10"
          >
            <span>Contact Us Today</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-gold/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
      </div>
    </div>
  );
};

export default Services;
