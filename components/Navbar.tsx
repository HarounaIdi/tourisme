import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Le Ministère', path: '/ministere' },
    { name: 'Actualités', path: '/actualites' },
    { name: 'Tourisme', path: '/tourisme' },
    { name: 'Artisanat', path: '/artisanat' },
    { name: 'Espace Pro', path: '/pro' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 font-sans border-t-4 border-niger-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-4 group">
              {/* Logo Composition: Coat of Arms + CNSP Badge */}
              <div className="flex flex-col items-center">
                 <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/03/Coat_of_arms_of_Niger.svg" 
                    alt="Armoiries du Niger" 
                    className="h-14 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                 />
                 <div className="mt-1.5 bg-niger-green text-white text-[0.5rem] leading-tight py-0.5 px-2 rounded-sm font-bold uppercase tracking-tight text-center max-w-[110px] shadow-sm">
                    Conseil National pour la Sauvegarde de la Patrie
                 </div>
              </div>
              
              <div className="hidden sm:block h-12 w-px bg-gray-200 mx-2"></div>

              <div className="flex flex-col justify-center">
                <span className="font-display font-bold text-gray-600 text-xs tracking-[0.2em] uppercase mb-0.5">République du Niger</span>
                <span className="font-display font-extrabold text-niger-ochre text-sm md:text-lg leading-tight uppercase tracking-tight">Ministère de l'Artisanat<br/>et du Tourisme</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-sm text-sm font-medium transition-colors duration-200 uppercase tracking-wide ${
                  isActive(link.path)
                    ? 'text-niger-ochre border-b-2 border-niger-ochre'
                    : 'text-gray-700 hover:text-niger-ochre hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="ml-4 bg-niger-ochre text-white px-5 py-2 rounded-sm text-sm font-bold hover:bg-yellow-600 transition shadow-sm border border-transparent hover:border-yellow-700">
              E-SERVICES
            </button>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-niger-ochre focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-bold uppercase border-b border-gray-50 ${
                  isActive(link.path) ? 'text-niger-ochre bg-gray-50' : 'text-gray-700 hover:text-niger-ochre'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
                 <button className="w-full bg-niger-ochre text-white px-4 py-3 rounded-sm text-base font-bold hover:bg-yellow-600 transition shadow-sm uppercase">
                  Accéder aux E-Services
                </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;