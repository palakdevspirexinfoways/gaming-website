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
      <style>
        {`
          @keyframes jabuk {
            0%, 100% { filter: brightness(1); box-shadow: 0 0 30px rgba(239,68,68,0.6); transform: scale(1); }
            50% { filter: brightness(1.6); box-shadow: 0 0 80px rgba(255,255,255,0.9), 0 0 40px rgba(239,68,68,1); transform: scale(1.05); }
          }
        `}
      </style>
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

        {/* Animated Download Button */}
        <a 
          href="https://g5.bet/g5_release.apk?referrer=706169642533446b62673977332532366368616e6e656c2533444735"
          style={{ 
            clipPath: 'polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)',
            animation: 'jabuk 0.5s infinite'
          }}
          className="bg-gradient-to-br from-red-600 to-amber-500 border-none text-white text-lg md:text-xl font-black tracking-[0.2em] py-5 px-14 cursor-pointer outline-none uppercase flex items-center justify-center gap-3"
        >
          DOWNLOAD NOW
        </a>
      </div>

    </section>
  );
}
