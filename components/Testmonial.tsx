
"use client";

import Image from "next/image";
import { useState } from "react";
import { Gem, Quote, Star } from "lucide-react";
import { siteData } from "@/data";

const testimonials = siteData.testimonials.items;

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const current = testimonials[active];

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#fdfaf6] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

      <div className="mx-auto max-w-[1250px]">

        {/* Section Heading */}
        <div className="mb-12 text-center">

         {/* Diamond Divider */}
            <div className="mb-2 flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-[#c77b20]" />

              <Gem
                size={25}
                strokeWidth={1.5}
                className="text-[#c77b20]"
              />

              <span className="h-px w-16 bg-[#c77b20]" />
            </div>

          <h2 className="font-serif text-4xl font-bold leading-tight text-[#101b42] sm:text-5xl lg:text-[56px]">
            {siteData.testimonials.heading[0]}{" "}
            <span className="text-[#b47719]">
              {siteData.testimonials.heading[1]}
            </span>{" "}
            {siteData.testimonials.heading[2]}
          </h2>

          <p className="mt-3 text-base text-gray-600 sm:text-lg lg:text-xl">
            {siteData.testimonials.description}
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">

          {/* Left Image */}
          <div className="relative mx-auto w-full max-w-[560px]">

            {/* Top Left Decorative Border */}
            <div className="absolute -left-3 -top-3 z-0 h-[32%] w-[32%] rounded-tl-[30px] border-l-2 border-t-2 border-[#d49b43]" />

            {/* Bottom Right Decorative Border */}
            <div className="absolute -bottom-3 -right-3 z-0 h-[32%] w-[32%] rounded-br-[30px] border-b-2 border-r-2 border-[#d49b43]" />

            {/* Image */}
            <div className="relative z-10 aspect-[1.22/1] overflow-hidden rounded-[20px] bg-[#eee4d5]">
              <Image
                key={current.image}
                src={current.image}
                alt={siteData.testimonials.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Right Testimonial */}
          <div className="flex flex-col justify-center lg:pl-2">

            {/* Quote Icon */}
            <Quote
              size={53}
              strokeWidth={0}
              fill="#b47719"
              className="mb-3 rotate-180 text-[#b47719]"
            />

            {/* Review */}
            <p className="min-h-[105px] text-lg leading-[1.65] text-[#45474c] sm:text-xl">
              {current.review}
            </p>

            {/* Small Divider */}
            <div className="mb-6 mt-5 h-[2px] w-[85px] bg-[#b47719]" />

            {/* Client Name */}
            <h3 className="font-serif text-2xl font-bold text-[#a86a12] sm:text-[29px]">
              {current.name}
            </h3>

            {/* Location */}
            <p className="mt-1 text-lg text-gray-600 sm:text-xl">
              {current.location}
            </p>

            {/* Star Rating */}
            <div className="mt-4 flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={29}
                  strokeWidth={1}
                  fill="#e99a0c"
                  className="text-[#e99a0c]"
                />
              ))}
            </div>

            {/* Carousel Dots */}
            <div className="mt-10 flex items-center gap-4">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => setActive(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-current={active === index ? "true" : undefined}
                  className={`h-[15px] w-[15px] rounded-full border border-[#c58b32] transition-all duration-300 ${
                    active === index
                      ? "scale-100 bg-[#c58b32]"
                      : "bg-transparent hover:bg-[#c58b32]/30"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
