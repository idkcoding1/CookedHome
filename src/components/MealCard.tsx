import React, { useState } from 'react';
import { Meal } from '../data/meal';
import { useOrder } from '../hooks/useOrder';
import { PlusCircle, MinusCircle, ShoppingCart } from 'lucide-react';

interface Props { 
  meal: Meal 
}

const MealCard: React.FC<Props> = ({ meal }) => {
  const { addItem } = useOrder();
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));
  
  const addToCart = () => {
    addItem({ item: meal, quantity });
  };

  return (
    <div 
      className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={meal.image}
          alt={meal.name}
          className={`w-full h-48 object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-gray-800 font-bold px-2 py-1 rounded-full text-xs">
          ${meal.price.toFixed(2)}
        </div>
        {meal.category && (
          <span className="absolute bottom-2 left-2 bg-gray-800 bg-opacity-75 text-white text-xs px-2 py-1 rounded-full">
            {meal.category}
          </span>
        )}
      </div>
      
      <div className="p-4 flex-grow">
        <h3 className="font-bold text-lg text-gray-800 mb-1">{meal.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">{meal.description}</p>
        <div className="flex items-center text-sm text-gray-700 mb-4">
          <span className="bg-gray-100 px-2 py-1 rounded mr-2">
            Serves: {meal.servingSize}
          </span>
        </div>
      </div>

      <div className="bg-gray-50 p-3 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <button 
              onClick={decrementQuantity}
              className="text-gray-500 hover:text-blue-500 focus:outline-none transition-colors"
            >
              <MinusCircle size={20} />
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={e => setQuantity(Math.max(1, +e.target.value))}
              className="border rounded w-12 p-1 text-center mx-1 bg-white"
            />
            <button 
              onClick={incrementQuantity}
              className="text-gray-500 hover:text-blue-500 focus:outline-none transition-colors"
            >
              <PlusCircle size={20} />
            </button>
          </div>
          
          <button
            onClick={addToCart}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center transition-all duration-300 transform hover:scale-105"
          >
            <ShoppingCart size={16} className="mr-1" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealCard;