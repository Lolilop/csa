import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function InscriptionPage() {
  const [searchParams] = useSearchParams();
  const sectionId = searchParams.get('sectionId');
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
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-blue-600 z-50 transition-all duration-300 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div className="font-[Montserrat] bg-gray-50 text-gray-800 min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Inscription à une section</h1>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="mb-6 text-gray-600 text-center">
                  Vous vous inscrivez pour la section <strong>ID : {sectionId || 'Inconnue'}</strong>
                </p>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nom complet</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Téléphone</label>
                    <input type="tel" className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-blue-700 transition"
                  >
                    Envoyer l'inscription
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <Footer />

        {/* Scroll to top button */}
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
