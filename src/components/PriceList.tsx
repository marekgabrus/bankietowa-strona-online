
import { Check, Download } from 'lucide-react';

const PriceList = () => {
  const packages = [
    {
      name: "Podstawowy",
      price: "150",
      unit: "zł/osoba",
      features: [
        "Wynajem sali do 6 godzin",
        "Podstawowa dekoracja stołów",
        "Menu obiadowe (3 dania)",
        "Napoje bezalkoholowe",
        "Obsługa kelnerska",
      ],
      isPopular: false,
    },
    {
      name: "Premium",
      price: "250",
      unit: "zł/osoba",
      features: [
        "Wynajem sali do 12 godzin",
        "Elegancka dekoracja stołów",
        "Menu rozszerzone (5 dań)",
        "Napoje bezalkoholowe i alkoholowe",
        "Obsługa kelnerska premium",
        "Tort okolicznościowy",
        "Pokaz fajerwerków",
      ],
      isPopular: true,
    },
    {
      name: "Weselny",
      price: "300",
      unit: "zł/osoba",
      features: [
        "Wynajem sali do 18 godzin",
        "Luksusowa dekoracja sali i stołów",
        "Menu weselne pełne (8 dań)",
        "Open bar całonocny",
        "Obsługa kelnerska VIP",
        "Tort weselny",
        "DJ lub zespół muzyczny",
        "Pokój dla nowożeńców gratis",
      ],
      isPopular: false,
    },
  ];

  // Function to simulate downloading PDF
  const handleDownloadPDF = () => {
    alert("Funkcja pobierania cennika w formacie PDF będzie dostępna wkrótce.");
  };

  return (
    <section id="cennik" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-DEFAULT">Cennik</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferujemy konkurencyjne ceny i elastyczne pakiety dopasowane do Twoich potrzeb i budżetu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`
                bg-white rounded-lg shadow-lg overflow-hidden reveal
                ${pkg.isPopular ? 'border-4 border-gold-DEFAULT relative' : ''}
              `}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 bg-gold-DEFAULT text-white py-1 px-4 rounded-bl-lg font-medium">
                  Najpopularniejszy
                </div>
              )}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-purple-DEFAULT mb-2">{pkg.name}</h3>
                <div className="flex items-end justify-center mb-6">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-gray-500 ml-1">{pkg.unit}</span>
                </div>
                <ul className="space-y-3 text-left mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="text-gold-DEFAULT shrink-0 mt-0.5 mr-2" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#kontakt" 
                  className={`
                    block w-full py-3 rounded-md text-center font-semibold transition-colors
                    ${pkg.isPopular ? 
                      'bg-gold-DEFAULT text-white hover:bg-gold-dark' : 
                      'bg-purple-DEFAULT text-white hover:bg-purple-dark'}
                  `}
                >
                  Zarezerwuj
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md max-w-4xl mx-auto reveal">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-purple-DEFAULT mb-2">Pełny cennik do pobrania</h3>
              <p className="text-gray-600">
                Pobierz szczegółowy cennik w formacie PDF ze wszystkimi opcjami i dodatkami
              </p>
            </div>
            <button 
              onClick={handleDownloadPDF}
              className="flex items-center space-x-2 button-purple"
            >
              <Download size={20} />
              <span>Pobierz Cennik PDF</span>
            </button>
          </div>
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto reveal">
          <h3 className="text-2xl font-semibold text-purple-DEFAULT mb-4">Informacje o płatnościach</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Zaliczka</h4>
              <p className="text-gray-600">
                Aby zarezerwować termin, wymagana jest zaliczka w wysokości 20% wartości zamówienia.
                Zaliczka jest bezzwrotna w przypadku rezygnacji na mniej niż 30 dni przed terminem.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Płatność końcowa</h4>
              <p className="text-gray-600">
                Płatność końcową należy uregulować najpóźniej 7 dni przed wydarzeniem.
                Akceptujemy płatności gotówką oraz przelewem bankowym.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
