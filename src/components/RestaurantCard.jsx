import { Star, MapPin, Utensils } from 'lucide-react';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{restaurant.name}</h2>
          <div className="flex items-center space-x-2">
            <Star className="text-yellow-400 h-4 w-4" />
            <span className="text-gray-600">{restaurant.rating}</span>
          </div>
        </div>
        <div className="mb-4">
          <MapPin className="mr-2 h-4 w-4 text-gray-500" />
          <span className="text-gray-600">{restaurant.location}</span>
        </div>
        <div className="mb-4">
          <Utensils className="mr-2 h-4 w-4 text-gray-500" />
          <span className="text-gray-600">{restaurant.cuisine}</span>
        </div>
        <p className="text-gray-700">{restaurant.description}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
