import Hero from "@/components/Hero";
import Aboutus from "@/components/Aboutus";
import CollectionSection from "@/components/Ourcollecton";
import Whychooseus from "@/components/Whychooseus";
import Testimonials from "@/components/Testmonial";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Aboutus />
      <CollectionSection />
      <Whychooseus />
      <Gallery />
      <Testimonials />
      <Faq />
      <ContactUs />
    </main>
  );
}
