import React from 'react';
import Hero from '../components/Hero';
import WhyJoin from '../components/WhyJoin';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import MarketOpportunitySection from '../components/MarketOpportunitySection';
import VideoCard from '../components/VideoCard';
import HowWeHelp from '../components/HowWeHelp';


const Home = () => {
  return (
    <div>
      <Hero />
      <WhyJoin />
      <Testimonials />
      <VideoCard/>
      <MarketOpportunitySection/>
      <FAQ />
      <HowWeHelp/>
    </div>
  );
};

export default Home;