import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ministry from './pages/Ministry';
import Tourism from './pages/Tourism';
import Artisans from './pages/Artisans';
import Pro from './pages/Pro';
import Contact from './pages/Contact';

// Simple placeholder component for News to keep file count low, 
// normally would be in pages/News.tsx
const News = () => (
  <div className="py-20 text-center">
    <h1 className="text-3xl font-bold font-display">Actualités</h1>
    <p className="text-gray-600 mt-4">Section Actualités complète (voir Page d'Accueil pour aperçu).</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-gray-800">
        <Navbar />
        {/* Adjusted padding-top from pt-24 to pt-32 to account for the taller navbar (h-28) */}
        <main className="flex-grow pt-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ministere" element={<Ministry />} />
            <Route path="/actualites" element={<News />} />
            <Route path="/tourisme" element={<Tourism />} />
            <Route path="/artisanat" element={<Artisans />} />
            <Route path="/pro" element={<Pro />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;