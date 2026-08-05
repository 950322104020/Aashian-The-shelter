import React from 'react';
export default function Header() {
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

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slateDark">
          
          <a href="#top" className="hover:text-brandRed transition-colors">Home</a>
          <a href="#about" className="hover:text-brandRed transition-colors">About Us</a>
          <a href="#programs" className="hover:text-brandRed transition-colors">Programs</a>
          <a href="#gallery" className="hover:text-brandRed transition-colors">Gallery</a>
          
          <a href="#contact" className="hover:text-brandRed transition-colors">Contact</a>
        </nav>

        {/* CTA Button */}
        <a 
          href="#donate"
          className="bg-brandRed hover:bg-red-700 text-brandnavy font-semibold px-6 py-2.5 rounded-full shadow-sm text-sm transition-all"
        >
          Donate Now
        </a>

      </div>
    </header>
  );
}