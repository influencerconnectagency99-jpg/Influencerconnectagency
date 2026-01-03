
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'instagram', url: 'https://www.instagram.com/influencerconnectagency', icon: 'I' },
    { name: 'twitter', url: 'https://x.com/SanjayRajp64202', icon: 'T' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/influencer-connect-agency-bb26b9369?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbzZvhYeIQhaA0Hsd4tCTaQ%3D%3D', icon: 'L' }
  ];

  return (
    <footer id="footer" className="bg-slate-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-8">
            <Logo light />
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Leading the next generation of creative marketing through human connection and strategic excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <a 
                  key={social.name} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-slate-900 transition-all"
                >
                  <span className="capitalize text-xs font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-brand-gold uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#ai-tool" className="hover:text-white transition-colors">AI Insights</a></li>
              <li><a href="#join" className="hover:text-white transition-colors">Join Network</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-brand-gold uppercase tracking-widest text-sm mb-1">Contact Us</h4>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter mb-4">Let's Grow Your Brand</p>
            </div>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex flex-col">
                <span className="text-slate-600 font-bold uppercase text-[9px] tracking-[0.2em]">Email</span>
                <a href="mailto:influencerconnectagency99@gmail.com" className="hover:text-white transition-colors truncate">influencerconnectagency99@gmail.com</a>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-600 font-bold uppercase text-[9px] tracking-[0.2em]">WhatsApp</span>
                <a href="https://wa.me/919274228687" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-mono tracking-wider">+91 92742 28687</a>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-600 font-bold uppercase text-[9px] tracking-[0.2em]">Location</span>
                <span>Serving brands across India</span>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-600 font-bold uppercase text-[9px] tracking-[0.2em]">Hours</span>
                <span className="text-xs">Mon – Sat | 10 AM – 5 PM (IST)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
          <p>© 2024 Influencer Connect Agency. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
