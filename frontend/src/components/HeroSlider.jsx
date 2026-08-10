import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Heart, ArrowRight } from 'lucide-react';

export default function HeroSlider() {
  const slides = [
    {
      image: "https://i.postimg.cc/BbywbX6G/family.jpg", // Nutrition / Community distribution image
      badge: "HIV Support Trust • Since 2011",
      title: "Building Dignity, One Family at a Time",
      desc: "Since 2011, Aashiana – The Shelter Trust has stood beside families living with HIV, offering nutrition, healthcare, education, and tools for independence.",
      ctaText: "Sponsor Nutrition",
      ctaLink: "#donate",
    },
    {
      image: "https://i.postimg.cc/8zg6GNHd/children.jpg", // Children education classroom image
      badge: "Child Education NGO",
      title: "Empowering 54+ Children in School",
      desc: "Funding monthly tuition fees, school uniforms, and stationery kits to ensure children affected by HIV continue their education with dignity.",
      ctaText: "Support Education",
      ctaLink: "#programs",
    },
    {
      image: "https://i.postimg.cc/c4Sx4HpG/women-empowerment.jpg", // Women craft / skill training image
      badge: "Women Empowerment",
      title: "Skill Training & Independent Livelihoods",
      desc: "Empowering women through jewellery-making, tailoring, financial literacy, and self-help savings groups.",
      ctaText: "Meet the Artisans",
      ctaLink: "#programs",
    }
  ];

  return (
    <section className="relative bg-brandNavy text-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full min-h-[520px] lg:min-h-[600px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative min-h-[520px] lg:min-h-[600px] flex items-center justify-center px-6 overflow-hidden">
              
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.92] contrast-[1.05] saturate-[1.05]"
              />

              {/* Soft overlay to keep text readable without overpowering the image */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/25 via-slate-900/10 to-slate-950/20" />

              {/* Slide Content */}
              <div className="max-w-4xl mx-auto text-center py-16 z-10 relative">
                <span className="bg-brandGold/20 border border-brandGold/40 text-brandGold px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 inline-block backdrop-blur-sm">
                  {slide.badge}
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight mb-6">
                  {slide.title}
                </h1>
                <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  {slide.desc}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={slide.ctaLink}
                    className="bg-brandRed hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition-all text-sm flex items-center gap-2"
                  >
                    <Heart className="w-4 h-4 fill-current" />
                    <span>{slide.ctaText}</span>
                  </a>
                  <a
                    href="#about"
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-3.5 rounded-full transition-all text-sm flex items-center gap-2 backdrop-blur-sm"
                  >
                    <span>Read Our Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}