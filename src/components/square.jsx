import { Button } from "./Button";

export const Square = () => {
  console.log("render Square component");
  return (
    <div>
      <div>square</div>
      <div className="flex gap-2.5">
        <Button textContent="Red" bgColor="red" />
        <Button textContent="Green" bgColor="green" />
        <Button textContent="Blue" bgColor="blue" />
      </div>
    </div>
  );
};
