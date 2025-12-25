import React from 'react';
import Hero from '../components/Hero';
import MissionVision from '../components/MissionVision';
import LogoRequestBanner from '../components/LogoRequestBanner';
import SearchWidget from '../components/SearchWidget';
import QatarMap from '../components/QatarMap';
import SuccessStories from '../components/SuccessStories';
import TradeEvents from '../components/TradeEvents';
import CTAStrip from '../components/CTAStrip';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <MissionVision />
      <LogoRequestBanner />
      <SuccessStories />
      <SearchWidget />
      <QatarMap />
      <TradeEvents />
      <CTAStrip />
    </main>
  );
};

export default Home;

