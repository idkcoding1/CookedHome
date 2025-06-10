import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { calculatePrice } from '../utils/calculatePrice';
import { OrderItem } from '../types/Order';
import { Home, Clock, MapPin, CheckCircle, ShoppingBag } from 'lucide-react';

interface ReceiptState {
  items: OrderItem[];
  deliveryTime: string;
  address: string;
}

const ReceiptPage: React.FC = () => {
  const location = useLocation();
  const { items, deliveryTime, address } =
    (location.state as ReceiptState) || {
      items: [],
      deliveryTime: '',
      address: '',
    };
  const total = calculatePrice(items);
  
  // Format date for better display
  const formattedDeliveryTime = deliveryTime 
    ? new Date(deliveryTime).toLocaleString(undefined, {
        weekday: 'short',
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    : '—';

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
       
        <div className="bg-gradient-to-r from-teal-600 to-indigo-600 rounded-lg shadow-lg mb-8 p-6 flex items-center">
          <div className="bg-white p-3 rounded-full mr-4">
            <CheckCircle size={32} className="text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Order Confirmed!</h1>
            <p className="text-purple-100">Thank you for your order. Your delicious meal is on its way!</p>
          </div>
        </div>
        
         <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
          <div className="bg-indigo-500 px-6 py-4 flex items-center">
            <ShoppingBag size={22} className="text-indigo-100 mr-2" />
            <h2 className="text-xl font-semibold text-white">Order Details</h2>
          </div>
          
          <div className="p-6">
            {items.length > 0 ? (
              <div className="space-y-4">
                {items.map(({ item, quantity }) => {
                  const servings = Math.ceil(quantity / item.servingSize);
                  return (
                    <div key={item.id} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <div>
                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-500">
                          {quantity} persons ({servings} servings)
                        </p>
                      </div>
                      <span className="font-semibold text-indigo-700">
                        ${(servings * item.price).toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-500 italic">No items in your order</p>
            )}
            
            {/* Total */}
            <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
              <span className="text-lg font-medium text-gray-700">Total</span>
              <span className="text-2xl font-bold text-indigo-700">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        {/* Delivery Information */}
        <div className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
          <div className="bg-purple-500 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">Delivery Information</h2>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="flex items-start">
              <Clock size={20} className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm text-black font-medium">Delivery Time</p>
                <p className="text-gray-800">{formattedDeliveryTime}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin size={20} className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm text-black font-medium">Delivery Address</p>
                <p className="text-gray-800">{address || '—'}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 font-medium"
        >
          <Home size={18} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ReceiptPage;