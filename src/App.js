import React from 'react';
import './App.css';
import ProductList from './containers/ProductsList';
import Filter from './containers/Filter';
import Cart from './components/Cart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: JSON.parse(localStorage.getItem("cartItems")) // previous to any render
    };
  }

  handleAddToCart = (_e, product) => {
    const cartItems = [...this.state.cartItems]; // make a copy
    const foundItemIndex = cartItems.findIndex(obj => obj.product.id === product.id);

    if (foundItemIndex > -1) { //item found
      cartItems[foundItemIndex].count++;
    } else {
      cartItems.push({ product: product, count: 1 })
    }
    this.updateCartItems(cartItems);
  }

  handleRemoveFromCart = (_e, product) => {
    const cartItems = this.state.cartItems.filter(cartItem => cartItem.product.id !== product.id);
    this.updateCartItems(cartItems);
  }

  // set state and update in localStorage
  updateCartItems(cartItems) {
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div className="container">
        <h1>React Shopping Cart</h1>
        <hr/>
        <div className="row">
          <div className="col-md-8">
            <Filter />
            <hr/>
            <ProductList
              handleAddToCart={this.handleAddToCart} // esto se va a redux
            />
          </div>
          <div className="col-md-4">
            <Cart cartItems={cartItems} handleRemoveFromCart={this.handleRemoveFromCart}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;