import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  ShieldCheck,
  Sparkles,
  Calendar,
  Users,
  GraduationCap,
  BookOpen,
  HeartHandshake,
  Target,
  Eye,
  CheckCircle2,
  Compass,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState('story');
  const [imgError, setImgError] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [showFullStory, setShowFullStory] = useState(false);

  // Founder avatar image URL
  const founderImgUrl = "https://i.postimg.cc/g2V8kKmC/founder-fixed-4x3.jpg";

  const impactStats = [
    { icon: Calendar, value: '15 Years ', label: 'of Service', desc: 'Standing beside families' },
    { icon: Users, value: '75 Families', label: 'Supported Monthly', desc: 'With nutrition and ongoing assistance' },
    { icon: GraduationCap, value: '54 Children', label: 'Receiving Education Support', desc: 'Monthly tuition fees funded' },
    { icon: BookOpen, value: '150 Children', label: 'Receiving Stationery Support', desc: 'Supplies provided for school, twice a year' },
    { icon: Sparkles, value: '16 Women', label: 'Receiving a Monthly Salary', desc: 'Through our livelihood programme' },
    { icon: HeartHandshake, value: '600+ Families', label: 'Supported Annually', desc: "Across Aashiana's programmes and initiatives" },
  ];

  const valuesList = [
    { title: 'Compassion & Dignity', desc: 'Ensuring every person living with HIV is treated with unconditional respect and care.' },
    { title: 'Transparency', desc: 'Maintaining 100% financial and operational accountability for every donation received.' },
    { title: 'Empowerment', desc: 'Focusing on skill-building and education so families can become self-reliant.' },
    { title: 'Inclusivity', desc: 'Opening our doors to anyone in need without discrimination based on background or status.' },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-brandNavy text-white font-body relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-white font-bold text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 inline-block mb-3 shadow-sm">
            About Us — Our Story & Mission
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Restoring Dignity, Health & Hope Since 2011
          </h2>
          <p className="text-white/60 text-xs sm:text-sm mt-3">
            Keywords: Aashiana Shelter Trust Story • HIV Support NGO History India • Founder Vinita Bahadur • NGO for Families Living with HIV
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/10 p-1.5 rounded-2xl border border-white/20 flex flex-wrap justify-center gap-2 max-w-xl w-full">
            {[
              { id: 'story', label: 'Our Story', icon: BookOpen },
              { id: 'mission', label: 'Mission & Vision', icon: Target },
              { id: 'values', label: 'Core Values', icon: Compass },
            ].map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 z-10 ${activeTab === tab.id ? 'text-white' : 'text-white/70 hover:text-white'
                    }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 bg-brandRed rounded-xl shadow-lg -z-10"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <TabIcon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Dynamic Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">

          {/* Left Column: Tab Content */}
          <div className="lg:col-span-7 space-y-6 text-white/80 leading-relaxed text-base flex flex-col justify-center min-h-[360px]">
            <AnimatePresence mode="wait">
              {activeTab === 'story' && (
                <motion.div
                  key="story"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-5"
                >
                  <p className="text-lg font-medium text-white leading-relaxed">
                    In 2010, <strong className="text-white font-semibold">Vinita Bahadur</strong>, a schoolteacher of 20 years then working with an HIV/AIDS awareness organisation across India, met a young widow who had been abandoned by her in-laws and left alone with a newborn after losing her husband to an AIDS-related illness. Vinita gave her shelter, care, and stood by her until she rebuilt her life.
                  </p>
                  <p>
                    That encounter revealed the stigma, isolation and financial hardship faced by families affected by HIV, particularly women and children and became the beginning of Aashiana.
                  </p>

                  {/* Toggle Button */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setShowFullStory((prev) => !prev)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brandRed text-white text-sm font-semibold hover:bg-brandRed/90 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brandRed/50 cursor-pointer"
                    >
                      <span>{showFullStory ? 'Show less' : 'Read our full story'}</span>
                      {showFullStory ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Expandable Story Section */}
                  <AnimatePresence>
                    {showFullStory && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden space-y-5 pt-2"
                      >
                        <p>
                          In 2011, <strong className="text-white font-semibold">Aashiana – The Shelter Trust</strong> was registered as a non-profit, starting with just 20 families living with HIV. The challenges were immense: malnutrition, no access to steady medical care, no steady income, and children dropping out of school. With no institutional funding in those early years, Vinita turned to friends and well-wishers, raising support through handmade calendars, cooking foods, and small community sales.
                        </p>
                        <p>
                          From those beginnings, Aashiana's mission has stayed the same: to restore dignity, health, and hope to families affected by HIV. In 2012, we introduced a jewellery-making workshop—our first skill-building program for women—which continues to help women earn independently today.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}

              {activeTab === 'mission' && (
                <motion.div
                  key="mission"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-brandRed/20 text-brandRed rounded-lg">
                        <Target className="w-6 h-6 text-red-400" />
                      </div>
                      <h3 className="text-xl font-bold font-heading text-white">Our Mission</h3>
                    </div>
                    <p className="text-white/80 leading-relaxed">
                      To eliminate the stigma associated with HIV/AIDS, provide comprehensive medical, nutritional, and financial support to affected families, and empower women and children through sustainable education and skill development programs.
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                        <Eye className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold font-heading text-white">Our Vision</h3>
                    </div>
                    <p className="text-white/80 leading-relaxed">
                      A compassionate, inclusive society where individuals and families affected by HIV/AIDS live with complete dignity, health, social acceptance, and economic independence.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'values' && (
                <motion.div
                  key="values"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.35 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {valuesList.map((val, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-start gap-3 hover:bg-white/10 transition-all"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brandGold shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-white text-base mb-1">{val.title}</h4>
                        <p className="text-xs text-white/70 leading-relaxed">{val.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Founder Quote Card & Highlights */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-5 flex flex-col justify-start space-y-4"
          >
            {/* Founder Message Card */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[30rem] ml-auto mr-0 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-slate-100 transition-all hover:shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setIsImageOpen(true)}
                className="block w-full text-left cursor-zoom-in group"
                aria-label="View full founder photo"
              >
                <div className="w-full h-72 sm:h-80 md:h-[20rem] overflow-hidden relative bg-slate-100">
                  {!imgError ? (
                    <img
                      src={founderImgUrl}
                      alt="Vinita Bahadur"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-contain object-center bg-white group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-brandRed text-white flex items-center justify-center font-bold font-heading text-3xl">
                      VB
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <h3 className="text-base font-bold leading-tight">Vinita Bahadur</h3>
                    <p className="text-xs text-rose-300 font-medium">Founder, Aashiana – The Shelter Trust</p>
                  </div>
                </div>
              </button>

              <div className="p-5 sm:p-6">
                <div className="text-rose-600 mb-2">
                  <svg className="w-6 h-6 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <blockquote className="text-xs sm:text-sm text-slate-700 italic leading-relaxed font-normal mb-4">
                  "When I first met a young widow, abandoned with her baby, I knew I couldn’t just walk away. Aashiana was born from that moment, to stand beside those the world turns away from, until they can stand on their own."
                </blockquote>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                    Our Core Pillar
                  </span>
                  <span className="px-2.5 py-1 text-xs font-semibold text-rose-700 bg-rose-50 rounded-full">
                    Dignity First
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Glassmorphic Pillar Grid */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-sm grid grid-cols-2 gap-4 max-w-[30rem] ml-auto">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/10 text-brandRed rounded-xl shrink-0">
                  <Heart className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <div className="font-bold text-sm text-white">Dignity First</div>
                  <div className="text-xs text-white/60">Overcoming Stigma</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/10 text-white rounded-xl shrink-0">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-bold text-sm text-white">Registered Trust</div>
                  <div className="text-xs text-white/60">Active Since 2011</div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Our Impact Section */}
        <div className="pt-12 border-t border-white/10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <span className="text-white font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-block mb-2">
              Our Impact
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              15 Years of Measured Change
            </h3>
            <p className="text-white/70 text-sm mt-2">
              For 15 years, Aashiana has stood beside families infected &amp; affected by HIV, providingconsistent nutrition, healthcare, education, livelihood opportunities and emotional support.What began with 20 families has grown into a community that now supports more than 600 families annually.
            </p>
          </motion.div>

          {/* Staggered Glassmorphic Impact Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {impactStats.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -6, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg transition-colors flex items-start gap-4"
                >
                  <div className="p-3 bg-white/10 text-white rounded-xl shrink-0">
                    <IconComponent className="w-6 h-6 text-brandGold" />
                  </div>
                  <div>
                    <span className="block font-black text-2xl text-white tracking-tight mb-0.5">{item.value}</span>
                    <span className="block font-bold text-sm text-white/90 mb-1">{item.label}</span>
                    <span className="block text-xs text-white/60">{item.desc}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>

      {/* Lightbox Modal Animation */}
      <AnimatePresence>
        {isImageOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setIsImageOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsImageOpen(false)}
                className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-slate-800 shadow-lg hover:bg-white transition-colors"
                aria-label="Close full image"
              >
                <X className="w-6 h-6" />
              </button>

              {!imgError ? (
                <img
                  src={founderImgUrl}
                  alt="Vinita Bahadur full portrait"
                  className="max-h-[85vh] w-full rounded-2xl object-contain shadow-2xl"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex min-h-[60vh] w-full items-center justify-center rounded-2xl bg-brandRed text-5xl font-bold text-white shadow-2xl">
                  VB
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}