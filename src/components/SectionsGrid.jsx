import { useState } from 'react';
import SectionCard from './SectionCard';
import { sections } from '../data/sections';

function SectionsGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Extract unique categories from sections
  const categories = ['all', ...new Set(sections.map(section => section.category))];
  
  // Filter sections by active category
  const filteredSections = activeCategory === 'all' 
    ? sections 
    : sections.filter(section => section.category === activeCategory);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSections.map(section => (
          <SectionCard key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}

export default SectionsGrid;