
import Image from "next/image";
import {
  Gem,
  Phone,
  MapPin,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import { siteData, type SocialLink } from "@/data";

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  const className = "size-6 shrink-0 text-[#e9bd59]";

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
        <div className="relative grid grid-cols-1 gap-10 border-b border-[#c99a35] py-12 pt-16 md:grid-cols-[1fr_1.15fr_0.8fr] md:gap-8 md:pt-16 lg:gap-14">

          {/* Model Image */}
          <div className="relative z-10 mx-auto -mt-28 w-full max-w-[300px] md:absolute md:-top-[70px] md:left-8 md:mx-0 md:mt-0 md:w-[335px] lg:left-16 lg:w-[335px]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[22px] border-[3px] border-[#d9aa4b] bg-[#252525]">
              <Image
                src={siteData.common.site.images.footerModel}
                alt={`${siteData.common.site.name} jewellery collection`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 335px"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center md:col-start-2 md:pl-4 lg:pl-0">

            <p className="mb-1 text-base sm:text-lg">
              {siteData.footer.emailIntro}
            </p>

            <a
              href={siteData.common.site.emailHref}
              className="mb-6 text-lg text-[#e9bd59] transition hover:text-white"
            >
              {siteData.common.site.email}
            </a>

            <a
              href={siteData.common.site.phoneHref}
              className="mb-5 flex items-center gap-5"
            >
              <Phone
                size={29}
                className="shrink-0 fill-[#e9bd59] text-[#e9bd59]"
              />
              <span className="text-2xl font-medium tracking-wide sm:text-3xl">
                {siteData.common.site.phone}
              </span>
            </a>

            <div className="mb-5 flex items-start gap-5">
              <MapPin
                size={32}
                className="mt-1 shrink-0 fill-[#e9bd59] text-[#e9bd59]"
              />
              <p className="text-lg leading-7 sm:text-xl">
                {siteData.common.site.address}
              </p>
            </div>

            <p className="text-base italic leading-7 text-gray-300">
              {siteData.footer.enquiryText}{" "}
              <a
                href="#contact"
                className="text-[#e9bd59] underline underline-offset-4 hover:text-white"
              >
                {siteData.contact.navLabel}
              </a>
            </p>
          </div>

          {/* Social Links & Business Hours */}
          <div className="flex flex-col justify-center border-t border-white/20 pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0 lg:pl-12">

            <div className="space-y-5">
              {siteData.footer.socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="flex items-center justify-end gap-6 text-sm tracking-[4px] transition hover:text-[#e9bd59]"
                >
                  {item.name.toUpperCase()}
                  <SocialIcon icon={item.icon} />
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="my-8 ml-auto h-[2px] w-20 bg-[#d9aa4b]" />

            {/* Business Hours */}
            <div className="flex items-center justify-end gap-5">
              <CalendarDays
                size={30}
                className="shrink-0 text-[#e9bd59]"
              />

              <p className="text-base leading-7">
                {siteData.common.site.openingDays}
                <br />
                {siteData.common.site.openingHours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-col items-center justify-between gap-8 py-8 xl:flex-row">

          {/* Brand Logo */}
          <a
            href="#home"
            className="flex shrink-0 items-center gap-3"
          >
            <Gem
              size={49}
              strokeWidth={1.3}
              className="text-[#e9bd59]"
            />

            <div>
              <h2 className="whitespace-nowrap font-serif text-2xl tracking-wide sm:text-[27px]">
                {siteData.common.site.name.toUpperCase()}
              </h2>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-[1px] flex-1 bg-[#d9aa4b]" />
                <span className="text-[10px] tracking-[4px]">
                  {siteData.common.site.tagline.toUpperCase()}
                </span>
                <span className="h-[1px] flex-1 bg-[#d9aa4b]" />
              </div>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            {siteData.footer.navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-sm transition-colors hover:text-[#e9bd59] ${
                  index === 0
                    ? "font-medium text-[#e9bd59] after:absolute after:-bottom-3 after:left-0 after:h-[3px] after:w-full after:bg-[#e9bd59]"
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
            className="inline-flex shrink-0 items-center gap-3 rounded-md bg-[#e9bd59] px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
          >
            {siteData.contact.navLabel}
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#d9aa4b] py-5 text-center">
          <p className="text-sm text-white sm:text-base">
              {siteData.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
