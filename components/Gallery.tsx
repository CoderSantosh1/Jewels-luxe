
"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Gem, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteData } from "@/data";

const galleryImages = siteData.gallery.images;

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  function showPrevious() {
    setActiveImage((current) =>
      current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length,
    );
  }

  function showNext() {
    setActiveImage((current) =>
      current === null ? null : (current + 1) % galleryImages.length,
    );
  }

  useEffect(() => {
    if (activeImage === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveImage(null);
      if (event.key === "ArrowLeft") {
        setActiveImage((current) =>
          current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveImage((current) =>
          current === null ? null : (current + 1) % galleryImages.length,
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage]);

  return (
    <section id="gallery" className="relative overflow-hidden bg-[#fdfaf7] px-5 py-10 sm:px-8 sm:py-12 lg:px-8 lg:py-10">

      <div className="mx-auto max-w-[1350px]">

        {/* Section Heading */}
        <div className="mb-9 text-center">

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
            
          {/* Title */}
          <h2 className="font-serif text-4xl font-bold leading-tight text-[#101b42] sm:text-5xl lg:text-[52px]">
            {siteData.gallery.heading[0]}{" "}
            <span className="text-[#b47719]">
              {siteData.gallery.heading[1]}
            </span>
          </h2>

          {/* Description */}
          <p className="mt-2 text-sm text-[#65666b] sm:text-base">
            {siteData.gallery.description}
          </p>

          {/* Golden Underline */}
          <div className="mx-auto mt-4 h-[2px] w-[68px] bg-[#c58b32]" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">

          {galleryImages.map((image) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveImage(galleryImages.findIndex((item) => item.src === image.src))}
              aria-label={`View ${image.alt}`}
              className="group relative aspect-[1.38/1] cursor-zoom-in overflow-hidden rounded-xl border border-[#d9a44d] bg-[#f3e9db]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
            </button>
          ))}

        </div>
      </div>

      {activeImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActiveImage(null);
            }}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8 sm:top-8"
          >
            <X size={25} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
            className="absolute left-3 z-10 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-8 sm:size-14"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="relative h-[75vh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <Image
              src={galleryImages[activeImage].src}
              alt={galleryImages[activeImage].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 z-10 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8 sm:size-14"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
