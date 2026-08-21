import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutMobileOpen, setIsAboutMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Memorial', path: '/memorial' },
    { name: 'Contact', path: '/contact' },
  ];

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50 font-body transition-all duration-300">

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-green-500/20 rounded-xl"
        >
          <div className="p-2 rounded-xl bg-brandNavy transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md">
            <img
              src="/aashiana-logo.png"
              alt="Aashiana - The Shelter Trust Logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>
        </Link>


        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className="hidden md:flex items-center gap-2 font-medium text-sm text-slateDark">

          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div key={link.name} className="relative group">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative px-3.5 py-2 rounded-lg transition-all duration-200 flex items-center gap-1 font-semibold ${isActive
                        ? 'text-green-700 bg-green-50'
                        : 'text-slate-700 hover:text-green-700 hover:bg-green-50'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </NavLink>

                  {/* Dropdown Card */}
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-slate-100 rounded-xl shadow-xl py-1.5 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                    {link.subLinks.map((sub) => (
                      <NavLink
                        key={sub.name}
                        to={sub.path}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm font-semibold transition-colors duration-150 ${
                            isActive
                              ? 'text-green-700 bg-green-50'
                              : 'text-slate-700 hover:text-green-700 hover:bg-green-50'
                          }`
                        }
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 rounded-lg transition-all duration-200 group font-semibold ${isActive
                    ? 'text-green-700 bg-green-50'
                    : 'text-slate-700 hover:text-green-700 hover:bg-green-50'
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full" />
              </NavLink>
            );
          })}

        </nav>


        {/* ================= DESKTOP DONATE BUTTON ================= */}
        <div className="hidden md:block">

          <Link
            to="/donate"
            className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold px-6 py-2.5 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Donate Now
          </Link>

        </div>


        {/* ================= MOBILE HAMBURGER ================= */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden p-2 rounded-lg text-slate-700 hover:text-green-700 hover:bg-green-50 active:bg-green-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500/20"
          aria-label="Toggle Navigation"
          aria-expanded={isOpen}
        >

          {isOpen ? (

            <svg
              className="w-6 h-6 transition-transform duration-200 rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

          ) : (

            <svg
              className="w-6 h-6 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

          )}

        </button>

      </div>


      {/* ================= MOBILE MENU ================= */}
      {isOpen && (

        <div className="md:hidden bg-white border-t border-gray-100 px-6 pt-4 pb-6 space-y-4 shadow-xl animate-fadeIn">

          <nav className="flex flex-col gap-1.5 font-medium text-sm text-slateDark">

            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => setIsAboutMobileOpen(!isAboutMobileOpen)}
                      className="px-4 py-2.5 rounded-xl font-semibold text-slate-700 hover:text-green-700 hover:bg-green-50 active:bg-green-100 transition-all duration-200 flex items-center justify-between group"
                    >
                      <span>{link.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isAboutMobileOpen ? 'rotate-180 text-green-600' : 'text-slate-400'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Collapsible Sub-menu */}
                    {isAboutMobileOpen && (
                      <div className="pl-6 pr-4 py-1.5 flex flex-col gap-1 bg-slate-50/50 rounded-xl mt-1 ml-2 border-l border-slate-100">
                        {link.subLinks.map((sub) => (
                          <NavLink
                            key={sub.name}
                            to={sub.path}
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
                                isActive
                                  ? 'text-green-700 bg-green-50'
                                  : 'text-slate-600 hover:text-green-700 hover:bg-green-50'
                              }`
                            }
                          >
                            <span>{sub.name}</span>
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 flex items-center justify-between group ${isActive
                      ? 'text-green-700 bg-green-50'
                      : 'text-slate-700 hover:text-green-700 hover:bg-green-50 active:bg-green-100'
                    }`
                  }
                >
                  <span>{link.name}</span>

                  <span className="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 text-green-600">
                    →
                  </span>

                </NavLink>
              );
            })}          </nav>


          {/* ================= MOBILE DONATE ================= */}
          <div className="pt-2">

            <Link
              to="/donate"
              onClick={closeMobileMenu}
              className="block text-center bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg active:scale-[0.99] text-sm transition-all duration-200"
            >
              Donate Now
            </Link>

          </div>

        </div>

      )}

    </header>
  );
}