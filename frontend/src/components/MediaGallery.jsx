import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const mediaItems = [
  { title: "Awareness Campaign 2026", cat: "Events", image: "https://i.postimg.cc/mDS45xww/gl1-(1).jpg" },
  { title: "Free Health Screening Camp", cat: "Medical Camps", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" },
  { title: "Community Counseling Session", cat: "Support", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80" },
  { title: "Nutrition Ration Distribution", cat: "Nutrition", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80" }
];

// Duplicate items to ensure a seamless infinite marquee scroll
const duplicatedItems = [...mediaItems, ...mediaItems];

export default function MediaGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [direction, setDirection] = useState(1); // 1 for next (right to left slide), -1 for prev

  const openImage = (index) => {
    // Map back to original mediaItems index space
    setSelectedIndex(index % mediaItems.length);
  };

  const closeImage = () => setSelectedIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setDirection(-1);
    setSelectedIndex((prev) => (prev === null ? 0 : (prev + mediaItems.length - 1) % mediaItems.length));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setDirection(1);
    setSelectedIndex((prev) => (prev === null ? 1 : (prev + 1) % mediaItems.length));
  };

  const selectedItem = selectedIndex !== null ? mediaItems[selectedIndex] : null;

  // Modal slide animations
  const modalVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 }
    })
  };

  return (
    <section id="gallery" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <span className="text-brandRed font-bold text-xs uppercase tracking-widest">Media & Highlights</span>
        <h2 className="font-heading font-extrabold text-3xl text-brandNavy mt-2">Impact Gallery</h2>
      </div>

      {/* Infinite Horizontal Carousel Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max cursor-pointer"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: 'paused' }} // Pauses marquee on hover
        >
          {duplicatedItems.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => openImage(idx)}
              className="group relative rounded-2xl overflow-hidden shadow-md h-64 w-80 md:w-96 flex-shrink-0 text-left focus:outline-none"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <span className="text-brandGold text-xs font-semibold">{item.cat}</span>
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
              </div>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal with Slide Transitions */}
      <AnimatePresence initial={false} custom={direction}>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >
            <div className="relative w-full max-w-4xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                type="button"
                onClick={closeImage}
                className="absolute -top-12 right-0 z-20 rounded-full bg-white/90 w-10 h-10 flex items-center justify-center text-xl font-bold text-slate-800 shadow-lg hover:bg-white transition"
              >
                ✕
              </button>

              {/* Prev Button */}
              <button
                type="button"
                onClick={showPrev}
                className="absolute left-2 md:-left-12 z-20 rounded-full bg-white/90 w-10 h-10 flex items-center justify-center text-xl font-bold text-slate-800 shadow-lg hover:bg-white transition"
              >
                ←
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={showNext}
                className="absolute right-2 md:-right-12 z-20 rounded-full bg-white/90 w-10 h-10 flex items-center justify-center text-xl font-bold text-slate-800 shadow-lg hover:bg-white transition"
              >
                →
              </button>

              {/* Sliding Image Modal Container */}
              <div className="overflow-hidden rounded-2xl w-full flex justify-center items-center">
                <motion.img
                  key={selectedIndex}
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  custom={direction}
                  variants={modalVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}