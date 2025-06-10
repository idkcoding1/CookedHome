import React from 'react';

import { Clock } from 'lucide-react';
import MealCard from '../components/MealCard';
import OrderForm from '../components/OrderForm';
import { useMenu } from '../hooks/useMenu';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const { meals, loading, error } = useMenu();
  
  if (loading) return <p className="p-4">Loading…</p>;

  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="container mx-auto flex-1 p-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">EAT DRINK & MERRY MAKING</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delicious, fresh meals prepared with love for Hostelites.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm">
            <Clock className="h-4 w-4" />
            <span>
              Earliest delivery today (Enter Delivery Time at the end of the page)
            </span>
          </div>
        </div>  
        
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {meals && meals.map((meal) => (
            <MealCard 
              key={meal._id} 
              meal={{
                id: meal._id,
                name: meal.name,
                description: meal.description,
                price: meal.price,
                servingSize: meal.servingSize,
                image: meal.image,
                category: meal.category
              }} 
            />
          ))}
        </div>
        
        <OrderForm />
        <Footer/>
      </main>
    </div>
  );
};

export default HomePage;