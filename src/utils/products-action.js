export const increaseQty = ({ products, id }) => {
  console.log("increase qty function");
  const updatedProducts = products.map((product) => {
    if (product.id === id) {
      const newQty = product.quantity + 1;
      return { ...product, quantity: newQty };
    }
    return product;
  });
  return updatedProducts;
};
