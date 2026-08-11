import React from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import About from '../components/About';
import StatsCounter from '../components/StatsCounter';
import Programs from '../components/Programs';
import DonationPortal from '../components/DonationPortal';
import Contact from '../components/Contact';
import MediaGallery from '../components/MediaGallery';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div id="top">
      <Header />
      <HeroSlider />
      <About />
      <StatsCounter />
      <Programs />
      <DonationPortal />
      <MediaGallery />
      <Contact />
      <Footer />
    </div>
  );
}