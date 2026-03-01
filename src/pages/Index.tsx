
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Offer from '@/components/Offer';
import Gallery from '@/components/Gallery';
import PriceList from '@/components/PriceList';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import RevealOnScroll from '@/components/RevealOnScroll';

const Index = () => {
  useEffect(() => {
    document.title = 'Galeria Król Pik | Imprezy, eventy, kultura – Miłoszyce';
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <AboutUs />
      <Offer />
      <Gallery />
      <PriceList />
      <Contact />
      <Footer />
      <ScrollToTop />
      <RevealOnScroll />
    </div>
  );
};

export default Index;
