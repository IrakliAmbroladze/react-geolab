import { useReducer, useState } from "react";
import { Square } from "../components/square";
import { Button } from "../components/Button";

const reducer = (state, action) => {
  switch (action.type) {
    case "blue":
      return { type: "blue" };

    case "green":
      return { type: "green" };
    case "red":
      return { type: "red" };
    default:
      return state;
  }
};

export default function Profile() {
  const [count, setCount] = useState(0);
  const [color, dispatch] = useReducer(reducer, { type: "gray" });
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-4">
      <div className="flex gap-4 items-center">
        count is: {count}
        <Button
          textContent="increase"
          handleClick={() => setCount((prev) => prev + 1)}
        >
          გაზრდა
        </Button>
      </div>
      <Square color={color.type} dispatch={dispatch} />
    </div>
  );
}
