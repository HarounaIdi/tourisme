import React from 'react';
import { DESTINATIONS } from '../constants';
import { Calendar, Map, ShieldCheck } from 'lucide-react';

const Tourism = () => {
  return (
    <div className="bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-niger-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">Découvrir le Niger</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Des dunes du Ténéré aux rives du fleuve Niger. Un tourisme sécurisé, authentique et humain.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row justify-around items-center gap-4 border-l-4 border-niger-ochre">
            <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-niger-green" />
                <div>
                    <h3 className="font-bold text-gray-900">Zones Sécurisées</h3>
                    <p className="text-sm text-gray-500">Cartographie mise à jour 2025</p>
                </div>
            </div>
             <div className="h-10 w-px bg-gray-200 hidden md:block"></div>
            <div className="flex items-center gap-3">
                <Map className="w-8 h-8 text-niger-ochre" />
                <div>
                    <h3 className="font-bold text-gray-900">8 Régions</h3>
                    <p className="text-sm text-gray-500">Une diversité infinie</p>
                </div>
            </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-display font-bold text-3xl text-gray-900 mb-10">Destinations Phares</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DESTINATIONS.map((dest, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-xl shadow-md h-80">
                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
                        <h3 className="text-2xl font-bold text-white mb-2">{dest.name}</h3>
                        <p className="text-gray-200 text-sm opacity-90">{dest.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Agenda */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
                <Calendar className="w-8 h-8 text-niger-ochre" />
                <h2 className="font-display font-bold text-3xl text-gray-900">Agenda Culturel 2025-2026</h2>
            </div>
            
            <div className="space-y-6">
                {[
                    { month: "SEPT", date: "Cure Salée", loc: "Ingall", desc: "Le grand rassemblement des éleveurs." },
                    { month: "DÉC", date: "Festival de l'Aïr", loc: "Iferouane", desc: "Musique, danse et artisanat touareg au pied des montagnes." },
                    { month: "JAN", date: "Festival Dokin Iska", loc: "Dan Kassawa", desc: "Tradition animiste et courses de chevaux." }
                ].map((event, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row items-center bg-gray-50 border border-gray-100 rounded-lg p-6 hover:shadow-md transition">
                        <div className="bg-niger-ochre text-white p-4 rounded-lg text-center min-w-[100px] mb-4 md:mb-0">
                            <span className="block text-sm font-bold uppercase tracking-wider">{event.month}</span>
                            <span className="block text-2xl font-bold">2025</span>
                        </div>
                        <div className="md:ml-8 text-center md:text-left flex-grow">
                            <h3 className="text-xl font-bold text-gray-900">{event.date}</h3>
                            <p className="text-niger-green font-medium">{event.loc}</p>
                            <p className="text-gray-500 mt-1">{event.desc}</p>
                        </div>
                        <button className="px-6 py-2 border border-gray-300 rounded text-sm font-bold text-gray-600 hover:bg-gray-100 transition mt-4 md:mt-0">
                            Détails
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Tourism;