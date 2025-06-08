import { useState } from 'react';
import SectionDetailModal from './SectionDetailModal';

function SectionCard({ section }) {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleShowDetails = (e) => {
    e.preventDefault();
    setIsDetailModalOpen(true);
  };

  // Generate vibrant category colors
  const getCategoryColor = (category) => {
    switch(category) {
      case 'artistique':
        return {
          bg: 'bg-amber-100',
          text: 'text-amber-800',
          accent: 'bg-amber-500'
        };
      case 'autre':
        return {
          bg: 'bg-violet-100',
          text: 'text-violet-800',
          accent: 'bg-violet-500'
        };
      case 'sport':
        return {
          bg: 'bg-emerald-100',
          text: 'text-emerald-800',
          accent: 'bg-emerald-500'
        };
      default:
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-800',
          accent: 'bg-blue-600'
        };
    };
  };

  const categoryColors = getCategoryColor(section.category);

  return (
    <>
      <div 
        className="overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl bg-white group relative flex flex-col h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide ${categoryColors.bg} ${categoryColors.text}`}>
            {section.category}
          </span>
        </div>

        {/* Image section with hover effect */}
        <div className="w-full h-52 relative overflow-hidden bg-transparent">
          <img 
            src={section.image} 
            alt={section.name}
            className={`w-full h-full object-contain transition-all duration-500 ease-in-out ${isHovered ? 'scale-105 blur-[2px]' : 'scale-100 blur-0'}`}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-60'}`}></div>
          
          {/* Title */}
          <div className="absolute bottom-0 left-0 p-5 w-full">
            <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-all duration-300">
              {section.name}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-grow flex flex-col">
          <p className="text-gray-700 mb-4 flex-grow">{section.description}</p>
          
          {/* Features */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {section.features.map((feature, index) => (
              <span 
                key={index} 
                className={`px-2 py-1 ${categoryColors.bg} ${categoryColors.text} rounded-md text-xs font-medium transition-all duration-300`}
              >
                {feature}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center pt-2 border-t border-gray-100">
            <div className="text-sm text-gray-600 flex items-center">
              <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {section.schedule}
            </div>
            
            {/* Call to action button */}
            <button
              onClick={handleShowDetails}
              className={`inline-flex items-center px-4 py-2 ${categoryColors.accent} text-white rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow`}
              aria-label={`En savoir plus sur ${section.name}`}
            >
              En savoir plus
              <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Section Detail Modal */}
      <SectionDetailModal 
        section={section} 
        isOpen={isDetailModalOpen} 
        onClose={() => setIsDetailModalOpen(false)} 
      />
    </>
  );
}

export default SectionCard;