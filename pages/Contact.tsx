import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h1 className="font-display font-bold text-3xl text-gray-900">Contactez le Ministère</h1>
            <p className="text-gray-600 mt-2">Nous sommes à votre écoute pour toute demande d'information.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                        <input type="text" className="w-full rounded-md border-gray-300 shadow-sm focus:border-niger-ochre focus:ring-niger-ochre p-3 border" placeholder="Votre nom" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" className="w-full rounded-md border-gray-300 shadow-sm focus:border-niger-ochre focus:ring-niger-ochre p-3 border" placeholder="votre@email.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                        <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-niger-ochre focus:ring-niger-ochre p-3 border">
                            <option>Demande d'information</option>
                            <option>Presse</option>
                            <option>Investissement</option>
                            <option>Réclamation</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea rows={4} className="w-full rounded-md border-gray-300 shadow-sm focus:border-niger-ochre focus:ring-niger-ochre p-3 border" placeholder="Votre message..."></textarea>
                    </div>
                    <button type="button" className="w-full bg-niger-green text-white font-bold py-3 px-4 rounded hover:bg-green-800 transition flex justify-center items-center">
                        <Send className="w-4 h-4 mr-2" /> Envoyer
                    </button>
                </form>
            </div>

            {/* Info & Map */}
            <div className="space-y-8">
                <div className="grid grid-cols-1 gap-6">
                    <div className="flex items-start">
                        <div className="bg-niger-ochre/10 p-3 rounded-full mr-4">
                            <MapPin className="h-6 w-6 text-niger-ochre" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Adresse</h3>
                            <p className="text-gray-600">Avenue de la Mairie<br/>BP 603 / BP 351<br/>Niamey, Niger</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="bg-niger-ochre/10 p-3 rounded-full mr-4">
                            <Phone className="h-6 w-6 text-niger-ochre" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Téléphone</h3>
                            <p className="text-gray-600">+227 20 73 00 00</p>
                            <p className="text-sm text-gray-400">Lun-Ven, 8h-17h</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="bg-niger-ochre/10 p-3 rounded-full mr-4">
                            <Mail className="h-6 w-6 text-niger-ochre" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Email</h3>
                            <p className="text-gray-600">contact@tourisme.gouv.ne</p>
                            <p className="text-gray-600">cabinet@tourisme.gouv.ne</p>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gray-200 h-64 rounded-lg w-full flex items-center justify-center text-gray-500 border border-gray-300">
                    [Carte Interactive Google Maps]
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;