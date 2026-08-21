import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Global Components
import Header from './components/Header';
import Footer from './components/Footer';
import DonationPortal from './components/DonationPortal';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Memorial from './pages/Memorial';

export default function App() {
  return (
    <div id="top">

      {/* Header on every page */}
      <Header />

      <main>
        <Routes>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Programs */}
          <Route path="/programs" element={<Programs />} />

          {/* Gallery / Images */}
          <Route path="/Gallery" element={<Gallery />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Memorial */}
          <Route path="/memorial" element={<Memorial />} />

        </Routes>
      </main>

      {/* Global Components */}
      <DonationPortal />
      <WhatsAppButton />

      <Footer />

    </div>
  );
}