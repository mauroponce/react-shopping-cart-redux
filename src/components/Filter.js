import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    const { count, sort, size, handleFilterChange } = this.props;
    return (
      <div className="row">
        <div className="col-md-4">
          {count} products found.
        </div>
        <div className="col-md-4">
          <label htmlFor="orderBy">
            Order By Price
            <select className="form-control" id="orderBy" name='sort'
              value={sort} onChange={handleFilterChange}
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
              value={size} onChange={handleFilterChange}
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
      </div>
    )
  }
}
