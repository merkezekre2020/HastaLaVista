import { useState } from 'react';
import { Search, ThermometerSun } from 'lucide-react';

const SearchBar = ({ searchTerm, selectedCuisine, onSearchTermChange, onCuisineChange }) => {
  const cuisines = [
    'All',
    'Modern Türk',
    'Neo-Lokal',
    'Anadolu',
    'Kebap',
    'Türk',
    'Deniz Ürünleri',
    'İnternasyonal',
    'Antep Mutfağı',
    'Tatlı'
  ];

  return (
    <div className="mb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <div className="flex w-full lg:w-auto">
        <input
          type="text"
          placeholder="Restoran adı ara..."
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="ml-2 h-4 w-4 text-gray-500" />
      </div>
      <div className="flex lg:flex-1 lg:justify-end">
        <select
          value={selectedCuisine}
          onChange={(e) => onCuisineChange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {cuisines.map(cuisine => (
            <option key={cuisine} value={cuisine.toLowerCase()}>
              {cuisine}
            </option>
          ))}
        </select>
        <ThermometerSun className="ml-2 h-4 w-4 text-gray-500" />
      </div>
    </div>
  );
};

export default SearchBar;
