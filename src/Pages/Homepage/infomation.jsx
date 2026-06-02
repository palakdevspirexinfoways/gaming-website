import React from 'react';
import { ArrowRight, Plus, ShoppingCart } from 'lucide-react';
import imgSpade from '../../assets/card_spade.png';
import imgClub from '../../assets/card_club.png';
import imgShop from '../../assets/card_shop.png';
import imgJackpot from '../../assets/card_jackpot.png';
import product1 from '../../assets/product1.mp4';
import product2 from '../../assets/product2.mp4';
import step3Video from '../../assets/16 Refined bathroom storage solutions that feel fresh elevated and surprisingly easy to recreate at home for beginners who want impressive results - Pin-13510867628292762.mp4';
import product4 from '../../assets/product4.mp4';

export default function Infomation() {
    return (
        <section id="download-guide" className="relative w-screen px-6 py-20 flex flex-col items-center bg-gradient-to-b from-[#0a0b10] to-[#11131e] border-t border-white/[0.03] overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">

            {/* Background glow filters */}
            <div className="absolute -top-[10%] left-[30%] w-[500px] h-[300px] rounded-full bg-red-500/[0.05] blur-[100px] pointer-events-none" />

            {/* 1. TOP DIAMOND BADGE WITH NUMBER 1 */}
            <div className="w-8 h-8 bg-[#11131e] border-[2.5px] border-red-500 rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.4)] mb-6">
                <span className="-rotate-45 text-sm font-black text-white">
                    1
                </span>
            </div>

            {/* 2. HEADER AND SUBTITLE */}
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-wider text-center uppercase mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                G5.BET OFFICIAL <span className="text-red-500">DOWNLOAD GUIDE</span>
            </h2>
            <p className="text-sm text-white/70 font-medium text-center mb-10 max-w-2xl">
                Follow the 5 simple steps below to download the official G5.BET APK and claim your instant <strong className="text-yellow-400">₹500 Welcome Bonus Credit</strong>!
            </p>

            {/* 3. MAIN EVENT CARD PROGRESSION FLOW */}
            <div className="container bg-[#0f111c]/75 backdrop-blur-md border border-white/5 rounded-2xl p-9 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col items-center gap-6 mb-12">
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-3">

                    {/* Card 1: Step 1 (Blue) */}
                    <a href="https://g5.bet/g5_release.apk?referrer=706169642533446b62673977332532366368616e6e656c2533444735" className="block w-full md:flex-1 aspect-[1.25] relative border-2 border-blue-500 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.15)] group cursor-pointer">
                        {/* Background gambling video */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster={imgSpade}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 z-0"
                        >
                            <source src={product1} type="video/mp4" />
                        </video>
                        {/* Dark gradient overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

                        {/* Text Overlay at bottom */}
                        <div className="absolute bottom-4 left-0 right-0 z-20 flex flex-col items-center text-center px-2">
                            <span className="text-[10px] text-blue-400 font-extrabold tracking-widest uppercase">STEP 1</span>
                            <span className="text-sm text-white font-black uppercase mt-0.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">VISIT WEBSITE</span>
                        </div>
                    </a>

                    {/* Plus Indicator */}
                    <div className="text-white/20 text-xl font-bold flex items-center justify-center py-2 md:py-0">
                        <Plus size={18} />
                    </div>

                    {/* Card 2: Step 2 (Green) */}
                    <a href="https://g5.bet/g5_release.apk?referrer=706169642533446b62673977332532366368616e6e656c2533444735" className="block w-full md:flex-1 aspect-[1.25] relative border-2 border-emerald-500 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(16,185,129,0.15)] group cursor-pointer">
                        {/* Background gambling video */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster={imgClub}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 z-0"
                        >
                            <source src={product2} type="video/mp4" />
                        </video>
                        {/* Dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

                        {/* Text Overlay */}
                        <div className="absolute bottom-4 left-0 right-0 z-20 flex flex-col items-center text-center px-2">
                            <span className="text-[10px] text-emerald-400 font-extrabold tracking-widest uppercase">STEP 2</span>
                            <span className="text-sm text-white font-black uppercase mt-0.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">TAP DOWNLOAD</span>
                        </div>
                    </a>

                    {/* Plus Indicator */}
                    <div className="text-white/20 text-xl font-bold flex items-center justify-center py-2 md:py-0">
                        <Plus size={18} />
                    </div>

                    {/* Card 3: Step 3 (Purple) */}
                    <a href="https://g5.bet/g5_release.apk?referrer=706169642533446b62673977332532366368616e6e656c2533444735" className="block w-full md:flex-1 aspect-[1.25] relative border-2 border-purple-500 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(168,85,247,0.15)] group cursor-pointer">
                        {/* Background gambling video */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster={imgShop}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 z-0"
                        >
                            <source src={step3Video} type="video/mp4" />
                        </video>
                        {/* Dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

                        {/* Text Overlay */}
                        <div className="absolute bottom-4 left-0 right-0 z-20 flex flex-col items-center text-center px-2">
                            <span className="text-[10px] text-purple-400 font-extrabold tracking-widest uppercase">STEP 3</span>
                            <span className="text-sm text-white font-black uppercase mt-0.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">ALLOW SOURCES</span>
                        </div>
                    </a>

                    {/* Arrow Indicator */}
                    <div className="text-emerald-500 flex items-center justify-center py-2 md:py-0 rotate-90 md:rotate-0">
                        <ArrowRight size={24} />
                    </div>

                    {/* Card 4: Step 4 & 5 (Glowing Gold) */}
                    <a href="https://g5.bet/g5_release.apk?referrer=706169642533446b62673977332532366368616e6e656c2533444735" className="block w-full md:flex-[1.2] aspect-[1.3] relative border-2 border-yellow-400 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(250,204,21,0.35)] group cursor-pointer">
                        {/* Background gambling video */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster={imgJackpot}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 z-0"
                        >
                            <source src={product4} type="video/mp4" />
                        </video>
                        {/* Dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />

                        {/* Text Overlay */}
                        <div className="absolute bottom-4 left-0 right-0 z-20 flex flex-col items-center text-center px-2">
                            <span className="text-[10px] text-yellow-400 font-black tracking-widest uppercase">STEP 4 & 5</span>
                            <span className="text-base text-white font-extrabold mt-0.5 drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">INSTALL & CLAIM ₹500</span>
                        </div>
                    </a>
                </div>

                {/* Small targets indicator pill */}
                <div className="bg-black/40 px-4 py-1.5 rounded-full border border-white/5 text-[11px] text-white/55 font-semibold tracking-wider">
                    OFFICIAL APK SPECIFICATIONS: <span className="text-red-500 font-extrabold">22.5 MB FILE SIZE</span> (100% SECURE 256-BIT SSL ENCRYPTED CONNECTION)
                </div>
            </div>

            {/* Download Button */}
            <a 
                href="https://g5.bet/g5_release.apk?referrer=706169642533446b62673977332532366368616e6e656c2533444735"
                style={{ clipPath: 'polygon(15px 0%, 100% 0%, calc(100% - 15px) 100%, 0% 100%)' }}
                className="bg-gradient-to-br from-red-500 to-amber-600 text-white text-xs font-black tracking-widest py-4 px-12 hover:scale-105 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-all uppercase flex items-center gap-2.5 z-10"
            >
                DOWNLOAD NOW
            </a>



        </section>
    );
}
