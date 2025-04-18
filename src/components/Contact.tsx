
import { useState } from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    
    // Show success toast
    toast({
      title: "Wiadomość wysłana!",
      description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adres",
      details: [
        "Sala Bankietowa Patryk Smardzewski",
        "ul. Wrocławska, Miłoszyce",
      ],
    },
    {
      icon: Phone,
      title: "Telefon",
      details: [
        "+48 123 456 789",
      ],
    },
    {
      icon: Mail,
      title: "E-mail",
      details: [
        "kontakt@salabankietowapatryk.pl",
      ],
    },
    {
      icon: Clock,
      title: "Godziny otwarcia",
      details: [
        "Poniedziałek - Piątek: 10:00 - 18:00",
        "Sobota - Niedziela: 12:00 - 16:00",
      ],
    },
  ];

  return (
    <section id="kontakt" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-DEFAULT">Kontakt</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Masz pytania? Skontaktuj się z nami, a my chętnie udzielimy odpowiedzi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 reveal">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-DEFAULT rounded-full flex items-center justify-center mr-3">
                      <item.icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <div className="text-gray-600">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="mb-1">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-DEFAULT mb-4">Lokalizacja</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.6891403925045!2d17.17344561598573!3d51.090469579569485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe81dff71ee4d%3A0x73c2ce98c8b5c9fc!2sWroc%C5%82awska%2C%20Mi%C5%82oszyce!5e0!3m2!1spl!2spl!4v1650123456789!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja Sali Bankietowej Patryk"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg reveal">
            <h3 className="text-2xl font-semibold text-purple-DEFAULT mb-6">Wyślij wiadomość</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-DEFAULT"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-DEFAULT"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-DEFAULT"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Temat *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-DEFAULT"
                  >
                    <option value="">Wybierz temat</option>
                    <option value="Wesele">Wesele</option>
                    <option value="Komunia">Komunia</option>
                    <option value="Urodziny">Urodziny</option>
                    <option value="Konferencja">Konferencja</option>
                    <option value="Inne">Inne</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Wiadomość *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-DEFAULT"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button type="submit" className="button-purple">
                  Wyślij wiadomość
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
