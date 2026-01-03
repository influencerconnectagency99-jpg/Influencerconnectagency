
import React, { useState } from 'react';
import { generateStrategy } from '../services/geminiService';
import { StrategyResponse } from '../types';

const AIStrategyTool: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StrategyResponse | null>(null);

  const handleGenerate = async () => {
    if (!niche) return;
    setLoading(true);
    const data = await generateStrategy(niche, platform);
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-12 text-white space-y-8">
          <div className="inline-flex items-center px-3 py-1 bg-[#FFCB05]/20 text-brand-gold rounded-full text-xs font-bold uppercase tracking-wider border border-[#FFCB05]/10">
            Powered by Gemini AI
          </div>
          <h2 className="text-4xl leading-tight">Instant Strategy Insights</h2>
          <p className="text-slate-400">
            Curious how we'd approach your niche? Use our AI-powered tool to get a sneak peek at our strategic thinking for your next campaign.
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Your Niche</label>
              <input 
                type="text" 
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                placeholder="e.g. Sustainable Fashion, Tech, Vegan Cooking"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none placeholder:text-slate-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Platform</label>
              <select 
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-gold transition-all outline-none"
              >
                <option>Instagram</option>
                <option>TikTok</option>
                <option>YouTube</option>
                <option>LinkedIn</option>
              </select>
            </div>
            <button 
              onClick={handleGenerate}
              disabled={loading || !niche}
              className={`w-full py-4 rounded-xl font-bold transition-all ${
                loading ? 'bg-slate-700 cursor-not-allowed' : 'bg-[#FFCB05] text-slate-900 hover:bg-[#FFCB05]/90 active:scale-[0.98] shadow-lg shadow-brand-gold/10'
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Crafting Strategy...
                </span>
              ) : 'Get Insights'}
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 bg-white/5 backdrop-blur-sm p-12 border-l border-slate-800 flex items-center justify-center min-h-[400px]">
          {result ? (
            <div className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                <h4 className="text-brand-gold font-bold text-sm uppercase tracking-widest mb-3">Strategic Advice</h4>
                <p className="text-white text-lg leading-relaxed">{result.advice}</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-brand-gold font-bold text-sm uppercase tracking-widest mb-1">Content Hooks</h4>
                {result.trendingHooks.map((hook, i) => (
                  <div key={i} className="bg-slate-800/50 p-4 rounded-xl text-slate-200 text-sm border border-slate-700 flex items-center space-x-3">
                    <span className="w-6 h-6 flex-shrink-0 bg-brand-gold rounded-full text-[10px] font-bold flex items-center justify-center text-slate-900">0{i+1}</span>
                    <span>{hook}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-slate-800 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-slate-500 italic font-medium">Enter your niche above to visualize your potential.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIStrategyTool;
