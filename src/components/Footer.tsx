
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import logo from '@/assets/logo_strony.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo Galeria Król Pik" className="h-10 w-10 rounded-full object-cover" />
              <h3 className="text-2xl font-playfair font-bold">Galeria Król Pik</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Wielofunkcyjna przestrzeń na imprezy, eventy, kulturę i rozrywkę w Miłoszycach.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple flex items-center justify-center hover:bg-purple-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple flex items-center justify-center hover:bg-purple-light transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Szybkie Linki</h4>
            <ul className="space-y-2">
              <li><a href="#o-nas" className="text-gray-400 hover:text-gold transition-colors">O Nas</a></li>
              <li><a href="#oferta" className="text-gray-400 hover:text-gold transition-colors">Oferta</a></li>
              <li><a href="#galeria" className="text-gray-400 hover:text-gold transition-colors">Galeria</a></li>
              <li><a href="#cennik" className="text-gray-400 hover:text-gold transition-colors">Cennik</a></li>
              <li><a href="#kontakt" className="text-gray-400 hover:text-gold transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="text-gold mr-2" size={16} />
                <span className="text-gray-400">+48 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-gold mr-2" size={16} />
                <span className="text-gray-400">kontakt@galeriakrolpik.pl</span>
              </li>
              <li className="text-gray-400 mt-2">
                <p>Galeria Król Pik</p>
                <p>ul. Wrocławska 50, Miłoszyce</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Informacje Prawne</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/polityka-prywatnosci" className="text-gray-400 hover:text-gold transition-colors">
                  Polityka Prywatności
                </Link>
              </li>
              <li>
                <Link to="/regulamin" className="text-gray-400 hover:text-gold transition-colors">
                  Regulamin Rezerwacji
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          <p>© {currentYear} Galeria Król Pik. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
