import Hero from "../Hero";
import LogoCarousel from "../Logo";
import Testimonials from "../Testimonials";
import CTA from "../CTA";
import Footer from "../Footer";
import WhatsAppButton from "../WhatsAppButton";
import MobileMenu from "../MobileMenu";
import Services from "../Services";
import Header from "../Header";

export default function Pages() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <LogoCarousel />
      <CTA />
      <Footer />
      <WhatsAppButton />
      <MobileMenu />
    </main>
  );
}
