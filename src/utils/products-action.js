export const increaseQty = ({ products, id }) =>
  products.map((product) =>
    product.id === id
      ? { ...product, quantity: product.quantity + 1 }
      : product,
  );

export const decreaseQty = ({ products, id }) =>
  products.map((product) =>
    product.quantity === 0
      ? product
      : product.id === id
        ? { ...product, quantity: product.quantity - 1 }
        : product,
  );

export const deleteProduct = ({ products, id }) =>
  products.filter((product) => product.id !== id);
