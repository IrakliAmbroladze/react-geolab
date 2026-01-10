import { useEffect, useRef, useState } from "react";
import {
  decreaseQty,
  increaseQty,
  deleteProduct,
} from "../utils/products-action";
import { products as initialProducts } from "../constants/products";
import Card from "../components/Card.jsx";

export default function Home() {
  const searchRef = useRef();
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = () => {
    const value = searchRef.current.value.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value),
    );
    setFilteredProducts(filtered);
    searchRef.current.value = "";
  };

  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/carts/5");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log("error is ", error);
      }
    };
    fetchData();
  }, []);
*/
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);
  const handleBtnClick = ({ id, status }) => {
    switch (status) {
      case "increase":
        setProducts(increaseQty({ products, id }));
        break;
      case "decrease":
        setProducts(decreaseQty({ products, id }));
        break;
      case "delete":
        setProducts(deleteProduct({ products, id }));
    }
  };
  return (
    <div className="w-full min-h-lvh bg-stone-300 py-10">
      <div className="flex justify-center items-center gap-2">
        <input
          type="text"
          className="border border-black rounded-md px-2 py-1"
          ref={searchRef}
          placeholder="search title..."
        />
        <button
          className="cursor-pointer border rounded-md px-2 py-1.5 active:scale-95 transition-transform duration-150 ease-in-out"
          onClick={handleSearch}
        >
          <img src="search.svg" alt="search" className="w-5 h-5" />
        </button>
      </div>
      <div className="grid w-fit grid-cols-1 md:grid-cols-2 gap-4 py-10 mx-auto">
        {filteredProducts.map((p) => (
          <Card key={p.id} product={p} handleBtnClick={handleBtnClick} />
        ))}
      </div>
    </div>
  );
}
