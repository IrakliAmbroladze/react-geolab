export default function Card({ product }) {
  const { title, price, description, image, badge } = product;
  return (
    <div className="max-w-80 flex flex-col items-start">
      <img
        src={image}
        alt={`pic-${title}`}
        className="w-full h-52 object-cover"
      />
      <h1 className="text-lg font-bold">{title}</h1>
      <p>{description}</p>
      <div className="text-xl font-bold">{price}</div>
      <div>{badge}</div>
    </div>
  );
}
