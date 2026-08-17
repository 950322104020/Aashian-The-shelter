import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay
} from 'swiper/modules';
import { Heart } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HeroSlider() {

  const slides = [
    {
      image: 'https://i.postimg.cc/BbywbX6G/family.jpg',

      title: 'Building Dignity, One Family at a Time',

      desc:
        'Supporting families affected by HIV through nutrition, healthcare and education.',

      ctaText: 'Sponsor Nutrition',

      ctaLink: '/contact'
    },

    {
      image: 'https://i.postimg.cc/8zg6GNHd/children.jpg',

      title: 'Empowering Children Through Education',

      desc:
        'Helping children affected by HIV continue their education with dignity.',

      ctaText: 'Support Education',

      ctaLink: '/programs'
    },

    {
      image: 'https://i.postimg.cc/c4Sx4HpG/women-empowerment.jpg',

      title: 'Skills That Create Independent Lives',

      desc:
        'Empowering women through skills, financial literacy and livelihood opportunities.',

      ctaText: 'Meet the Artisans',

      ctaLink: '/programs'
    }
  ];

  return (

    <section className="relative bg-brandNavy text-white">

      <Swiper

        modules={[
          Navigation,
          Pagination,
          Autoplay
        ]}

        navigation

        pagination={{
          clickable: true
        }}

        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}

        loop={true}

        className="w-full"

      >

        {slides.map((slide, index) => (

          <SwiperSlide key={index}>

            {/* HERO HEIGHT */}

            <div className="
              relative
              h-[calc(100vh-90px)]
              min-h-[600px]
              max-h-[850px]
              overflow-hidden
            ">

              {/* BACKGROUND IMAGE */}

              <img

                src={slide.image}

                alt={slide.title}

                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  object-center
                  brightness-[0.98]
                  contrast-[1.02]
                  saturate-[1.05]
                "

              />

              {/* LIGHT OVERLAY */}

              <div className="
                absolute
                inset-0
                bg-black/10
              " />

              {/* BOTTOM GRADIENT */}

              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/75
                via-black/20
                to-transparent
              " />

              {/* CONTENT */}

              <div className="
                absolute
                inset-x-0
                bottom-0
                z-10
                px-5
                sm:px-8
                lg:px-16
                pb-16
                lg:pb-20
              ">

                <div className="max-w-2xl">

                  {/* TITLE */}

                  <h1 className="
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-extrabold
                    font-heading
                    text-white
                    tracking-tight
                    leading-[1.05]
                    mb-4
                    max-w-xl
                  ">

                    {slide.title}

                  </h1>

                  {/* DESCRIPTION */}

                  <p className="
                    text-white/90
                    text-sm
                    sm:text-base
                    lg:text-lg
                    max-w-lg
                    leading-relaxed
                    mb-6
                  ">

                    {slide.desc}

                  </p>

                  {/* CTA */}

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

                    <Heart
                      className="w-4 h-4 fill-current"
                    />

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