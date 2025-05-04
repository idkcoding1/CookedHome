// src/context/CartContext.tsx
import React, {
    createContext,
    useContext,
    useState,
    useMemo,
    ReactNode,
  } from 'react';
  import { Meal } from '../data/meal';
  
  export interface CartItem {
    meal: Meal;
    quantity: number; // number of persons
  }
  
  interface CartContextType {
    cartItems: CartItem[];
    totalItems: number;
    subtotal: number;
    isDeliveryPossible: boolean;
    addToCart: (meal: Meal, quantity: number) => void;
    removeFromCart: (mealId: string) => void;
    clearCart: () => void;
  }
  
  const CartContext = createContext<CartContextType | undefined>(undefined);
  
  export const CartProvider: React.FC<{ children: ReactNode }> = ({
    children,
  }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
    // Add or replace an item in the cart
    const addToCart = (meal: Meal, quantity: number) => {
      setCartItems((prev) => {
        const others = prev.filter((ci) => ci.meal.id !== meal.id);
        return [...others, { meal, quantity }];
      });
    };
  
    const removeFromCart = (mealId: string) => {
      setCartItems((prev) => prev.filter((ci) => ci.meal.id !== mealId));
    };
  
    const clearCart = () => setCartItems([]);
  
    // Derived values
    const { totalItems, subtotal } = useMemo(() => {
      let items = 0;
      let sub = 0;
      cartItems.forEach(({ meal, quantity }) => {
        items += quantity;
        const servings = Math.ceil(quantity / meal.servingSize);
        sub += servings * meal.price;
      });
      return { totalItems: items, subtotal: sub };
    }, [cartItems]);
  
    // Check whether ordering now can still meet the 5-hour advance requirement
    const isDeliveryPossible = useMemo(() => {
      const now = new Date();
      // allow orders only if now + 5h is before midnight
      const cutoff = new Date();
      cutoff.setHours(24, 0, 0, 0);
      return now.getTime() + 5 * 60 * 60 * 1000 < cutoff.getTime();
    }, []);
  
    return (
      <CartContext.Provider
        value={{
          cartItems,
          totalItems,
          subtotal,
          isDeliveryPossible,
          addToCart,
          removeFromCart,
          clearCart,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
  
  // custom hook
  export const useCart = (): CartContextType => {
    const ctx = useContext(CartContext);
    if (!ctx) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return ctx;
  };
  