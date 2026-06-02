import React, { useState } from 'react';
import { ShieldCheck, Zap, Smartphone, Sparkles, Landmark, Award, Download, Layers, Flame, Trophy, Coins, CheckCircle2 } from 'lucide-react';

export default function Features() {
  const [activeTab, setActiveTab] = useState('specs');
  const downloadUrl = "https://g5.bet/g5_release.apk?referrer=706169642533446b62673977332532366368616e6e656c2533444735";

  return (
    <section id="features" className="relative w-screen px-6 py-20 flex flex-col items-center bg-[#07090e] border-t border-white/[0.02] overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      
      {/* Visual background glows */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-red-600/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-amber-600/[0.03] blur-[120px] pointer-events-none" />

      {/* 1. SECTION HEADER */}
      <div className="w-full max-w-6xl flex flex-col items-center text-center mb-12">
        <div className="bg-red-500/10 border border-red-500/30 px-4 py-1.5 rounded-full mb-4 flex items-center gap-2">
          <Sparkles size={12} className="text-red-500" />
          <span className="text-[10px] text-red-500 font-extrabold tracking-widest uppercase">G5.BET INTELLIGENCE</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wide mb-3 leading-none">
          FEATURES &amp; <span className="text-red-500">PLATFORM DETAILS</span>
        </h2>
        <p className="text-xs md:text-sm text-white/50 max-w-xl leading-relaxed select-none">
          Explore technical specs, high-stakes game limits, and instant financial checkout streams that set the benchmark.
        </p>
      </div>

      {/* 2. INTERACTIVE TABS SYSTEM (Parallelogram Style Navigation) */}
      <div className="w-full max-w-3xl flex justify-center gap-1.5 md:gap-3 mb-12 z-10 px-2">
        {[
          { id: 'specs', label: '📱 APP SPECS', icon: <Layers size={14} /> },
          { id: 'features', label: '🔥 CORE FEATURES', icon: <Zap size={14} /> },
          { id: 'vip', label: '🎡 BONUS & VIP', icon: <Trophy size={14} /> }
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-1.5 md:px-5 font-black text-[9px] md:text-xs tracking-widest cursor-pointer transition-all outline-none uppercase ${
                isActive 
                  ? 'bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.45)] border-none' 
                  : 'bg-white/[0.03] border border-white/10 text-white/70 hover:bg-white/[0.06] hover:text-white'
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(' ')[1]}</span>
            </button>
          );
        })}
      </div>

      {/* 3. TABS CONTENT INTERFACES */}
      <div className="w-full max-w-6xl z-10">
        
        {/* TAB 1: APK SPECIFICATIONS */}
        {activeTab === 'specs' && (
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch animate-fadeIn">
            {/* Tech details table card */}
            <div className="bg-[#0f111c]/50 backdrop-blur-md border border-white/5 p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between">
              <div>
                <h3 className="text-white text-xl font-black uppercase tracking-wider mb-6 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block animate-ping" />
                  FILE PARAMETERS &amp; VERIFICATION
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-xs md:text-sm text-white/80 mb-6">
                  <div className="flex justify-between py-3 border-b border-white/5">
                    <span className="text-white/40">App Name</span>
                    <span className="font-extrabold text-white">G5.BET Official APK</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/5">
                    <span className="text-white/40">File Size</span>
                    <span className="font-extrabold text-white">22.5 MB <span className="text-[10px] text-red-500 font-bold bg-red-500/10 px-1.5 py-0.5 rounded-md ml-1">LITE</span></span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/5">
                    <span className="text-white/40">Latest Version</span>
                    <span className="font-extrabold text-white">v2.1.0 (Live)</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/5">
                    <span className="text-white/40">Official Domain</span>
                    <span className="font-extrabold text-red-400 underline">g5betdownload.com</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/5">
                    <span className="text-white/40">Sign-up Bonus</span>
                    <span className="font-extrabold text-yellow-400">₹500 Instant Cash Credit</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/5">
                    <span className="text-white/40">Min. Withdrawal</span>
                    <span className="font-extrabold text-white">₹100 <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded-md ml-1">INSTANT</span></span>
                  </div>
                </div>
              </div>

              {/* Download CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
                <span className="text-xs text-white/40 text-center sm:text-left">Click below to start secure download from g5betdownload.com</span>
                <a 
                  href={downloadUrl}
                  style={{ clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)' }}
                  className="bg-gradient-to-br from-red-500 to-amber-600 text-white text-[11px] font-black tracking-widest py-3 px-8 hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all uppercase flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <Download size={14} />
                  Download Now
                </a>
              </div>
            </div>

            {/* Tech stats right side card */}
            <div className="bg-[#0f111c]/30 border border-white/5 p-8 rounded-3xl flex flex-col justify-center items-center text-center shadow-lg relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-amber-500/[0.02] blur-xl pointer-events-none" />
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-4 animate-pulse">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-white text-lg font-black uppercase tracking-wider mb-2">100% Verified File</h4>
              <p className="text-white/50 text-xs leading-relaxed max-w-xs mb-5">
                Our APK goes through standard cryptographic validation protocols. It contains zero adware or spyware payloads. Safe for all Android configurations.
              </p>
              <div className="bg-white/[0.02] border border-white/5 px-4 py-2.5 rounded-xl text-[10px] text-yellow-400 font-extrabold tracking-wider uppercase">
                256-BIT SSL ENCRYPTION PROTECTION SECURED
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PLATFORM CORE FEATURES */}
        {activeTab === 'features' && (
          <div className="flex flex-col items-center animate-fadeIn">
            {/* Introductory sentence */}
            <p className="text-sm text-white/70 italic text-center max-w-2xl mb-8 leading-relaxed">
              Additionally, consider these unique advantages that set the G5.BET platform apart:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-10">
              {/* Feature Card 1 */}
              <div className="bg-[#0f111c]/50 backdrop-blur-md border border-white/5 p-8 rounded-2xl shadow-md hover:border-red-500/25 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                  <Coins size={20} />
                </div>
                <h3 className="text-white text-base font-black uppercase tracking-wider mb-2">50+ Premium Games</h3>
                <p className="text-white/55 text-xs leading-relaxed">
                  In order to provide variety, we host over 50+ games including Rummy, Teen Patti, and Dragon vs Tiger.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-[#0f111c]/50 backdrop-blur-md border border-white/5 p-8 rounded-2xl shadow-md hover:border-red-500/25 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                  <Smartphone size={20} />
                </div>
                <h3 className="text-white text-base font-black uppercase tracking-wider mb-2">Neo-Brutalist Design</h3>
                <p className="text-white/55 text-xs leading-relaxed">
                  Furthermore, the app features a &ldquo;Neo-Brutalist&rdquo; design so that users can navigate the menus with zero confusion.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-[#0f111c]/50 backdrop-blur-md border border-white/5 p-8 rounded-2xl shadow-md hover:border-red-500/25 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-white text-base font-black uppercase tracking-wider mb-2">256-Bit SSL Protection</h3>
                <p className="text-white/55 text-xs leading-relaxed">
                  Consequently, we use 256-bit SSL encryption to ensure your financial data is always protected.
                </p>
              </div>

              {/* Feature Card 4 */}
              <div className="bg-[#0f111c]/50 backdrop-blur-md border border-white/5 p-8 rounded-2xl shadow-md hover:border-red-500/25 transition-all group md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles size={20} />
                </div>
                <h3 className="text-white text-base font-black uppercase tracking-wider mb-2">Fantasy Sports Section</h3>
                <p className="text-white/55 text-xs leading-relaxed">
                  Moreover, a dedicated Fantasy Sports section is included so that cricket fans can win during live matches.
                </p>
              </div>

              {/* Feature Card 5 */}
              <div className="bg-[#0f111c]/50 backdrop-blur-md border border-white/5 p-8 rounded-2xl shadow-md hover:border-red-500/25 transition-all group md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                  <Award size={20} />
                </div>
                <h3 className="text-white text-base font-black uppercase tracking-wider mb-2">360° Earning Ecosystem</h3>
                <p className="text-white/55 text-xs leading-relaxed">
                  As a result, the platform provides a complete 360-degree earning ecosystem for every type of player.
                </p>
              </div>
            </div>

            {/* Download Button */}
            <a 
              href={downloadUrl}
              style={{ clipPath: 'polygon(15px 0%, 100% 0%, calc(100% - 15px) 100%, 0% 100%)' }}
              className="bg-gradient-to-br from-red-500 to-amber-600 text-white text-[11px] font-black tracking-widest py-4 px-12 hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all uppercase flex items-center gap-2 cursor-pointer"
            >
              <Download size={14} />
              DOWNLOAD NOW
            </a>
          </div>
        )}

        {/* TAB 3: BONUS & VIP PROMOTIONS */}
        {activeTab === 'vip' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch animate-fadeIn">
            {/* Promo Left Side */}
            <div className="bg-[#0f111c]/50 backdrop-blur-md border border-white/5 p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between">
              <div>
                <h3 className="text-white text-xl font-black uppercase tracking-wider mb-6 flex items-center gap-2">
                  <Award size={20} className="text-red-500" />
                  🎡 CAMPAIGNS &amp; REWARDS
                </h3>
                <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                  We offer a complete earning and playing ecosystem. Build networks or spin for massive jackpots.
                </p>
                <div className="space-y-4 text-xs text-white/60 mb-6">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="text-red-500 shrink-0 mt-0.5" />
                    <span><strong>Free Mega Spin (₹500)</strong>: Every new user gets an instant welcome spin worth up to ₹500 upon verification.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="text-red-500 shrink-0 mt-0.5" />
                    <span><strong>Refer &amp; Earn Stream</strong>: Permanent, lifetime cash commission for every friend you invite to play.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="text-red-500 shrink-0 mt-0.5" />
                    <span><strong>High Limit VIP Club</strong>: Custom privileges, immediate bank transfers, and dedicated VIP payout handlers.</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
                <span className="text-xs text-white/40 text-center sm:text-left">Register app today to claim all promotional bonuses instantly.</span>
                <a 
                  href={downloadUrl}
                  style={{ clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)' }}
                  className="bg-gradient-to-br from-red-500 to-amber-600 text-white text-[11px] font-black tracking-widest py-3 px-8 hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all uppercase flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <Download size={14} />
                  Download Now
                </a>
              </div>
            </div>

            {/* Payouts Stats Right Side */}
            <div className="bg-[#0f111c]/30 border border-white/5 p-8 rounded-3xl flex flex-col justify-center items-center text-center shadow-lg relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-red-500/[0.02] blur-xl pointer-events-none" />
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-4 animate-pulse">
                <Landmark size={32} />
              </div>
              <h4 className="text-white text-lg font-black uppercase tracking-wider mb-2">💸 5-10 MIN Instant Payouts</h4>
              <p className="text-white/50 text-xs leading-relaxed max-w-xs mb-5">
                Withdrawals typically process immediately via UPI, Paytm, or direct Bank Transfer. Standard cashout requests are fully settled within just 5 to 10 minutes.
              </p>
              <div className="bg-white/[0.02] border border-white/5 px-4 py-2.5 rounded-xl text-[10px] text-yellow-400 font-extrabold tracking-wider uppercase">
                UPI / BANK CHANNELS 100% LIVE
              </div>
            </div>
          </div>
        )}

      </div>

    </section>
  );
}
