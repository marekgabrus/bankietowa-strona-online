
import { useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2798&auto=format&fit=crop",
      alt: "Elegancko nakryty stół w sali bankietowej",
      category: "sala",
    },
    {
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2728&auto=format&fit=crop",
      alt: "Sala bankietowa przygotowana na przyjęcie weselne",
      category: "sala",
    },
    {
      src: "https://images.unsplash.com/photo-1519741347686-c1e331fcb4d0?q=80&w=2940&auto=format&fit=crop",
      alt: "Kieliszki szampana na stoliku",
      category: "dekoracje",
    },
    {
      src: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2940&auto=format&fit=crop",
      alt: "Nakryty stół z eleganckimi dekoracjami",
      category: "dekoracje",
    },
    {
      src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2940&auto=format&fit=crop",
      alt: "Parkiet taneczny z oświetleniem",
      category: "sala",
    },
    {
      src: "https://images.unsplash.com/photo-1517722014278-c256a91a6fba?q=80&w=2940&auto=format&fit=crop",
      alt: "Catering bankietowy",
      category: "catering",
    },
    {
      src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2940&auto=format&fit=crop",
      alt: "Kwiaty i dekoracje stołu",
      category: "dekoracje",
    },
    {
      src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2940&auto=format&fit=crop",
      alt: "Oprawa muzyczna przyjęcia",
      category: "wydarzenia",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("wszystkie");
  const filters = ["wszystkie", "sala", "dekoracje", "catering", "wydarzenia"];

  const filteredImages = activeFilter === "wszystkie" 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-DEFAULT">Galeria</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Zobacz, jak pięknie prezentuje się nasza sala i zrealizowane przez nas przyjęcia
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-2 rounded-full transition-colors",
                  activeFilter === filter
                    ? "bg-gold-DEFAULT text-white"
                    : "bg-white text-gray-700 hover:bg-gold-light hover:text-white"
                )}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform hover:scale-105 reveal"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <button 
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Powiększony obraz"
            className="max-w-full max-h-[85vh] object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
