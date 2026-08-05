import React from 'react';

const mediaItems = [
  { title: "Awareness Campaign 2026", cat: "Events", image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?auto=format&fit=crop&w=800&q=80" },
  { title: "Free Health Screening Camp", cat: "Medical Camps", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" },
  { title: "Community Counseling Session", cat: "Support", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80" }
];

export default function MediaGallery() {
  return (
    <section id="gallery" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-brandRed font-bold text-xs uppercase tracking-widest">Media & Highlights</span>
          <h2 className="font-heading font-extrabold text-3xl text-brandNavy mt-2">Impact Gallery</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mediaItems.map((item, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-md h-64">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <span className="text-brandGold text-xs font-semibold">{item.cat}</span>
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}