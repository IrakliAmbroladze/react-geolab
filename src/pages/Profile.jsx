import { useState } from "react";
import { Square } from "../components/square";

export default function Profile() {
  const [count, setCount] = useState(0);
  return (
    <div className="w-full h-full grid place-content-center">
      count is: {count}
      <button className="border " onClick={() => setCount((prev) => prev + 1)}>
        გაზრდა
      </button>
      <Square />
    </div>
  );
}
