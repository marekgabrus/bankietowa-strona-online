
import { Check, Download } from 'lucide-react';

const PriceList = () => {
  const packages = [
    {
      name: "Wynajem sali",
      price: "Wycena",
      unit: "indywidualna",
      features: [
        "Wynajem na godziny lub cały dzień",
        "Klimatyzacja i nagłośnienie",
        "Parking dla gości",
        "Możliwość aranżacji przestrzeni",
        "Obsługa techniczna",
      ],
      isPopular: false,
    },
    {
      name: "Imprezy okolicznościowe",
      price: "Wycena",
      unit: "indywidualna",
      features: [
        "Wesela, urodziny, komunie, chrzciny",
        "Elastyczne menu i catering",
        "Dekoracja sali w cenie",
        "Obsługa kelnerska",
        "Oprawa muzyczna (opcjonalnie)",
      ],
      isPopular: true,
    },
    {
      name: "Nocleg + wynajem",
      price: "Wycena",
      unit: "indywidualna",
      features: [
        "Wynajem lokalu na kilka dni",
        "Nocleg dla do 10 osób",
        "Pełna dyspozycyjność przestrzeni",
        "Idealne na zloty i wielodniowe eventy",
        "Indywidualne ustalenia",
      ],
      isPopular: false,
    },
  ];

  const handleDownloadPDF = () => {
    alert("Funkcja pobierania cennika w formacie PDF będzie dostępna wkrótce.");
  };

  return (
    <section id="cennik" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple">Cennik</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Każde wydarzenie jest inne – dlatego wyceniamy indywidualnie. Skontaktuj się z nami, a przygotujemy ofertę dopasowaną do Twoich potrzeb.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div key={index} className={`bg-background rounded-lg shadow-lg overflow-hidden reveal ${pkg.isPopular ? 'border-4 border-gold relative' : ''}`}>
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 bg-gold text-white py-1 px-4 rounded-bl-lg font-medium">
                  Popularne
                </div>
              )}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-purple mb-2">{pkg.name}</h3>
                <div className="flex items-end justify-center mb-6">
                  <span className="text-2xl font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground ml-1">{pkg.unit}</span>
                </div>
                <ul className="space-y-3 text-left mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="text-gold shrink-0 mt-0.5 mr-2" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#kontakt" className={`block w-full py-3 rounded-md text-center font-semibold transition-colors ${pkg.isPopular ? 'bg-gold text-white hover:bg-gold-dark' : 'bg-purple text-white hover:bg-purple-dark'}`}>
                  Zapytaj o cenę
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-muted p-8 rounded-lg shadow-md max-w-4xl mx-auto reveal">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-purple mb-2">Pełny cennik do pobrania</h3>
              <p className="text-muted-foreground">Pobierz szczegółowy cennik w formacie PDF</p>
            </div>
            <button onClick={handleDownloadPDF} className="flex items-center space-x-2 button-purple">
              <Download size={20} />
              <span>Pobierz Cennik PDF</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
