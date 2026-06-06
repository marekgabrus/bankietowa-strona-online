import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: MapPin, title: "Adres", details: ["Galeria Król Pik", "ul. Wrocławska 50, Miłoszyce"] },
    { icon: Phone, title: "Telefon", details: ["+48 532 525 489"] },
    { icon: Mail, title: "E-mail", details: ["galeriakrolpik@gmail.com"] },
    { icon: Clock, title: "Godziny otwarcia", details: ["Jesteśmy bardzo elastyczni"] },
  ];

  return (
    <section id="kontakt" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple">Kontakt</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Masz pytania? Skontaktuj się z nami – chętnie pomożemy zaplanować Twoje wydarzenie
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8 reveal">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple rounded-full flex items-center justify-center mr-3">
                    <item.icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <div className="text-muted-foreground">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="mb-1">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
