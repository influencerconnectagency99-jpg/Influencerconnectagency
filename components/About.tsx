
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Column: Two Image Editorial Layout */}
        <div className="lg:w-1/2 relative">
          <div className="relative flex items-center justify-center">
            {/* Main Primary Image */}
            <div className="w-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                className="w-full aspect-[4/5] object-cover" 
                alt="Brand strategy workshop" 
              />
            </div>
            
            {/* Secondary Supporting Image - Positioned to complement, not hide */}
            <div className="absolute -bottom-10 -right-4 w-1/2 rounded-[2rem] overflow-hidden shadow-2xl z-20 border-8 border-white hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                className="w-full aspect-square object-cover" 
                alt="Creative collaboration" 
              />
            </div>

            {/* Accent Stat Box */}
            <div className="absolute -top-6 -left-6 bg-brand-gold p-6 rounded-3xl text-slate-900 shadow-xl z-30">
              <div className="text-3xl font-black">94%</div>
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Success Rate</div>
            </div>
          </div>
          
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-gold/5 blur-[100px] rounded-full -z-10"></div>
        </div>
        
        {/* Right Column: Content */}
        <div className="lg:w-1/2 space-y-10">
          <div className="space-y-4">
            <h2 className="text-brand-gold font-bold text-sm tracking-[0.2em] uppercase">Human-First Approach</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 font-bold leading-tight">The Best Marketing Doesn't Feel Like Marketing.</h3>
          </div>
          
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Founded on the belief that authenticity is the only currency that matters in the digital age, Influencer Connect Agency was built to move beyond transactional postings. We cultivate long-term partnerships that yield genuine brand affinity.
            </p>
            <p>
              Our team combines proprietary AI insights with a deep, intuitive understanding of human psychology. We don't just find people with followers; we find the leaders that your audience trusts.
            </p>
          </div>
          
          <div className="pt-8 border-t border-slate-100 grid grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-1">
              <p className="text-4xl font-black text-slate-900">10M+</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Reach</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-black text-slate-900">150+</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Brand Partners</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
