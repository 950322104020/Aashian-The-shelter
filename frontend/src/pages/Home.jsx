import React from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import About from '../components/About';
import Programs from '../components/Programs';
import DonationPortal from '../components/DonationPortal';
import Contact from '../components/Contact';
import MediaGallery from '../components/MediaGallery';
import MapSection from '../components/MapSection';
import WhatsAppButton from '../components/WhatsAppButton';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div id="top">
      <Header />
      <HeroSlider />
      <About />
      <Programs />
      <DonationPortal />
      <MediaGallery />
      <Contact />
      <MapSection />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}