//import { Facebook, Instagram, Linkedin, Mail, MailIcon, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">RecovExpert</h3>
          <p className="text-gray-300">Votre partenaire de confiance en recouvrement amiable.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="text-gray-300">Email: contact@recovexpert.com</p>
          <p className="text-gray-300">recovexpert2025@gmail.com</p>
          <p className="text-gray-300">Téléphone: +225 05 050 505 98</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Liens utiles</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-blue-400">Mentions légales</a></li>
            <li><a href="#" className="text-gray-300 hover:text-blue-400">Politique de confidentialité</a></li>
            <li><a href="#" className="text-gray-300 hover:text-blue-400">CGV</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        <p className="text-gray-300">© 2025 RecovExpert. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;