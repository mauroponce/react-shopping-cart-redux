import React, { Component, Fragment as F} from 'react'
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/products';
import { formatCurrency } from '../utils';

class ProductsPage extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const items = this.props.products.map(product => (
      <div className='col-md-3' key={product.id}>
        <div className="thumbnail text-center">
          <img src={`/products/${product.id}.png`} alt="" />
          <p>{product.title} - <b>{formatCurrency(product.price)}</b></p>
          <div className='row'>
            <button className="btn btn-primary"
              onClick={() => this.props.addProductToCart(product)}>
              Edit
            </button>
            <button className="btn btn-danger" style={{ marginLeft: '10px' }}
              onClick={() => this.props.addProductToCart(product)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    ));
    return (
      <F>
        <div className="row" style={{ marginBottom: '10px' }}>
          <div className="col-md-12">
            <button className='btn btn-success' onClick={() => {
              this.props.history.push('/products/new');
            }}>
              Add New Product
            </button>
          </div>
        </div>
        <div className="row">{items}</div>
      </F>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
};



export default connect(
  mapStateToProps,
  { fetchProducts }
)(ProductsPage);
