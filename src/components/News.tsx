
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      title: "Promocja na uroczystości komunijne",
      date: "15.04.2023",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2000&auto=format&fit=crop",
      excerpt: "Skorzystaj z wyjątkowej oferty na organizację przyjęcia komunijnego w 2023 roku...",
    },
    {
      title: "Nowe menu weselne",
      date: "28.03.2023",
      image: "https://images.unsplash.com/photo-1670272501077-c72d2d42f362?q=80&w=2070&auto=format&fit=crop",
      excerpt: "Z przyjemnością prezentujemy nowe menu weselne, które zachwyci nawet najbardziej wymagających gości...",
    },
    {
      title: "Pakiety biznesowe - nowa oferta",
      date: "10.02.2023",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2787&auto=format&fit=crop",
      excerpt: "Specjalna oferta dla firm - organizacja konferencji, szkoleń i spotkań biznesowych w atrakcyjnych cenach...",
    },
  ];

  return (
    <section id="aktualnosci" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-DEFAULT">Aktualności</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Najnowsze informacje, promocje i wydarzenia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden reveal">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar size={14} className="mr-1" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-purple-DEFAULT mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <button className="flex items-center text-gold-DEFAULT hover:text-gold-dark transition-colors">
                  <span className="font-medium">Czytaj więcej</span>
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="button-outline">
            Zobacz więcej aktualności
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
