
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anna i Piotr",
      event: "Wesele",
      date: "22.06.2023",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2838&auto=format&fit=crop",
      text: "Nasza uroczystość weselna w Sali Bankietowej Patryk przeszła nasze najśmielsze oczekiwania. Profesjonalna obsługa, wspaniałe jedzenie i piękne dekoracje sprawiły, że to był naprawdę wyjątkowy dzień. Dziękujemy za wszystko!",
      rating: 5,
    },
    {
      name: "Monika",
      event: "Komunia",
      date: "14.05.2023",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2922&auto=format&fit=crop",
      text: "Organizowaliśmy komunię naszej córki i jesteśmy zachwyceni jakością obsługi i jedzenia. Goście do dziś wspominają pyszne dania i miłą atmosferę. Z całego serca polecam!",
      rating: 5,
    },
    {
      name: "Tomasz",
      event: "Konferencja firmowa",
      date: "08.03.2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
      text: "Zorganizowaliśmy konferencję dla naszych klientów i wszystko przebiegło idealnie. Profesjonalne podejście, świetne nagłośnienie i catering na najwyższym poziomie. Na pewno wrócimy!",
      rating: 4,
    },
    {
      name: "Karolina i Michał",
      event: "Wesele",
      date: "15.09.2023",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
      text: "Organizacja wesela na najwyższym poziomie. Pan Patryk zadbał o każdy szczegół, a obsługa była niezwykle miła i profesjonalna. Polecamy każdej parze, która szuka wyjątkowego miejsca na swój ślub.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="opinie" className="py-20 bg-purple-DEFAULT text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Opinie klientów</h2>
          <div className="section-divider bg-white before:bg-white after:bg-white"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Poznaj opinie naszych zadowolonych klientów
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden min-h-[400px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-transform duration-500 bg-white/10 backdrop-blur-sm p-8 rounded-lg flex flex-col md:flex-row items-center gap-8",
                  index === currentIndex 
                    ? "translate-x-0" 
                    : index < currentIndex 
                      ? "-translate-x-full" 
                      : "translate-x-full"
                )}
              >
                <div className="w-24 h-24 shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full border-4 border-gold-DEFAULT"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={i < testimonial.rating ? "text-gold-DEFAULT" : "text-white/30"} 
                        size={20} 
                        fill={i < testimonial.rating ? "currentColor" : "none"} 
                      />
                    ))}
                  </div>
                  <p className="italic mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm">{testimonial.event} - {testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            aria-label="Poprzednia opinia"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            aria-label="Następna opinia"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-gold-DEFAULT w-6" : "bg-white/50"
                )}
                aria-label={`Przejdź do opinii ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center reveal">
          <h3 className="text-2xl font-semibold mb-6">Podziel się swoją opinią</h3>
          <a 
            href="#kontakt"
            className="inline-block bg-white text-purple-DEFAULT hover:bg-gold-DEFAULT hover:text-white transition-colors duration-300 px-6 py-3 rounded-md font-medium"
          >
            Dodaj opinię
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
