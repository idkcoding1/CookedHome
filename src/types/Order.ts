import { Meal } from "../data/meal";

export interface OrderItem {
  item: Meal;
  quantity: number; // number of persons
}

export interface Order {
  items: OrderItem[];
  deliveryTime: string; // ISO string
  address: string;
}