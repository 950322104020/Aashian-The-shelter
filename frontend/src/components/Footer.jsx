import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brandNavy text-white py-12 px-4 border-t border-white/10 font-body">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/aashiana-logo.png"
              alt="AASHIANA Foundation Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="white text-sm leading-relaxed">
            Dedicated to ending HIV stigma, providing medical care, and creating an inclusive community.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-brandGold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white-300">
            <li><Link to="/" className="block px-3 py-2 rounded-lg text-white hover:text-white hover:bg-green-600 transition-all duration-200">Home</Link></li>
            <li><Link to="/about" className="block px-3 py-2 rounded-lg text-white hover:text-white hover:bg-green-600 transition-all duration-200">About Us</Link></li>
            <li><Link to="/gallery" className="block px-3 py-2 rounded-lg text-white hover:text-white hover:bg-green-600 transition-all duration-200">Gallery</Link></li>
            <li><Link to="/programs" className="block px-3 py-2 rounded-lg text-white hover:text-white hover:bg-green-600 transition-all duration-200">Our Programs</Link></li>
            <li><Link to="/contact" className="block px-3 py-2 rounded-lg text-white hover:text-white hover:bg-green-600 transition-all duration-200">Contact Us</Link></li>
            <li>
              <Link
                to="/memorial"
                className="block px-3 py-2 rounded-lg text-white hover:text-white hover:bg-green-600 transition-all duration-200"
              >
                Memorial
              </Link>
            </li>
            <li><a href="#donate" className="block px-3 py-2 rounded-lg text-white hover:text-white hover:bg-green-600 transition-all duration-200">Donate</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-brandGold mb-4">Support & Helpline</h4>
          <p className="text-sm text-white-300">Contact:</p>
          <p className="text-lg font-bold text-white mt-1">+91 9811566561 </p>
           <p className="text-sm text-white-300">Email Support : aashiana.theshelter@gmail.com</p>
          <p className="text-xs text-white mt-2">100% Confidential Support</p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-brandGold mb-4">Location</h4>
          <p className="text-sm text-white-300">
           Headquarters,<br />
          RZ-61, First Floor. Palam Vihar. Sector-6. Dwarka. New Delhi- 110075
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-6 text-center text-xs text-white">
        © {new Date().getFullYear()} AASHIANA HIV Foundation. All rights reserved.
      </div>
    </footer>
  );
}