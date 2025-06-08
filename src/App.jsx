import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionsGrid from './components/SectionsGrid';
import About from './components/About';
import Events from './components/Events';
import Footer from './components/Footer';
import { UserProvider } from './context/UserContext';
import InscriptionPage from './components/InscriptionPage';

function MainAppContent() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div 
        className="fixed top-0 left-0 h-1 bg-blue-600 z-50 transition-all duration-300 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      ></div>
      
      <div className="font-[Montserrat] bg-gray-50 text-gray-800">
        <Navbar />
        <Hero />
        <section id="sections" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold tracking-wider uppercase bg-blue-100 text-blue-800 mb-3">Découvrez</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Nos Sections</h2>
              <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full"></div>
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">Découvrez la diversité de nos activités sportives et artistiques pour tous les goûts et niveaux</p>
            </div>
            <SectionsGrid />
          </div>
        </section>
        <About />
        <Events />
        <Footer />
        <button 
          onClick={scrollToTop}
          className={`fixed right-6 bottom-6 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 z-30 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${scrollProgress > 20 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
          aria-label="Retour en haut"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900 z-50">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 relative">
            <div className="w-24 h-24 rounded-full border-4 border-blue-200 border-opacity-20"></div>
            <div className="w-24 h-24 rounded-full border-4 border-t-transparent border-blue-400 absolute top-0 left-0 animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">CSA</div>
          </div>
          <p className="mt-6 text-xl font-medium text-blue-100">Chargement en cours...</p>
        </div>
      </div>
    );
  }

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainAppContent />} />
          <Route path="/inscription" element={<InscriptionPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
