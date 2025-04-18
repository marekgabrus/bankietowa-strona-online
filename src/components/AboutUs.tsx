
import { Users, Star, MapPin } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="o-nas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-DEFAULT">O Nas</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Odkryj wyjątkowe miejsce, w którym Twoje uroczystości nabiorą blasku i elegancji
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <img 
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2728&auto=format&fit=crop" 
              alt="Sala Bankietowa" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6 reveal">
            <h3 className="text-3xl font-semibold text-purple-DEFAULT">Nasza historia</h3>
            <p className="text-gray-700">
              Od ponad 10 lat z pasją organizujemy niezapomniane przyjęcia i uroczystości. 
              Sala Bankietowa Patryk Smardzewski to miejsce, które łączy elegancję z przytulną atmosferą, 
              tworząc idealne tło dla Twoich najważniejszych chwil.
            </p>
            
            <div className="pt-4">
              <h4 className="text-xl font-semibold text-purple-DEFAULT mb-4">Właściciel</h4>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-purple-light rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">PS</span>
                </div>
                <div>
                  <p className="font-semibold text-lg">Patryk Smardzewski</p>
                  <p className="text-gray-600">Z zamiłowania do organizacji przyjęć i dbałości o najdrobniejsze szczegóły</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-semibold text-purple-DEFAULT mb-4">Co nas wyróżnia</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-md shadow-md text-center">
                  <div className="flex justify-center mb-2">
                    <Star className="text-gold-DEFAULT" size={28} />
                  </div>
                  <h5 className="font-semibold">Elegancki wystrój</h5>
                </div>
                <div className="bg-white p-4 rounded-md shadow-md text-center">
                  <div className="flex justify-center mb-2">
                    <MapPin className="text-gold-DEFAULT" size={28} />
                  </div>
                  <h5 className="font-semibold">Dogodna lokalizacja</h5>
                </div>
                <div className="bg-white p-4 rounded-md shadow-md text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="text-gold-DEFAULT" size={28} />
                  </div>
                  <h5 className="font-semibold">Profesjonalna obsługa</h5>
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
