import React, { useState } from 'react';
import { FoodItem } from '../types/FoodItem';
import { useOrder } from '../hooks/useOrder';

interface Props { item: FoodItem; }

const FoodCard: React.FC<Props> = ({ item }) => {
  const { addItem } = useOrder();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="border rounded p-4 flex flex-col items-center">
      <img src={item.imageUrl} alt={item.name} className="w-32 h-32 object-cover mb-2" />
      <h3 className="font-semibold">{item.name}</h3>
      <p>Serves: {item.serves}</p>
      <p>Price: ${item.price.toFixed(2)}</p>
      <div className="mt-2 flex items-center">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
          className="border rounded w-16 p-1 mr-2"
        />
        <button onClick={() => addItem({ item, quantity })} className="bg-blue-500 text-white px-3 py-1 rounded">
          Add
        </button>
      </div>
    </div>
  );
};

export default FoodCard;