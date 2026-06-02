import React from 'react';
import { Download, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import imgJackpot from '../../assets/card_jackpot.png';
import imgSpade from '../../assets/card_spade.png';
import imgShop from '../../assets/card_shop.png';

export default function Vip() {
  const downloadUrl = "https://g5.bet/g5_release.apk?referrer=706169642533446b62673977332532366368616e6e656c2533444735";

  return (
    <section id="vip-perks" className="relative w-screen px-6 py-20 flex flex-col items-center bg-gradient-to-b from-[#11131e] to-[#0a0b10] border-t border-white/[0.03] overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      
      {/* Dynamic background glows */}
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[300px] rounded-full bg-red-500/[0.04] blur-[110px] pointer-events-none" />

      {/* 1. HEADER AND TITLE */}
      <div className="w-full max-w-6xl flex flex-col items-center text-center mb-16">
        <div className="bg-red-500/10 border border-red-500/30 px-4 py-1.5 rounded-full mb-4 flex items-center gap-2">
          <Sparkles size={12} className="text-red-500" />
          <span className="text-[10px] text-red-500 font-extrabold tracking-widest uppercase">EXCLUSIVE OFFER</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wide mb-3 leading-none">
          🎡 BONUS PROGRAMS &amp; <span className="text-red-500">VIP PERKS</span>
        </h2>
        <p className="text-xs md:text-sm text-white/50 max-w-xl leading-relaxed select-none">
          Claim instant cash registers, follow secure setup guidelines, and request quick settlements directly to your bank account.
        </p>
      </div>

      {/* 2. 3-COLUMN HIGH-FIDELITY GRID */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
        
        {/* COLUMN 1: BONUS PROGRAMS */}
        <div className="bg-[#0f111c]/60 backdrop-blur-md border border-white/5 rounded-3xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:border-red-500/20 hover:scale-[1.01] transition-all group">
          <div>
            {/* Visual banner image */}
            <div className="w-full aspect-[1.4] relative rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-md">
              <img src={imgJackpot} alt="G5.BET Welcome Bonus" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="text-[9px] text-red-400 font-extrabold tracking-wider uppercase">Mega Promotion</span>
                <h4 className="text-white text-sm font-black uppercase mt-0.5">GET A ₹500 SIGN-UP BONUS</h4>
              </div>
            </div>

            <h3 className="text-white text-lg font-black uppercase tracking-wider mb-4 flex items-center gap-2">
              💎 Exclusive Rewards
            </h3>
            
            <div className="text-xs md:text-sm text-white/60 leading-relaxed space-y-3 font-medium select-none mb-6">
              <p>
                <strong className="text-white">In addition to</strong> the standard gameplay, we offer exclusive rewards:
              </p>
              <p>
                <strong className="text-white">Initially</strong>, every new user gets a <strong className="text-yellow-400 font-extrabold">Free Mega Spin</strong> worth up to <strong className="text-yellow-400 font-extrabold">₹500</strong> upon registration.
              </p>
              <p>
                <strong className="text-white">Specifically</strong>, this bonus is credited instantly <strong className="text-red-400">to allow</strong> you to play without spending your own money.
              </p>
              <p>
                <strong className="text-white">Similarly</strong>, our VIP Club offers higher withdrawal limits <strong className="text-red-400">in order to</strong> serve high-stakes players better.
              </p>
              <p>
                <strong className="text-white">Meanwhile</strong>, the &ldquo;Refer &amp; Earn&rdquo; system provides a <strong className="text-white">lifetime commission</strong> for every friend you invite.
              </p>
              <p>
                <strong className="text-white">Therefore</strong>, you can build a steady stream of passive income <strong className="text-white">simply by</strong> sharing your link.
              </p>
            </div>
          </div>

          <a 
            href={downloadUrl}
            style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
            className="bg-gradient-to-br from-red-500 to-amber-600 text-white text-[10px] font-black tracking-widest py-3 px-6 hover:scale-105 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all uppercase flex items-center justify-center gap-2 cursor-pointer outline-none"
          >
            <Download size={13} />
            DOWNLOAD NOW
          </a>
        </div>

        {/* COLUMN 2: INSTALLATION GUIDE */}
        <div className="bg-[#0f111c]/60 backdrop-blur-md border border-white/5 rounded-3xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:border-red-500/20 hover:scale-[1.01] transition-all group">
          <div>
            {/* Visual G5 logo image */}
            <div className="w-full aspect-[1.4] relative rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-md">
              <img src={imgSpade} alt="G5.BET Step-by-Step Guide" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="text-[9px] text-red-400 font-extrabold tracking-wider uppercase">Android Setup</span>
                <h4 className="text-white text-sm font-black uppercase mt-0.5">G5.BET SECURITY LOGO</h4>
              </div>
            </div>

            <h3 className="text-white text-lg font-black uppercase tracking-wider mb-4 flex items-center gap-2">
              📲 Step-by-Step Installation Guide
            </h3>

            <div className="text-xs md:text-sm text-white/60 leading-relaxed space-y-3 font-medium select-none mb-6">
              <p>
                <strong className="text-white">To begin with</strong>, follow these instructions to get the app on your phone:
              </p>
              <div className="space-y-2 pt-1">
                <div className="flex gap-2">
                  <span className="text-red-500 font-black text-xs md:text-sm mt-0.5">Step 1:</span>
                  <p><strong className="text-white">Start by</strong> visiting <strong className="text-white underline">g5betdownload.com</strong> on your mobile browser.</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-red-500 font-black text-xs md:text-sm mt-0.5">Step 2:</span>
                  <p><strong className="text-white">Next</strong>, tap the &ldquo;Download Now&rdquo; button and click &ldquo;Download Anyway&rdquo; if a warning appears.</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-red-500 font-black text-xs md:text-sm mt-0.5">Step 3:</span>
                  <p><strong className="text-white">Subsequently</strong>, go to your phone Settings and enable <strong className="text-white">&ldquo;Install from Unknown Sources.&rdquo;</strong></p>
                </div>
                <div className="flex gap-2">
                  <span className="text-red-500 font-black text-xs md:text-sm mt-0.5">Step 4:</span>
                  <p><strong className="text-white">Afterward</strong>, open the APK file from your downloads folder and click <strong className="text-white">&ldquo;Install.&rdquo;</strong></p>
                </div>
                <div className="flex gap-2">
                  <span className="text-red-500 font-black text-xs md:text-sm mt-0.5">Step 5:</span>
                  <p><strong className="text-white">Finally</strong>, verify your mobile number via OTP <strong className="text-red-400">to claim</strong> your ₹500 welcome bonus.</p>
                </div>
              </div>
            </div>
          </div>

          <a 
            href={downloadUrl}
            style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
            className="bg-gradient-to-br from-red-500 to-amber-600 text-white text-[10px] font-black tracking-widest py-3 px-6 hover:scale-105 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all uppercase flex items-center justify-center gap-2 cursor-pointer outline-none"
          >
            <Download size={13} />
            DOWNLOAD NOW
          </a>
        </div>

        {/* COLUMN 3: WITHDRAWALS & EARNINGS */}
        <div className="bg-[#0f111c]/60 backdrop-blur-md border border-white/5 rounded-3xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:border-red-500/20 hover:scale-[1.01] transition-all group">
          <div>
            {/* Visual slot machine image */}
            <div className="w-full aspect-[1.4] relative rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-md">
              <img src={imgShop} alt="G5.BET Fast Withdrawals" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="text-[9px] text-red-400 font-extrabold tracking-wider uppercase">Swift Payouts</span>
                <h4 className="text-white text-sm font-black uppercase mt-0.5">INSTANT UPI &amp; BANK</h4>
              </div>
            </div>

            <h3 className="text-white text-lg font-black uppercase tracking-wider mb-4 flex items-center gap-2">
              💸 Fast Withdrawals &amp; Income
            </h3>

            <div className="text-xs md:text-sm text-white/60 leading-relaxed space-y-3 font-medium select-none mb-6">
              <p>
                <strong className="text-white">Regarding</strong> your hard-earned winnings, we offer the most efficient payout infrastructure in the industry.
              </p>
              <p>
                <strong className="text-white">For instance</strong>, you can move your cash via UPI, Paytm, or direct Bank Transfer.
              </p>
              <p>
                <strong className="text-white">Consequently</strong>, the funds typically hit your account within just <strong className="text-emerald-400 font-bold">5 to 10 minutes</strong>.
              </p>
              <p>
                <strong className="text-white">On the other hand</strong>, if you prefer to earn money without active play, you should utilize our &ldquo;Refer &amp; Earn&rdquo; ecosystem.
              </p>
              <p>
                <strong className="text-white">In fact</strong>, you will receive a permanent, <strong className="text-yellow-400 font-bold">lifetime commission</strong> for every single player you invite.
              </p>
              <p>
                <strong className="text-white">Hence</strong>, the larger your network becomes, the higher your daily passive income will be!
              </p>
            </div>
          </div>

          <a 
            href={downloadUrl}
            style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 15px) 100%, 0% 100%)' }}
            className="bg-gradient-to-br from-red-500 to-amber-600 text-white text-[10px] font-black tracking-widest py-3 px-6 hover:scale-105 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all uppercase flex items-center justify-center gap-2 cursor-pointer outline-none"
          >
            <Download size={13} />
            DOWNLOAD NOW
          </a>
        </div>

      </div>

      {/* 3. CENTURED BOTTOM BUTTON */}
      <a 
        href={downloadUrl}
        className="flex items-center gap-2.5 bg-red-500/10 border border-red-500/30 text-white text-xs font-black tracking-widest py-3.5 px-10 rounded-full hover:bg-red-500 hover:text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all uppercase cursor-pointer"
      >
        View All Services
        <ArrowRight size={14} />
      </a>

    </section>
  );
}
