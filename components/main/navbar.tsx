'use client';

import { useState, useCallback } from "react";
import Link from "next/link";
import { NAV_LINKS, SOCIALS } from "@/constants";
import { dancingScript } from "@/app/fonts";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <header className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">

        {/* LEFT – NAV LINKS */}
        <nav
          className="hidden md:flex w-[250px] h-full flex-row items-center"
          aria-label="Primary navigation"
        >
          <div className="flex items-center justify-between w-full px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition-colors duration-200"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </nav>

        {/* CENTER – NAME / LOGO */}
        <Link
          href="#about-me"
          className="hidden md:flex absolute left-1/2 -translate-x-1/2"
          aria-label="Scroll to top"
        >
          <span
            className={`
              px-6 py-2 rounded-full
              text-3xl tracking-wide font-medium
              text-gray-300 bg-[#030014]/80
              backdrop-blur-md
              hover:text-white hover:scale-105 transition-all duration-200
              ${dancingScript.className}
            `}
          >
            Rishav Kumar Garg
          </span>
        </Link>

        {/* RIGHT – SOCIAL ICONS */}
        <div className="hidden md:flex flex-row gap-5" aria-label="Social links">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              aria-label={`Visit ${name}`}
            >
              <Icon className="h-6 w-6 text-white hover:text-purple-400 transition-colors duration-200" />
            </Link>
          ))}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-[65px] left-0 w-full bg-[#030014]/95 backdrop-blur-md p-5 flex flex-col items-center text-gray-300 md:hidden border-t border-white/10"
        >
          <nav className="flex flex-col items-center gap-4" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="hover:text-[rgb(112,66,248)] transition-colors duration-200 text-lg"
                onClick={closeMobileMenu}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                aria-label={`Visit ${name}`}
                onClick={closeMobileMenu}
              >
                <Icon className="h-8 w-8 text-white hover:text-purple-400 transition-colors duration-200" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
