
import Image from "next/image";
import {
  ArrowRight,
  Gem,
  Award,
  ShieldCheck,
  Infinity as InfinityIcon,
  type LucideIcon,
} from "lucide-react";
import { siteData, type AboutFeature } from "@/data";

const featureIcons: Record<AboutFeature["icon"], LucideIcon> = {
  Gem,
  Award,
  ShieldCheck,
  Infinity: InfinityIcon,
};
const features = siteData.about.features;

export default function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-6 overflow-hidden bg-[#fffdfa] py-16 sm:py-20 lg:py-24">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 py-10 px-10">
        <Image
          src={siteData.common.site.images.aboutBackground}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1350px] items-start gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.08fr] lg:gap-14 lg:px-12">

        {/* LEFT IMAGE COMPOSITION */}
          <div className="relative mx-auto h-[390px] w-full max-w-[570px] sm:h-[520px] lg:h-[580px]">

          {/* Decorative Border */}
          <div className="absolute left-[24%] top-[19%] h-[69%] w-[68%] border border-[#c77b20]" />

          {/* Model Image */}
          <div className="absolute left-0 top-0 h-[78%] w-[80%] overflow-hidden border-[3px] border-white shadow-sm">
            <Image
              src={siteData.common.site.images.aboutModel}
              alt={siteData.about.modelAlt}
              fill
              sizes="(max-width: 768px) 90vw, 450px"
              className="object-cover object-center"
            />
          </div>

          {/* Ring Image */}
          <div className="absolute -bottom-8 right-0 z-10 h-[60%] w-[66%] overflow-hidden border-[3px] border-white shadow-md">
            <Image
              src={siteData.common.site.images.aboutRing}
              alt={siteData.about.ringAlt}
              fill
              sizes="(max-width: 768px) 70vw, 370px"
              className="object-cover object-center"
            />
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="pt-0 text-center lg:pt-0 lg:text-left">

          {/* Section Label */}
          <div className="mb-3 flex items-center justify-center gap-4 lg:justify-start">
            <span className="font-serif text-[34px] italic leading-none text-[#bd6c0c] sm:text-[42px]">
              {siteData.about.eyebrow}
            </span>

            <span className="h-px w-20 bg-[#bd6c0c] sm:w-24" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-[38px] font-medium leading-[1.08] tracking-[-1.5px] text-[#111827] sm:text-[48px] lg:text-[54px] xl:text-[56px]">
            {siteData.about.heading[0]}
            <br />
            {siteData.about.heading[1]}
          </h2>

          {/* Diamond Divider */}
          <div className="my-5 flex items-center justify-center gap-5 lg:justify-start">
            <span className="h-px w-24 bg-[#c77b20]" />

            <Gem
              className="h-8 w-8 shrink-0 text-[#c77b20]"
              strokeWidth={1.5}
            />

            <span className="h-px w-24 bg-[#c77b20]" />
          </div>

          {/* Description */}
          <p className="mx-auto max-w-[570px] font-sans text-[15px] leading-[1.7] tracking-[0.4px] text-[#242424] sm:text-[17px] lg:mx-0 lg:text-[17px]">
            {siteData.about.description}
          </p>

          {/* Features */}
          <div className="mt-7 grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-y-0">

            {features.map(({ icon, lines }, index) => {
              const Icon = featureIcons[icon];

              return (
              <div
                key={index}
                className={`flex min-h-[78px] flex-col items-center justify-center gap-2 px-2 ${
                  index !== 0
                    ? "sm:border-l sm:border-[#d18a35]"
                    : ""
                }`}
              >
                <Icon
                  className="h-9 w-9 text-[#c77b20] sm:h-10 sm:w-10"
                  strokeWidth={1.5}
                />

                <span className="font-sans text-[14px] leading-[1.35] text-[#171717] sm:text-[16px]">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </span>
              </div>
              );
            })}

          </div>

          {/* Read More */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <a
              href="#contact"
              className="group inline-flex h-[55px] min-w-[198px] items-center justify-center gap-3 bg-[#cc7900] px-8 font-sans text-[17px] tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#a95f00] hover:shadow-lg"
            >
              {siteData.about.readMoreText}

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
