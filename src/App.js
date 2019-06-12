import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import ProductList from './components/ProductList';
import Filter from './components/Filter';
import { api } from './utils';
import Cart from './components/Cart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      size: '',
      sort: '',
      cartItems: JSON.parse(localStorage.getItem("cartItems")) // previous to any render
    };
  }

  componentDidMount() {
    // no need to declare async in parent function to call async function,
    // if await is not used in parent function.
    this.searchProducts();
  }

  async searchProducts() {
    const products = await api.findProducts(this.state.size, this.state.sort);
    this.setState({ products });
  }

  handleFilterChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name] : value
    }, this.searchProducts);
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
    const { size, sort, products, cartItems } = this.state;
    return (
      <div className="container">
        <h1>React Shopping Cart</h1>
        <hr/>
        <div className="row">
          <div className="col-md-8">
            <Filter
              size={size}
              sort={sort}
              count={products.length}
              handleFilterChange={this.handleFilterChange}
            />
            <hr/>
            <ProductList
              products={products}
              handleAddToCart={this.handleAddToCart}
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
function mapStateToProps(state) {
  return {
    // Add state here
  }
}

export default connect(
  mapStateToProps,
  null // Add actions here
)(App);