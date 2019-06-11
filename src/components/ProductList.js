import React from 'react';
import { formatCurrency } from '../utils';

export default function ProductList(props) {
  const items = props.products.map(product => (
    <div className='col-md-4' key={product.id}>
      <div className="thumbnail text-center">
        <img src={`products/${product.sku}.png`} alt=""/>
        <p>{product.title}</p>
        <div>
          <b style={{ paddingRight: '10px' }}>{formatCurrency(product.price)}</b>
          <button className="btn btn-primary"
            onClick={e => props.handleAddToCart(e, product)}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="row">{items}</div>
  );
}