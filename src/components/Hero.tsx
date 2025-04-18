
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2798&auto=format&fit=crop',
      title: 'Eleganckie przyjęcia w wyjątkowej atmosferze',
      subtitle: 'Twoja uroczystość w naszej sali bankietowej - niezapomniane chwile czekają',
    },
    {
      image: 'https://images.unsplash.com/photo-1519741347686-c1e331fcb4d0?q=80&w=2940&auto=format&fit=crop',
      title: 'Wyjątkowe wesela i uroczystości rodzinne',
      subtitle: 'Spełniamy Twoje marzenia o idealnym przyjęciu',
    },
    {
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2728&auto=format&fit=crop',
      title: 'Profesjonalna obsługa i wyjątkowy wystrój',
      subtitle: 'Twoje przyjęcie w eleganckiej oprawie',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            'absolute inset-0 w-full h-full transition-opacity duration-1000',
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <div className="max-w-4xl animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <div className="section-divider"></div>
              <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#oferta" className="button-gold">Sprawdź ofertę</a>
                <a href="#kontakt" className="button-outline">Skontaktuj się z nami</a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              'w-3 h-3 rounded-full transition-all duration-300',
              index === currentSlide ? 'bg-gold-DEFAULT w-6' : 'bg-white bg-opacity-50'
            )}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
