import React, { useState } from 'react';
import './App.css';
import ProductList from './componentss/productlist';
import Cart from './componentss/cart';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Shirt', price: 20 },
    { id: 2, name: 'Pants', price: 30 },
    { id: 3, name: 'Shoes', price: 50 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    const newCart = cart.filter(item => item.id !== productToRemove.id);
    setCart(newCart);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple E-commerce Store</h1>
      </header>
      <main className="App-content">
        <ProductList products={products} onAddToCart={addToCart} />
        <Cart cart={cart} onRemoveFromCart={removeFromCart} />
      </main>
    </div>
  );
};

export default App;
