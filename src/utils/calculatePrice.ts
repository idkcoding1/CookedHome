import { OrderItem } from '../types/Order';

export function calculatePrice(items: OrderItem[]): number {
  return items.reduce((sum, { item, quantity }) => {
    // how many servings you need
    const needed = Math.ceil(quantity / item.servingSize);
    return sum + needed * item.price;
  }, 0);
}
