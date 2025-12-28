import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
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
  console.log("Products are: ", products);
  return (
    <div className="grid w-fit grid-cols-1 md:grid-cols-2 gap-2 py-10 mx-auto">
      {products.map((p) => {
        return <Card key={p.id} product={p} />;
      })}
    </div>
  );
}

export default App;
