import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/products';
import { addProductToCart } from '../actions/cartItems';
import { formatCurrency } from '../utils';

class ProductList extends React.Component {
  componentDidMount() {
    this.props.fetchProducts(); //default size and sort
  }

  render() {
    const items = this.props.products.map(product => (
      <div className='col-md-4' key={product.id}>
        <div className="thumbnail text-center">
          <img src={`products/${product.id}.png`} alt="" />
          <p>{product.title}</p>
          <div>
            <b style={{ paddingRight: '10px' }}>{formatCurrency(product.price)}</b>
            <button className="btn btn-primary"
              onClick={() => this.props.addProductToCart(product)}>
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
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

export default connect(
  mapStateToProps,
  { fetchProducts, addProductToCart }
)(ProductList);