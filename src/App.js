import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Filter from './components/Filter';
import { api } from './utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      products: [],
      size: '',
      sort: ''
    };
  }

  componentDidMount() {
    // no need to declare async in parent function to call async function,
    // if await is not used in parent function.
    this.searchProducts();
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

  async searchProducts() {
    const products = await api.findProducts(this.state.size, this.state.sort);
    this.setState({ products });
  }

  render() {
    return (
      <div className="container">
        <h1>Ecommerce Shopping Cart</h1>
        <hr/>
        <div className="row">
          <div className="col-md-8">
            <Filter
              size={this.state.size}
              sort={this.state.sort}
              count={this.state.products.length}
              handleFilterChange={this.handleFilterChange}
            />
            <ProductList
              products={this.state.products}
              handleAddToCart={this.handleAddToCart}
            />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default App;
