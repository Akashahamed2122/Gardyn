import React, { useState, useEffect, useCallback } from 'react';

// Mock images
const mockImages = [
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1598986646518-9330a5dcc5a9?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1598986646518-9330a5dcc5a9?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80"
];

const plantData = [
  { 
    id: 1, 
    name: "Monstera Deliciosa", 
    description: "Also known as the Swiss Cheese Plant, famous for its natural leaf-holes", 
    category: "Indoor", 
    care: "Moderate light, water weekly", 
    price: "$45.99", 
    rating: 4.8,
    light: "Indirect",
    water: "Weekly",
    size: "Medium",
    stock: 15
  },
  { 
    id: 2, 
    name: "Fiddle Leaf Fig", 
    description: "A popular indoor tree with large violin-shaped leaves", 
    category: "Indoor", 
    care: "Bright indirect light, water when top soil is dry", 
    price: "$59.99", 
    rating: 4.5,
    light: "Bright Indirect",
    water: "When dry",
    size: "Large",
    stock: 8
  },
  { 
    id: 3, 
    name: "Snake Plant", 
    description: "Extremely durable and perfect for beginners", 
    category: "Indoor", 
    care: "Low light, water sparingly", 
    price: "$32.50", 
    rating: 4.7,
    light: "Low",
    water: "Sparingly",
    size: "Small",
    stock: 22
  },
  { 
    id: 4, 
    name: "Peace Lily", 
    description: "Beautiful white blooms and air-purifying qualities", 
    category: "Indoor", 
    care: "Low to moderate light, keep soil moist", 
    price: "$38.75", 
    rating: 4.6,
    light: "Low to Moderate",
    water: "Keep moist",
    size: "Medium",
    stock: 12
  },
  { 
    id: 5, 
    name: "Pothos", 
    description: "Fast-growing vine that's easy to care for", 
    category: "Indoor", 
    care: "Adapts to various light, water when soil is dry", 
    price: "$24.99", 
    rating: 4.9,
    light: "Adaptable",
    water: "When dry",
    size: "Small",
    stock: 30
  },
  { 
    id: 6, 
    name: "Rubber Plant", 
    description: "Stunning dark leaves with a glossy finish", 
    category: "Indoor", 
    care: "Bright indirect light, water when top soil is dry", 
    price: "$42.50", 
    rating: 4.4,
    light: "Bright Indirect",
    water: "When dry",
    size: "Medium",
    stock: 7
  },
  { 
    id: 7, 
    name: "ZZ Plant", 
    description: "Thrives in low light and requires minimal watering", 
    category: "Indoor", 
    care: "Low light, water every 2-3 weeks", 
    price: "$36.99", 
    rating: 4.8,
    light: "Low",
    water: "Minimal",
    size: "Small",
    stock: 18
  },
  { 
    id: 8, 
    name: "Bird of Paradise", 
    description: "Tropical plant with large, dramatic leaves", 
    category: "Indoor", 
    care: "Bright light, keep soil consistently moist", 
    price: "$79.99", 
    rating: 4.3,
    light: "Bright",
    water: "Consistently moist",
    size: "Large",
    stock: 5
  },
  { 
    id: 9, 
    name: "Chinese Money Plant", 
    description: "Unique circular leaves on upright stems", 
    category: "Indoor", 
    care: "Bright indirect light, water when top soil is dry", 
    price: "$29.95", 
    rating: 4.7,
    light: "Bright Indirect",
    water: "When dry",
    size: "Small",
    stock: 25
  },
  { 
    id: 10, 
    name: "String of Pearls", 
    description: "Trailing succulent with bead-like leaves", 
    category: "Succulent", 
    care: "Bright light, water when soil is dry", 
    price: "$18.50", 
    rating: 4.9,
    light: "Bright",
    water: "When dry",
    size: "Small",
    stock: 14
  },
  { 
    id: 11, 
    name: "Aloe Vera", 
    description: "Healing properties and easy to grow", 
    category: "Succulent", 
    care: "Bright light, water deeply but infrequently", 
    price: "$22.99", 
    rating: 4.6,
    light: "Bright",
    water: "Infrequently",
    size: "Small",
    stock: 20
  },
  { 
    id: 12, 
    name: "Majesty Palm", 
    description: "Brings a tropical feel to any space", 
    category: "Outdoor", 
    care: "Bright indirect light, keep soil moist", 
    price: "$65.00", 
    rating: 4.2,
    light: "Bright Indirect",
    water: "Keep moist",
    size: "Large",
    stock: 9
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState('grid');
  const [favorites, setFavorites] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    light: [],
    water: [],
    size: []
  });

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

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  // Filter and sort plants
  const filteredPlants = plantData.filter(plant => {
    const matchesCategory = activeCategory === 'All' || plant.category === activeCategory;
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          plant.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Check if plant matches all selected filters
    const matchesFilters = Object.entries(selectedFilters).every(([key, values]) => {
      if (values.length === 0) return true;
      return values.includes(plant[key]);
    });
    
    return matchesCategory && matchesSearch && matchesFilters;
  });

  // Sort plants based on selected option
  const sortedPlants = [...filteredPlants].sort((a, b) => {
    if (sortBy === 'price-low') return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
    if (sortBy === 'price-high') return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0; // default order
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedPlants.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedPlants.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleFilter = (type, value) => {
    setSelectedFilters(prev => {
      const newFilters = {...prev};
      if (newFilters[type].includes(value)) {
        newFilters[type] = newFilters[type].filter(v => v !== value);
      } else {
        newFilters[type] = [...newFilters[type], value];
      }
      return newFilters;
    });
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      light: [],
      water: [],
      size: []
    });
    setSearchQuery('');
    setActiveCategory('All');
    setSortBy('default');
  };

  // Get unique filter values
  const filterOptions = {
    light: [...new Set(plantData.map(p => p.light))],
    water: [...new Set(plantData.map(p => p.water))],
    size: [...new Set(plantData.map(p => p.size))]
  };

  return (
    <section className="gallery-container mt-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">
          Our Beautiful Plant Gallery
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover our curated collection of plants that bring life and freshness to any space. Each plant is carefully selected for quality and beauty.
        </p>
      </div>

      {/* Search, Filter and Sort Section */}
      <div className="mb-10 bg-white rounded-2xl shadow-sm p-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
          <div className="relative w-full lg:w-2/5">
            <div className="relative">
              <input
                type="text"
                placeholder="Search plants by name or description..."
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all pl-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 w-full lg:w-3/5">
            <div className="flex flex-wrap gap-2">
              {['All', 'Indoor', 'Outdoor', 'Succulent'].map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category ? 'bg-green-700 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-green-100'}`}
                  onClick={() => {
                    setActiveCategory(category);
                    setCurrentPage(1);
                  }}
                >
                  {category}
                </button>
              ))}
              
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center ${isFilterOpen ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-green-100'}`}
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                </svg>
                Filters
                {Object.values(selectedFilters).some(arr => arr.length > 0) && (
                  <span className="ml-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {Object.values(selectedFilters).reduce((total, arr) => total + arr.length, 0)}
                  </span>
                )}
              </button>
              
              {Object.values(selectedFilters).some(arr => arr.length > 0) && (
                <button 
                  className="px-3 py-2 rounded-full text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-all flex items-center"
                  onClick={clearAllFilters}
                >
                  Clear all
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              )}
            </div>
            
            <div className="flex gap-4">
              <select 
                className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white shadow-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Sort by</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Alphabetical</option>
              </select>
              
              <div className="flex items-center bg-gray-100 rounded-xl p-1">
                <button 
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-700'}`}
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid view"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                </button>
                <button 
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-700'}`}
                  onClick={() => setViewMode('list')}
                  aria-label="List view"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Advanced Filters */}
        {isFilterOpen && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">Refine by:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(filterOptions).map(([filterType, options]) => (
                <div key={filterType}>
                  <h4 className="text-xs font-medium text-gray-500 uppercase mb-2">{filterType}</h4>
                  <div className="space-y-2">
                    {options.map(option => (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`${filterType}-${option}`}
                          checked={selectedFilters[filterType].includes(option)}
                          onChange={() => toggleFilter(filterType, option)}
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`${filterType}-${option}`} className="ml-2 text-sm text-gray-700">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Results Count and Active Filters */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <p className="text-gray-600">
            Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, sortedPlants.length)} of {sortedPlants.length} plants
          </p>
          
          {/* Active filter tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {Object.entries(selectedFilters).map(([filterType, values]) => 
              values.map(value => (
                <span key={`${filterType}-${value}`} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {value}
                  <button 
                    onClick={() => toggleFilter(filterType, value)}
                    className="ml-1 rounded-full hover:bg-green-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </span>
              ))
            )}
          </div>
        </div>
        
        <div className="text-sm text-gray-500">
          {itemsPerPage} per page
        </div>
      </div>

      {/* Gallery Grid */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentItems.map((plant, index) => (
            <div
              key={plant.id}
              className="gallery-card relative rounded-2xl overflow-hidden shadow-md cursor-pointer group transform transition-all duration-500 hover:shadow-xl"
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
              <button 
                className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${favorites.has(plant.id) ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-600 hover:bg-white'}`}
                onClick={(e) => toggleFavorite(plant.id, e)}
                aria-label={favorites.has(plant.id) ? `Remove ${plant.name} from favorites` : `Add ${plant.name} to favorites`}
              >
                <svg className="w-5 h-5" fill={favorites.has(plant.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </button>
              
              {/* Stock Status */}
              {plant.stock < 5 && (
                <span className="absolute top-4 left-4 px-2 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                  Low Stock
                </span>
              )}
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full mb-2">
                    {plant.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-1">{plant.name}</h3>
                  <p className="text-green-200 text-sm line-clamp-2">{plant.description}</p>
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
                  <span className={plant.stock > 10 ? "text-green-600" : plant.stock > 5 ? "text-amber-600" : "text-red-600"}>
                    {plant.stock} in stock
                  </span>
                </div>
                <button className="w-full mt-3 bg-green-700 hover:bg-green-800 text-white font-medium py-2 rounded-lg transition-colors flex items-center justify-center">
                  Add to Cart
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </button>
              </div>
              
              {/* Basic Info (always visible) */}
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-gray-900 mb-1">{plant.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-green-700 font-bold">{plant.price}</span>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="ml-1 text-sm text-gray-600">{plant.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="space-y-4">
          {currentItems.map((plant, index) => (
            <div
              key={plant.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-500 hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row">
                <div 
                  className="md:w-1/3 h-64 md:h-auto cursor-pointer"
                  onClick={() => openModal(plant.id - 1)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && openModal(plant.id - 1)}
                >
                  <img
                    src={mockImages[plant.id - 1]}
                    alt={plant.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{plant.name}</h3>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full mt-2">
                        {plant.category}
                      </span>
                    </div>
                    
                    <button 
                      className={`p-2 rounded-full ${favorites.has(plant.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                      onClick={(e) => toggleFavorite(plant.id, e)}
                      aria-label={favorites.has(plant.id) ? `Remove ${plant.name} from favorites` : `Add ${plant.name} to favorites`}
                    >
                      <svg className="w-6 h-6" fill={favorites.has(plant.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </button>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{plant.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                      </svg>
                      {plant.light}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                      </svg>
                      {plant.water}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                      </svg>
                      {plant.size}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className={`mr-2 ${plant.stock > 10 ? "text-green-600" : plant.stock > 5 ? "text-amber-600" : "text-red-600"}`}>
                        ●
                      </span>
                      {plant.stock} in stock
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6">
                    <div>
                      <span className="text-2xl font-bold text-green-800">{plant.price}</span>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < Math.floor(plant.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                        <span className="ml-2 text-sm text-gray-500">({plant.rating})</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <button className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {sortedPlants.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
          <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">No plants found</h3>
          <p className="mt-2 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          <button 
            className="mt-4 text-green-700 font-medium hover:text-green-800"
            onClick={clearAllFilters}
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {sortedPlants.length > 0 && totalPages > 1 && (
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <button 
              className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-100 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`px-4 py-2 rounded-lg font-medium ${currentPage === page ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-green-100'}`}
                onClick={() => paginate(page)}
              >
                {page}
              </button>
            ))}
            
            <button 
              className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-100 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
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
              className="fixed top-6 right-6 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110 z-[999]"
              aria-label="Close modal"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt={plantData[currentIndex]?.name}
              className="max-w-full max-h-[80vh] rounded-xl shadow-2xl object-contain"
            />

            {/* Info */}
            <div className="text-center mt-6 text-white">
              <h2 className="text-2xl font-bold">{plantData[currentIndex]?.name}</h2>
              <p className="text-green-200 mt-2">
                {plantData[currentIndex]?.description}
              </p>
              <div className="flex flex-wrap justify-center items-center mt-4 gap-2">
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
                <span className="inline-flex items-center bg-green-800/40 px-3 py-1 rounded-full text-sm">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                  {plantData[currentIndex]?.size}
                </span>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
                <span className="text-2xl font-bold text-white">{plantData[currentIndex]?.price}</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < Math.floor(plantData[currentIndex]?.rating) ? 'text-yellow-400' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-300">({plantData[currentIndex]?.rating})</span>
                </div>
              </div>
              <div className="mt-6 flex justify-center gap-4">
                <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  Add to Cart
                </button>
                <button 
                  className={`p-3 rounded-full border ${favorites.has(plantData[currentIndex]?.id) ? 'border-red-500 text-red-500' : 'border-white text-white hover:bg-white/10'}`}
                  onClick={(e) => toggleFavorite(plantData[currentIndex]?.id, e)}
                  aria-label={favorites.has(plantData[currentIndex]?.id) ? `Remove from favorites` : `Add to favorites`}
                >
                  <svg className="w-6 h-6" fill={favorites.has(plantData[currentIndex]?.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-300 mt-4">{currentIndex + 1} of {mockImages.length}</p>
            </div>

            {/* Nav Buttons */}
            <button
              className="absolute left-6 text-white p-3 rounded-full bg-black/40 hover:bg-black/70 transition transform hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                navigateImages(-1);
              }}
            >
              ◀
            </button>
            <button
              className="absolute right-6 text-white p-3 rounded-full bg-black/40 hover:bg-black/70 transition transform hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                navigateImages(1);
              }}
            >
              ▶
            </button>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="text-center mt-16 mb-8 bg-green-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Ready to bring plants into your space?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">Join thousands of happy plant parents who've transformed their homes with our collection.</p>
        <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl inline-flex items-center">
          Explore Our Collection
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
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
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        input:focus {
          box-shadow: 0 0 0 3px rgba(72, 187, 120, 0.2);
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Gallery;