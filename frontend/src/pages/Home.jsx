import React from 'react';
import HeroSlider from '../components/HeroSlider';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSlider />

      {/* Home Introduction */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-white font-bold mb-6">
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

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">
                Our Mission
              </h3>

              <p className="text-gray-600">
                We work towards creating meaningful opportunities
                and bringing positive change to people's lives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">
                Our Programs
              </h3>

              <p className="text-gray-600">
                Explore our different programs and initiatives
                designed to support and empower communities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">
                Get Involved
              </h3>

              <p className="text-gray-600">
                Join us, volunteer or support our work and become
                a part of our mission.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-white  font-bold mb-6">
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