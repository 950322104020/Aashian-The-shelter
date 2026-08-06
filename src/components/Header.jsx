import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50 font-body">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Brand Logo Link */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="p-2 rounded-xl bg-brandNavy">
            <img 
              src="/aashiana-logo.png.PNG" 
              alt="Aashiana - The Shelter Trust Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slateDark">
          <a href="#top" className="px-3 py-2 rounded-lg text-slate-700 hover:text-white hover:bg-green-600 transition-all duration-200">Home</a>
          <a href="#about" className="px-3 py-2 rounded-lg text-slate-700 hover:text-white hover:bg-green-600 transition-all duration-200">About Us</a>
          <a href="#programs" className="px-3 py-2 rounded-lg text-slate-700 hover:text-white hover:bg-green-600 transition-all duration-200">Programs</a>
          <a href="#gallery" className="px-3 py-2 rounded-lg text-slate-700 hover:text-white hover:bg-green-600 transition-all duration-200">Gallery</a>
          <a href="#contact" className="px-3 py-2 rounded-lg text-slate-700 hover:text-white hover:bg-green-600 transition-all duration-200">Contact</a>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#donate"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2.5 rounded-full shadow-sm text-sm transition-all duration-200"
          >
            Donate Now
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden p-2 rounded-lg text-slateDark hover:text-brandRed focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {isOpen ? (
            /* Close Icon (X) */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pt-4 pb-6 space-y-4 shadow-lg">
          <nav className="flex flex-col gap-3 font-medium text-sm text-slateDark">
            <a 
              href="#top" 
              onClick={() => setIsOpen(false)} 
              className="py-1 px-4 rounded-lg text-slate-700 hover:text-white hover:bg-green-600 transition-all duration-200"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => setIsOpen(false)} 
              className="py-1 px-4 rounded-lg text-slate-700 hover:text-white hover:bg-green-600 transition-all duration-200"
            >
              About Us
            </a>
            <a 
              href="#programs" 
              onClick={() => setIsOpen(false)} 
              className="py-1 px-4 rounded-lg text-slate-700 hover:text-white hover:bg-green-600 transition-all duration-200"
            >
              Programs
            </a>
            <a 
              href="#gallery" 
              onClick={() => setIsOpen(false)} 
              className="py-1 px-4 rounded-lg text-slate-700 hover:text-white hover:bg-green-600 transition-all duration-200"
            >
              Gallery
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)} 
              className="py-1 px-4 rounded-lg text-slate-700 hover:text-white hover:bg-green-600 transition-all duration-200"
            >
              Contact
            </a>
          </nav>
          <div className="pt-2">
            <a 
              href="#donate"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2.5 rounded-full shadow-sm text-sm transition-all duration-200"
            >
              Donate Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}