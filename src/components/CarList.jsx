export default function CarList({ cars }) {
  return (
    <>
      {cars.map((car) => (
        <li
          key={car.id}
          style={{
            color: car.color,
          }}
        >
          {car.title} ${car.price}
        </li>
      ))}
    </>
  );
}
