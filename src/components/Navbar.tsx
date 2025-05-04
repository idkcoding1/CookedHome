import { ShoppingCart } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="bg-white p-4 shadow">
    <div className="container mx-auto flex justify-between">
      <Link to="/" className="text-xl font-bold">HomeCook</Link>
      <Link to="/checkout" className="text-blue-600">
      <ShoppingCart/>
      </Link>
    </div>
  </nav>
);

export default Navbar;