import { useState, useEffect } from 'react';
import { Meal, getMeals } from '../services/api';

export const useMenu = () => {
    const [meals, setMeals] = useState<Meal[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                console.log('Starting to fetch meals...');
                setLoading(true);
                const data = await getMeals(); // Using getMeals instead of getTodaysMeals to get all meals
                console.log('Meals fetched:', data);
                setMeals(data);
            } catch (err) {
                console.error('Error in useMenu:', err);
                setError('Failed to fetch meals');
            } finally {
                setLoading(false);
            }
        };

        fetchMeals();
    }, []);

    return { meals, loading, error };
};

export default useMenu;
