
import Image from "next/image";
import { Gem } from "lucide-react";
import { siteData } from "@/data";

const galleryImages = siteData.gallery.images;

export default function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-[#fdfaf7] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

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
            <div
              key={image.src}
              className="group relative aspect-[1.38/1] overflow-hidden rounded-xl border border-[#d9a44d] bg-[#f3e9db]"
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
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
