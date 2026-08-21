import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSlider />

      {/* Home Introduction */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl text-white font-bold mb-6">
            Welcome to Our Organization
          </h2>

          <p className="max-w-3xl mx-auto text-white leading-8">
            We are committed to making a positive difference in the
            community through meaningful programs, initiatives and
            opportunities.
          </p>

        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Do
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how we are working to create a better future
              through our different initiatives and programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* About Us */}
            <Link
              to="/about"
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-slate-100/50 flex flex-col sm:flex-row gap-6 items-center group text-left"
            >
              <img
                src="https://i.postimg.cc/g2V8kKmC/founder-fixed-4x3.jpg"
                alt="About Us"
                className="w-full sm:w-32 h-40 sm:h-32 object-cover rounded-xl flex-shrink-0"
              />
              <div className="flex-grow flex flex-col justify-between w-full">
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-800 mb-2 group-hover:text-green-700 transition-colors">
                    About Us
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    In 2010, Vinita Bahadur, a schoolteacher of 20 years then working with an HIV/AIDS awareness organisation across India....
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-green-600 group-hover:translate-x-1 transition-transform">
                  <span>Learn More</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

            {/* Our Programs */}
            <Link
              to="/programs"
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-slate-100/50 flex flex-col sm:flex-row gap-6 items-center group text-left"
            >
              <img
                src="https://i.postimg.cc/cJbLLVS8/gold-fixed-4x3.jpg"
                alt="Our Programs"
                className="w-full sm:w-32 h-40 sm:h-32 object-cover rounded-xl flex-shrink-0"
              />
              <div className="flex-grow flex flex-col justify-between w-full">
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-800 mb-2 group-hover:text-green-700 transition-colors">
                    Our Programs
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Comprehensive Programs Restoring Dignity & Hope.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-green-600 group-hover:translate-x-1 transition-transform">
                  <span>View Programs</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

            {/* Gallery */}
            <Link
              to="/gallery"
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-slate-100/50 flex flex-col sm:flex-row gap-6 items-center group text-left"
            >
              <img
                src="https://i.postimg.cc/htRs4vW8/glry1.jpg"
                alt="Gallery"
                className="w-full sm:w-32 h-40 sm:h-32 object-cover rounded-xl flex-shrink-0"
              />
              <div className="flex-grow flex flex-col justify-between w-full">
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-800 mb-2 group-hover:text-green-700 transition-colors">
                    Gallery
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    View photos and highlights of our community outreach events and smiles.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-green-600 group-hover:translate-x-1 transition-transform">
                  <span>See Photos</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

            {/* Memorial */}
            <Link
              to="/memorial"
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-slate-100/50 flex flex-col sm:flex-row gap-6 items-center group text-left"
            >
              <img
                src="/memorial_1.jpg"
                alt="Memorial"
                className="w-full sm:w-32 h-40 sm:h-32 object-cover rounded-xl flex-shrink-0"
              />
              <div className="flex-grow flex flex-col justify-between w-full">
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-800 mb-2 group-hover:text-green-700 transition-colors">
                    Memorial
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Honoring the memory of our beloved members and supporters who stood beside us.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-green-600 group-hover:translate-x-1 transition-transform">
                  <span>View Memorial</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-slate-100/50 flex flex-col sm:flex-row gap-6 items-center group text-left md:col-span-2"
            >
              <img
                src="https://i.postimg.cc/QdLf7tXQ/gl3.jpg"
                alt="Contact Us"
                className="w-full sm:w-32 h-40 sm:h-32 object-cover rounded-xl flex-shrink-0"
              />
              <div className="flex-grow flex flex-col justify-between w-full">
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-800 mb-2 group-hover:text-green-700 transition-colors">
                    Contact Us
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Get in touch with us for support, coordinates, donations, or questions.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-green-600 group-hover:translate-x-1 transition-transform">
                  <span>Get in Touch</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl text-white font-bold mb-6">
            Together We Can Make a Difference
          </h2>

          <p className="text-white  max-w-2xl mx-auto">
            Your support can help us continue our work and reach
            more people in need.
          </p>

        </div>
      </section>
    </>
  );
}