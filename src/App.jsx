import { useRef, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import {
  decreaseQty,
  increaseQty,
  deleteProduct,
} from "./utils/products-action";
import { products as initialProducts } from "./constants/products";

function App() {
  console.log("render App component");
  const searchRef = useRef();
  const [products, setProducts] = useState(initialProducts);

  const handleSearch = () => {
    const value = searchRef.current.value;
    console.log("search value is: ", value);
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
          placeholder="search..."
        />
        <button
          className="cursor-pointer border rounded-md px-2 py-1.5 active:scale-95 transition-transform duration-150 ease-in-out"
          onClick={handleSearch}
        >
          <img src="search.svg" alt="search" className="w-5 h-5" />
        </button>
      </div>
      <div className="grid w-fit grid-cols-1 md:grid-cols-2 gap-4 py-10 mx-auto">
        {products.map((p) => (
          <Card key={p.id} product={p} handleBtnClick={handleBtnClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
