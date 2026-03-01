
import { PartyPopper, Music, Tv, Bike, Dumbbell, Coffee, BedDouble } from 'lucide-react';
import salaImg from '@/assets/sala_stolowa2.png';

const Offer = () => {
  const offerBlocks = [
    {
      title: 'Imprezy okolicznościowe',
      icon: PartyPopper,
      items: ['Małe wesela', 'Urodziny i imieniny', 'Chrzciny i komunie', 'Stypy', 'Spotkania towarzyskie'],
    },
    {
      title: 'Kultura i eventy',
      icon: Music,
      items: ['Wernisaże i wystawy', 'Koncerty i imprezy zamknięte', 'Imprezy kulturowe i artystyczne'],
    },
    {
      title: 'Sport i transmisje',
      icon: Tv,
      items: ['Transmisje sportowe na żywo', 'Mecze, sporty walki i inne wydarzenia'],
    },
    {
      title: 'Zloty i wydarzenia tematyczne',
      icon: Bike,
      items: ['Zloty motocyklowe', 'Wystawy zwierząt, sztuki, kultury, muzyki, tatuażu', 'Eventy i aktywności artystyczne'],
    },
    {
      title: 'Wielofunkcyjna sala',
      icon: Dumbbell,
      items: ['Treningi fitness', 'Próby muzyczne', 'Rehabilitacja', 'Wieczory taneczne i karaoke', 'Pokazy, turnieje, quizy', 'Gry i rozgrywki pokerowe'],
    },
    {
      title: 'Ekskluzywna herbaciarnia',
      icon: Coffee,
      items: ['Herbaty ze wszystkich zakątków świata', 'Kameralna atmosfera i wyjątkowe smaki', 'Idealne miejsce na spokojne spotkanie'],
    },
  ];

  return (
    <section id="oferta" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple">Nasza Oferta</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Galeria Król Pik to przestrzeń, która dopasowuje się do Twoich potrzeb – od kameralnych spotkań po duże eventy
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="reveal">
            <img 
              src={salaImg}
              alt="Sala główna Galeria Król Pik" 
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4 reveal">
            <h3 className="text-3xl font-semibold text-purple">Przestrzeń na każdą okazję</h3>
            <p className="text-muted-foreground">
              Nasza sala główna to wielofunkcyjna przestrzeń, którą łatwo zaadaptować zarówno na eleganckie przyjęcie, 
              jak i na dynamiczne wydarzenie sportowe czy kulturalne. Klimatyzacja, nagłośnienie i wygodny parking 
              zapewniają komfort każdemu gościowi.
            </p>
            <div className="bg-muted p-6 rounded-lg shadow-md flex items-start gap-4">
              <BedDouble className="text-gold shrink-0 mt-1" size={28} />
              <div>
                <h4 className="text-xl font-semibold text-purple mb-1">Nocleg i wynajem na kilka dni</h4>
                <p className="text-muted-foreground">
                  Oferujemy możliwość wynajmu lokalu na kilka dni, wraz z noclegiem dla maksymalnie 10 osób. 
                  Idealne rozwiązanie na wielodniowe eventy, zloty czy imprezy okolicznościowe.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerBlocks.map((block, index) => (
            <div key={index} className="bg-muted p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow reveal">
              <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center mb-4">
                <block.icon className="text-white" size={26} />
              </div>
              <h4 className="text-xl font-semibold text-purple mb-3">{block.title}</h4>
              <ul className="space-y-1.5">
                {block.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-gold rounded-full mr-2 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
