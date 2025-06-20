'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Truck, Store, Search } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onAddFoodClick: () => void;
}

export default function Header({ searchQuery, setSearchQuery, onAddFoodClick }: HeaderProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="bg-white text-white p-4">
      <div className="bg-white grid grid-cols-2 h-12 text-yellow-600 py-2 px-6">
        <div>FoodWage</div>
        <button
          className="text-yellow-600 hover:opacity-75 transition"
          onClick={onAddFoodClick}
          aria-label="Add a new meal"
        >
          Add meal
        </button>
      </div>
      <div className="bg-yellow-600 px-10">
        <div className="justify-around mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div>
              <h3 className="text-white text-2xl font-bold">Are You Starving?</h3>
              <p className="text-white mt-2">Within a few clicks, find a meals that are accessible near you!</p>
            </div>
            <div className="bg-white rounded-lg p-4 mt-6">
              <div className="flex gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Truck size={20} className="text-yellow-600" aria-hidden="true" />
                  <span className="text-yellow-600">Deliver</span>
                </div>
                <div className="flex items-center gap-2">
                  <Store size={20} className="text-yellow-600" aria-hidden="true" />
                  <span className="text-yellow-600">Pick up</span>
                </div>
              </div>
              <div className="relative">
                <Search
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-600"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  name="search-bar"
                  id="search-bar"
                  placeholder="What do you want eat today?"
                  className="w-full pl-10 pr-4 py-2 rounded-lg text-yellow-600 border border-yellow-600 focus:outline-none"
                  value={searchQuery}
                  onChange={handleSearch}
                  aria-label="Search for meals"
                />
              </div>
              <button
                className="mt-4 w-full bg-yellow-600 text-white px-6 py-2 rounded-lg"
                aria-label="Find a meal"
              >
                <Search size={20} className="inline-block mr-2" aria-hidden="true" />
                Find Meal
              </button>
            </div>
          </div>
          <div className="relative h-64">
            <Image
              src="/food.jpg"
              alt="Food image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </header>
  );
}