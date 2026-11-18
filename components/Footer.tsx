
import Image from "next/image";
import {
  Phone,
  MapPin,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import { siteData, type SocialLink } from "@/data";

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  const className = "size-5 shrink-0 text-[#e9bd59] sm:size-6";

  if (icon === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="currentColor"
          d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.022 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.98h-1.514c-1.491 0-1.955.93-1.955 1.887v2.257h3.328l-.532 3.49h-2.796V24C19.612 23.095 24 18.092 24 12.073z"
        />
      </svg>
    );
  }

  if (icon === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={className}
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-5-7.2L5.7 22H2.5l7.3-8.4L1.8 2h6.5l4.5 6.7L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#090909] text-white">

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">

        {/* Main Footer Content */}
        <div className="relative grid grid-cols-1 gap-8 py-10 md:gap-8 md:py-12 md:pt-16 lg:grid-cols-[1fr_1.15fr_0.8fr] lg:gap-14 lg:pt-20">

          {/* Model Image */}
          <div className="relative z-10 mx-auto w-full max-w-[190px] md:max-w-[250px] lg:absolute lg:-top-[70px] lg:left-16 lg:mx-0 lg:w-[335px] lg:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[18px] border-[3px] border-[#d9aa4b] bg-[#252525] lg:rounded-[22px]">
              <Image
                src={siteData.common.site.images.footerModel}
                alt={`${siteData.common.site.name} jewellery collection`}
                fill
                priority
                sizes="(max-width: 768px) 190px, 335px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex min-w-0 flex-col justify-center lg:col-start-2 lg:pl-0">

            <p className="mb-1 text-sm text-gray-100 sm:text-lg">
              {siteData.footer.emailIntro}
            </p>

            <a
              href={siteData.common.site.emailHref}
              className="mb-5 break-all text-base text-[#e9bd59] transition hover:text-white sm:mb-6 sm:text-lg"
            >
              {siteData.common.site.email}
            </a>

            {/* Phone */}
            <a
              href={siteData.common.site.phoneHref}
              className="mb-4 flex min-w-0 items-center gap-3 sm:gap-5"
            >
              <Phone
                size={25}
                className="shrink-0 fill-[#e9bd59] text-[#e9bd59] sm:size-[29px]"
              />

              <span className="min-w-0 break-words text-xl font-medium tracking-wide sm:text-2xl lg:text-3xl">
                {siteData.common.site.phone}
              </span>
            </a>

            {/* Address */}
            <div className="mb-4 flex items-start gap-3 sm:gap-5">
              <MapPin
                size={27}
                className="mt-1 shrink-0 text-[#e9bd59] sm:size-8"
              />

              <p className="min-w-0 text-sm leading-6 text-gray-100 sm:text-lg sm:leading-7 lg:text-xl">
                {siteData.common.site.address}
              </p>
            </div>

            {/* Enquiry Text */}
            <p className="text-sm italic leading-6 text-gray-300 sm:text-base sm:leading-7">
              {siteData.footer.enquiryText}{" "}
              <a
                href="#contact"
                className="whitespace-nowrap text-[#e9bd59] underline underline-offset-4 hover:text-white"
              >
                {siteData.contact.navLabel}
              </a>
            </p>
          </div>

          {/* Social Links & Business Hours */}
          <div className="flex min-w-0 flex-col justify-center border-t border-white/20 pt-7 md:border-l md:border-t-0 md:pl-8 md:pt-0 lg:pl-12">

            {/* Social Links */}
            <div className="mx-auto w-full max-w-[280px] space-y-5 md:mx-0 md:max-w-none">

              {siteData.footer.socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="flex items-center justify-between gap-5 text-xs tracking-[3px] transition hover:text-[#e9bd59] sm:text-sm sm:tracking-[4px] md:justify-end"
                >
                  <span>{item.name.toUpperCase()}</span>
                  <SocialIcon icon={item.icon} />
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="my-6 ml-auto mr-auto h-[2px] w-16 bg-[#d9aa4b] md:mr-0 md:w-20" />

            {/* Business Hours */}
            <div className="flex items-center justify-center gap-4 md:justify-end md:gap-5">
              <CalendarDays
                size={26}
                className="shrink-0 text-[#e9bd59] sm:size-[30px]"
              />

              <p className="text-sm leading-6 sm:text-base sm:leading-7">
                {siteData.common.site.openingDays}
                <br />
                {siteData.common.site.openingHours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center gap-7 py-8 xl:flex-row xl:justify-between">

          {/* Brand Logo */}
          <a
            href="#home"
            className="flex shrink-0 items-center justify-center gap-3"
          >
            <svg
              viewBox="0 0 60 38"
              fill="none"
              className="h-[36px] w-[42px] shrink-0 text-[#e9bd59] sm:w-[49px]"
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

            <div>
              <h2 className="whitespace-nowrap font-serif text-xl tracking-wide sm:text-2xl lg:text-[27px]">
                {siteData.common.site.name.toUpperCase()}
              </h2>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-[1px] flex-1 bg-[#d9aa4b]" />

                <span className="whitespace-nowrap text-[9px] tracking-[3px] sm:text-[10px] sm:tracking-[4px]">
                  {siteData.common.site.tagline.toUpperCase()}
                </span>

                <span className="h-[1px] flex-1 bg-[#d9aa4b]" />
              </div>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="grid w-full grid-cols-2 gap-x-5 gap-y-4 text-center sm:flex sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-4 xl:w-auto">

            {siteData.footer.navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-xs transition-colors hover:text-[#e9bd59] sm:text-sm ${
                  index === 0
                    ? "font-medium text-[#e9bd59]"
                    : "text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-[#e9bd59] px-5 py-3 text-sm font-semibold text-black transition hover:bg-white sm:w-auto"
          >
            {siteData.contact.navLabel}
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#d9aa4b] py-5 text-center">
          <p className="text-xs leading-6 text-white sm:text-sm md:text-base">
            {siteData.footer.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
}
