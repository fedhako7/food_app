export interface FoodItem {
  id: string;
  food_name: string;
  food_rating: number;
  food_image: string;
  restaurant_name: string;
  restaurant_logo: string;
  restaurant_status: 'Open Now' | 'Closed';
  price: number;
}
