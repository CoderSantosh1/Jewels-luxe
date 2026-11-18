
import Image from "next/image";
import {
  Gem,
  Crown,
  ShieldCheck,
  Sprout,
  Gift,
  type LucideIcon,
} from "lucide-react";
import { siteData, type WhyBenefit } from "@/data";

const benefitIcons: Record<WhyBenefit["icon"], LucideIcon> = {
  Gem,
  Crown,
  ShieldCheck,
  Sprout,
  Gift,
};
const benefits = siteData.whyChooseUs.benefits;

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative overflow-hidden bg-[#fffaf5]  py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={siteData.common.site.images.aboutBackground}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 md:grid-cols-[42%_58%] md:gap-0">

        {/* LEFT IMAGE */}
        <div className="relative hidden aspect-square w-full overflow-hidden md:block">

          <div className="hidden w-full md:block">
            <Image
                src={siteData.common.site.images.whyChooseUs}
                alt={siteData.whyChooseUs.imageAlt}
                fill
                sizes="(max-width: 1024px) 42vw, 588px"
                className="object-cover object-[42%_center]"
            />
            </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="relative px-0 md:px-5 lg:px-8 xl:px-10">

          {/* Heading */}
          <div className="text-center">

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
            <h2 className="font-serif text-[34px] font-medium leading-tight text-[#171827] sm:text-[42px] lg:text-[46px]">
              {siteData.whyChooseUs.heading[0]}{" "}
              <span className="text-[#bd700b]">
                {siteData.whyChooseUs.heading[1]}
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-2 max-w-[490px] font-sans text-[14px] leading-[1.5] text-[#62626a] sm:text-[16px]">
              {siteData.whyChooseUs.description}
            </p>

            {/* Small Gold Divider */}
            <div className="mx-auto mt-3 h-[2px] w-16 bg-[#c77b20]" />

          </div>

          {/* Benefits */}
          <div className="mt-5">

            {benefits.map(({ icon, title, description }) => {
              const Icon = benefitIcons[icon];

              return (
              <div
                key={title}
                className="group flex items-center gap-3 border-b border-[#eadbca]/60 px-1 py-2.5 transition-colors duration-300 hover:bg-white/40 sm:gap-5 sm:py-2.5"
              >

                {/* Icon Circle */}
                <div className="grid size-[48px] shrink-0 place-items-center text-[#bd700b] transition-colors duration-300 group-hover:text-[#8f5107] sm:size-[55px]">

                  <Icon
                    size={29}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />

                </div>

                {/* Vertical Separator */}
                <span className="h-9 w-px shrink-0 bg-[#d28a2b]" />

                {/* Benefit Content */}
                <div className="min-w-0">

                  <h3 className="font-serif text-[16px] font-bold leading-tight text-[#171827] sm:text-[18px]">
                    {title}
                  </h3>

                  <p className="mt-1 font-sans text-[12px] leading-snug text-[#62626a] sm:text-[13px]">
                    {description}
                  </p>

                </div>

              </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}
