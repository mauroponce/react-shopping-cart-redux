import React from 'react'
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/products';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
      sort: '',
    };
  }

  handleFilterChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    }, () => this.props.fetchProducts(this.state.size, this.state.sort));
  }

  render() {
    const { sort, size } = this.state;
    return (
      <div className="row">
        <div className="col-md-4">
          <label htmlFor="orderBy">
            Order By Price
            <select className="form-control" id="orderBy" name='sort'
              value={sort} onChange={this.handleFilterChange}
            >
              <option value="">Newest first</option>
              <option value="lowest">lowest to highest</option>
              <option value="highest">highest to lowest</option>
            </select>
          </label>
        </div>
        <div className="col-md-4">
          <label htmlFor="selectSize">
            Select Size
            <select className="form-control" id="selectSize" name='size'
              value={size} onChange={this.handleFilterChange}
            >
              <option value="">All Sizes</option>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </label>
        </div>
        <div className="col-md-4">
          <b>{this.props.productsCount} products found.</b>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    productsCount: state.products.length
  }
}

export default connect(
  mapStateToProps,
  { fetchProducts }
)(Filter);

