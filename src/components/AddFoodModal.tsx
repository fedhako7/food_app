import { useState } from 'react';

interface AddFoodModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddFoodModal({ isOpen, onClose }: AddFoodModalProps) {
  const [formData, setFormData] = useState({
    food_name: '',
    food_rating: '',
    food_image: '',
    restaurant_name: '',
    restaurant_logo: '',
    restaurant_status: 'Open Now' as 'Open Now' | 'Closed',
    price: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.food_name) newErrors.food_name = 'Food name is required';
    if (!formData.food_rating || isNaN(Number(formData.food_rating)) || Number(formData.food_rating) < 0 || Number(formData.food_rating) > 5)
      newErrors.food_rating = 'Rating must be a number between 0 and 5';
    if (!formData.food_image) newErrors.food_image = 'Food image URL is required';
    if (!formData.restaurant_name) newErrors.restaurant_name = 'Restaurant name is required';
    if (!formData.restaurant_logo) newErrors.restaurant_logo = 'Restaurant logo URL is required';
    if (!formData.price || isNaN(Number(formData.price)) || Number(formData.price) < 0)
      newErrors.price = 'Price must be a positive number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Placeholder for backend integration
      console.log('Form submitted:', formData);
      onClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add Food</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="food_name" className="block text-sm font-medium">Food Name</label>
            <input
              type="text"
              name="food_name"
              id="food_name"
              placeholder="Enter food name"
              className="w-full p-2 border rounded"
              value={formData.food_name}
              onChange={handleChange}
            />
            {errors.food_name && <p className="text-red-500 text-sm">{errors.food_name}</p>}
          </div>
          <div>
            <label htmlFor="food_rating" className="block text-sm font-medium">Food Rating</label>
            <input
              type="number"
              name="food_rating"
              id="food_rating"
              placeholder="Enter rating (0-5)"
              className="w-full p-2 border rounded"
              value={formData.food_rating}
              onChange={handleChange}
            />
            {errors.food_rating && <p className="text-red-500 text-sm">{errors.food_rating}</p>}
          </div>
          <div>
            <label htmlFor="food_image" className="block text-sm font-medium">Food Image URL</label>
            <input
              type="text"
              name="food_image"
              id="food_image"
              placeholder="Enter food image URL"
              className="w-full p-2 border rounded"
              value={formData.food_image}
              onChange={handleChange}
            />
            {errors.food_image && <p className="text-red-500 text-sm">{errors.food_image}</p>}
          </div>
          <div>
            <label htmlFor="restaurant_name" className="block text-sm font-medium">Restaurant Name</label>
            <input
              type="text"
              name="restaurant_name"
              id="restaurant_name"
              placeholder="Enter restaurant name"
              className="w-full p-2 border rounded"
              value={formData.restaurant_name}
              onChange={handleChange}
            />
            {errors.restaurant_name && <p className="text-red-500 text-sm">{errors.restaurant_name}</p>}
          </div>
          <div>
            <label htmlFor="restaurant_logo" className="block text-sm font-medium">Restaurant Logo URL</label>
            <input
              type="text"
              name="restaurant_logo"
              id="restaurant_logo"
              placeholder="Enter restaurant logo URL"
              className="w-full p-2 border rounded"
              value={formData.restaurant_logo}
              onChange={handleChange}
            />
            {errors.restaurant_logo && <p className="text-red-500 text-sm">{errors.restaurant_logo}</p>}
          </div>
          <div>
            <label htmlFor="restaurant_status" className="block text-sm font-medium">Restaurant Status</label>
            <select
              name="restaurant_status"
              id="restaurant_status"
              className="w-full p-2 border rounded"
              value={formData.restaurant_status}
              onChange={handleChange}
            >
              <option value="Open Now">Open Now</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Enter price"
              className="w-full p-2 border rounded"
              value={formData.price}
              onChange={handleChange}
            />
            {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
          </div>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
