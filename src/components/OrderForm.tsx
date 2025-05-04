import React, { useState, useEffect } from 'react';
import { useOrder } from '../hooks/useOrder';
import { Clock, AlertCircle, ChefHat, Truck, Timer, Check } from 'lucide-react';

// simple 5-hour check
const FIVE_HOURS = 5 * 60 * 60 * 1000;

const OrderForm: React.FC = () => {
  const { deliveryTime, setDeliveryTime } = useOrder();
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  // Format readable time for display
  const getReadableTime = () => {
    if (!deliveryTime) return '';
    
    const date = new Date(deliveryTime);
    return date.toLocaleString(undefined, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const validateTime = (time: string) => {
    if (!time) return false;
    
    const diff = new Date(time).getTime() - Date.now();
    if (diff < FIVE_HOURS) {
      setError('Delivery must be at least 5 hours from now.');
      setIsValid(false);
      return false;
    } else {
      setError('');
      setIsValid(true);
      return true;
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = e.target.value;
    setDeliveryTime(t);
    validateTime(t);
  };

  // Validate on component mount
  useEffect(() => {
    if (deliveryTime) {
      validateTime(deliveryTime);
    }
  }, []);

  return (
    <div className="my-8 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-600 to-teal-600 px-6 py-4">
        <h3 className="text-xl font-medium text-white">Schedule Your Delivery</h3>
      </div>
      
      <div className="md:flex">
        {/* Left Column - Promotional Content */}
        <div className="md:w-1/2 bg-gradient-to-br from-indigo-50 to-teal-50 p-6">
          <div className="mb-6">
            <div className="bg-white p-3 rounded-full inline-block shadow-md mb-4">
              <ChefHat size={28} className="text-indigo-600" />
            </div>
            <h4 className="text-lg font-medium text-indigo-800 mb-2">Fresh Preparation</h4>
            <p className="text-gray-600">
              Our chefs prepare your dishes fresh to order, using only the finest ingredients sourced locally.
            </p>
          </div>
          
          <div className="mb-6">
            <div className="bg-white p-3 rounded-full inline-block shadow-md mb-4">
              <Timer size={28} className="text-teal-600" />
            </div>
            <h4 className="text-lg font-medium text-teal-800 mb-2">Ready in 5 Hours</h4>
            <p className="text-gray-600">
              We need just 5 hours to prepare your gourmet meal with care and attention to every detail.
            </p>
          </div>
          
          <div>
            <div className="bg-white p-3 rounded-full inline-block shadow-md mb-4">
              <Truck size={28} className="text-indigo-600" />
            </div>
            <h4 className="text-lg font-medium text-indigo-800 mb-2">Premium Delivery</h4>
            <p className="text-gray-600">
              Your food arrives in temperature-controlled packaging to ensure restaurant-quality freshness.
            </p>
          </div>
        </div>
        
        {/* Right Column - Delivery Time Input */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <div className="mb-6">
            <label className="mb-3 font-medium text-gray-700 flex items-center">
              <Clock size={20} className="mr-2 text-teal-600" />
              Select Your Delivery Time
            </label>
            
            <div className="relative">
              <input
                type="datetime-local"
                value={deliveryTime}
                onChange={onChange}
                className={`border-2 ${
                  deliveryTime 
                    ? (isValid ? 'border-teal-500 focus:border-teal-600' : 'border-red-300 focus:border-red-500') 
                    : 'border-gray-300 focus:border-teal-500'
                } rounded-lg p-3 w-full bg-white shadow-sm focus:outline-none transition-colors duration-200`}
              />
            </div>
            
            {error ? (
              <div className="mt-3 flex items-center text-red-500 bg-red-50 px-4 py-3 rounded-md">
                <AlertCircle size={18} className="mr-2 flex-shrink-0" />
                <p className="text-sm">{error}</p>
              </div>
            ) : deliveryTime && isValid ? (
              <div className="mt-3 flex items-center text-green-700 bg-green-50 px-4 py-3 rounded-md">
                <Check size={18} className="mr-2 flex-shrink-0" />
                <p className="text-sm">Your order will be delivered on <span className="font-medium">{getReadableTime()}</span></p>
              </div>
            ) : null}
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h5 className="font-medium text-gray-800 mb-2">Delivery Guidelines:</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <div className="bg-teal-100 p-1 rounded-full mr-2 mt-0.5">
                  <Check size={14} className="text-teal-600" />
                </div>
                Delivery time must be at least 5 hours from now
              </li>
              <li className="flex items-start">
                <div className="bg-teal-100 p-1 rounded-full mr-2 mt-0.5">
                  <Check size={14} className="text-teal-600" />
                </div>
                Our delivery hours are 9:00 AM - 9:00 PM
              </li>
              <li className="flex items-start">
                <div className="bg-teal-100 p-1 rounded-full mr-2 mt-0.5">
                  <Check size={14} className="text-blue-600" />
                </div>
                Special instructions can be added at checkout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;