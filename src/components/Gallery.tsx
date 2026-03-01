import { useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import salaStolowa from '@/assets/sala_stolowa2.png';
import salaParkiet from '@/assets/gallery/sala_parkiet.png';
import bFront from '@/assets/B_front.png';
import bFront2 from '@/assets/gallery/B_front2.png';
import bTaras from '@/assets/gallery/B_taras2.png';
import kawiarnia from '@/assets/gallery/kawiarnia_salonik.png';
import kuchnia from '@/assets/gallery/kuchnia_wspolna.png';
import pokoj1os1 from '@/assets/gallery/pokoj_1osobowy1.png';
import pokoj1os2 from '@/assets/gallery/pokoj_1osobowy2.png';
import pokoj2os1 from '@/assets/gallery/pokoj_2osobowy1.png';
import pokoj2os2 from '@/assets/gallery/pokoj_2osobowy2.png';
import pokojPodwojny from '@/assets/gallery/pokoj_podwojny.png';

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  category: string;
  featured?: boolean;
};

const images: GalleryImage[] = [
  { src: salaParkiet, alt: 'Sala główna – parkiet taneczny', caption: 'Sala główna – parkiet', category: 'sala', featured: true },
  { src: salaStolowa, alt: 'Sala główna – układ stołowy', caption: 'Sala główna – układ stołowy', category: 'sala', featured: true },
  { src: bFront, alt: 'Budynek – widok od frontu', caption: 'Budynek – front', category: 'budynek' },
  { src: bFront2, alt: 'Budynek – elewacja frontowa', caption: 'Budynek – elewacja', category: 'budynek' },
  { src: bTaras, alt: 'Budynek – taras i ogród', caption: 'Taras i ogród', category: 'budynek', featured: true },
  { src: kawiarnia, alt: 'Herbaciarnia – salonik', caption: 'Herbaciarnia – salonik', category: 'herbaciarnia' },
  { src: pokojPodwojny, alt: 'Pokój dwuosobowy – łóżko podwójne', caption: 'Pokój z łóżkiem podwójnym', category: 'nocleg', featured: true },
  { src: pokoj1os1, alt: 'Pokój jednoosobowy – widok pierwszy', caption: 'Pokój jednoosobowy', category: 'nocleg' },
  { src: pokoj1os2, alt: 'Pokój jednoosobowy – widok drugi', caption: 'Pokój jednoosobowy', category: 'nocleg' },
  { src: pokoj2os1, alt: 'Pokój dwuosobowy – widok pierwszy', caption: 'Pokój dwuosobowy', category: 'nocleg' },
  { src: pokoj2os2, alt: 'Pokój dwuosobowy – widok drugi', caption: 'Pokój dwuosobowy', category: 'nocleg' },
  { src: kuchnia, alt: 'Kuchnia wspólna', caption: 'Kuchnia wspólna', category: 'inne' },
];

const categories = [
  { id: 'all', label: 'Wszystkie' },
  { id: 'sala', label: 'Sala główna' },
  { id: 'budynek', label: 'Budynek i otoczenie' },
  { id: 'herbaciarnia', label: 'Herbaciarnia' },
  { id: 'nocleg', label: 'Pokoje noclegowe' },
  { id: 'inne', label: 'Pozostałe strefy' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'all' ? images : images.filter(img => img.category === activeCategory);

  const openLightbox = useCallback((idx: number) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => setLightboxIndex(i => (i !== null ? (i - 1 + filtered.length) % filtered.length : null)), [filtered.length]);
  const next = useCallback(() => setLightboxIndex(i => (i !== null ? (i + 1) % filtered.length : null)), [filtered.length]);

  return (
    <section id="galeria" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple">Galeria</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Poznaj przestrzenie Galerii Król Pik – od eleganckiej sali głównej, przez kameralną herbaciarnię, po komfortowe pokoje noclegowe.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setLightboxIndex(null); }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === cat.id
                  ? 'bg-purple text-white shadow-md'
                  : 'bg-background text-muted-foreground hover:bg-purple/10 border border-border'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((img, idx) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                img.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
              onClick={() => openLightbox(idx)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  img.featured ? 'h-64 md:h-80 lg:h-full' : 'h-56 md:h-64'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium text-sm">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button onClick={(e) => { e.stopPropagation(); closeLightbox(); }} className="absolute top-4 right-4 text-white/80 hover:text-white z-50">
            <X size={32} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-50">
            <ChevronLeft size={40} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-50">
            <ChevronRight size={40} />
          </button>
          <div className="max-w-5xl max-h-[85vh] px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white/80 text-center mt-3 text-sm">{filtered[lightboxIndex].caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
