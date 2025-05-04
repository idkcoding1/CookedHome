import { ShoppingCart } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="bg-white p-4 shadow">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold flex items-center">
        <img 
          src="/assets/images/logo.png" 
          alt="HomeCook Logo"
          className="w-24 h-auto" // Adjust width here (e.g., w-16 or w-24)
        />
      </Link>
      <Link to="/checkout" className="text-blue-600">
        <ShoppingCart />
      </Link>
    </div>
  </nav>
);

export default Navbar;
