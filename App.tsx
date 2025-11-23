import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import LogoRequestBanner from './components/LogoRequestBanner';
import SearchWidget from './components/SearchWidget';
import QatarMap from './components/QatarMap';
import SuccessStories from './components/SuccessStories';
import TradeEvents from './components/TradeEvents';
import CTAStrip from './components/CTAStrip';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      <Header />
      <main>
        <Hero />
        <MissionVision />
        <LogoRequestBanner />
        <SearchWidget />
        <QatarMap />
        <SuccessStories />
        <TradeEvents />
        <CTAStrip />
      </main>
      <Footer />
    </div>
  );
}

export default App;