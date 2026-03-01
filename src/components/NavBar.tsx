
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo_strony.jpg';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Strona Główna', href: '/' },
    { name: 'O Nas', href: '#o-nas' },
    { name: 'Oferta', href: '#oferta' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Cennik', href: '#cennik' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo Galeria Król Pik" className="h-10 w-10 rounded-full object-cover" />
          <span className={cn(
            "font-playfair text-xl font-bold transition-colors",
            isScrolled ? "text-purple" : "text-white"
          )}>
            Galeria Król Pik
          </span>
        </Link>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'font-medium transition-colors duration-300',
                isScrolled ? 'text-foreground hover:text-purple' : 'text-white hover:text-gold-light'
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          className={cn("md:hidden", isScrolled ? "text-purple" : "text-white")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-foreground hover:text-purple transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
