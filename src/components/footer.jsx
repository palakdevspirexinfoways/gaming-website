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
              Redrex<span className="text-red-500">.</span>
            </span>
          </div>
          <p className="text-xs text-white/40 leading-relaxed select-none">
            India's most secure and state-of-the-art gaming platform. Experience elite slots, Rummy, and Teen Patti with rapid UPI checkouts and verified safety mechanisms.
          </p>

          {/* Social circular icons */}
          <div className="flex gap-3">
            {[
              { 
                icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>, 
                link: '#facebook' 
              },
              { 
                icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>, 
                link: '#twitter' 
              },
              { 
                icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583 0.07-4.849 0.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>, 
                link: '#instagram' 
              }
            ].map((soc, idx) => (
              <a 
                key={idx}
                href={soc.link}
                className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-red-500 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all"
              >
                {soc.icon}
              </a>
            ))}
          </div>
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
