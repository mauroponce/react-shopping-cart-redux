import React, { Component } from 'react';
import classnames from 'classnames';

export default class ProductForm extends Component {
  state = {
    title: '',
    price: '',
    imageUrl: '',
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
      errors.price = "Price can't be blank";
    }

    if (this.state.imageUrl === '') {
      errors.imageUrl = "Image URL can't be blank";
    }

    this.setState({ errors });

    const isValid = Object.keys(errors).length === 0;
    if (isValid) {
      const product = {
        title: this.state.title,
        price: this.state.price,
      }
      // TODO: set loading state
      this.props.saveProduct(product);
    }
  }

  renderFormGroup = (field, label) => {
    return (
      <div className={classnames('form-group', { 'has-error': !!this.state.errors[field] })}>
        <label htmlFor={field}  className='control-label'>{label}</label>
        <input type="text" className="form-control"
          onChange={this.handleChange}
          name={field} id={field} />
        <span class="help-block">{this.state.errors[field]}</span>
      </div>
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderFormGroup('title', 'Title')}
        {this.renderFormGroup('price', 'Price')}
        {this.renderFormGroup('imageUrl', 'Image URL') }
        <button type="submit"
          className="btn btn-default">Submit</button>
      </form>
    )
  }
}
