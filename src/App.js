import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProductsPage from './containers/ProductsPage';
import ProductFormPage from './containers/ProductFormPage';

export default function App() {
  return (
    <div className="container">
      <h1>React Shopping Cart</h1>
      <hr/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={ProductsPage} />
        <Route exact path='/products/new' component={ProductFormPage} />
      </Switch>
    </div>
  );
}