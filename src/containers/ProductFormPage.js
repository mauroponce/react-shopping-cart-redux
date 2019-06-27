import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProductForm from '../components/products/ProductForm';

class ProductFormPage extends Component {
  state = {
    redirect: false
  }

  saveProduct = (product) => {
    if (product.id) {
      // TODO: call updateProduct action
    } else {
      debugger
      // TODO: call createProduct action
    }
  }

  render() {
    return (
      <div>
        {
          this.state.redirect ?
            <Redirect to='/products' /> :
            <ProductForm saveProduct={this.saveProduct}/>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const prodId = null; // Take prod id from router param

  if (prodId) {
    return {
      product: state.products.find(p => p.id === prodId)
    }
  } else {
    // it's a new product
    return {
      product: null
    }
  }

}

export default connect(
  mapStateToProps,
  {  } // TODO: add createProduct and updateProduct actions
)(ProductFormPage);
