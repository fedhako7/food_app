import { FoodItem } from './types';

interface FoodCardProps {
  item: FoodItem;
}

export default function FoodCard({ item }: FoodCardProps) {
  return (
    <article className="bg-gray-300 p-4 rounded shadow">
      <img
        src={item.food_image}
        alt={item.food_name}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="restaurant-name text-xl font-semibold mt-2">{item.food_name}</h2>
      <p className="restaurant-price text-gray-600">${item.price.toFixed(2)}</p>
      <p className="restaurant-rating text-yellow-500">Rating: {item.food_rating}/5</p>
      <p className="restaurant-name text-gray-700">{item.restaurant_name}</p>
      <p className="restaurant-status text-sm">
        {item.restaurant_status === 'Open Now' ? (
          <span className="text-green-500">Open Now</span>
        ) : (
          <span className="text-red-500">Closed</span>
        )}
      </p>
    </article>
  );
}
