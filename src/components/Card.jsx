export default function Card({ product }) {
  const { title, price, description, image, badge } = product;
  return (
    <div className="max-w-80">
      <img
        src={image}
        alt={`pic-${title}`}
        className="w-full h-52 object-cover"
      />
      <h1>{title}</h1>
      <p>{description}</p>
      <div>{price}</div>
      <div>{badge}</div>
    </div>
  );
}
