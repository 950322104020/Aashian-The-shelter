import React from 'react';
import { ShieldCheck, HeartHandshake, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brandRed font-bold text-xs uppercase tracking-widest">Who We Are</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brandNavy mt-2">
            Dedicated to Dignity, Support, and Ending HIV Stigma
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg">
            AASA HIV Foundation provides confidential testing, ART medical assistance, educational campaigns, and holistic counseling to affected individuals and communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-offWhite rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="w-14 h-14 bg-red-100 text-brandRed rounded-full flex items-center justify-center mx-auto mb-5">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-xl font-bold text-brandNavy mb-2">100% Confidential</h3>
            <p className="text-gray-600 text-sm">We ensure total privacy and safe spaces for medical consultations, counselling, and viral load screening.</p>
          </div>

          <div className="p-8 bg-offWhite rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="w-14 h-14 bg-blue-100 text-brandNavy rounded-full flex items-center justify-center mx-auto mb-5">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-xl font-bold text-brandNavy mb-2">ART Medical Access</h3>
            <p className="text-gray-600 text-sm">Facilitating free rapid testing, antiretroviral therapy support, and nutrition kits for families.</p>
          </div>

          <div className="p-8 bg-offWhite rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="w-14 h-14 bg-yellow-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-5">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-xl font-bold text-brandNavy mb-2">Community Outreach</h3>
            <p className="text-gray-600 text-sm">Conducting awareness workshops in rural and urban areas to break stigma and build supportive networks.</p>
          </div>
        </div>
      </div>
    </section>
  );
}