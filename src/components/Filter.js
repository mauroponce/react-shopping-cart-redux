import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          {this.props.count} products found.
        </div>
        <div className="col-md-4">
          <label htmlFor="orderBy">
            Order By Price
            <select className="form-control" id="orderBy" name='sort'
              value={this.props.sort} onChange={this.props.handleFilterChange}
            >
              <option value="">Select</option>
              <option value="lowest">lowest to highest</option>
              <option value="highest">highest to lowest</option>
            </select>
          </label>
        </div>
        <div className="col-md-4"></div>
      </div>
    )
  }
}
