
import { Star, MapPin, Users } from 'lucide-react';
import bFrontImg from '@/assets/B_front.png';

const AboutUs = () => {
  return (
    <section id="o-nas" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple">O Nas</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Galeria Król Pik to wielofunkcyjna przestrzeń w Miłoszycach – miejsce, gdzie kultura, rozrywka i spotkania łączą się w jednym.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <img 
              src={bFrontImg}
              alt="Budynek Galeria Król Pik" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6 reveal">
            <h3 className="text-3xl font-semibold text-purple">Nasza historia</h3>
            <p className="text-muted-foreground">
              Galeria Król Pik powstała z pasji do tworzenia przestrzeni, w której każdy znajdzie coś dla siebie. 
              Od kameralnych wesel i urodzin, przez wernisaże i koncerty, po transmisje sportowe i zloty motocyklowe 
              – nasza sala dopasowuje się do Twoich potrzeb.
            </p>
            
            <div className="pt-4">
              <h4 className="text-xl font-semibold text-purple mb-4">Właściciel</h4>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-purple-light rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">PS</span>
                </div>
                <div>
                  <p className="font-semibold text-lg">Patryk Smardzewski</p>
                  <p className="text-muted-foreground">Twórca Galerii Król Pik – z zamiłowania do kultury, sportu i spotkań w dobrym towarzystwie</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-semibold text-purple mb-4">Co nas wyróżnia</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-background p-4 rounded-md shadow-md text-center">
                  <div className="flex justify-center mb-2">
                    <Star className="text-gold" size={28} />
                  </div>
                  <h5 className="font-semibold">Wielofunkcyjność</h5>
                </div>
                <div className="bg-background p-4 rounded-md shadow-md text-center">
                  <div className="flex justify-center mb-2">
                    <MapPin className="text-gold" size={28} />
                  </div>
                  <h5 className="font-semibold">Wrocławska 50, Miłoszyce</h5>
                </div>
                <div className="bg-background p-4 rounded-md shadow-md text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="text-gold" size={28} />
                  </div>
                  <h5 className="font-semibold">Kameralna atmosfera</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
