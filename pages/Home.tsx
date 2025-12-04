import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, AlertCircle } from 'lucide-react';
import { NEWS_ARTICLES } from '../constants';

const Home = () => {
  const latestNews = NEWS_ARTICLES.slice(0, 3);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[85vh] w-full overflow-hidden">
        {/* Placeholder for video background */}
        <div className="absolute inset-0 bg-gray-900">
          <img 
            src="https://picsum.photos/id/1015/1920/1080" 
            alt="Désert du Ténéré" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center text-center px-4">
          <div className="max-w-4xl space-y-6 animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-niger-ochre/20 border border-niger-ochre text-niger-ochre text-sm font-bold uppercase tracking-wider backdrop-blur-sm">
              République du Niger
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl text-white leading-tight drop-shadow-lg">
              Le Niger, Terre de <span className="text-niger-ochre">Refondation</span> et d'Hospitalité
            </h1>
            <p className="font-sans text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Découvrez un pays de culture millénaire, de paysages majestueux et d’artisans au savoir-faire unique. Une vision souveraine pour l'avenir.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
              <Link to="/tourisme" className="px-8 py-4 bg-niger-ochre hover:bg-yellow-600 text-white font-bold rounded shadow-lg transition transform hover:-translate-y-1">
                Visiter le Niger
              </Link>
              <Link to="/artisanat" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded hover:bg-white hover:text-gray-900 transition transform hover:-translate-y-1">
                Espace Artisans
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Urgent Banner */}
      <div className="bg-niger-blue text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-between text-sm md:text-base font-medium">
          <div className="flex items-center gap-2 animate-pulse">
            <AlertCircle className="h-5 w-5" />
            <span>17ᵉ Édition du Festival de l’Aïr – Iferouane, Décembre 2025</span>
          </div>
          <Link to="/actualites" className="hidden md:flex items-center hover:underline text-xs uppercase tracking-widest">
            En savoir plus <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* Vision Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-tuareg-pattern opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-niger-ochre rounded-br-3xl opacity-20"></div>
                <img 
                  src="https://picsum.photos/id/1025/600/700" 
                  alt="Artisanat Nigerien" 
                  className="rounded-lg shadow-2xl z-10 relative"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl rounded border-l-4 border-niger-green max-w-xs hidden md:block">
                    <p className="font-display font-bold text-niger-green text-xl">290 Métiers</p>
                    <p className="text-sm text-gray-500">Un patrimoine vivant structuré pour l'économie nationale.</p>
                </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900">
                Une Vision de <span className="text-niger-green">Souveraineté</span>
              </h2>
              <div className="w-20 h-1 bg-niger-ochre"></div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Notre mission est de valoriser le patrimoine culturel nigérien, structurer les 290 métiers artisanaux du pays et promouvoir un tourisme intérieur sécurisé.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Sous l'impulsion du CNSP, le Ministère œuvre pour un tourisme ancré dans nos valeurs, nos traditions et notre volonté de refonder un Niger plus fort et résilient.
              </p>
              <Link to="/ministere" className="inline-flex items-center text-niger-blue font-bold hover:text-blue-800 transition">
                Lire le mot du Ministre <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display font-bold text-3xl text-gray-900">Actualités Récentes</h2>
              <p className="text-gray-500 mt-2">Les dernières actions du Ministère.</p>
            </div>
            <Link to="/actualites" className="text-niger-ochre font-bold hover:underline hidden md:block">
              Toute l'actualité
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <article key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                    <span className="absolute top-4 left-4 bg-niger-green text-white text-xs font-bold px-3 py-1 rounded shadow">
                        {news.category}
                    </span>
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover transform hover:scale-105 transition duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
                    <Calendar className="h-3 w-3" />
                    <span>{news.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-3 text-gray-800 leading-snug">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                    {news.content}
                  </p>
                  <Link to="/actualites" className="text-niger-ochre font-bold text-sm uppercase tracking-wide hover:text-yellow-700 self-start mt-auto">
                    Lire la suite
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-niger-blue relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">Investir dans le Tourisme au Niger</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            Le Niger garantit un cadre juridique sécurisé et attractif pour les investisseurs. Découvrez les opportunités dans l'écotourisme et l'hôtellerie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pro" className="px-6 py-3 bg-white text-niger-blue font-bold rounded hover:bg-gray-100 transition">
              Code des Investissements
            </Link>
            <Link to="/contact" className="px-6 py-3 bg-transparent border border-white text-white font-bold rounded hover:bg-white/10 transition">
              Contacter la Direction
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-niger-ochre opacity-20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </section>
    </div>
  );
};

export default Home;