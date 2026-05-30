import React, { useState } from 'react';
import { Search, Menu, Gamepad2, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'HOME', id: 'home' },
    { name: 'DOWNLOAD GUIDE', id: 'download-guide' },
    { name: 'SPECIFICATIONS', id: 'specifications' },
    { name: 'FEATURES', id: 'features' },
    { name: 'VIP PERKS', id: 'vip-perks' }
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav className="w-full flex items-center justify-between px-6 md:px-12 py-6 bg-gradient-to-b from-[#0a0b10]/95 to-transparent z-50 absolute top-0 left-0">
        {/* Left Side Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleScroll('home')}>
          <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.6)] text-white">
            <Gamepad2 size={20} />
          </div>
          <span className="text-2xl font-black tracking-wide text-white">
            Redrex<span className="text-red-500">.</span>
          </span>
        </div>

        {/* Center Navigation Links (mapped dynamically to actual page sections) */}
        <div className="hidden lg:flex gap-8 items-center">
          {links.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(link.id);
              }}
              className="text-[11px] font-extrabold tracking-widest text-white/85 hover:text-red-500 transition-colors outline-none uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side Header Items */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Search Icon */}
          <button className="bg-transparent border-none text-white/70 hover:text-white cursor-pointer outline-none transition-colors">
            <Search size={18} />
          </button>

          <span className="hidden sm:block h-4 w-[1px] bg-white/20" />

          {/* Hexagonal Clipped SIGN IN Button */}
          <button 
            style={{ clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)' }}
            className="hidden sm:block bg-transparent border border-white/60 text-white text-[11px] font-extrabold tracking-widest py-2.5 px-7 cursor-pointer hover:border-red-500 hover:bg-red-500/15 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all outline-none"
          >
            SING IN
          </button>

          {/* Hamburger Menu Lines */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden bg-transparent border-none text-white hover:text-red-500 cursor-pointer outline-none transition-colors p-1 z-50 relative"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Dark backdrop overlay when menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed inset-y-0 right-0 w-full max-w-[300px] bg-[#0a0b10]/98 backdrop-blur-2xl border-l border-white/10 z-45 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out flex flex-col p-8 pt-24 lg:hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]`}
      >
        <div className="flex flex-col gap-6">
          {links.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                handleScroll(link.id);
              }}
              className="text-sm font-extrabold tracking-widest text-white/85 hover:text-red-500 transition-colors outline-none uppercase py-2 border-b border-white/[0.03]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button inside mobile menu */}
        <div className="mt-8">
          <button 
            style={{ clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)' }}
            className="w-full bg-gradient-to-r from-red-500 to-amber-600 border-none text-white text-[11px] font-black tracking-widest py-3.5 px-7 cursor-pointer hover:scale-105 transition-all outline-none"
          >
            SING IN
          </button>
        </div>
      </div>
    </>
  );
}
