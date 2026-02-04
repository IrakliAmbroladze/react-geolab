import React from "react";
import { Button } from "./Button";

export const Square = React.memo(({ color, dispatch }) => {
  console.log("render Square component");
  return (
    <div className="flex flex-col gap-2">
      <div
        className="w-52 h-52"
        style={{
          backgroundColor: color,
        }}
      ></div>
      <div className="flex gap-2.5">
        <Button
          textContent="Red"
          bgColor="red"
          handleClick={() => dispatch({ type: "red" })}
        />
        <Button
          textContent="Green"
          bgColor="green"
          handleClick={() => dispatch({ type: "green" })}
        />
        <Button
          textContent="Blue"
          bgColor="blue"
          handleClick={() => dispatch({ type: "blue" })}
        />
      </div>
    </div>
  );
});
