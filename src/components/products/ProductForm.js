import React, { Component } from 'react';
import classnames from 'classnames';

export default class ProductForm extends Component {
  state = {
    title: '',
    price: '',
    errors: {}
  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (this.state.errors[name]) {
      let errors = {...this.state.errors}; // clone it
      delete errors[name] // delete error for updated value
      this.setState({
        [name]: value,
        errors
      });
    } else {
      this.setState({ [name] : value });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let errors = {...this.state.errors}
    if (this.state.title === '') {
      errors.title = "Title can't be blank";
    }

    if (this.state.price === '') {
      errors.price = "Title can't be blank";
    }

    this.setState({ errors });

    // TODO: complete submit
  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={classnames('form-group', { 'has-error': !!errors.title })}>
          <label htmlFor="title" className='control-label'>Title</label>
          <input type="text" className="form-control"
            onChange={this.handleChange}
            id="title" name="title" />
        </div>
        <div className={classnames('form-group', { 'has-error': !!errors.price })}>
          <label htmlFor="price">Price</label>
          <input type="text" className="form-control"
            onChange={this.handleChange}
            id="price" name="price" />
        </div>
          <button type="submit"
            className="btn btn-default">Submit</button>
      </form>
    )
  }
}
