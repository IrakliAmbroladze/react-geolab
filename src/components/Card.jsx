export default function Card({ product }) {
  const { title, price, description, image, badge } = product;
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>{price}</div>
      <div>{badge}</div>
      <img src={image} alt={`pic-${title}`} />
    </>
  );
}
