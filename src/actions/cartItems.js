export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';

export function addProductToCart(product) {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product
  }
}

export function removeProductFromCart(product) {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: product
  }
}