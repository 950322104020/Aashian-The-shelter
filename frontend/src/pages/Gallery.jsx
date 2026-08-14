import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const mediaItems = [
    {
        title: "Tourism",
        image: "https://i.postimg.cc/C5YvPKhG/gl1-1-gallery.jpg"
    },
    {
        title: "Food ",
        image: "https://i.postimg.cc/4497w1jZ/IMG-6016-gallery.jpg"
    },
    {
        title: "Rashan Stock",
        image: "https://i.postimg.cc/63T679JH/IMG-0439-gallery.jpg"
    },
    {
        title: "Community Counseling Session",
        image: "https://i.postimg.cc/43ghhHBL/000066090006-gallery.jpg"
    },
    {
        title: "Skill Development support",
        image: "https://i.postimg.cc/VvjxvT6D/laptop1-gallery.jpg"
    },
    {
        title: "Festival Celebration",
        image: "https://i.postimg.cc/htRs4vW8/glry1.jpg"
    },
    {
        title: "Rashan Distribution",
        image: "https://i.postimg.cc/SRN6YYQB/IMG-6009-gallery.jpg"
    },
    {
        title: "Happy Moments",
        image: "https://i.postimg.cc/HsLGdSmw/IMG-6017-gallery.jpg"
    }
];

// Duplicate items to ensure a seamless infinite marquee scroll
const duplicatedItems = [...mediaItems, ...mediaItems];

export default function MediaGallery() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [direction, setDirection] = useState(1);

    const openImage = (index) => {
        setSelectedIndex(index % mediaItems.length);
    };

    const closeImage = () => {
        setSelectedIndex(null);
    };

    const showPrev = (e) => {
        e.stopPropagation();

        setDirection(-1);

        setSelectedIndex((prev) =>
            prev === null
                ? 0
                : (prev + mediaItems.length - 1) % mediaItems.length
        );
    };

    const showNext = (e) => {
        e.stopPropagation();

        setDirection(1);

        setSelectedIndex((prev) =>
            prev === null
                ? 1
                : (prev + 1) % mediaItems.length
        );
    };

    const selectedItem =
        selectedIndex !== null
            ? mediaItems[selectedIndex]
            : null;

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
            transition: {
                duration: 0.3
            }
        },

        exit: (direction) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.2
            }
        })
    };

    return (
        <section
            id="gallery"
            className="py-20 bg-white overflow-hidden"
        >

            {/* ================= HEADER ================= */}

            <div className="max-w-7xl mx-auto px-4 mb-12 text-center">

                <span className="text-brandRed font-bold text-xs uppercase tracking-widest">
                    Media & Highlights
                </span>

                <h2 className="font-heading font-extrabold text-3xl text-brandNavy mt-2">
                    Impact Gallery
                </h2>

            </div>


            {/* ================= INFINITE CAROUSEL ================= */}

            <div className="relative w-full overflow-hidden">

                <motion.div
                    className="flex gap-6 w-max cursor-pointer"
                    animate={{
                        x: ['0%', '-50%']
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 20,
                        repeat: Infinity
                    }}
                    whileHover={{
                        animationPlayState: 'paused'
                    }}
                >

                    {duplicatedItems.map((item, idx) => (

                        <button
                            key={idx}
                            type="button"
                            onClick={() => openImage(idx)}
                            className="
                group
                relative
                rounded-2xl
                overflow-hidden
                shadow-md
                w-80
                md:w-96
                aspect-[4/3]
                flex-shrink-0
                text-left
                focus:outline-none
                bg-slate-900
              "
                        >

                            {/* ================= BLURRED BACKGROUND ================= */}

                            <img
                                src={item.image}
                                alt=""
                                aria-hidden="true"
                                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  scale-110
                  blur-xl
                  opacity-50
                "
                            />

                            {/* Dark subtle overlay */}

                            <div
                                className="
                  absolute
                  inset-0
                  bg-black/10
                  z-[1]
                "
                            />


                            {/* ================= FULL IMAGE ================= */}

                            <img
                                src={item.image}
                                alt={item.title}
                                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-contain
                  z-[2]
                  transition-transform
                  duration-500
                  group-hover:scale-[1.02]
                "
                            />


                            {/* ================= BOTTOM TEXT OVERLAY ================= */}

                            <div
                                className="
                  absolute
                  inset-x-0
                  bottom-0
                  z-[3]
                  bg-gradient-to-t
                  from-black/80
                  via-black/30
                  to-transparent
                  p-6
                  pt-16
                  flex
                  flex-col
                  justify-end
                "
                            >

                                <span className="text-brandGold text-xs font-semibold">
                                    {item.cat}
                                </span>

                                <h3 className="text-white font-bold text-lg">
                                    {item.title}
                                </h3>

                            </div>

                        </button>

                    ))}

                </motion.div>

            </div>


            {/* ================= LIGHTBOX MODAL ================= */}

            <AnimatePresence
                initial={false}
                custom={direction}
            >

                {selectedItem && (

                    <motion.div
                        className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-black/85
              px-4
              py-6
              backdrop-blur-sm
            "
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        exit={{
                            opacity: 0
                        }}
                        onClick={closeImage}
                    >

                        <div
                            className="
                relative
                w-full
                max-w-5xl
                flex
                items-center
                justify-center
              "
                            onClick={(e) => e.stopPropagation()}
                        >

                            {/* ================= CLOSE BUTTON ================= */}

                            <button
                                type="button"
                                onClick={closeImage}
                                className="
                  absolute
                  -top-12
                  right-0
                  z-20
                  rounded-full
                  bg-white/90
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  text-xl
                  font-bold
                  text-slate-800
                  shadow-lg
                  hover:bg-white
                  transition
                "
                            >
                                ✕
                            </button>


                            {/* ================= PREVIOUS BUTTON ================= */}

                            <button
                                type="button"
                                onClick={showPrev}
                                className="
                  absolute
                  left-2
                  md:-left-12
                  z-20
                  rounded-full
                  bg-white/90
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  text-xl
                  font-bold
                  text-slate-800
                  shadow-lg
                  hover:bg-white
                  transition
                "
                            >
                                ←
                            </button>


                            {/* ================= NEXT BUTTON ================= */}

                            <button
                                type="button"
                                onClick={showNext}
                                className="
                  absolute
                  right-2
                  md:-right-12
                  z-20
                  rounded-full
                  bg-white/90
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  text-xl
                  font-bold
                  text-slate-800
                  shadow-lg
                  hover:bg-white
                  transition
                "
                            >
                                →
                            </button>


                            {/* ================= FULL IMAGE MODAL ================= */}

                            <div
                                className="
                  relative
                  w-full
                  max-h-[85vh]
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                "
                            >

                                {/* Blurred background */}

                                <img
                                    src={selectedItem.image}
                                    alt=""
                                    aria-hidden="true"
                                    className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    scale-110
                    blur-2xl
                    opacity-40
                  "
                                />


                                {/* Main full image */}

                                <motion.img
                                    key={selectedIndex}
                                    src={selectedItem.image}
                                    alt={selectedItem.title}
                                    custom={direction}
                                    variants={modalVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="
                    relative
                    z-[1]
                    max-w-full
                    max-h-[85vh]
                    w-auto
                    h-auto
                    object-contain
                    rounded-2xl
                    shadow-2xl
                  "
                                />

                            </div>

                        </div>

                    </motion.div>

                )}

            </AnimatePresence>

        </section>
    );
}