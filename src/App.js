import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Filter from './components/Filter';
import { api } from './utils';
import Basket from './components/Basket';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      size: '',
      sort: '',
      cartItems: []
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

  handleAddToCart = (e, product) => {
    e.preventDefault();
    const cartItems = [...this.state.cartItems, product];
    this.setState({ cartItems });
  }

  handleFilterChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name] : value
    }, this.searchProducts);
  }



  handleRemoveCartItem = (e, product) => {
    e.preventDefault();

  }

  render() {
    const { size, sort, products, cartItems } = this.state;
    return (
      <div className="container">
        <h1>Ecommerce Shopping Cart</h1>
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
            <Basket cartItems={cartItems} handleRemoveCartItem={this.handleRemoveCartItem}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
