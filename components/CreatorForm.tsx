
import React, { useState } from 'react';

const CreatorForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    handle: '',
    niche: '',
    followerCount: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center py-20 px-6">
        <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center text-slate-900 mx-auto mb-8 shadow-xl">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Application Received!</h2>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Thanks for reaching out, {formData.fullName.split(' ')[0]}! Our talent team will review your profile and get back to you within 3-5 business days.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="px-8 py-3 border-2 border-brand-gold text-slate-900 font-bold rounded-xl hover:bg-brand-gold transition-all active:scale-95"
        >
          Send Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Join our Creator Network</h2>
        <p className="text-slate-600 text-lg">Are you a storyteller looking for meaningful brand collaborations? We'd love to meet you.</p>
      </div>

      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
            <input 
              required 
              id="fullName" 
              type="text" 
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Jane Doe" 
              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
            <input 
              required 
              id="email" 
              type="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@example.com" 
              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="handle" className="block text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Primary Social Handle</label>
            <input 
              required 
              id="handle" 
              type="text" 
              value={formData.handle}
              onChange={handleChange}
              placeholder="@janedoe" 
              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="niche" className="block text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Content Niche</label>
            <select 
              required
              id="niche" 
              value={formData.niche}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold outline-none transition-all cursor-pointer"
            >
              <option value="">Select a niche</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="fashion">Fashion & Beauty</option>
              <option value="tech">Tech & Gaming</option>
              <option value="fitness">Fitness & Health</option>
              <option value="travel">Travel</option>
              <option value="business">Business & Finance</option>
            </select>
          </div>
          <div className="md:col-span-2 space-y-2">
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Tell us about your audience</label>
            <textarea 
              id="message" 
              rows={4} 
              value={formData.message}
              onChange={handleChange}
              placeholder="What makes your community unique? What are your goals?" 
              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold outline-none transition-all resize-none"
            ></textarea>
          </div>
          
          <div className="md:col-span-2 pt-4">
            <button 
              type="submit" 
              className="w-full py-5 bg-[#FFCB05] text-slate-900 font-bold rounded-2xl shadow-xl shadow-brand-gold/10 hover:shadow-brand-gold/30 hover:scale-[1.01] transition-all active:scale-[0.99]"
            >
              Submit Application
            </button>
            <p className="text-center text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-6">
              By submitting, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatorForm;
