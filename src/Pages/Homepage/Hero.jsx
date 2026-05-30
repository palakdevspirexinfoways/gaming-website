import React from 'react';
import Navbar from '../../components/Navbar';
import bgImage from '../../assets/cyber_spin_wheel_bg.png';
import heroVideo from '../../assets/hero.mp4';

export default function Hero() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home"
      className="relative w-screen min-h-[500px] md:min-h-[650px] flex flex-col justify-start overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
    >
      {/* Background Video with Poster Fallback */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={bgImage}
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark overlay gradient for text readability and cinematic mood */}
      <div 
        
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* 1. Spartan Navbar component */}
      <Navbar />

      {/* 2. Hero Center Contents */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-6 py-12 md:py-16 z-10">
        {/* Small subtitle tag */}
        <span className="text-sm font-extrabold text-white tracking-[4px] mb-3 opacity-90">
          Online Streaming Media
        </span>

        {/* Huge outline title */}
        <h2 
          style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.9), 0 0 35px rgba(239, 68, 68, 0.55)' }}
          className="text-5xl md:text-7xl font-black text-white tracking-wide uppercase mb-4 leading-[1.05]"
        >
          VIDEO GAMES ONLINE
        </h2>

        {/* Gray paragraph description styling */}
        <p className="text-xs md:text-sm leading-relaxed text-white/60 max-w-2xl mb-11 select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel.
        </p>

        {/* Dual Parallelogram Buttons (BUY THEME and MEET US) */}
        <div className="flex gap-5">
          
          {/* BUY THEME Button (Glowing Red Fill) */}
          <button 
            onClick={() => handleScroll('wheel-section')}
            style={{ clipPath: 'polygon(15px 0%, 100% 0%, calc(100% - 15px) 100%, 0% 100%)' }}
            className="bg-gradient-to-br from-red-500 to-amber-600 border-none text-white text-[11px] font-black tracking-widest py-3.5 px-10 cursor-pointer shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:scale-105 hover:shadow-[0_0_30px_rgba(239,68,68,0.7)] transition-all outline-none uppercase"
          >
            BUY THEME
          </button>

          {/* MEET US Button (Glowing White Parallelogram Border) */}
          <button 
            onClick={() => handleScroll('quests-section')}
            style={{ clipPath: 'polygon(15px 0%, 100% 0%, calc(100% - 15px) 100%, 0% 100%)' }}
            className="bg-white/5 border border-white/80 text-white text-[11px] font-black tracking-widest py-3.5 px-10 cursor-pointer hover:scale-105 hover:border-red-500 hover:bg-red-500/10 transition-all outline-none uppercase"
          >
            MEET US
          </button>

        </div>
      </div>

    </section>
  );
}
