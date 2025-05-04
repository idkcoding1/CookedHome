import React from 'react';
import FoodCard from './FoodCard';
import { useMenu } from '../hooks/useMenu';

const MenuList: React.FC = () => {
  const { menu, loading } = useMenu();
  if (loading) return <p>Loading menu...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {menu.map(item => <FoodCard key={item.id} item={item} />)}
    </div>
  );
};

export default MenuList;