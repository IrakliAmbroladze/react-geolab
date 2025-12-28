import { Button } from "./Button";

export default function Card({ product }) {
  const { title, quantity, thumbnail } = product;
  return (
    <div className="w-80 flex flex-col items-start gap-1 hover:shadow-md hover:scale-102 p-2 rounded-lg justify-between bg-white transition-all duration-300 ease-in-out">
      <div className="relative w-full">
        <img
          src={thumbnail}
          alt={`pic-${title}`}
          className="w-full h-52 object-cover relative"
        />
      </div>
      <h1 className="text-lg font-bold">{title}</h1>
      <div className="flex justify-between w-full items-center">
        <Button textContent="-" bgColor="skyblue" />
        <div className="text-xl font-bold">{quantity}</div>
        <Button textContent="+" bgColor="skyblue" />
        <Button textContent="delete" bgColor="tomato" />
      </div>
    </div>
  );
}
