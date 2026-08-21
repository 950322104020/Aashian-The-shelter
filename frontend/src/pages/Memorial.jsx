import React from 'react';

export default function Memorial() {
  const images = [
    '/memorial_1.jpg',
    '/memorial_2.jpg',
    '/memorial_3.jpg',
    '/memorial_4.jpg'
  ];

  return (
    <section id="memorial" className="py-20 bg-brandNavy min-h-[85vh] flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 text-center w-full">

        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-12 tracking-tight">
          In Loving Memory
        </h2>

        {/* Well-aligned responsive image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center max-w-5xl mx-auto">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-2xl bg-slate-800 aspect-square w-full max-w-[240px] mx-auto border border-white/10 hover:border-brandGold/30 transition-all duration-300 hover:scale-[1.03]"
            >
              <img
                src={img}
                alt={`Memorial ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
