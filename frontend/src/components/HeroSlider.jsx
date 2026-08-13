import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Heart } from 'lucide-react';

export default function HeroSlider() {
  const slides = [
    {
      image: 'https://i.postimg.cc/BbywbX6G/family.jpg',
      title: 'Building Dignity, One Family at a Time',
      desc: 'Supporting families affected by HIV through nutrition, healthcare and education.',
      ctaText: 'Sponsor Nutrition',
      ctaLink: '#donate',
    },
    {
      image: 'https://i.postimg.cc/8zg6GNHd/children.jpg',
      title: 'Empowering Children Through Education',
      desc: 'Helping children affected by HIV continue their education with dignity.',
      ctaText: 'Support Education',
      ctaLink: '#programs',
    },
    {
      image: 'https://i.postimg.cc/c4Sx4HpG/women-empowerment.jpg',
      title: 'Skills That Create Independent Lives',
      desc: 'Empowering women through skills, financial literacy and livelihood opportunities.',
      ctaText: 'Meet the Artisans',
      ctaLink: '#programs',
    },
  ];

  return (
    <section className="relative bg-brandNavy text-white">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full"
      >

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            <div className="relative h-[750px] sm:h-[700px] lg:h-[850px] overflow-hidden">

              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-content
                  object-center
                  brightness-[0.98]
                  contrast-[1.02]
                  saturate-[1.05]
                "
              />

              {/* Very Light Image Overlay */}
              <div className="absolute inset-0 bg-black/5" />

              {/* Bottom Gradient - Only for Text Readability */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/75
                  via-black/20
                  to-transparent
                "
              />

              {/* Slide Content */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  z-10
                  px-5
                  sm:px-8
                  lg:px-16
                  pb-14
                  lg:pb-16
                "
              >

                <div className="max-w-2xl">

                  {/* Badge */}
                  <span
                    className="
                      inline-block
                      bg-brandGold/90
                      text-slate-900
                      px-3
                      py-1
                      rounded-full
                      text-[10px]
                      sm:text-xs
                      font-bold
                      tracking-wide
                      uppercase
                      mb-3
                    "
                  >
                    {slide.badge}
                  </span>

                  {/* Title */}
                  <h1
                    className="
                      text-3xl
                      sm:text-4xl
                      lg:text-5xl
                      font-extrabold
                      font-heading
                      text-white
                      tracking-tight
                      leading-[1.05]
                      mb-3
                      max-w-xl
                    "
                  >
                    {slide.title}
                  </h1>

                  {/* Short Description */}
                  <p
                    className="
                      text-white/90
                      text-sm
                      sm:text-base
                      max-w-lg
                      leading-relaxed
                      mb-5
                    "
                  >
                    {slide.desc}
                  </p>

                  {/* Single CTA Button */}
                  <a
                    href={slide.ctaLink}
                    className="
                      bg-brandRed
                      hover:bg-red-700
                      text-white
                      font-bold
                      px-6
                      py-3
                      rounded-full
                      shadow-lg
                      transition-all
                      text-xs
                      sm:text-sm
                      inline-flex
                      items-center
                      gap-2
                    "
                  >
                    <Heart className="w-4 h-4 fill-current" />

                    {slide.ctaText}
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