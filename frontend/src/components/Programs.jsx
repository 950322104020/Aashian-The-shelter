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
      keywords: "FOOD DONATION NGO INDIA • RATION DISTRIBUTION NGO • FOOD SECURITY TRUST",
      summary: "Every second Saturday of the month, Aashiana provides essential food supplies to 70–75 families in need.",
      desc: "This initiative goes beyond ration distribution—it's a demonstration of care, empathy, and community support. To keep meals varied and nutritious, we rotate staple items such as sugar, oil, rice, flour, and lentils, and provide immunity-boosting supplements where needed. Families can also share their specific needs, allowing us to provide wholesome extras like soya chunks and other nutritious food items.",
      highlights: [
        "Ration distribution every second Saturday",
        "Supports 70–75 families in need monthly",
        "Rotates staples & immunity-boosting supplements",
        "Customized dietary support (e.g., soya chunks)"
      ],
      ctaText: "Sponsor a Family's Nutrition",
      ctaLink: "#donate"
    },
    {
      id: "medical",
      icon: Stethoscope,
      title: "Medical Support for Families Living with HIV",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
      keywords: "HIV SUPPORT NGO INDIA • MEDICAL REIMBURSEMENT TRUST • HEALTHCARE NGO",
      summary: "Covering critical healthcare expenses and helping ensure regular medical check-ups for families living with HIV.",
      desc: "Aashiana supports families and women living with HIV who frequently face health challenges. Families share their medical bills with us, and we reimburse these costs to ease their financial burden. By improving access to medical care, we work to support their health, dignity, and overall quality of life.",
      highlights: [
        "Direct medical expense reimbursement",
        "Assistance for routine check-ups & medications",
        "Dignity-first healthcare access"
      ],
      ctaText: "Support Healthcare",
      ctaLink: "#donate"
    },
    {
      id: "education",
      icon: GraduationCap,
      title: "Educational Support for Children",
      image: "https://i.postimg.cc/8kqtsyVj/education.jpg",
      keywords: "CHILD EDUCATION NGO • SCHOOL FEES SPONSORSHIP • EDUCATION TRUST",
      summary: "Equipping children with the educational resources they need to pursue their dreams with dignity.",
      desc: "Education is a core pillar of Aashiana's work. Despite limited resources, we actively support children's schooling to prevent dropouts and build long-term independence.",
      bullets: [
        "Fund monthly tuition fees for 54 children",
        "Provide school stationery (notebooks, registers, pencils, pens, colours, erasers) to 150 children",
        "Fund school uniforms for children facing the greatest financial hardship"
      ],
      highlights: [
        "Monthly tuition funding for 54 children",
        "Stationery kits distributed to 150 children",
        "School uniforms provided to families in hardship"
      ],
      ctaText: "Support a Child's Education",
      ctaLink: "#donate"
    },
    {
      id: "cancer-awareness",
      icon: Activity,
      title: "Cancer Awareness Workshop",
      image: "https://i.postimg.cc/q7R52zDV/cancer-awareness.jpg",
      keywords: "CANCER AWARENESS NGO • WOMEN'S HEALTH WORKSHOP • BREAST CANCER SCREENING",
      summary: "Community health education covering cancer screenings, early detection, and personal hygiene.",
      desc: "Aashiana hosted a cancer awareness workshop with specialists Jiji and Bun from Shalom Hospital (HIV & Cancer specialty). The session covered mouth, breast, and uterine cancers, including how to check for breast lumps, and encouraged the use of sanitary napkins over cloth during periods to reduce health risks.",
      highlights: [
        "Specialist guidance from Shalom Hospital",
        "Covered mouth, breast, and uterine cancer screening",
        "Encouraged sanitary hygiene awareness",
        "16 women attended the workshop"
      ],
      ctaText: "Support Health Workshops",
      ctaLink: "#donate"
    },
    {
      id: "women-empowerment",
      icon: Sparkles,
      title: "Women's Empowerment & Livelihood",
      image: "https://i.postimg.cc/prNzV6nR/woman.jpg",
      keywords: "WOMEN EMPOWERMENT NGO INDIA • SKILL TRAINING • JEWELLERY MAKING LIVELIHOOD",
      summary: "Skill training in handicrafts and financial literacy helping women earn an independent living.",
      desc: "Began in 2012 with a jewellery-making workshop and has since grown to include tailoring and handicrafts with employment linkages. Today, 16 women earn a stable income through this program. New jewellery designs are introduced quarterly and sold across online/offline platforms.",
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
      image: "https://i.postimg.cc/52vc6HrG/cm-outreach.jpg",
      keywords: "COMMUNITY OUTREACH NGO • FOOD AND CLOTHING DRIVE • WINTER RELIEF INDIA",
      summary: "Quarterly distribution drives bringing food, warmth, and relief to underserved communities.",
      desc: "Every quarter, our team visits underserved communities to distribute food, clothing, blankets, and snacks to children. This year, 600+ individuals benefited from these visits, bringing warmth and relief to those who need it most.",
      highlights: [
        "Quarterly distribution of food, clothing, and blankets",
        "Winter relief drives for children & families",
        "600+ individuals benefited this year"
      ],
      ctaText: "Support Community Drives",
      ctaLink: "#donate"
    },
    {
      id: "hospital-visits",
      icon: Building2,
      title: "Hospital Visits & Emotional Support",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
      keywords: "HOSPITAL OUTREACH NGO • THALASSEMIA PATIENT SUPPORT • HIV PATIENT CARE",
      summary: "Bringing fresh fruit, companionship, and emotional comfort to hospital patients.",
      desc: "Every quarter, we visit hospitals to bring fresh fruit and emotional support to individuals living with Thalassemia and HIV. Many of these patients lack nearby family support, and our visits offer comfort, companionship, and a sense of belonging.",
      highlights: [
        "Quarterly visits to patients with Thalassemia & HIV",
        "Fresh fruit distribution & emotional companionship",
        "Creating a sense of belonging for isolated individuals"
      ],
      ctaText: "Sponsor Patient Meals",
      ctaLink: "#donate"
    },
    {
      id: "home-visits",
      icon: Home,
      title: "Home Visits & Family Welfare",
      image: "https://i.postimg.cc/8PcNPzDX/Outreach.jpg ",
      keywords: "FAMILY WELFARE VISITS NGO • HOME-BASED FAMILY SUPPORT • HEALTH & HYGIENE",
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
    <section id="programs" className="py-20 bg-slate-100 text-slate-800 font-body">
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
            Holistic support spanning nutrition, medical reimbursement, child education, livelihood training, and community outreach.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="space-y-12">
          {programs.map((prog) => {
            const IconComponent = prog.icon;
            return (
              <div
                key={prog.id}
                id={prog.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* SEO Label Badge */}
                <div className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  {prog.keywords}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  
                  {/* Column 1: Image Showcase */}
                  <div className="lg:col-span-4 flex flex-col">
                    <button
                      type="button"
                      onClick={() => setSelectedImage({ src: prog.image, title: prog.title })}
                      className="relative h-64 lg:h-full min-h-[220px] rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow text-left cursor-zoom-in"
                      aria-label={`View full image for ${prog.title}`}
                    >
                      <img
                        src={prog.image}
                        alt={prog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                        <div className="p-2 bg-red-600 text-white rounded-xl shadow-md">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-white drop-shadow-sm line-clamp-1">
                          {prog.title}
                        </span>
                      </div>
                    </button>
                  </div>

                  {/* Column 2: Overview & Key Content */}
                  <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 mb-3">
                        {prog.title}
                      </h3>

                      <p className="text-base font-bold text-slate-800 leading-relaxed mb-3">
                        {prog.summary}
                      </p>

                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {prog.desc}
                      </p>

                      {/* Bullet Points */}
                      {prog.bullets && (
                        <div className="pt-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                            Key Focus Pillars:
                          </h4>
                          <ul className="space-y-2 text-sm text-slate-700">
                            {prog.bullets.map((bullet, idx) => (
                              <li key={idx} className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                <span className="font-medium text-slate-800 text-xs sm:text-sm">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Artisan Quote */}
                      {prog.quote && (
                        <div className="mt-4 bg-amber-50/80 border-l-4 border-amber-500 p-3.5 rounded-r-2xl">
                          <blockquote className="text-xs sm:text-sm italic text-slate-800 mb-1 font-medium">
                            “{prog.quote.text}”
                          </blockquote>
                          <div className="text-xs font-bold text-slate-900">
                            — {prog.quote.author}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Column 3: Highlights & Action CTA */}
                  <div className="lg:col-span-3 bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between h-full">
                    {prog.highlights && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                          Program Highlights
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 mb-6">
                          {prog.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="w-2 h-2 bg-red-600 rounded-full shrink-0 mt-1.5" />
                              <span className="font-medium text-slate-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* High Contrast CTA Button */}
                    {prog.ctaText && (
                      <div className="pt-4 border-t border-slate-200 mt-auto">
                        <a
                          href={prog.ctaLink}
                          className="group/btn w-full bg-white hover:bg-slate-900 text-slate-900 hover:text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all duration-300 shadow-sm hover:shadow-lg flex items-center justify-center gap-2 border border-slate-300 hover:border-slate-900"
                        >
                          <Heart className="w-4 h-4 text-red-600 group-hover/btn:text-white shrink-0 transition-colors" />
                          <span className="font-bold tracking-wide">{prog.ctaText}</span>
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

      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-3 py-2 text-lg font-semibold text-slate-800 shadow-lg hover:bg-white"
              aria-label="Close full image"
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[85vh] w-full rounded-2xl object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}