import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Filter from './components/Filter';

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
    }, this.searchProducts)
  }

  searchProducts() {
    // call api passing sort, size and search in the server.
    const { sort } = this.state;
    fetch('http://localhost:4000/products')
      .then(res => res.json())
      .then(data => {
        let products;
        if (this.state.sort !== '') {
          products = data.sort((a,b) => {
            if (sort === 'lowest') {
              return a.price < b.price ? -1 : 1;
            } else {
              return a.price < b.price ? 1 : -1;
            }
          });
        } else {
          // sort by id
          products = data.sort((a,b) => a.id < b.id ? -1 : 1);
        }
        this.setState({ products })
      });
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
