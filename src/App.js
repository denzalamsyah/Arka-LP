import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import Logo from "./components/Logo";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/WhatsAppButton";
import ImageCarousel from "./components/ImageCarousel";
export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <ImageCarousel />
      <Testimonials />
      <Logo />
      <CTA />
      <Footer />
      <WhatsAppButton />
      <MobileMenu />
    </main>
  );
}
