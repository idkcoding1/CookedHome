
const API_BASE_URL = 'http://localhost:1000/api';

export interface Meal {
    _id: string;
    name: string;
    description: string;
    price: number;
    servingSize: number;
    image: string;
    category: string;
    dayOfWeek: string;
}

export const getMeals = async (): Promise<Meal[]> => {
    try {
        console.log('Fetching all meals...');
        const response = await fetch(`${API_BASE_URL}/meals`);
        console.log('Response status:', response.status);
        if (!response.ok) {
            throw new Error(`Failed to fetch meals: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Fetched meals:', data);
        return data;
    } catch (error) {
        console.error('Error fetching meals:', error);
        return [];
    }
};

export const getTodaysMeals = async (): Promise<Meal[]> => {
    try {
        console.log('Fetching today\'s meals...');
        const response = await fetch(`${API_BASE_URL}/meals/today`);
        console.log('Response status:', response.status);
        if (!response.ok) {
            throw new Error(`Failed to fetch today's meals: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Fetched today\'s meals:', data);
        return data;
    } catch (error) {
        console.error('Error fetching today\'s meals:', error);
        throw error; // Let the component handle the error
    }
};

export const getMealsByCategory = async (category: string): Promise<Meal[]> => {
    try {
        const response = await fetch(`${API_BASE_URL}/meals/category/${category}`);
        if (!response.ok) {
            throw new Error('Failed to fetch meals by category');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching meals by category:', error);
        return [];
    }
};