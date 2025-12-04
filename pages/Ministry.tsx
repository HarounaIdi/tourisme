import React from 'react';
import { MINISTERS_HISTORY } from '../constants';
import { Download } from 'lucide-react';

const Ministry = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-100 py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-bold text-3xl md:text-5xl text-gray-900 mb-4">Le Ministère</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Organisation, missions et historique des dirigeants du tourisme et de l'artisanat nigérien.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Sidebar Navigation (simulated sticky) */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-niger-ochre sticky top-28">
              <h3 className="font-display font-bold text-lg mb-4 text-gray-900">Sommaire</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#mot-ministre" className="hover:text-niger-ochre transition flex items-center"><span className="w-2 h-2 bg-niger-ochre rounded-full mr-2"></span>Mot du Ministre</a></li>
                <li><a href="#missions" className="hover:text-niger-ochre transition flex items-center"><span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>Missions & Attributions</a></li>
                <li><a href="#organigramme" className="hover:text-niger-ochre transition flex items-center"><span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>Organigramme</a></li>
                <li><a href="#historique" className="hover:text-niger-ochre transition flex items-center"><span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>Historique des Ministres</a></li>
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-200">
                 <button className="flex items-center text-sm font-bold text-niger-blue hover:underline">
                    <Download className="h-4 w-4 mr-2" /> Télécharger l'organigramme (PDF)
                 </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-20">
            
            {/* Word from Minister */}
            <section id="mot-ministre" className="scroll-mt-32">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                 <img 
                    src="https://picsum.photos/id/338/300/400" 
                    alt="Mme Soufiane Aghaichata Guichene" 
                    className="w-full md:w-48 rounded-lg shadow-lg object-cover"
                 />
                 <div>
                    <h2 className="font-display font-bold text-2xl text-gray-900 mb-1">Mme Soufiane Aghaichata Guichene</h2>
                    <p className="text-niger-green font-medium mb-4">Ministre du Tourisme et de l’Artisanat (2024-2025)</p>
                    <div className="prose text-gray-600">
                        <p className="mb-4">
                            "Le Niger s'engage aujourd'hui dans une dynamique de souveraineté retrouvée. Notre secteur n'est pas seulement un levier économique, c'est le miroir de notre âme."
                        </p>
                        <p>
                            Engagée pour la renaissance artistique du Niger et la structuration économique de nos 290 métiers d'art, Madame la Ministre place la sécurité et la qualité au cœur de son action au sein du CNSP et de l'Alliance des États du Sahel (AES).
                        </p>
                    </div>
                 </div>
              </div>
            </section>

            {/* Missions */}
            <section id="missions" className="scroll-mt-32">
                <h2 className="font-display font-bold text-2xl text-gray-900 mb-6 border-b pb-2">Missions & Attributions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        "Développement du tourisme intérieur et saharien",
                        "Structuration et formation des artisans",
                        "Régulation et classification des établissements (Décrets 2025)",
                        "Promotion de la diplomatie culturelle",
                        "Accompagnement des investisseurs nationaux et étrangers",
                        "Coordination avec l'Alliance des États du Sahel"
                    ].map((mission, idx) => (
                        <div key={idx} className="flex items-start">
                            <div className="bg-niger-green/10 p-2 rounded mr-3 mt-1">
                                <div className="w-2 h-2 bg-niger-green rounded-full"></div>
                            </div>
                            <p className="text-gray-700">{mission}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Historique Table */}
            <section id="historique" className="scroll-mt-32">
                <h2 className="font-display font-bold text-2xl text-gray-900 mb-6 border-b pb-2">Historique des Ministres</h2>
                <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-100">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ministre</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mandat</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Réalisations Clés</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {MINISTERS_HISTORY.map((minister, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img className="h-10 w-10 rounded-full object-cover" src={minister.image} alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{minister.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900 font-bold">{minister.period}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-500">{minister.achievements}</div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="mt-4 text-xs text-gray-400 italic text-right">* Liste mise à jour en Décembre 2025</p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Ministry;