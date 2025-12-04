import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Youtube, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white font-sans border-t-8 border-niger-ochre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Identity */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xl text-niger-ochre">Ministère du Tourisme</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Le portail officiel pour découvrir le Niger, terre de refondation et d'hospitalité. Une vision souveraine pour un développement durable.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-white hover:text-niger-blue transition"><Facebook /></a>
              <a href="#" className="text-white hover:text-niger-blue transition"><Twitter /></a>
              <a href="#" className="text-white hover:text-niger-blue transition"><Youtube /></a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg text-white">Accès Rapide</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/ministere" className="hover:text-niger-ochre transition">Le Ministre</Link></li>
              <li><Link to="/tourisme" className="hover:text-niger-ochre transition">Destinations</Link></li>
              <li><Link to="/pro" className="hover:text-niger-ochre transition">Législation & Décrets</Link></li>
              <li><Link to="/artisanat" className="hover:text-niger-ochre transition">Espace Artisans</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-niger-ochre shrink-0" />
                <span>Avenue de la Mairie, BP 603<br/>Niamey, Niger</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-niger-ochre shrink-0" />
                <span>+227 20 73 00 00</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-niger-ochre shrink-0" />
                <span>contact@tourisme.gouv.ne</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Institutional */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg text-white">Partenaires</h3>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
              <span className="bg-gray-800 p-2 rounded text-center">Présidence du CNSP</span>
              <span className="bg-gray-800 p-2 rounded text-center">Gouvernement</span>
              <span className="bg-gray-800 p-2 rounded text-center">APTN</span>
              <span className="bg-gray-800 p-2 rounded text-center">AES</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Ministère de l'Artisanat et du Tourisme du Niger. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Mentions Légales</a>
            <a href="#" className="hover:text-white">Plan du site</a>
          </div>
        </div>
      </div>
      <div className="h-2 bg-gradient-to-r from-niger-ochre via-white to-niger-green"></div>
    </footer>
  );
};

export default Footer;