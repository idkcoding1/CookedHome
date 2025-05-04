// src/components/CheckoutSummary.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';      // ← v6
import { useOrder } from '../hooks/useOrder';
import { calculatePrice } from '../utils/calculatePrice';
import { OrderItem } from '../types/Order';

const FIVE_HOURS_MS = 5 * 60 * 60 * 1000;

const CheckoutSummary: React.FC = () => {
  const { items, deliveryTime, address, setAddress, clearOrder } = useOrder();
  const navigate = useNavigate();                    // ← v6
  const total = calculatePrice(items);

  const canSubmit =
    items.length > 0 &&
    deliveryTime &&
    new Date(deliveryTime).getTime() - Date.now() >= FIVE_HOURS_MS &&
    address.trim().length > 0;

  const onPlace = () => {
    // (optional) await submitOrder(...)
    clearOrder();
    navigate('/receipt', {
      state: { items, deliveryTime, address } as {
        items: OrderItem[];
        deliveryTime: string;
        address: string;
      },
    });
  };

  return (
    <div className="p-6 border rounded space-y-6">
      <h2 className="text-xl font-semibold">Order Summary</h2>
      <ul className="list-disc pl-5 space-y-1">
        {items.map(({ item, quantity }) => {
          const servingsNeeded = Math.ceil(quantity / item.servingSize);
          return (
            <li key={item.id}>
              <strong>{item.name}</strong> × {quantity} persons{' '}
              (servings: {servingsNeeded}) = $
              {(servingsNeeded * item.price).toFixed(2)}
            </li>
          );
        })}
      </ul>
      <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>

      <div>
        <label className="block mb-1 font-medium">Delivery Address</label>
        <textarea
          rows={3}
          value={address}
          onChange={e => setAddress(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <button
        onClick={onPlace}
        disabled={!canSubmit}
        className={`w-full py-2 font-medium text-white rounded ${
          canSubmit
            ? 'bg-green-500 hover:bg-green-600'
            : 'bg-gray-300 cursor-not-allowed'
        }`}
      >
        Place Order
      </button>
    </div>
  );
};

export default CheckoutSummary;
