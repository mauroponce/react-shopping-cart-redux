export const PRODUCTS_FETCHED = 'PRODUCTS_FETCHED';

export function fetchProducts(size = '', sort = '') {
  return dispatch => {
    fetch('http://localhost:4000/products')
      .then(res => res.json())
      .then(products => {
        let payload;

        // filtering and sorting should be implemented in the backend,
        // and just return products as the payload here.

        // filter by size
        if (size !== '') {
          payload = products.filter(p => {
            return p.availableSizes.find(pSize => pSize.toLowerCase() === size.toLowerCase());
          })
        } else {
          payload = products;
        }

        // sort by price
        if (sort !== '') {
          payload = payload.sort((a, b) => {
            if (sort === 'lowest') {
              return a.price < b.price ? -1 : 1;
            } else {
              return a.price < b.price ? 1 : -1;
            }
          });
        } else {
          // sort by id (newest first)
          payload = payload.sort((a, b) => a.id < b.id ? 1 : -1);
        }

        return dispatch({
          type: PRODUCTS_FETCHED,
          payload: payload
        })
      })
  }
}