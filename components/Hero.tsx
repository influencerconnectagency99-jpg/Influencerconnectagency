
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    handle: '',
    niche: 'Lifestyle'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate high-end processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen flex items-center pt-40 pb-24 overflow-hidden">
      {/* Optimized Hero Background Container */}
      <div className="absolute inset-0 -z-10 bg-beige">
        {/* The Image Container with Gradient Mask */}
        <div className="absolute inset-0 lg:left-1/3 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" 
            alt="Modern creative agency collaboration" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom opacity-40 lg:opacity-100"
          />
          {/* Multi-Directional Gradient Masks to ensure zero content hiding */}
          <div className="absolute inset-0 bg-gradient-to-r from-beige via-beige/80 lg:via-beige/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-beige via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-beige/50 via-transparent to-transparent"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Content */}
          <div className="space-y-10 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center px-4 py-2 bg-brand-gold/15 text-brand-gold rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-brand-gold/20 backdrop-blur-md">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
              </span>
              Now Accepting New Creators
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-slate-900 font-bold tracking-tight">
                Real People. <br />
                <span className="italic text-brand-gold font-normal font-serif">Deep Impact.</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
                Join India's most authentic storytellers. We connect visionary brands with creators who move the needle through genuine connection.
              </p>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-4 border-white shadow-lg object-cover" src={`https://i.pravatar.cc/150?u=influencer${i+12}`} alt="Creator" />
                ))}
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                <span className="text-slate-900 block text-base normal-case font-bold tracking-normal">Trusted by 5,000+</span>
                Creators nationwide
              </div>
            </div>
            
            <div className="hidden lg:block pt-6">
               <a href="#services" className="text-slate-400 font-bold text-sm uppercase tracking-widest hover:text-brand-gold transition-all flex items-center gap-3 group">
                 <span className="border-b-2 border-transparent group-hover:border-brand-gold py-1">Our Methodology</span>
                 <svg className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                 </svg>
               </a>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="relative z-10 bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-white/50">
              {isSuccess ? (
                <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center text-slate-900 mx-auto mb-6 shadow-xl shadow-brand-gold/30">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">Application Sent!</h3>
                  <p className="text-slate-500">Our talent team will reach out within 48 hours.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-10 px-8 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-slate-200 transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">Partner With Us</h3>
                    <p className="text-slate-500 font-medium text-sm">Join the network and start scaling your influence today.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Alex Rivera"
                          className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-3.5 text-slate-900 focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold outline-none transition-all placeholder:text-slate-300"
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Social Handle</label>
                        <input 
                          required
                          type="text" 
                          placeholder="@alex_creative"
                          className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-3.5 text-slate-900 focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold outline-none transition-all placeholder:text-slate-300"
                          value={formState.handle}
                          onChange={(e) => setFormState({...formState, handle: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="alex@example.com"
                        className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-3.5 text-slate-900 focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold outline-none transition-all placeholder:text-slate-300"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Your Niche</label>
                      <select 
                        className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-3.5 text-slate-900 focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold outline-none transition-all appearance-none cursor-pointer"
                        value={formState.niche}
                        onChange={(e) => setFormState({...formState, niche: e.target.value})}
                      >
                        <option>Lifestyle</option>
                        <option>Tech & Gaming</option>
                        <option>Fashion & Beauty</option>
                        <option>Health & Fitness</option>
                        <option>Business</option>
                      </select>
                    </div>

                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className={`w-full py-5 rounded-2xl text-slate-900 font-bold text-lg shadow-xl shadow-brand-gold/20 hover:shadow-brand-gold/40 transition-all flex items-center justify-center space-x-3 ${isSubmitting ? 'bg-slate-100 text-slate-400' : 'bg-brand-gold hover:scale-[1.02] active:scale-[0.98]'}`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <span>Join Network</span>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
            
            {/* Decorative Background Accent */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-zoom {
          from { transform: scale(1) translate(0,0); }
          to { transform: scale(1.08) translate(-1%, -1%); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 30s ease-in-out infinite alternate;
        }
      `}} />
    </div>
  );
};

export default Hero;
