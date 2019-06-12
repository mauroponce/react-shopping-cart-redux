import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART
} from '../actions/cartItems';
import { loadFromLocalStorage } from '../utils';

const initialState = loadFromLocalStorage("cartItems");

export default function cartItems(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const foundItemIndex = state.findIndex(obj => obj.product.id === action.payload.id);

      if (foundItemIndex > -1) { //item found
        return state.map(item => {
          if (item.product.id === action.payload.id) { // update counter in found item
            return { product: action.payload, count: item.count + 1 }
          } else {
            return item;
          }
        })
      } else {
        // append at the end
        return [...state, { product: action.payload, count: 1 }];
      }

    case REMOVE_PRODUCT_FROM_CART:
      return state.filter(item => item.product.id !== action.payload.id);
    default:
      return state;
  }
}