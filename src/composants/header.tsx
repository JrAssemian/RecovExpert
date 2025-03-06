import { Home, Menu } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

import "../App.css";

// Définir le type des props
interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}


const Header = ({ isMenuOpen, setIsMenuOpen }:HeaderProps) => {
  return (
    <header className="bg-[#1a1a1a] text-white py-4 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/assets/logo.png" alt="Logo" className="h-20 w-auto" />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-blue-400 transition-colors">
              <Home className="h-6 w-auto flex items-center justify-center"/>
            </a>
            <a href="/qui-sommes-nous" className="hover:text-blue-400 transition-colors">
              Qui nous sommes
            </a>
            <a href="/nos-services" className="hover:text-blue-400 transition-colors">
              Nos Services
            </a>
            <a href="/valeurs" className="hover:text-blue-400 transition-colors">
              Nos Valeurs
            </a>
            <a href="/contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </nav>
          <button className="bg-[#1404c2] hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              <a href="/contact">Demander un devis</a>
          </button>
          <div className="md:hidden">
            <button
              title="menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-[#1404c2] hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              <Menu size={24} />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="text-gray-800 hover:text-blue-600 px-3 py-2">
                Accueil
              </a>
              <a href="/qui-sommes-nous" className="block px-3 py-2 text-gray-800 hover:text-blue-600">
                Qui nous sommes
              </a>
              <a href="/nos-services" className="block px-3 py-2 text-gray-800 hover:text-blue-600">
                Nos Services
              </a>
              <a href="/valeurs" className="block px-3 py-2 text-gray-800 hover:text-blue-600">
                Nos Valeurs
              </a>
              <a href="/contact" className="block px-3 py-2 text-gray-800 hover:text-blue-600">
                Contact
              </a>
            </div>
          </nav>
        )}
    </header>
  );
};

export default Header;