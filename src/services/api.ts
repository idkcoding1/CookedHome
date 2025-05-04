import { FoodItem } from '../types/FoodItem';
import { Order } from '../types/Order';

const API_BASE = 'https://api.homecook.com'; // placeholder

export async function fetchMenu(): Promise<FoodItem[]> {
  const res = await fetch(`${API_BASE}/menu/today`);
  return res.json();
}

export async function submitOrder(order: Order): Promise<{ success: boolean }> {
  const res = await fetch(`${API_BASE}/orders`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(order),
  });
  return res.json();
}