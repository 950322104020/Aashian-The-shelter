import React from 'react';
import { Calendar, Users, GraduationCap, BookOpen, Sparkles, HeartHandshake } from 'lucide-react';

export default function StatsCount() {
  const stats = [
    {
      icon: Calendar,
      value: '2011-Present',
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
      label: 'Children in School',
      desc: 'School fees funded',
    },
    {
      icon: BookOpen,
      value: '150',
      label: 'Stationery Kits Provided',
      desc: 'Notebooks, pens & supplies',
    },
    {
      icon: Sparkles,
      value: '16',
      label: 'Women Empowered',
      desc: 'Earning through skill-building',
    },
    {
      icon: HeartHandshake,
      value: '600+',
      label: 'People Reached',
      desc: 'Quarterly outreach visits',
    },
  ];

  return (
    <section className="bg-brandNavy text-white py-16 px-6 font-body border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-brandGold font-bold text-xs uppercase tracking-widest">
            Our Decade of Impact
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
            Real Impact Across Numbers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:border-brandGold/40 transition-all"
              >
                <div className="p-3 bg-brandRed/20 text-brandGold rounded-xl shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl font-extrabold font-heading text-brandGold">
                    {item.value}
                  </div>
                  <div className="text-sm font-bold text-white mt-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}