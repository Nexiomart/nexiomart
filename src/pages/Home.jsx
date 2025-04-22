import React from 'react';
import Hero from '../components/Hero';
import WhyJoin from '../components/WhyJoin';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyJoin />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;