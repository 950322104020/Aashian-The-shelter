import React, { useState } from 'react';
import {
    Apple,
    Stethoscope,
    GraduationCap,
    Activity,
    Sparkles,
    Users,
    Building2,
    Home,
    CheckCircle2,
    Heart
} from 'lucide-react';

export default function OurPrograms() {
    const [selectedImage, setSelectedImage] = useState(null);

    const programs = [
        {
            id: "nutrition",
            icon: Apple,
            title: "Nutrition Support",
            image: "https://i.postimg.cc/qRNz3xHP/Nutrition-(1).jpg",
            summary: "Every second Saturday of the month, Aashiana provides essential food supplies to 75–80 families in need.",
            desc: "From monthly nutrition and medical assistance to education, livelihoods and communityoutreach, our programmes respond to the real and changing needs of the families we support.",
            highlights: [
                "Ration distribution every second Saturday",
                "75-80 families supported every month",
                "Essential food staples and nutritional support",
                "Additional assistance based on individual family needs"
            ],
            ctaText: "Sponsor a Family's Nutrition",
            ctaLink: "#donate"
        },

        {
            id: "medical",
            icon: Stethoscope,
            title: "Medical Support for Families ",
            image: "https://i.postimg.cc/ZKNQTXgs/hospital-visit-4x3.jpg",
            summary: "Helping families access essential healthcare without carrying the financial burden alone.",
            desc: "While ART treatment is available free of cost through government programmes, families often face additional expenses for medicines, diagnostic tests, consultations and othermedical needs. Aashiana helps reimburse these costs and provides assistance whenadditional healthcare is required.",
            highlights: [
                "Medical expense reimbursement",
                "Support for medicines and diagnostic tests",
                "Assistance with consultations and check-ups",
                "Additional medical support in critical cases"
            ],
            ctaText: "Support Healthcare",
            ctaLink: "#donate"
        },

        {
            id: "education",
            icon: GraduationCap,
            title: "Educational Support for Children",
            image: "https://i.postimg.cc/vm0Y0RHR/education-4x3.jpg",
            extraImages: [
                { src: "https://i.postimg.cc/kXpRJh0h/IMG-6013-fixed-4x3.jpg", alt: "Children receiving educational support" }
            ],
            summary: "Helping children stay in school and giving them the resources they need to continue their education.",
            desc: "Education is one of Aashiana's core priorities. We currently fund monthly tuition fees for 54 children and provide stationery support to 150 children twice a year. School uniforms andadditional educational assistance are also provided to families facing financial hardship.",
            bullets: [
                "Fund monthly tuition fees for 54 children",
                "Provide school stationery (notebooks, registers, pencils, pens, colours, erasers) to 150 children",
                "Fund school uniforms for children facing the greatest financial hardship"
            ],
            highlights: [
                "Monthly tuition funding for 54 children",
                "Stationery support for 150 children twice a year",
                "Additional educational assistance based on need"
            ],
            ctaText: "Support a Child's Education",
            ctaLink: "#donate"
        },

        {
            id: "cancer-awareness",
            icon: Activity,
            title: "Cancer Awareness & Health Education Workshop",
            image: "https://i.postimg.cc/ydwkTqvR/cancer-awareness-4x3.jpg",
            extraImages: [
                { src: "https://i.postimg.cc/qRTkB8BX/cancer-awareness.jpg", alt: "Cancer awareness workshop session" }
            ],
            summary: "Creating awareness through practical health education and guidance from experienced healthcare professionals.",
            desc: "Aashiana organises health awareness workshops to help women and families better understand cancer prevention, early detection, personal hygiene and the importance of seeking timely medical care. Our cancer awareness initiatives have included sessions conducted with guidance from Shalom Hospital, a group of retired doctors and the women of Team Nisarga . These workshops create a safe and accessible space for women to ask questions, address misconceptions and gain the knowledge and confidence to make more informed decisions about their health.",
            highlights: [
                "Sessions with guidance with Ladies from Shalom Hospital",
                "Awareness initiatives with Team Nisarga",
                "Cancer prevention and early-detection awareness",
                "Guidance on breast self-examination",
                "Women's health and personal hygiene education",
                "Health sessions with a group of retired doctors"
            ],
            ctaText: "Support Health Awareness",
            ctaLink: "#donate"
        },

        {
            id: "women-empowerment",
            icon: Sparkles,
            title: "Women's Empowerment & Livelihood",
            image: "https://i.postimg.cc/ZYccjV6P/women-empowerment-4x3.png",
            extraImages: [
                { src: "https://i.postimg.cc/yYWZcHBZ/women-empowerment-fixed-4x3.jpg", alt: "Women empowerment activity" },
                { src: "https://i.postimg.cc/d1yqw5Kh/gold-fixed-4x3.jpg", alt: "Women at community outreach" }
            ],
            summary: "Building skills, confidence and financial independence.",
            desc: "Began in 2012 with a jewellery-making workshop and has since grown to include tailoring and handicrafts with employment linkages. Today, 16 women earn a stable income through this program. New jewellery designs are introduced quarterly and sold across online/offline platforms.Alongside livelihood opportunities, we support women with practical skills including financial literacy, banking, communication and confidence-building.",
            quote: {
                text: "I never imagined I could earn my own money because of my condition and no degree. Now, I make jewellery and people buy it. It makes me feel proud.",
                author: "Kamlekha (name changed), Jewellery Artisan"
            },
            bullets: [
                "Literacy & Communication Skills — reading, writing, and basic English for daily life",
                "Leadership & Confidence — building decision-making skills through leadership roles",
                "Financial Security — self-help savings group (INR 200–500 deposits) for microloans",
                "Banking Independence — assistance opening and managing individual bank accounts",
                "Counselling & Family Support — emotional support through personal hardships",
                "Community Meals — shared daily meals at Aashiana building unity and reducing discrimination"
            ],
            highlights: [
                "Skill training in jewellery-making & tailoring",
                "16 women earning a stable income",
                "Self-help savings group for emergency microloans",
                "Literacy, banking & leadership support"
            ],
            ctaText: "Empower a Woman",
            ctaLink: "#donate"
        },

        {
            id: "outreach",
            icon: Users,
            title: "Community Outreach in Underserved Areas",
            image: "https://i.postimg.cc/8ktYs1XD/community-outreach-4x3.jpg",
            summary: "Extending support beyond the families directly enrolled with Aashiana.",
            desc: "Through community outreach drives, Aashiana distributes food, clothing, blankets and other essentials to underserved communities. These initiatives allow us to reach families and individuals facing hardship beyond our regular programmes.",
            highlights: [
                "Food, clothing and essential supplies to children and families",
                "Seasonal and winter relief",
                "Outreach to underserved communities"
            ],
            ctaText: "Support Community Drives",
            ctaLink: "#donate"
        },

        {
            id: "hospital-visits",
            icon: Building2,
            title: "Hospital Visits & Emotional Support",
            image: "https://i.postimg.cc/yYKN6yGb/hospital-support-4x3.jpg",
            summary: "Sometimes support is as simple and as important as showing up.",
            desc: "Every quarter, Aashiana visits hospital patients with HIV and Thalassemia, providing fresh fruit, practical assistance and companionship. For patients who may have little or no family support nearby, these visits are also about offering comfort, conversation and reminding them that they are not alone.",
            highlights: [
                "Quarterly hospital visits to patients with HIV and Thalassemia",
                "Fresh fruit and practical assistance",
                "Companionship and emotional support"
            ],
            ctaText: "Sponsor Patient Care",
            ctaLink: "#donate"
        },

        {
            id: "home-visits",
            icon: Home,
            title: "Home Visits & Family Welfare",
            image: "https://i.postimg.cc/9QrK6r2j/outreach-fixed-4x3.jpg ",
            summary: "Quarterly field visits fostering care, trust, and tailored guidance for families in need.",
            desc: "Our field staff conducts quarterly home visits to families in need. These visits help us understand each family's challenges, provide financial support where necessary, and share guidance on health and hygiene. Building trust and fostering care remain at the heart of every visit.",
            highlights: [
                "Direct field visits to understand unique family challenges",
                "Financial assistance & tailored guidance",
                "Health & hygiene education"
            ],
            ctaText: "Support Home Visits",
            ctaLink: "#donate"
        }
    ];

    return (
        <section
            id="programs"
            className="py-20 bg-slate-100 text-slate-800 font-body"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">

                    <span className="text-red-700 font-bold text-xs uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-200 inline-block mb-3">
                        Our Initiatives
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
                        Comprehensive Programs Restoring Dignity & Hope
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base mt-3">
                        From monthly nutrition and medical assistance to education, livelihoods and community outreach, our programmes respond to the real and changing needs of the families we support.
                    </p>

                </div>


                {/* Program Cards */}
                <div className="space-y-12">

                    {programs.map((prog) => {

                        const IconComponent = prog.icon;

                        return (
                            <div
                                key={prog.id}
                                id={prog.id}
                                className="
                  bg-white
                  rounded-3xl
                  p-6
                  sm:p-8
                  border
                  border-slate-200
                  shadow-sm
                  hover:shadow-xl
                  transition-all
                  duration-300
                  relative
                  overflow-hidden
                  group
                "
                            >

                                {/* SEO Label Badge */}
                                <div className="
                  text-[10px]
                  sm:text-xs
                  font-semibold
                  text-slate-400
                  uppercase
                  tracking-wider
                  mb-4
                ">
                                    {prog.keywords}
                                </div>


                                {/* Main Layout */}
                                <div className="
                  grid
                  grid-cols-1
                  lg:grid-cols-12
                  gap-8
                  items-start
                ">


                                    {/* ==================================================
                      IMAGE
                  ================================================== */}

                                    <div className="lg:col-span-4 flex flex-col gap-3">

                                        {/* Main Image */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setSelectedImage({
                                                    src: prog.image,
                                                    title: prog.title
                                                })
                                            }
                                            className="
                        relative
                        w-full
                        aspect-[4/3]
                        rounded-2xl
                        overflow-hidden
                        shadow-sm
                        group-hover:shadow-md
                        transition-shadow
                        bg-slate-100
                        text-left
                        cursor-zoom-in
                        block
                      "
                                            aria-label={`View full image for ${prog.title}`}
                                        >

                                            {/* Full Image Container */}
                                            <div className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        bg-slate-100
                      ">

                                                <img
                                                    src={prog.image}
                                                    alt={prog.title}
                                                    className="
                            w-full
                            h-full
                            object-contain
                            transition-transform
                            duration-500
                            group-hover:scale-[1.02]
                          "
                                                    loading="lazy"
                                                />

                                            </div>


                                            {/* Bottom Gradient */}
                                            <div className="
                        absolute
                        inset-x-0
                        bottom-0
                        h-24
                        bg-gradient-to-t
                        from-slate-900/60
                        via-slate-900/20
                        to-transparent
                        pointer-events-none
                      " />


                                            {/* Image Title */}
                                            <div className="
                        absolute
                        bottom-3
                        left-3
                        right-3
                        flex
                        items-center
                        gap-2
                      ">

                                                <div className="
                          p-2
                          bg-red-600
                          text-white
                          rounded-xl
                          shadow-md
                          shrink-0
                        ">
                                                    <IconComponent className="w-5 h-5" />
                                                </div>

                                                <span className="
                          text-xs
                          font-bold
                          text-white
                          drop-shadow-sm
                          line-clamp-1
                        ">
                                                    {prog.title}
                                                </span>

                                            </div>

                                        </button>

                                        {/* Extra Images Row */}
                                        {prog.extraImages && (
                                            <div className="flex flex-col gap-3">
                                                {prog.extraImages.map((extra, idx) => (
                                                    <button
                                                        key={idx}
                                                        type="button"
                                                        onClick={() =>
                                                            setSelectedImage({
                                                                src: extra.src,
                                                                title: extra.alt
                                                            })
                                                        }
                                                        className="
                              relative
                              w-full
                              aspect-[4/3]
                              rounded-2xl
                              overflow-hidden
                              shadow-sm
                              hover:shadow-md
                              transition-shadow
                              bg-slate-100
                              cursor-zoom-in
                              block
                            "
                                                        aria-label={`View image: ${extra.alt}`}
                                                    >
                                                        {/* Image fills container fully */}
                                                        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                                                            <img
                                                                src={extra.src}
                                                                alt={extra.alt}
                                                                className="
                                  w-full
                                  h-full
                                  object-contain
                                  transition-transform
                                  duration-500
                                  hover:scale-[1.02]
                                "
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                        {/* Hover overlay */}
                                                        <div className="
                              absolute
                              inset-0
                              bg-black/0
                              hover:bg-black/10
                              transition-colors
                              duration-300
                              pointer-events-none
                            " />
                                                    </button>
                                                ))}
                                            </div>
                                        )}

                                    </div>


                                    {/* ==================================================
                      MAIN TEXT CONTENT
                  ================================================== */}

                                    <div className="lg:col-span-5 min-w-0">

                                        <h3 className="
                      text-2xl
                      sm:text-3xl
                      font-extrabold
                      font-heading
                      text-slate-900
                      mb-3
                    ">
                                            {prog.title}
                                        </h3>


                                        <p className="
                      text-base
                      font-bold
                      text-slate-800
                      leading-relaxed
                      mb-3
                    ">
                                            {prog.summary}
                                        </p>


                                        <p className="
                      text-slate-600
                      text-sm
                      leading-relaxed
                      mb-4
                    ">
                                            {prog.desc}
                                        </p>


                                        {/* Bullet Points */}
                                        {prog.bullets && (
                                            <div className="pt-2">

                                                <h4 className="
                          text-xs
                          font-bold
                          uppercase
                          tracking-wider
                          text-slate-900
                          mb-3
                        ">
                                                    Key Focus Pillars:
                                                </h4>

                                                <ul className="
                          space-y-2
                          text-sm
                          text-slate-700
                        ">

                                                    {prog.bullets.map((bullet, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="
                                flex
                                items-start
                                gap-2.5
                              "
                                                        >

                                                            <CheckCircle2
                                                                className="
                                  w-4
                                  h-4
                                  text-red-600
                                  shrink-0
                                  mt-0.5
                                "
                                                            />

                                                            <span className="
                                font-medium
                                text-slate-800
                                text-xs
                                sm:text-sm
                              ">
                                                                {bullet}
                                                            </span>

                                                        </li>
                                                    ))}

                                                </ul>

                                            </div>
                                        )}


                                        {/* Artisan Quote */}
                                        {prog.quote && (
                                            <div className="
                        mt-4
                        bg-amber-50/80
                        border-l-4
                        border-amber-500
                        p-3.5
                        rounded-r-2xl
                      ">

                                                <blockquote className="
                          text-xs
                          sm:text-sm
                          italic
                          text-slate-800
                          mb-1
                          font-medium
                        ">
                                                    “{prog.quote.text}”
                                                </blockquote>

                                                <div className="
                          text-xs
                          font-bold
                          text-slate-900
                        ">
                                                    — {prog.quote.author}
                                                </div>

                                            </div>
                                        )}

                                    </div>


                                    {/* ==================================================
                      HIGHLIGHTS + CTA
                  ================================================== */}

                                    <div className="
                    lg:col-span-3
                    bg-slate-50
                    p-6
                    rounded-2xl
                    border
                    border-slate-200
                  ">

                                        {prog.highlights && (
                                            <div>

                                                <h4 className="
                          text-xs
                          font-bold
                          uppercase
                          tracking-wider
                          text-slate-900
                          mb-4
                        ">
                                                    Program Highlights
                                                </h4>


                                                <ul className="
                          space-y-2.5
                          text-xs
                          sm:text-sm
                          text-slate-700
                        ">

                                                    {prog.highlights.map((item, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="
                                flex
                                items-start
                                gap-2.5
                              "
                                                        >

                                                            <span className="
                                w-2
                                h-2
                                bg-red-600
                                rounded-full
                                shrink-0
                                mt-1.5
                              " />

                                                            <span className="
                                font-medium
                                text-slate-700
                              ">
                                                                {item}
                                                            </span>

                                                        </li>
                                                    ))}

                                                </ul>

                                            </div>
                                        )}


                                        {/* CTA */}
                                        {prog.ctaText && (
                                            <div className="
                        pt-4
                        border-t
                        border-slate-200
                        mt-6
                      ">

                                                <a
                                                    href={prog.ctaLink}
                                                    className="
                            group/btn
                            w-full
                            bg-white
                            hover:bg-slate-900
                            text-slate-900
                            hover:text-white
                            font-bold
                            py-3
                            px-4
                            rounded-xl
                            text-xs
                            sm:text-sm
                            transition-all
                            duration-300
                            shadow-sm
                            hover:shadow-lg
                            flex
                            items-center
                            justify-center
                            gap-2
                            border
                            border-slate-300
                            hover:border-slate-900
                          "
                                                >

                                                    <Heart
                                                        className="
                              w-4
                              h-4
                              text-red-600
                              group-hover/btn:text-white
                              shrink-0
                              transition-colors
                            "
                                                    />

                                                    <span className="
                            font-bold
                            tracking-wide
                          ">
                                                        {prog.ctaText}
                                                    </span>

                                                </a>

                                            </div>
                                        )}

                                    </div>

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>


            {/* ==========================================================
          FULL IMAGE MODAL
      ========================================================== */}

            {selectedImage && (
                <div
                    className="
            fixed
            inset-0
            z-[60]
            flex
            items-center
            justify-center
            bg-black/80
            backdrop-blur-sm
            p-4
          "
                    onClick={() => setSelectedImage(null)}
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

                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={() => setSelectedImage(null)}
                            className="
                absolute
                right-3
                top-3
                z-10
                rounded-full
                bg-white/90
                px-3
                py-2
                text-lg
                font-semibold
                text-slate-800
                shadow-lg
                hover:bg-white
              "
                            aria-label="Close full image"
                        >
                            ×
                        </button>


                        {/* Full Image */}
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="
                max-h-[85vh]
                max-w-full
                rounded-2xl
                object-contain
                shadow-2xl
              "
                        />

                    </div>

                </div>
            )}

        </section>
    );
}