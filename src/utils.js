export function formatCurrency(num) {
  return '$' + num.toFixed(2).toLocaleString();
}

export const api = {
  findProducts: async function(size, sort) {
    const res = await fetch('http://localhost:4000/products');
    let products = await res.json();

    // filter by size
    if (size !== '') {
      products = products.filter(p => {
        return p.availableSizes.find(pSize => pSize.toLowerCase() === size.toLowerCase())
      })
    }

    // sort by price
    if (sort !== '') {
      products = products.sort((a, b) => {
        if (sort === 'lowest') {
          return a.price < b.price ? -1 : 1;
        } else {
          return a.price < b.price ? 1 : -1;
        }
      });
    } else {
      // sort by id (newest first)
      products = products.sort((a, b) => a.id < b.id ? 1 : -1);
    }

    return products;
  }
}