import { useState, useEffect } from 'react';
import { Meal, getTodaysMeals } from '../data/meal';

export function useMenu() {
  const [menu, setMenu] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMenu(getTodaysMeals());
    setLoading(false);
  }, []);

  return { menu, loading };
}
