export default function Card({ product }) {
  const { title, price, description, image, badge } = product;
  return (
    <div className="max-w-80 flex flex-col items-start gap-1">
      <div className="relative w-full">
        <img
          src={image}
          alt={`pic-${title}`}
          className="w-full h-52 object-cover relative"
        />
        {!!badge && (
          <div className="absolute left-2 top-2 bg-green-500 text-white px-2 py-0.5 text-xs font-bold rounded-xl">
            {badge}
          </div>
        )}
      </div>
      <h1 className="text-lg font-bold">{title}</h1>
      <p>{description}</p>
      <div className="flex justify-between w-full items-center">
        <div className="text-xl font-bold">{price}</div>
        <button className="gap-x-1.5 p-2 px-4 bg-blue-500 rounded-md text-white text-xs font-bold cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
