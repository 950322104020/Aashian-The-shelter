import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const mediaItems = [
    {
        image: "https://i.postimg.cc/C5YvPKhG/gl1-1-gallery.jpg"
    },
    {
        image: "https://i.postimg.cc/4497w1jZ/IMG-6016-gallery.jpg"
    },
    {
        image: "https://i.postimg.cc/63T679JH/IMG-0439-gallery.jpg"
    },
    {
        image: "https://i.postimg.cc/43ghhHBL/000066090006-gallery.jpg"
    },
    {
        image: "https://i.postimg.cc/VvjxvT6D/laptop1-gallery.jpg"
    },
    {
        image: "https://i.postimg.cc/htRs4vW8/glry1.jpg"
    },
    {
        image: "https://i.postimg.cc/SRN6YYQB/IMG-6009-gallery.jpg"
    },
    {
        image: "https://i.postimg.cc/HsLGdSmw/IMG-6017-gallery.jpg"
    },
    {
        image: "https://i.postimg.cc/8PcNPzDX/Outreach.jpg"
    },
    {
        image: "https://i.postimg.cc/sDtsyKfr/women-empowerment-4x3.pngg"

    },
    {
        image: "https://i.postimg.cc/rmgRBbnm/hospital2.jpg"
    },
    {
        image: "https://i.postimg.cc/FHVcwT3T/IMG-0439.jpg"
    },
    {
        image: "https://i.postimg.cc/Cx3HVRQS/IMG-6008.jpg"
    },
    {
        image: "https://i.postimg.cc/K8fftGqb/IMG-0004-(1).jpg"
    },
    {
        image: "https://i.postimg.cc/t4nRxJCd/IMG-6041.jpg"
    },
    {
        image: "https://i.postimg.cc/T3VSFvkx/IMG-0473.jpg"

    },
    {
        image: "https://i.postimg.cc/brRgLqyH/IMG-6035.jpg"
    },
    {
        image: "https://i.postimg.cc/Cx3HVRQS/IMG-6https://i.postimg.cc/sX2334xB/IMG-6022.jpg008.jpg"
    },
    {
        image: "https://i.postimg.cc/sxK4dyBB/IMG-6011.jpg"
    },
    {
        image: "https://i.postimg.cc/8zgzQWSG/IMG-6013-fixed-4x3.jpg"
    },
    {
        image: "https://i.postimg.cc/sX2334xB/IMG-6022.jpg"
    },
    {
        image: "https://i.postimg.cc/GmqcVfh0/IMG-6021.jpg"
    },
    {
        image: "https://i.postimg.cc/KcrC0M8Q/IMG-6035.jpg"
    },
    {
        image: "https://i.postimg.cc/hGtLThtH/IMG-6040.jpg"
    }


]

export default function MediaGallery() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [direction, setDirection] = useState(1);

    const openImage = (index) => {
        setSelectedIndex(index);
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


            {/* ================= GALLERY GRID ================= */}

            <div className="max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {mediaItems.map((item, idx) => (

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
                w-full
                aspect-[4/3]
                text-left
                focus:outline-none
                bg-slate-900
                hover:shadow-lg
                transition-shadow
                duration-300
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

                </div>

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