
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteData } from "@/data";

const slides = siteData.hero.slides;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section
      id="home"
      className="relative flex min-h-[580px] w-full items-center overflow-hidden bg-[#fbf4ec] md:min-h-[590px] lg:h-[580px]"
    >
      {/* Background Image */}
      {slides.map((item, index) => (
        <Image
          key={`${item.image}-${index}`}
          src={item.image}
          alt={siteData.hero.imageAlt}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-1000 ${
            activeSlide === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fbf4ec]/70 via-[#fbf4ec]/65 to-[#fbf4ec]/35 md:from-transparent md:via-transparent md:to-[#fbf4ec]/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] justify-end px-6 py-16 sm:px-10 lg:px-16">
        <div className="w-full text-center md:w-[52%] lg:w-[51%] lg:pr-5">

          {/* Decorative Diamond */}
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#b66a20]" />

            <svg
              viewBox="0 0 40 30"
              className="h-7 w-9 text-[#a9540a]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M3 7 L10 2 H30 L37 7 L20 27 Z" />
              <path d="M3 7 H37 M10 2 L20 27 L30 2 M10 2 L13 7 L20 2 L27 7 L30 2" />
            </svg>

            <span className="h-px w-16 bg-[#b66a20]" />
          </div>

          {/* Offer */}
          <p className="mb-4 font-serif text-2xl italic text-[#a9540a] sm:text-3xl lg:text-[34px]">
            {slide.offer}
          </p>

          {/* Heading */}
          <h1 className="mb-5 font-serif text-[26px] leading-[1.05] tracking-[-0.5px] text-[#171717] sm:text-5xl lg:text-[64px] lg:leading-[1.02]">
            {slide.title}
            <br />
            {slide.subtitle}
          </h1>

          {/* Description */}
          <p className="mb-6 text-sm tracking-wide text-[#48413b] sm:text-base lg:text-[18px]">
            {slide.description}
          </p>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex h-[52px] min-w-[180px] items-center justify-center gap-3 border border-[#b66a20] bg-[#b96b17] px-8 font-serif text-base text-white transition-all duration-300 hover:bg-[#92500e]"
          >
            {siteData.hero.ctaText}
            <ArrowRight size={19} />
          </a>
        </div>
      </div>

      {/* Slider Indicators - Always Center */}
      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={activeSlide === index ? "true" : undefined}
            className={`h-[10px] rounded-full border border-[#a9540a] transition-all duration-300 ${
              activeSlide === index
                ? "w-7 bg-[#a9540a]"
                : "w-[10px] bg-transparent"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
