import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import OrderList from './components/OrderList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <ProductForm />
        <ProductList />
        <OrderList />
      </div>
    </div>
  );
}

export default App;
