import React from 'react';
import './App.css';
import ProductList from './containers/ProductsList';
import Filter from './containers/Filter';
import Cart from './containers/Cart';

export default function App() {
  return (
    <div className="container">
      <h1>React Shopping Cart</h1>
      <hr/>
      <div className="row">
        <div className="col-md-8">
          <Filter />
          <hr/>
          <ProductList />
        </div>
        <div className="col-md-4">
          <Cart />
        </div>
      </div>
    </div>
  );
}