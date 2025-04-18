
import { Users, Music, Utensils, PartyPopper } from 'lucide-react';
import { cn } from '@/lib/utils';

const Offer = () => {
  const eventTypes = [
    { name: 'Wesela', icon: PartyPopper, color: 'bg-purple-light' },
    { name: 'Komunie', icon: PartyPopper, color: 'bg-purple-DEFAULT' },
    { name: 'Urodziny', icon: PartyPopper, color: 'bg-purple-dark' },
    { name: 'Konferencje', icon: Users, color: 'bg-gold-light' },
    { name: 'Studniówki', icon: Music, color: 'bg-gold-DEFAULT' },
    { name: 'Chrzciny', icon: PartyPopper, color: 'bg-gold-dark' },
  ];

  const additionalServices = [
    {
      title: 'Catering',
      icon: Utensils,
      description: 'Profesjonalny catering z bogatym menu dostosowanym do Twoich preferencji',
    },
    {
      title: 'Dekoracje',
      icon: PartyPopper,
      description: 'Eleganckie dekoracje sali dopasowane do charakteru uroczystości',
    },
    {
      title: 'Obsługa kelnerska',
      icon: Users,
      description: 'Doświadczeni kelnerzy dbający o komfort Twoich gości',
    },
    {
      title: 'Oprawa muzyczna',
      icon: Music,
      description: 'Profesjonalny DJ lub zespół muzyczny na Twoją uroczystość',
    },
  ];

  return (
    <section id="oferta" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-DEFAULT">Nasza Oferta</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kompleksowa organizacja przyjęć okolicznościowych dopasowana do Twoich potrzeb
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6 reveal">
            <h3 className="text-3xl font-semibold text-purple-DEFAULT">Sala Bankietowa</h3>
            <p className="text-gray-700">
              Nasza przestronna sala bankietowa to idealne miejsce na organizację różnego rodzaju uroczystości.
              Elegancki wystrój, profesjonalne nagłośnienie i klimatyzacja sprawią, że Twoje przyjęcie będzie udane.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-purple-DEFAULT mb-4">Specyfikacja sali</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gold-DEFAULT rounded-full mr-2"></span>
                  <span>Pojemność: do 200 osób</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gold-DEFAULT rounded-full mr-2"></span>
                  <span>Nowoczesny system nagłośnienia</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gold-DEFAULT rounded-full mr-2"></span>
                  <span>Klimatyzacja</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gold-DEFAULT rounded-full mr-2"></span>
                  <span>Elegancki wystrój</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gold-DEFAULT rounded-full mr-2"></span>
                  <span>Przestronny parkiet taneczny</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gold-DEFAULT rounded-full mr-2"></span>
                  <span>Duży parking</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-semibold text-purple-DEFAULT mb-4">Rodzaje organizowanych imprez</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {eventTypes.map((event, index) => (
                  <div key={index} className="text-center">
                    <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2", event.color)}>
                      <event.icon className="text-white" size={24} />
                    </div>
                    <h5 className="font-semibold">{event.name}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal">
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2798&auto=format&fit=crop" 
              alt="Sala Bankietowa wnętrze" 
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-lg reveal">
          <h3 className="text-3xl font-semibold text-center text-purple-DEFAULT mb-8">Usługi dodatkowe</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-md shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gold-DEFAULT rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
