import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Heart,
    Calendar,
    Sparkles,
    BookOpen,
    ChevronLeft,
    Users
} from 'lucide-react';

export default function OurStory() {
    // Animations
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const timelineEvents = [
        {
            year: '2010',
            title: 'The Encounter That Started It All',
            icon: Heart,
            iconBg: 'bg-rose-500/20 text-rose-400',
            description: ' In 2010, Vinita Bahadur, a schoolteacher of 20 years then working with an HIV/AIDS awareness organisation across India, met a young widow who had been abandoned by her in-laws and left alone with a newborn after losing her husband to an AIDS-related illness. Vinita gave her shelter, care, and stood by her until she rebuilt her life. That encounter revealed the stigma, isolation and financial hardship faced by families affected by HIV, particularly women and children and became the beginning of Aashiana.'
        },
        {
            year: '2011',
            title: 'Aashiana – The Shelter Trust is Registered',
            icon: Calendar,
            iconBg: 'bg-blue-500/20 text-blue-400',
            description: 'In 2011, Aashiana – The Shelter Trust was registered as a non-profit, starting with just 20 families living with HIV. The challenges were immense: malnutrition, no access to steady medical care, no steady income, and children dropping out of school. With no institutional funding in those early years, Vinita turned to friends and well-wishers, raising support through handmade calendars, cooking foods, and small community sales.'
        },
        {
            year: '2012',
            title: 'First Skill-Building Program Launch',
            icon: Sparkles,
            iconBg: 'bg-amber-500/20 text-amber-400',
            description: "From those beginnings, Aashiana's mission has stayed the same: to restore dignity, health, and hope to families affected by HIV.In 2012, we introduced a jewellery- making workshop—our first skill - building program for women—which continues to help women earn independently today."
        },
        {
            year: 'Present Day',
            title: 'A Growing Community of Hope',
            icon: Users,
            iconBg: 'bg-emerald-500/20 text-emerald-400',
            description: 'From our small beginnings of 20 families, Aashiana has grown to support over 600 families annually through healthcare, nutrition, educational funding, and livelihood training, consistently fighting stigma and restoring dignity.'
        }
    ];

    return (
        <section className="py-20 bg-brandNavy text-white font-body relative overflow-hidden min-h-screen">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-brandRed/5 rounded-full filter blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brandGold/5 rounded-full filter blur-3xl pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-8"
                >
                    <Link
                        to="/about"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-semibold group focus:outline-none focus:ring-2 focus:ring-white/20 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10"
                    >
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to About Us
                    </Link>
                </motion.div>

                {/* Page Header */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <span className="text-brandGold font-bold text-xs uppercase tracking-widest bg-brandGold/10 px-3.5 py-1.5 rounded-full border border-brandGold/20 inline-block mb-3">
                        Our History
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
                        The Story of Aashiana
                    </h1>
                    <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
                        Discover the path we have walked since 2010—fueled by compassion, community action, and the unwavering belief that everyone deserves dignity.
                    </p>
                </motion.div>

                {/* Timeline Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="relative border-l-2 border-white/10 ml-4 sm:ml-6 space-y-12 animate-fadeIn"
                >
                    {timelineEvents.map((event, index) => {
                        const Icon = event.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="relative pl-8 sm:pl-10"
                            >
                                {/* Timeline Indicator Dot with Icon */}
                                <div className={`absolute -left-5 top-1.5 w-10 h-10 rounded-full flex items-center justify-center border-4 border-brandNavy bg-brandNavy shadow-lg ${event.iconBg}`}>
                                    <Icon className="w-4 h-4" />
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all hover:shadow-xl duration-300">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                                            {event.title}
                                        </h3>
                                        <span className="text-sm font-extrabold bg-brandRed text-white px-3 py-1 rounded-full w-max">
                                            {event.year}
                                        </span>
                                    </div>
                                    <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                                        {event.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Closing quote */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mt-16 bg-white/5 border border-white/10 p-8 rounded-2xl text-center relative overflow-hidden"
                >
                    <blockquote className="text-lg text-white/90 italic mb-4 relative z-10 leading-relaxed">
                        "Aashiana was born from that moment, to stand beside those the world turns away from, until they can stand on their own."
                    </blockquote>
                    <p className="text-xs text-brandGold font-bold uppercase tracking-wider">
                        — Vinita Bahadur, Founder
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
