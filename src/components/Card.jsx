import { Button } from "./Button";

export default function Card({ product, handleBtnClick }) {
  const { id, name, /*quantity,*/ description } = product;

  return (
    <div className="w-80 flex flex-col items-start gap-2 hover:shadow-md hover:scale-102 p-2 rounded-lg justify-between bg-white transition-all duration-300 ease-in-out">
      {/* <div className="relative w-full">
        <img
          src={thumbnail}
          alt={`pic-${name}`}
          className="w-full h-52 object-cover relative"
        />
      </div>*/}
      <h1 className="text-md font-bold">{name}</h1>
      <h2 className="text-sm ">{description}</h2>
      <div className="flex justify-between w-full items-center">
        {/*  <Button
          textContent="-"
          bgColor="skyblue"
          handleClick={() => handleBtnClick({ id, status: "decrease" })}
        />
        <div className="text-xl font-bold">{quantity}</div>
        <Button
          textContent="+"
          bgColor="skyblue"
          handleClick={() => handleBtnClick({ id, status: "increase" })}
        />*/}
        <Button
          textContent="delete"
          bgColor="tomato"
          handleClick={() => handleBtnClick({ id, status: "delete" })}
        />
      </div>
    </div>
  );
}
