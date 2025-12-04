import React from 'react';
import { ARTISAN_TRADES } from '../constants';
import { CheckCircle } from 'lucide-react';

const Artisans = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
            <img src="https://picsum.photos/id/1062/1920/600" alt="Artisan working" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center max-w-3xl">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">L'Artisanat, Cœur du Niger</h1>
            <p className="text-xl text-gray-200">290 métiers référencés. Un patrimoine vivant, moteur de l'économie locale.</p>
            <div className="mt-8">
                <button className="bg-niger-ochre text-white font-bold py-3 px-8 rounded shadow-lg hover:bg-yellow-600 transition">
                    S'inscrire au Registre National
                </button>
            </div>
        </div>
      </div>

      {/* Stats / Trades */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl text-gray-900">Nos Corps de Métiers</h2>
            <div className="w-24 h-1 bg-niger-green mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ARTISAN_TRADES.map((trade, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition border border-gray-100 group">
                    <div className="text-4xl font-bold text-niger-ochre mb-2">{trade.count}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{trade.category}</h3>
                    <ul className="space-y-2">
                        {trade.examples.map((ex, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-600">
                                <span className="w-1.5 h-1.5 bg-niger-green rounded-full mr-2"></span>
                                {ex}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>

      {/* Feature Block */}
      <div className="bg-tuareg-pattern bg-opacity-5 bg-gray-50 py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2 p-12 flex flex-col justify-center">
                    <h3 className="font-display font-bold text-2xl text-gray-900 mb-6">Programme National de Formation 2025-2027</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Le Ministère lance un vaste programme de perfectionnement pour les jeunes artisans. Accédez à des ateliers modernes, des formations en gestion et des opportunités d'exportation via l'AES.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center text-gray-700">
                            <CheckCircle className="h-5 w-5 text-niger-green mr-3" /> Certification d'État reconnue
                        </li>
                        <li className="flex items-center text-gray-700">
                            <CheckCircle className="h-5 w-5 text-niger-green mr-3" /> Financement de l'équipement
                        </li>
                        <li className="flex items-center text-gray-700">
                            <CheckCircle className="h-5 w-5 text-niger-green mr-3" /> Accès aux foires internationales
                        </li>
                    </ul>
                    <button className="self-start text-niger-blue font-bold border-b-2 border-niger-blue hover:text-blue-800 pb-1">
                        Télécharger la brochure
                    </button>
                </div>
                <div className="md:w-1/2 bg-gray-200">
                    <img src="https://picsum.photos/id/201/800/800" alt="Formation artisanale" className="w-full h-full object-cover" />
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Artisans;