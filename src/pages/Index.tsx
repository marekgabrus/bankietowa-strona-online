
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Offer from '@/components/Offer';
import Gallery from '@/components/Gallery';
import PriceList from '@/components/PriceList';
import Testimonials from '@/components/Testimonials';
import News from '@/components/News';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import RevealOnScroll from '@/components/RevealOnScroll';

const Index = () => {
  useEffect(() => {
    document.title = 'Sala Bankietowa Patryk Smardzewski | Eleganckie przyjęcia';
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <AboutUs />
      <Offer />
      <Gallery />
      <PriceList />
      <Testimonials />
      <News />
      <Contact />
      <Footer />
      <ScrollToTop />
      <RevealOnScroll />
    </div>
  );
};

export default Index;
