import React from 'react';
import ProductList from '../containers/ProductsList';
import Filter from '../containers/Filter';
import Cart from '../containers/Cart';

const Home = () => {
  return (
    <div className="row">
      <div className="col-md-8">
        <Filter />
        <hr />
        <ProductList />
      </div>
      <div className="col-md-4">
        <Cart />
      </div>
    </div>
  );
};

export default Home;