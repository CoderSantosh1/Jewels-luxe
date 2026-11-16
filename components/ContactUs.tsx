"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { siteData, type ContactMethod } from "@/data";

const contactIcons: Record<ContactMethod["icon"], LucideIcon> = { Mail, Phone };

export default function ContactUs() {
  const [emailOpened, setEmailOpened] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`${siteData.contact.emailSubject} from ${name}`);
    const body = encodeURIComponent(
      `${siteData.contact.emailBodyLabels.name}: ${name}\n${siteData.contact.emailBodyLabels.email}: ${email}\n\n${siteData.contact.emailBodyLabels.message}:\n${message}`,
    );

    const emailLink = document.createElement("a");
    emailLink.href = `${siteData.common.site.emailHref}?subject=${subject}&body=${body}`;
    emailLink.click();
    setEmailOpened(true);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-6 bg-[#17130f] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-20"
    >
      <div className="mx-auto grid max-w-[1250px] gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-14 bg-[#d9aa4b]" />
            <span className="font-serif text-lg italic text-[#e9bd59]">
              {siteData.contact.eyebrow}
            </span>
          </div>
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {siteData.contact.heading[0]}{" "}
            <span className="text-[#e9bd59]">{siteData.contact.heading[1]}</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
            {siteData.contact.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {siteData.contact.methods.map((method) => {
              const Icon = contactIcons[method.icon];
              const isEmail = method.contact === "email";
              const value = isEmail
                ? siteData.common.site.email
                : siteData.common.site.phone;
              const href = isEmail
                ? siteData.common.site.emailHref
                : siteData.common.site.phoneHref;

              return (
              <a
                key={method.label}
                href={href}
                className="flex min-w-0 items-center gap-4 border border-white/15 bg-white/[0.04] p-4 transition-colors hover:border-[#e9bd59]/70"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#e9bd59]/10 text-[#e9bd59]">
                  <Icon size={21} strokeWidth={1.7} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-[0.15em] text-white/55">
                    {method.label}
                  </span>
                  <span className="mt-1 block break-words text-sm font-medium sm:text-base">
                    {value}
                  </span>
                </span>
              </a>
              );
            })}
          </div>

          <div className="mt-7 grid gap-5 border-t border-white/15 pt-6 sm:grid-cols-2">
            <div className="flex items-start gap-3 text-sm leading-6 text-white/75">
              <MapPin className="mt-1 shrink-0 text-[#e9bd59]" size={20} />
              <p>
                {siteData.common.site.address}
              </p>
            </div>
            <div className="flex items-start gap-3 text-sm leading-6 text-white/75">
              <Clock3 className="mt-1 shrink-0 text-[#e9bd59]" size={20} />
              <p>
                {siteData.common.site.openingDays}
                <br />
                {siteData.common.site.openingHours}
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-[#d9aa4b]/45 bg-white/[0.04] p-6 sm:p-8"
        >
          <h3 className="font-serif text-2xl sm:text-3xl">
            {siteData.contact.formTitle}
          </h3>
          <p className="mt-2 text-sm leading-6 text-white/65">
            {siteData.contact.formDescription}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm text-white/80">
              {siteData.contact.nameLabel}
              <input
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-2 min-h-12 w-full border border-white/20 bg-black/20 px-3 text-base text-white outline-none transition placeholder:text-white/40 focus:border-[#e9bd59]"
                placeholder={siteData.contact.namePlaceholder}
              />
            </label>
            <label className="block text-sm text-white/80">
              {siteData.contact.emailLabel}
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-2 min-h-12 w-full border border-white/20 bg-black/20 px-3 text-base text-white outline-none transition placeholder:text-white/40 focus:border-[#e9bd59]"
                placeholder={siteData.contact.emailPlaceholder}
              />
            </label>
            <label className="block text-sm text-white/80 sm:col-span-2">
              {siteData.contact.messageLabel}
              <textarea
                name="message"
                required
                rows={4}
                className="mt-2 w-full resize-y border border-white/20 bg-black/20 px-3 py-3 text-base text-white outline-none transition placeholder:text-white/40 focus:border-[#e9bd59]"
                placeholder={siteData.contact.messagePlaceholder}
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#d9aa4b] px-6 font-serif font-medium text-[#17130f] transition-colors hover:bg-[#f0cb78]"
          >
            {siteData.contact.submitLabel} <ArrowRight size={18} />
          </button>
          <p aria-live="polite" className="mt-3 min-h-5 text-sm text-[#f0cb78]">
            {emailOpened ? siteData.contact.successMessage : ""}
          </p>
        </form>
      </div>
    </section>
  );
}
