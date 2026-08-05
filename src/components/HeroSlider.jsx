import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Heart, ArrowRight } from 'lucide-react';

export default function HeroSlider() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop", // Nutrition / Community distribution image
      badge: "HIV Support Trust • Since 2011",
      title: "Building Dignity, One Family at a Time",
      desc: "Since 2011, Aashiana – The Shelter Trust has stood beside families living with HIV, offering nutrition, healthcare, education, and tools for independence.",
      ctaText: "Sponsor Nutrition",
      ctaLink: "#donate",
    },
    {
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1600&auto=format&fit=crop", // Children education classroom image
      badge: "Child Education NGO",
      title: "Empowering 54+ Children in School",
      desc: "Funding monthly tuition fees, school uniforms, and stationery kits to ensure children affected by HIV continue their education with dignity.",
      ctaText: "Support Education",
      ctaLink: "#programs",
    },
    {
      image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop", // Women craft / skill training image
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
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* Dark Gradient Overlay for Maximum Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 via-[#1E3A5F]/80 to-[#1E3A5F]/60" />

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