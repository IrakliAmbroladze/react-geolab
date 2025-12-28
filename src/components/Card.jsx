export default function Card({ product }) {
  const { title, quantity, thumbnail } = product;
  return (
    <div className="w-80 flex flex-col items-start gap-1 hover:shadow-md">
      <div className="relative w-full">
        <img
          src={thumbnail}
          alt={`pic-${title}`}
          className="w-full h-52 object-cover relative"
        />
      </div>
      <h1 className="text-lg font-bold">{title}</h1>
      <div className="flex justify-between w-full items-center">
        <div className="text-xl font-bold">{quantity}</div>
        <button className="gap-x-1.5 p-2 px-4 bg-blue-500 rounded-md text-white text-xs font-bold cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
