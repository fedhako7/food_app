'use client';

import { useState } from 'react';
import FoodCard from '@/components/FoodCard';
import AddFoodModal from '@/components/AddFoodModal';
import Header from '@/components/Header/Header';
import { FoodItem } from '@/types';
import { placeholderFoods } from '@/placeholders/foods';

export default function Main() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>(placeholderFoods);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = foodItems.filter(item =>
    item.food_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.restaurant_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onAddFoodClick={() => setIsModalOpen(true)}
      />
      <main className="bg-white container mx-auto p-4">
        {filteredItems.length === 0 ? (
          <div className="empty-state-message text-center text-gray-500">
            No items available
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map(item => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        )}

        <AddFoodModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>
    </>
  );
}
