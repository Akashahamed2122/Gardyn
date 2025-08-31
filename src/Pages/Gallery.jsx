import React, { useState, useEffect, useCallback } from 'react';

// Mock images (replace with your actual imports)
const mockImages = [
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1598986646518-9330a5dcc5a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1598986646518-9330a5dcc5a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
];

const plantData = [
  { 
    id: 1, 
    name: "Monstera Deliciosa", 
    description: "Also known as the Swiss Cheese Plant, famous for its natural leaf-holes",
    category: "Indoor",
    care: "Moderate light, water weekly",
    price: "$45.99",
    rating: 4.8
  },
  { 
    id: 2, 
    name: "Fiddle Leaf Fig", 
    description: "A popular indoor tree with large violin-shaped leaves",
    category: "Indoor",
    care: "Bright indirect light, water when top soil is dry",
    price: "$59.99",
    rating: 4.5
  },
  { 
    id: 3, 
    name: "Snake Plant", 
    description: "Extremely durable and perfect for beginners",
    category: "Indoor",
    care: "Low light, water sparingly",
    price: "$32.50",
    rating: 4.7
  },
  { 
    id: 4, 
    name: "Peace Lily", 
    description: "Beautiful white blooms and air-purifying qualities",
    category: "Indoor",
    care: "Low to moderate light, keep soil moist",
    price: "$38.75",
    rating: 4.6
  },
  { 
    id: 5, 
    name: "Pothos", 
    description: "Fast-growing vine that's easy to care for",
    category: "Indoor",
    care: "Adapts to various light, water when soil is dry",
    price: "$24.99",
    rating: 4.9
  },
  { 
    id: 6, 
    name: "Rubber Plant", 
    description: "Stunning dark leaves with a glossy finish",
    category: "Indoor",
    care: "Bright indirect light, water when top soil is dry",
    price: "$42.50",
    rating: 4.4
  },
  { 
    id: 7, 
    name: "ZZ Plant", 
    description: "Thrives in low light and requires minimal watering",
    category: "Indoor",
    care: "Low light, water every 2-3 weeks",
    price: "$36.99",
    rating: 4.8
  },
  { 
    id: 8, 
    name: "Bird of Paradise", 
    description: "Tropical plant with large, dramatic leaves",
    category: "Indoor",
    care: "Bright light, keep soil consistently moist",
    price: "$79.99",
    rating: 4.3
  },
  { 
    id: 9, 
    name: "Chinese Money Plant", 
    description: "Unique circular leaves on upright stems",
    category: "Indoor",
    care: "Bright indirect light, water when top soil is dry",
    price: "$29.95",
    rating: 4.7
  },
  { 
    id: 10, 
    name: "String of Pearls", 
    description: "Trailing succulent with bead-like leaves",
    category: "Succulent",
    care: "Bright light, water when soil is dry",
    price: "$18.50",
    rating: 4.9
  },
  { 
    id: 11, 
    name: "Aloe Vera", 
    description: "Healing properties and easy to grow",
    category: "Succulent",
    care: "Bright light, water deeply but infrequently",
    price: "$22.99",
    rating: 4.6
  },
  { 
    id: 12, 
    name: "Majesty Palm", 
    description: "Brings a tropical feel to any space",
    category: "Outdoor",
    care: "Bright indirect light, keep soil moist",
    price: "$65.00",
    rating: 4.2
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loaded, setLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  // Initialize animation on component mount
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (!isModalOpen) return;
    
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      navigateImages(1);
    } else if (e.key === 'ArrowLeft') {
      navigateImages(-1);
    }
  }, [isModalOpen, currentIndex]);

  // Add event listener for keyboard navigation
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const openModal = (index) => {
    setSelectedImage(mockImages[index]);
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
    document.body.style.overflow = 'unset';
  };

  const navigateImages = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = mockImages.length - 1;
    if (newIndex >= mockImages.length) newIndex = 0;
    
    setCurrentIndex(newIndex);
    setSelectedImage(mockImages[newIndex]);
  };

  // Filter and sort plants
  const filteredPlants = plantData.filter(plant => {
    const matchesCategory = activeCategory === 'All' || plant.category === activeCategory;
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          plant.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort plants based on selected option
  const sortedPlants = [...filteredPlants].sort((a, b) => {
    if (sortBy === 'price-low') return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
    if (sortBy === 'price-high') return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0; // default order
  });

  return (
    <section className="gallery-container mt-20 px-4 md:px-0 max-w-7xl mx-auto">
      {/* Animated Title */}
      <h1 className={`text-4xl md:text-5xl font-bold text-center mb-6 text-green-800 transform transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        Our Beautiful Plant Gallery
      </h1>
      
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Discover our curated collection of plants that bring life and freshness to any space
      </p>

      {/* Search, Filter and Sort Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search plants..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <div className="flex flex-wrap gap-2">
            {['All', 'Indoor', 'Outdoor', 'Succulent'].map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-green-100'}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <select 
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Sort by</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="name">Alphabetical</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 flex justify-between items-center">
        <p className="text-gray-600">
          Showing {sortedPlants.length} of {plantData.length} plants
        </p>
        <div className="flex items-center">
          <span className="text-gray-600 mr-2">View:</span>
          <button className="p-2 rounded-lg bg-green-100 text-green-800 mr-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
            </svg>
          </button>
          <button className="p-2 rounded-lg bg-gray-200 text-gray-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Gallery Grid with Staggered Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedPlants.map((plant, index) => (
          <div
            key={plant.id}
            className={`gallery-card relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
            onClick={() => openModal(plant.id - 1)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openModal(plant.id - 1)}
            aria-label={`View ${plant.name}`}
          >
            <div className="aspect-w-4 aspect-h-3 overflow-hidden">
              <img
                src={mockImages[plant.id - 1]}
                alt={plant.name}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            
            {/* Favorite Button */}
            <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-all duration-300 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
              <svg className="w-5 h-5 text-gray-600 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full mb-2">
                  {plant.category}
                </span>
                <h3 className="text-white text-xl font-bold mb-1">{plant.name}</h3>
                <p className="text-green-200 text-sm">{plant.description}</p>
              </div>
            </div>
            
            {/* Quick Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-bold text-green-800">{plant.price}</span>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="ml-1 text-sm text-gray-700">{plant.rating}</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs text-gray-700">
                <span>💧 {plant.care}</span>
                <button className="text-green-700 font-semibold hover:text-green-900 transition-colors flex items-center">
                  View Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {sortedPlants.length === 0 && (
        <div className="text-center py-16">
          <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">No plants found</h3>
          <p className="mt-2 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
        </div>
      )}

      {/* Pagination */}
      {sortedPlants.length > 0 && (
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <button className="p-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-green-100 disabled:opacity-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button className="px-4 py-2 rounded-lg bg-green-700 text-white font-medium">1</button>
            <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-green-100 font-medium">2</button>
            <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-green-100 font-medium">3</button>
            <span className="px-2 text-gray-500">...</span>
            <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-green-100 font-medium">8</button>
            <button className="p-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-green-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </nav>
        </div>
      )}

      {/* Enhanced Modal with Navigation */}
      {selectedImage && (
        <div
          className={`fixed inset-0 bg-black flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${isModalOpen ? 'bg-opacity-95' : 'bg-opacity-0 pointer-events-none'}`}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
        >
          <div className="relative max-w-6xl w-full flex items-center justify-center">
            {/* Close Button */}
            <button
              className="absolute -top-12 right-0 text-white text-4xl font-light hover:text-green-400 transition-all duration-300 transform hover:scale-125 z-10"
              aria-label="Close modal"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Arrows */}
            <button
              className="absolute left-2 md:-left-12 text-white p-4 rounded-full bg-black/30 hover:bg-black/60 transition-all duration-300 transform hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                navigateImages(-1);
              }}
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="absolute right-2 md:-right-12 text-white p-4 rounded-full bg-black/30 hover:bg-black/60 transition-all duration-300 transform hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                navigateImages(1);
              }}
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image with Fade In/Out Animation */}
            <div className={`transition-opacity duration-500 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}>
              <img
                src={selectedImage}
                alt={plantData[currentIndex]?.name || "Plant image"}
                className="max-w-full max-h-[80vh] rounded-lg shadow-2xl object-contain"
              />
              
              {/* Image Info */}
              <div className="text-center mt-6 text-white">
                <h2 id="modal-title" className="text-3xl font-bold">{plantData[currentIndex]?.name}</h2>
                <p className="text-green-200 mt-2">{plantData[currentIndex]?.description}</p>
                <div className="flex justify-center items-center mt-4 space-x-4">
                  <span className="inline-flex items-center bg-green-800/40 px-3 py-1 rounded-full text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                    {plantData[currentIndex]?.category}
                  </span>
                  <span className="inline-flex items-center bg-green-800/40 px-3 py-1 rounded-full text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {plantData[currentIndex]?.care}
                  </span>
                </div>
                <div className="mt-4 flex justify-center items-center">
                  <span className="text-2xl font-bold text-white mr-4">{plantData[currentIndex]?.price}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < Math.floor(plantData[currentIndex]?.rating) ? 'text-yellow-400' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-300">({plantData[currentIndex]?.rating})</span>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mt-4">{currentIndex + 1} of {mockImages.length}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="text-center mt-16 mb-8">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Ready to bring plants into your space?</h2>
        <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
          Explore Our Collection
        </button>
      </div>

      <style jsx>{`
        .gallery-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .gallery-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .gallery-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        input:focus {
          box-shadow: 0 0 0 3px rgba(72, 187, 120, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Gallery;