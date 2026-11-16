
import Image from "next/image";
import { siteData } from "@/data";

const products = siteData.collection.products;

export default function CollectionSection() {
  return (
    <section
      id="collections"
      className="relative overflow-hidden bg-[#fffaf4] py-12 sm:py-16"
    >
      {/* Decorative Background Image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={siteData.common.site.images.collectionBackground}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1350px] px-4 sm:px-7 lg:px-10">

        {/* Section Heading */}
        <div className="mb-8 text-center sm:mb-10">

          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-[#c77b20]" />

            <svg
              viewBox="0 0 40 30"
              className="h-7 w-9 text-[#b96b0c]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path d="M3 7 L10 2 H30 L37 7 L20 27 Z" />
              <path d="M3 7 H37 M10 2 L20 27 L30 2" />
            </svg>

            <span className="h-px w-14 bg-[#c77b20]" />
          </div>

          <h2 className="font-serif text-[34px] font-medium leading-tight text-[#17172c] sm:text-[42px] lg:text-[46px]">
            {siteData.collection.title}
          </h2>

          <p className="mx-auto mt-2 max-w-[520px] font-sans text-[14px] leading-relaxed text-[#66666b] sm:text-[16px]">
            {siteData.collection.description}
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">

          {products.map((product) => (
            <a
              href="#contact"
              key={product.name}
              className="group relative overflow-hidden rounded-xl border border-[#efd4b3] bg-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-[#c77b20] hover:shadow-[0_8px_25px_rgba(170,105,30,0.12)]"
            >

              {/* Product Image */}
              <div className="relative h-[145px] overflow-hidden sm:h-[190px] lg:h-[210px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Discount Badge */}
                {product.discount && (
                  <span className="absolute left-2 top-2 grid h-9 w-9 place-items-center rounded-full bg-[#bb7000] text-[11px] font-semibold text-white shadow-md sm:left-3 sm:top-3 sm:h-11 sm:w-11 sm:text-xs">
                    {product.discount}
                  </span>
                )}
              </div>

              {/* Product Details */}
              <div className="px-2 pb-3 pt-2 text-center sm:px-3 sm:pb-4">

                <h3 className="line-clamp-1 font-serif text-[12px] font-medium text-[#20202b] sm:text-[15px]">
                  {product.name}
                </h3>

                <p
                  className="mt-1 text-[15px] leading-none tracking-[1px] text-[#e99a00] sm:text-[18px]"
                  aria-label={`${product.rating} out of 5 stars`}
                >
                  {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
                </p>

                <p className="mt-1 font-serif text-[14px] font-medium text-[#ae5c00] sm:text-[16px]">
                  {product.price}
                </p>

              </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}
