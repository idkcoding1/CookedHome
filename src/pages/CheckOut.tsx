// src/pages/CheckoutPage.tsx
import React from 'react';
import CheckoutSummary from '../components/CheckoutSummary';

const CheckoutPage: React.FC = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Checkout</h1>
    <CheckoutSummary />
  </div>
);

export default CheckoutPage;