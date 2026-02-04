import { useState } from "react";
import { Square } from "../components/square";
import { Button } from "../components/Button";

export default function Profile() {
  const [count, setCount] = useState(0);
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="flex gap-4 items-center">
        count is: {count}
        <Button
          textContent="increase"
          handleClick={() => setCount((prev) => prev + 1)}
        >
          გაზრდა
        </Button>
      </div>
      <Square />
    </div>
  );
}
