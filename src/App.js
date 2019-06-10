import React from 'react';
import './App.css';
import ProductList from './components/ProductList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      products: [],
      filteredProducts: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:4000/products')
      .then(res => res.json())
      .then(data => this.setState(
        {
          products: data,
          filteredProducts: data
        }
      ));
  }

  handleAddToCart = (e, product) => {
    e.preventDefault();
    const cartItems = [...this.state.cartItems, product];
    this.setState({ cartItems });
  }

  render() {
    return (
      <div className="container">
        <h1>Ecommerce Shopping Cart</h1>
        <hr/>
        <div className="row">
          <div className="col-md-8">
            <ProductList
              products={this.state.filteredProducts}
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
