
"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { siteData } from "@/data";

const navLinks = siteData.navigation;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 w-full border-t-[3px] border-[#33302b] bg-[#fbf5ed]">
      <div className="mx-auto flex min-h-[103px] max-w-[1280px] items-center justify-between px-5 md:px-8 lg:px-4">

        {/* Logo */}
        <a
          href="#home"
          className="flex shrink-0 flex-col items-center text-[#171717]"
        >
          <svg
            viewBox="0 0 60 38"
            fill="none"
            className="mb-[-2px] h-[36px] w-[58px] text-[#a9540a]"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M8 5 H52 L30 34 Z" />
            <path d="M8 5 L20 19 L30 34 L40 19 L52 5" />
            <path d="M8 5 H52" />
            <path d="M20 19 H40" />
            <path d="M20 5 L30 19 L40 5" />
          </svg>

          <span className="font-serif text-[24px] leading-none tracking-[-1px]">
            {siteData.common.site.name.toUpperCase()}
          </span>

          <div className="mt-[5px] flex w-full items-center gap-2">
            <span className="h-px flex-1 bg-[#39332e]" />
            <span className="whitespace-nowrap text-[9px] font-semibold tracking-[2.5px]">
              {siteData.common.site.tagline.toUpperCase()}
            </span>
            <span className="h-px flex-1 bg-[#39332e]" />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex xl:gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative whitespace-nowrap py-2 font-serif text-[15px] transition-colors duration-300 hover:text-[#a9540a]
                ${
                  index === 0
                    ? "text-[#a9540a] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-[#a9540a]"
                    : "text-[#171717]"
                }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden h-[43px] min-w-[178px] items-center justify-center gap-2 rounded-[3px] bg-[#b96b17] px-6 font-serif text-[15px] text-white transition-all duration-300 hover:bg-[#92500e] lg:flex"
        >
          {siteData.contact.navLabel}
          <ArrowRight size={17} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="flex items-center justify-center text-[#a9540a] lg:hidden"
        >
          {isOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`absolute left-0 top-full w-full border-t border-[#e8d9c8] bg-[#fbf5ed] shadow-lg transition-all duration-300 lg:hidden ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-[#eadfd2] py-3 font-serif text-[16px] text-[#171717] transition-colors hover:text-[#a9540a]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 flex h-[45px] items-center justify-center gap-2 rounded-[3px] bg-[#b96b17] font-serif text-white transition-colors hover:bg-[#92500e]"
          >
            {siteData.contact.navLabel}
            <ArrowRight size={17} />
          </a>
        </nav>
      </div>
    </header>
  );
}
