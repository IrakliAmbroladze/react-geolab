import { useRef, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import {
  decreaseQty,
  increaseQty,
  deleteProduct,
} from "./utils/products-action";

function App() {
  const myRef = useRef();
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "High-End Laptop",
      price: 3200,
      category: "Electronics",
      inStock: true,
      rating: 4.8,
      description: "Powerful workstation for developers and creators.",
    },
    {
      id: 2,
      name: "Ergonomic Mouse",
      price: 85,
      category: "Accessories",
      inStock: true,
      rating: 4.5,
      description: "Wireless vertical mouse designed to reduce wrist strain.",
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      price: 150,
      category: "Accessories",
      inStock: false,
      rating: 4.9,
      description: "RGB backlit keyboard with tactile blue switches.",
    },
    {
      id: 4,
      name: "Ultra-Wide Monitor",
      price: 600,
      category: "Electronics",
      inStock: true,
      rating: 4.7,
      description: "34-inch curved display for immersive multitasking.",
    },
    {
      id: 5,
      name: "Noise-Cancelling Headphones",
      price: 250,
      category: "Audio",
      inStock: true,
      rating: 4.6,
      description: "Over-ear headphones with active noise cancellation.",
    },
  ]);

  const handleSearch = () => {
    console.log("search");
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
          ref={myRef}
          placeholder="search..."
        />
        <button
          className="cursor-pointer border rounded-md px-2 py-1 active:scale-95 transition-transform duration-150 ease-in-out"
          onClick={handleSearch}
        >
          Search
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
