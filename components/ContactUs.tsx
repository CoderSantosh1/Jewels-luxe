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
      className="scroll-mt-6 bg-[#f6eee3] px-5 py-16 text-[#28231e] sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1250px] gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-14 bg-[#d9aa4b]" />
            <span className="font-serif text-lg italic text-[#9c641c]">
              {siteData.contact.eyebrow}
            </span>
          </div>
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {siteData.contact.heading[0]}{" "}
            <span className="text-[#9c641c]">{siteData.contact.heading[1]}</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#5d554c] sm:text-lg">
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
                className="flex min-w-0 items-center gap-4 border border-[#d8c7b1] bg-white/70 p-4 transition-colors hover:border-[#b47719]"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#b47719]/10 text-[#9c641c]">
                  <Icon size={21} strokeWidth={1.7} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-[0.15em] text-[#74695e]">
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

          <div className="mt-7 grid gap-5 border-t border-[#d8c7b1] pt-6 sm:grid-cols-2">
            <div className="flex items-start gap-3 text-sm leading-6 text-[#5d554c]">
              <MapPin className="mt-1 shrink-0 text-[#9c641c]" size={20} />
              <p>
                {siteData.common.site.address}
              </p>
            </div>
            <div className="flex items-start gap-3 text-sm leading-6 text-[#5d554c]">
              <Clock3 className="mt-1 shrink-0 text-[#9c641c]" size={20} />
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
          className="border border-[#d8c7b1] bg-white/80 p-6 sm:p-8"
        >
          <h3 className="font-serif text-2xl sm:text-3xl">
            {siteData.contact.formTitle}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[#74695e]">
            {siteData.contact.formDescription}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm text-[#5d554c]">
              {siteData.contact.nameLabel}
              <input
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-2 min-h-12 w-full border border-[#d8c7b1] bg-white px-3 text-base text-[#28231e] outline-none transition placeholder:text-[#9b9186] focus:border-[#b47719]"
                placeholder={siteData.contact.namePlaceholder}
              />
            </label>
            <label className="block text-sm text-[#5d554c]">
              {siteData.contact.emailLabel}
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-2 min-h-12 w-full border border-[#d8c7b1] bg-white px-3 text-base text-[#28231e] outline-none transition placeholder:text-[#9b9186] focus:border-[#b47719]"
                placeholder={siteData.contact.emailPlaceholder}
              />
            </label>
            <label className="block text-sm text-[#5d554c] sm:col-span-2">
              {siteData.contact.messageLabel}
              <textarea
                name="message"
                required
                rows={4}
                className="mt-2 w-full resize-y border border-[#d8c7b1] bg-white px-3 py-3 text-base text-[#28231e] outline-none transition placeholder:text-[#9b9186] focus:border-[#b47719]"
                placeholder={siteData.contact.messagePlaceholder}
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#b47719] px-6 font-serif font-medium text-white transition-colors hover:bg-[#925b12]"
          >
            {siteData.contact.submitLabel} <ArrowRight size={18} />
          </button>
          <p aria-live="polite" className="mt-3 min-h-5 text-sm text-[#80500f]">
            {emailOpened ? siteData.contact.successMessage : ""}
          </p>
        </form>
      </div>
    </section>
  );
}
