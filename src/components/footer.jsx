import React from 'react';
import { Gamepad2, Mail, ChevronRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative w-screen bg-[#05060a] border-t border-white/[0.04] overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-6 py-16 text-white/80">
      
      {/* Background glow effects */}
      <div className="absolute bottom-0 right-[10%] w-[350px] h-[350px] rounded-full bg-red-600/[0.02] blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-[10%] w-[350px] h-[350px] rounded-full bg-amber-600/[0.02] blur-[120px] pointer-events-none" />

      {/* Main Container Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Column 1: Logo & Branding */}
        <div className="flex flex-col gap-5 text-left">
          <div className="flex items-center gap-2.5 cursor-pointer">
            <div className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.6)] text-white">
              <Gamepad2 size={18} />
            </div>
            <span className="text-xl font-black tracking-wide text-white">
              G5<span className="text-red-500">.</span>
            </span>
          </div>
          <p className="text-xs text-white/40 leading-relaxed select-none">
            India's most secure and state-of-the-art gaming platform. Experience elite slots, Rummy, and Teen Patti with rapid UPI checkouts and verified safety mechanisms.
          </p>

          
        </div>

        {/* Column 2: Navigation Links */}
        <div className="flex flex-col gap-4 text-left">
          <h4 className="text-xs font-black tracking-widest text-white uppercase border-b border-white/5 pb-2">
            QUICK NAVIGATION
          </h4>
          <ul className="space-y-2.5 text-xs text-white/50 font-semibold uppercase tracking-wider">
            {[
              { label: 'Home Page', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
              { label: 'Platform Specs', action: () => handleScroll('specs-section') },
              { label: 'Elite Promotions', action: () => handleScroll('quests-section') },
              { label: 'Installation Steps', action: () => handleScroll('wheel-section') }
            ].map((nav, idx) => (
              <li key={idx}>
                <button 
                  onClick={nav.action}
                  className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer bg-transparent border-none p-0 outline-none text-left"
                >
                  <ChevronRight size={12} className="text-red-500/60" />
                  {nav.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Trust & Legal */}
        <div className="flex flex-col gap-4 text-left">
          <h4 className="text-xs font-black tracking-widest text-white uppercase border-b border-white/5 pb-2">
            TRUST &amp; COMPLIANCE
          </h4>
          <ul className="space-y-2.5 text-xs text-white/50 font-semibold uppercase tracking-wider">
            {[
              { label: 'Privacy Policy' },
              { label: 'Terms & Conditions' },
              { label: 'Responsible Play' },
              { label: '256-Bit SSL Shield' }
            ].map((leg, idx) => (
              <li key={idx} className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer select-none">
                <ChevronRight size={12} className="text-white/20" />
                <span>{leg.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter Subscription */}
        <div className="flex flex-col gap-4 text-left">
          <h4 className="text-xs font-black tracking-widest text-white uppercase border-b border-white/5 pb-2">
            SUBSCRIBE NEWSLETTER
          </h4>
          <p className="text-xs text-white/40 leading-relaxed select-none">
            Get early VIP notifications about upcoming tournaments and jackpot events directly.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="flex items-stretch bg-white/[0.02] border border-white/10 rounded-lg overflow-hidden focus-within:border-red-500/50 transition-colors">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-transparent border-none text-xs text-white px-3 py-2.5 outline-none flex-1 placeholder-white/30"
            />
            <button 
              type="submit" 
              className="bg-red-500 hover:bg-red-600 text-white px-4 border-none flex items-center justify-center cursor-pointer transition-colors outline-none"
            >
              <Mail size={14} />
            </button>
          </form>
        </div>

      </div>

      {/* Divider line */}
      <div className="w-full max-w-6xl mx-auto h-[1px] bg-white/[0.05] mb-8" />

      {/* Bottom copyright & secure channels */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Copyright info */}
        <div className="text-xs text-white/30 font-semibold uppercase tracking-wider text-center md:text-left">
          <span>Copyright © 2026 G5.BET | Powered by Redrex. All rights reserved.</span>
        </div>

        {/* Secure Channels Badge Grid */}
        <div className="flex flex-wrap justify-center gap-4 text-[10px] font-extrabold tracking-widest text-white/40 uppercase">
          <div className="flex items-center gap-1.5 border border-white/5 bg-white/[0.01] px-3.5 py-1.5 rounded-full select-none">
            <ShieldCheck size={12} className="text-emerald-500" />
            <span>100% SECURE APK</span>
          </div>
          <div className="flex items-center gap-1.5 border border-white/5 bg-white/[0.01] px-3.5 py-1.5 rounded-full select-none">
            <span className="text-red-500">🔞</span>
            <span>18+ RESTRICTED</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
