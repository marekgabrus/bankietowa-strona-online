
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import bFrontImg from '@/assets/B_front.png';
import salaImg from '@/assets/sala_stolowa2.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: bFrontImg,
      title: 'Galeria Król Pik – Twoje miejsce na wyjątkowe wydarzenia',
      subtitle: 'Imprezy okolicznościowe, eventy kulturalne, transmisje sportowe i wiele więcej',
    },
    {
      image: salaImg,
      title: 'Wielofunkcyjna przestrzeń w sercu Miłoszyc',
      subtitle: 'Wesela, urodziny, wernisaże, koncerty, zloty i wieczory tematyczne',
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

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              'w-3 h-3 rounded-full transition-all duration-300',
              index === currentSlide ? 'bg-gold w-6' : 'bg-white bg-opacity-50'
            )}
            aria-label={`Przejdź do slajdu ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
