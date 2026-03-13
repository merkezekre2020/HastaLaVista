import { useState, useMemo } from 'react';
import restaurants from './data/restaurants.json';
import SearchBar from './components/SearchBar';
import RestaurantCard from './components/RestaurantCard';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('all');
  const [sortByRating, setSortByRating] = useState(false);

  const filteredRestaurants = useMemo(() => {
    return restaurants
      .filter(restaurant => {
        const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCuisine = selectedCuisine === 'all' || restaurant.cuisine.toLowerCase() === selectedCuisine;
        return matchesSearch && matchesCuisine;
      })
      .sort((a, b) => {
        if (sortByRating) {
          return b.rating - a.rating; // Descending order (highest first)
        }
        return 0; // Maintain original order if not sorting by rating
      });
  }, [searchTerm, selectedCuisine, sortByRating]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Türkiye'nin En İyi Restoranları</h1>
          <p className="mt-2 text-gray-600">Michelin yıldızlı ve popüler restoranları keşfedin</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <SearchBar 
            searchTerm={searchTerm} 
            selectedCuisine={selectedCuisine} 
            onSearchTermChange={setSearchTerm} 
            onCuisineChange={setSelectedCuisine} 
          />
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSortByRating(!sortByRating)}
              className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors ${
                sortByRating ? 'bg-blue-600' : ''
              }`}
            >
              {sortByRating ? 'Puanı Azalan' : 'Puanı Artan'}
            </button>
          </div>
        </div>

        {filteredRestaurants.length === 0 ? (
          <p className="text-center py-12 text-gray-500">Aramanızla eşleşen restoran bulunamadı.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </main>

      <footer className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600">
          &copy; {new Date().getFullYear()} Türkiye Restoran Rehberi. Tüm hakları saklıdır.
        </div>
      </footer>
    </div>
  );
};

export default App;
