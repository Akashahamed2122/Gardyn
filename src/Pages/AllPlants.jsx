import React, { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router";

// Plant Card Component
const PlantCard = ({ plant }) => {
  const { plantname, photo, category, _id, freequency } = plant;

  return (
    <div className="w-full border border-gray-200 rounded-xl overflow-hidden bg-white shadow-lg transform hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer group">
      {/* Image with Overlay */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={photo}
          alt={`Photo of ${plantname}`}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-2">
          <h3 className="text-white text-xl font-bold">{plantname}</h3>
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-medium rounded-full shadow">
            {category}
          </span>
        </div>
      </div>

      {/* Details & Button */}
      <div className="p-4 space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <svg className="w-4 h-4 mr-1 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
          </svg>
          <span className="font-medium">Water every:</span> {freequency}
        </div>

        <Link to={`/viewDetails/${_id}`}>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition duration-200 w-full flex items-center justify-center">
            View Details
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

// Plant Table Row Component
const PlantTableRow = ({ plant }) => {
  const { plantname, photo, category, _id, freequency } = plant;

  return (
    <tr className="bg-white hover:bg-emerald-50 transition-colors duration-200 border-b border-gray-100 group">
      <td className="p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-12 w-12 rounded-lg overflow-hidden shadow-sm border border-gray-200">
            <img
              className="h-12 w-12 object-cover"
              src={photo}
              alt={plantname}
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{plantname}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-emerald-100 text-emerald-800">
          {category}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {freequency}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link
          to={`/viewDetails/${_id}`}
          className="text-emerald-600 hover:text-emerald-900 font-medium inline-flex items-center transition-colors duration-200 group-hover:underline"
        >
          View Details
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </Link>
      </td>
    </tr>
  );
};

// Plants Table Component
const PlantsTable = ({ plants, sortField, sortDirection, handleSort }) => {
  const SortIcon = ({ field }) => {
    if (sortField !== field) return <span className="ml-1 opacity-0 group-hover:opacity-50">↕</span>;
    return <span className="ml-1">{sortDirection === "asc" ? "↑" : "↓"}</span>;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Plant Inventory</h2>
        <p className="text-gray-600 mt-1">Manage and explore your plant collection</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors duration-150 group"
                onClick={() => handleSort("plantname")}
              >
                <div className="flex items-center">
                  Plant Name
                  <SortIcon field="plantname" />
                </div>
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors duration-150 group"
                onClick={() => handleSort("category")}
              >
                <div className="flex items-center">
                  Category
                  <SortIcon field="category" />
                </div>
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors duration-150 group"
                onClick={() => handleSort("freequency")}
              >
                <div className="flex items-center">
                  Watering Frequency
                  <SortIcon field="freequency" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {plants.map(plant => (
              <PlantTableRow key={plant._id} plant={plant} />
            ))}
          </tbody>
        </table>
      </div>
      
      {plants.length === 0 && (
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No plants found</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by adding a new plant to your collection.</p>
        </div>
      )}
    </div>
  );
};

// Main Component
const AllPlants = () => {
  const plantsData = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("card");
  const [sortField, setSortField] = useState("plantname");
  const [sortDirection, setSortDirection] = useState("asc");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Get unique categories
  const categories = ["All", ...new Set(plantsData.map((p) => p.category))];

  // Filter plants based on search and category
  let filteredPlants = plantsData.filter((plant) => {
    const matchName = plant.plantname
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchCategory =
      selectedCategory === "All" || plant.category === selectedCategory;
    return matchName && matchCategory;
  });

  // Sort plants based on selected field and direction
  filteredPlants = [...filteredPlants].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });
  
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-12">
      <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-12 h-72 md:h-96 group">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center transform transition-all duration-1000 group-hover:scale-105"
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-teal-800/70 flex items-center justify-center">
            <div className="text-center px-6 py-12">
              <h1 className="font-bold text-4xl md:text-5xl text-white mb-4">Botanical Collection</h1>
              <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
                Discover our exquisite selection of plants to enrich your living space
              </p>
            </div>
          </div>
        </div>

        {/* Controls Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Plant Catalog</h2>
            
            {/* View Toggle */}
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  viewMode === "table"
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } border border-gray-200`}
                onClick={() => setViewMode("table")}
              >
                Table View
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  viewMode === "card"
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } border border-gray-200`}
                onClick={() => setViewMode("card")}
              >
                Card View
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search plant names..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            
            {/* Category Filter */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-12 pr-10 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none transition-all duration-300 bg-white"
              >
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {/* Results Count */}
            <div className="bg-emerald-50 rounded-xl p-4 flex items-center justify-center">
              <p className="text-emerald-800 font-medium">
                Showing <span className="font-bold">{filteredPlants.length}</span> of <span className="font-bold">{plantsData.length}</span> plants
              </p>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mt-6">
            {searchText && (
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm flex items-center">
                Search: "{searchText}"
                <button 
                  onClick={() => setSearchText("")}
                  className="ml-2 text-emerald-600 hover:text-emerald-800"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </span>
            )}
            {selectedCategory !== "All" && (
              <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm flex items-center">
                Category: {selectedCategory}
                <button 
                  onClick={() => setSelectedCategory("All")}
                  className="ml-2 text-teal-600 hover:text-teal-800"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </span>
            )}
          </div>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
                <div className="h-48 bg-gradient-to-r from-emerald-100 to-teal-100"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Content Area */
          <>
            {filteredPlants.length > 0 ? (
              viewMode === "table" ? (
                <PlantsTable 
                  plants={filteredPlants} 
                  sortField={sortField}
                  sortDirection={sortDirection}
                  handleSort={handleSort}
                />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredPlants.map((plant) => (
                    <PlantCard key={plant._id} plant={plant} />
                  ))}
                </div>
              )
            ) : (
              <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-emerald-50 text-emerald-500 mb-6">
                  <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">No plants found</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  We couldn't find any plants matching your criteria. Try adjusting your search or filters.
                </p>
                <button 
                  onClick={() => { setSearchText(""); setSelectedCategory("All"); }}
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-colors duration-300"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllPlants;