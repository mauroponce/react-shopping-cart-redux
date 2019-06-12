import React from 'react'
import { connect } from 'react-redux';
import { formatCurrency } from '../utils';
import { removeProductFromCart } from '../actions/cartItems';

class Cart extends React.Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div className="alert alert-info">
        {
          cartItems.length === 0 ?
            "Your cart is empty."
            :
            <div>You have {cartItems.length} products in the cart.</div>
        }

        {
          cartItems.length > 0 &&
          <div className="cart-items">
            <ul>
              {cartItems.map(item => (
                <li key={item.product.id} className="row">
                  <div className="col-md-9" style={{ paddingRight: 0 }}>
                    <b>{item.product.title}</b> X {item.count}
                  </div>
                  <div className="col-md-3" style={{ paddingLeft: 0 }}>
                    <button className="btn btn-danger btn-sm remove-btn"
                      onClick={() => this.props.removeProductFromCart(item.product)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            Total:
            <b style={{ paddingLeft: '10px' }}>
              {
                formatCurrency(cartItems.reduce((acc, item) => {
                  return acc + item.count * item.product.price;
                }, 0))
              }
            </b>
          </div>
        }
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    cartItems: state.cartItems
  }
}

export default connect(
  mapStateToProps,
  { removeProductFromCart }
)(Cart);