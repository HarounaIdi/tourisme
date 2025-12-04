import React from 'react';
import { FileText, Download, AlertTriangle } from 'lucide-react';

const Pro = () => {
  const documents = [
    { title: "Décret 2025-045 : Classification des Hôtels", size: "2.4 MB" },
    { title: "Décret 2025-046 : Normes de Restauration", size: "1.8 MB" },
    { title: "Formulaire : Agrément Technique", size: "500 KB" },
    { title: "Code de l'Investissement Touristique", size: "3.2 MB" },
    { title: "Guide de Conformité Sanitaire", size: "1.2 MB" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display font-bold text-3xl text-gray-900 mb-2">Espace Professionnels</h1>
        <p className="text-gray-600 mb-10">Réglementation, formulaires et guides pour les opérateurs du tourisme.</p>

        {/* Warning Banner */}
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-12 rounded-r shadow-sm flex items-start">
            <AlertTriangle className="h-6 w-6 text-orange-500 mr-4 mt-1 flex-shrink-0" />
            <div>
                <h3 className="font-bold text-orange-800 mb-1">Mise en conformité obligatoire</h3>
                <p className="text-sm text-orange-700 leading-relaxed">
                    Le Ministère applique une politique stricte de conformité. Toute structure non conforme aux nouveaux décrets 2025 s’expose à des sanctions allant jusqu’à la fermeture administrative. Date limite : 31 Décembre 2025.
                </p>
            </div>
        </div>

        {/* Documents List */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                <h2 className="font-bold text-gray-700 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-niger-blue" /> Documents Officiels à Télécharger
                </h2>
            </div>
            <div className="divide-y divide-gray-100">
                {documents.map((doc, idx) => (
                    <div key={idx} className="p-6 flex items-center justify-between hover:bg-gray-50 transition">
                        <div>
                            <p className="font-medium text-gray-900">{doc.title}</p>
                            <p className="text-xs text-gray-400 mt-1">PDF • {doc.size}</p>
                        </div>
                        <button className="text-gray-400 hover:text-niger-ochre transition">
                            <Download className="h-5 w-5" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Pro;