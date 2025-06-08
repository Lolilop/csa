import { useState, useEffect } from 'react';
import AuthButton from './auth/AuthButton';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Track scroll position and detect active section
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style based on scroll position
      setIsScrolled(window.scrollY > 50);
      
      // Detect which section is in view
      const sections = ['home', 'sections', 'about', 'events'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition && 
            element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Navigation items
  const navItems = [
    { id: 'sections', label: 'Sections' },
    { id: 'about', label: 'À propos' },
    { id: 'events', label: 'Événements' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#" 
              onClick={(e) => {e.preventDefault(); scrollToSection('home');}} 
              className="flex items-center group"
            >
              <span 
                className={`text-2xl font-bold transition-all duration-300 ${isScrolled ? 'text-blue-700' : 'text-white'} group-hover:scale-105`}
              >
                CSA
              </span>
              <span 
                className={`ml-2 transition-all duration-300 ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}
              >
                Centre Sportif et Artistique
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-8 mr-8">
              {navItems.map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  onClick={(e) => {e.preventDefault(); scrollToSection(item.id);}} 
                  className={`relative font-medium px-1 py-1 transition-all duration-300
                    ${activeSection === item.id ? 'font-semibold' : ''}
                    ${isScrolled 
                      ? activeSection === item.id 
                        ? 'text-blue-700' 
                        : 'text-gray-700 hover:text-blue-700' 
                      : activeSection === item.id 
                        ? 'text-white' 
                        : 'text-white/90 hover:text-white'}`}
                >
                  {item.label}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300
                      ${activeSection === item.id 
                        ? 'scale-x-100' 
                        : 'scale-x-0 group-hover:scale-x-100'}
                      ${isScrolled ? 'bg-blue-700' : 'bg-white'}`}
                    style={{
                      transformOrigin: 'left',
                      bottom: '-4px'  
                    }}
                  ></span>
                </a>
              ))}
            </div>
            <AuthButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`focus:outline-none p-1 rounded-md transition-all duration-300 ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <div className="w-6 h-5 relative">
                <span 
                  className={`absolute h-0.5 w-full rounded-sm transform transition-all duration-300 ease-in-out ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}
                ></span>
                <span 
                  className={`absolute h-0.5 w-full rounded-sm top-2 transform transition-all duration-200 ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                ></span>
                <span 
                  className={`absolute h-0.5 w-full rounded-sm transform transition-all duration-300 ease-in-out ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
          style={{ transitionProperty: 'max-height, opacity' }}
        >
          <div className="py-3 space-y-2">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                onClick={(e) => {e.preventDefault(); scrollToSection(item.id);}} 
                className={`block py-3 px-2 rounded-lg transition-all duration-300
                  ${activeSection === item.id 
                    ? 'bg-blue-50 text-blue-700 font-medium' 
                    : 'text-gray-800 hover:bg-gray-100'}`}
              >
                <div className="flex items-center justify-between">
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-gray-200">
              <AuthButton isMobile={true} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;