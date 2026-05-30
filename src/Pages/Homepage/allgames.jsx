import React from 'react';
import imgRoulette from '../../assets/allgames_roulette.png';
import imgChips from '../../assets/allgames_chips_cards.png';

export default function AllGames() {
    return (
        <section id="specifications" className="relative w-screen flex flex-col bg-[#06080c] overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">

            {/* 1. TOP HEADER SECTION (All Games Here!) */}
            <div className="w-full bg-[#0a0c10] py-14 px-6 text-center border-b border-white/[0.02]">
                <h2 className="text-white text-3xl font-serif tracking-wide mb-3">
                    🎰 G5.BET SPECIFICATIONS
                </h2>
                <p className="text-gray-300 text-xs md:text-sm italic font-serif max-w-xl mx-auto opacity-90">
                    App Name: G5.BET Official APK | File Size: 22.5 MB | Latest Version: v2.1.0 (Live)
                </p>

                {/* Card Divider */}
                <div className="flex items-center justify-center gap-4 my-4 max-w-xs mx-auto">
                    <span className="h-[1px] bg-white/15 flex-1" />
                    <span className="text-white/70 text-base">📱</span>
                    <span className="h-[1px] bg-white/15 flex-1" />
                </div>

                <p className="text-gray-500 text-xs md:text-sm italic font-serif mt-2">
                    Get an instant ₹500 welcome cash bonus on registration now!
                </p>
            </div>

            {/* 2. MIDDLE ROW (How it All Started / Roulette Image) */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2">
                {/* Left Text Column */}
                <div className="bg-gradient-to-br from-[#2b0849] to-[#120024] flex flex-col items-center justify-center py-16 px-8 md:px-12 text-center min-h-[360px]">
                    <h3 className="text-white text-2xl font-serif tracking-wide mb-4">
                        🔥 Platform Benefits &amp; Games
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm italic font-serif leading-relaxed max-w-md">
                        G5.BET is completely redesigned for 2026. We host over 50+ games including Rummy, Teen Patti, and Dragon vs Tiger. The app features a neo-brutalist interface so that users can navigate the menus with zero confusion. 256-bit SSL encryption ensures your financial transactions and data are protected.
                    </p>

                    {/* Divider */}
                    <div className="flex items-center justify-center gap-4 my-5 w-1/3">
                        <span className="h-[1px] bg-white/25 flex-1" />
                        <span className="text-white/60 text-xs">🪙</span>
                        <span className="h-[1px] bg-white/25 flex-1" />
                    </div>

                    {/* Download Button */}
                    <a 
                        href="https://www.g5.bet/65609024"
                        style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
                        className="bg-gradient-to-br from-red-500 to-amber-600 text-white text-[10px] font-black tracking-widest py-3 px-8 hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all uppercase outline-none"
                    >
                        DOWNLOAD NOW
                    </a>
                </div>

                {/* Right Image Column */}
                <div className="w-full  h-auto">
                    <img
                        src={imgRoulette}
                        alt="Roulette Close Up"
                        className="w-full max-h-[500px] object-cover object-center block"
                    />
                </div>
            </div>

            {/* 3. BOTTOM ROW (Chips Image / We're Awesome Text) */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2">
                {/* Left Image Column */}
                <div className="w-full h-fauto min-h-[300px] order-2 md:order-1">
                    <img
                        src={imgChips}
                        alt="Poker Chips & Cards"
                        className="w-full max-h-[500px] object-cover object-center block"
                    />
                </div>

                {/* Right Text Column */}
                <div className="bg-[#0a0c10] flex flex-col items-center justify-center py-16 px-8 md:px-12 text-center min-h-[360px] order-1 md:order-2">
                    <h3 className="text-white text-2xl font-serif tracking-wide mb-4">
                        💸 Fast Withdrawals &amp; Earn
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm italic font-serif leading-relaxed max-w-md">
                        Regarding your hard-earned winnings, G5.BET offers instant withdrawals via UPI, Paytm, or direct Bank Transfer. Funds typically hit your account in 5 to 10 minutes. Alternatively, build daily passive income by inviting friends via our Refer &amp; Earn system and get a permanent lifetime commission!
                    </p>

                    {/* Divider */}
                    <div className="flex items-center justify-center gap-4 my-5 w-1/3">
                        <span className="h-[1px] bg-white/15 flex-1" />
                        <span className="text-white/60 text-xs">💎</span>
                        <span className="h-[1px] bg-white/15 flex-1" />
                    </div>

                    {/* Download Button */}
                    <a 
                        href="https://www.g5.bet/65609024"
                        style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
                        className="bg-gradient-to-br from-red-500 to-amber-600 text-white text-[10px] font-black tracking-widest py-3 px-8 hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all uppercase outline-none"
                    >
                        DOWNLOAD NOW
                    </a>
                </div>
            </div>

        </section>
    );
}
