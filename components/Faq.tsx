import { ArrowRight, Gem } from "lucide-react";
import { siteData } from "@/data";

const questions = siteData.faq.items;

export default function Faq() {
  return (
    <section
      id="faqs"
      className="scroll-mt-6 bg-[#fffaf4] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
    >
      <div className="mx-auto grid max-w-[1250px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="text-center lg:pt-5 lg:text-left">
          <div className="mb-3 flex items-center justify-center gap-3 lg:justify-start">
            <span className="h-px w-14 bg-[#c77b20]" />
            <Gem className="h-6 w-6 text-[#b96b0c]" strokeWidth={1.5} />
            <span className="h-px w-14 bg-[#c77b20]" />
          </div>
          <h2 className="font-serif text-4xl font-medium text-[#17172c] sm:text-5xl">
            {siteData.faq.heading[0]}{" "}
            <span className="text-[#b47719]">{siteData.faq.heading[1]}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#62626a] sm:text-base lg:mx-0">
            {siteData.faq.description}
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex h-12 items-center justify-center gap-3 bg-[#b96b17] px-6 font-serif text-white transition-colors hover:bg-[#92500e]"
          >
            {siteData.faq.ctaText} <ArrowRight size={18} />
          </a>
        </div>

        <div className="divide-y divide-[#eadbca] border-y border-[#eadbca]">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-serif text-lg text-[#171827] marker:hidden sm:text-xl [&::-webkit-details-marker]:hidden">
                {question}
                <span className="shrink-0 text-2xl leading-none text-[#b47719] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-3xl pt-4 pr-8 text-sm leading-7 text-[#62626a] sm:text-base">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
