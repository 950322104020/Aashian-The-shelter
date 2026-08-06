import React from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Calendar, 
  Users, 
  GraduationCap, 
  BookOpen, 
  HeartHandshake 
} from 'lucide-react';

export default function AboutUs() {
  const impactStats = [
    {
      icon: Calendar,
      value: '2011–Present',
      label: 'Years of Service',
      desc: 'Standing beside families',
    },
    {
      icon: Users,
      value: '75',
      label: 'Families Supported Monthly',
      desc: 'Living with HIV',
    },
    {
      icon: GraduationCap,
      value: '54',
      label: 'Children Supported',
      desc: 'School fees funded',
    },
    {
      icon: BookOpen,
      value: '150',
      label: 'Stationery Kits',
      desc: 'Supplies provided for school',
    },
    {
      icon: Sparkles,
      value: '16',
      label: 'Women Empowered',
      desc: 'Earning through skill programs',
    },
    {
      icon: HeartHandshake,
      value: '600+',
      label: 'People Reached',
      desc: 'Quarterly outreach visits',
    },
  ];

  return (
    <section id="about" className="py-20 bg-brandNavy text-white font-body">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-white font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-block mb-3">
            About Us — Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Restoring Dignity, Health & Hope Since 2011
          </h2>
          <p className="text-white/60 text-xs sm:text-sm mt-3">
            Keywords: Aashiana Shelter Trust Story • HIV Support NGO History India • Founder Vinita Bahadur • NGO for Families Living with HIV
          </p>
        </div>

        {/* Narrative & Founder Quote Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
          
          {/* Left Column: Story Text */}
          <div className="lg:col-span-7 space-y-6 text-white/80 leading-relaxed text-base flex flex-col justify-center">
            <p className="text-lg font-medium text-white leading-relaxed">
              In 2010, <strong className="text-white font-semibold">Vinita Bahadur</strong>, a schoolteacher of 20 years then working with an HIV/AIDS awareness organisation across India, met a young widow who had been abandoned by her in-laws and left alone with a newborn after losing her husband to an AIDS-related illness. Vinita gave her shelter, care, and stood by her until she rebuilt her life.
            </p>

            <p>
              That one encounter revealed the depth of stigma, isolation, and poverty faced by families living with HIV, especially women and children—and it became the seed of Aashiana.
            </p>

            <p>
              In 2011, <strong className="text-white font-semibold">Aashiana – The Shelter Trust</strong> was registered as a non-profit, starting with just 20 families living with HIV. The challenges were immense: malnutrition, no access to steady medical care, no steady income, and children dropping out of school. With no institutional funding in those early years, Vinita turned to friends and well-wishers, raising support through handmade calendars, cooking foods, and small community sales.
            </p>

            <p>
              From those beginnings, Aashiana's mission has stayed the same: to restore dignity, health, and hope to families affected by HIV. In 2012, we introduced a jewellery-making workshop—our first skill-building program for women—which continues to help women earn independently today. Partnerships such as the one with Sans Frontiers in Noida, which has ordered handmade jewellery in bulk and supported us, have helped sustain these livelihoods.
            </p>
          </div>

          {/* Right Column: Founder Quote Card & Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Glassmorphic Quote Box */}
            <div className="bg-white/10 backdrop-blur-md text-white p-8 rounded-3xl shadow-xl relative overflow-hidden border border-white/20 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-28 h-28 bg-pink-500/10 rounded-full blur-xl pointer-events-none" />
              
              <div>
                <div className="text-pink-300 text-5xl font-serif mb-2 leading-none">“</div>
                <blockquote className="text-white text-base sm:text-lg italic font-medium leading-relaxed mb-6">
                  <span className="bg-pink-500/30 px-1 py-0.5 rounded box-decoration-clone">
                    When I first met a young widow, abandoned with her baby, I knew I couldn’t just walk away. Aashiana was born from that moment, to stand beside those the world turns away from, until they can stand on their own.
                  </span>
                </blockquote>
              </div>
              
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-11 h-11 bg-brandRed text-white rounded-full flex items-center justify-center font-bold font-heading text-lg shrink-0">
                  VB
                </div>
                <div>
                  <div className="font-bold font-heading text-white text-base">Vinita Bahadur</div>
                  <div className="text-xs text-pink-300 font-medium">Founder, Aashiana – The Shelter Trust</div>
                </div>
              </div>
            </div>

            {/* Glassmorphic Pillar Grid */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-sm grid grid-cols-2 gap-4">
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

          </div>

        </div>

        {/* Our Impact Section (Stat Row / Icon Grid) */}
        <div className="pt-12 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-white font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-block mb-2">
              Our Impact
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              A Decade of Measured Change
            </h3>
            <p className="text-white/70 text-sm mt-2">
              Almost a decade on, Aashiana supports 75 families living with HIV every month. Children are back in school, women earn independent livelihoods, and families receive consistent nutrition and healthcare.
            </p>
          </div>

          {/* Glassmorphic Impact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactStats.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg hover:bg-white/15 transition-all flex items-start gap-4"
                >
                  <div className="p-3 bg-white/10 text-white rounded-xl shrink-0">
                    <IconComponent className="w-6 h-6 text-brandGold" />
                  </div>
                  <div>
                    <span className="block font-black text-2xl text-white tracking-tight mb-0.5">{item.value}</span>
                    <span className="block font-bold text-sm text-white/90 mb-1">{item.label}</span>
                    <span className="block text-xs text-white/60">{item.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
