import { PRODUCTS_FETCHED } from '../actions/products';

export default function products(state = [], action = {}) {
  switch (action.type) {
    case PRODUCTS_FETCHED:
      return action.payload;
    default:
      return state;
  }
}