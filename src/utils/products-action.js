export const increaseQty = ({ products, id }) => {
  const updatedProducts = products.map((product) => {
    if (product.id === id) {
      const newQty = product.quantity + 1;
      return { ...product, quantity: newQty };
    }
    return product;
  });
  return updatedProducts;
};

export const decreaseQty = ({ products, id }) => {
  const updatedProducts = products.map((product) => {
    if (product.id === id) {
      const newQty = product.quantity - 1;
      if (newQty < 0) return product;
      return { ...product, quantity: newQty };
    }
    return product;
  });
  return updatedProducts;
};

export const deleteProduct = ({ products, id }) => {
  const updatedProducts = products.filter((product) => product.id !== id);
  return updatedProducts;
};
