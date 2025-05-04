import React, { createContext, useState, ReactNode } from 'react';
import { OrderItem } from '../types/Order';

interface OrderContextType {
  items: OrderItem[];
  deliveryTime: string;
  address: string;
  addItem: (item: OrderItem) => void;
  removeItem: (id: string) => void;
  setDeliveryTime: (time: string) => void;
  setAddress: (addr: string) => void;
  clearOrder: () => void;
}

export const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<OrderItem[]>([]);
  const [deliveryTime, setDeliveryTime] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const addItem = (orderItem: OrderItem) => {
    setItems((prev) => [
      ...prev.filter(i => i.item.id !== orderItem.item.id),
      orderItem
    ]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter(i => i.item.id !== id));
  };

  const clearOrder = () => {
    setItems([]);
    setDeliveryTime('');
    setAddress('');
  };

  return (
    <OrderContext.Provider value={{ items, deliveryTime, address, addItem, removeItem, setDeliveryTime, setAddress, clearOrder }}>
      {children}
    </OrderContext.Provider>
  );
};