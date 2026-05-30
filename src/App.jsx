import React from 'react';
import Hero from './Pages/Homepage/Hero';
import Infomation from './Pages/Homepage/infomation';
import AllGames from './Pages/Homepage/allgames';
import Features from './Pages/Homepage/features';
import Vip from './Pages/Homepage/Vip';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="w-full min-h-screen m-0 p-0 overflow-x-hidden">
      {/* 1. Full-screen Redrex mockup landing hero banner */}
      <Hero />
      
      {/* 2. G5.BET premium guide details info section */}
      <Infomation />

      {/* 3. Nooksack-style casino games details list board */}
      <AllGames />

      {/* 4. Interactive modern G5.BET features and specifications tab section */}
      <Features />

      {/* 5. Three-column Bonus Programs & VIP Perks section */}
      <Vip />

      {/* 6. Premium modern site footer */}
      <Footer />
    </div>
  );
}
