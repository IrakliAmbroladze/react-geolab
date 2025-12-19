import "./App.css";

function App() {
  const cars = [
    { id: 1, title: "Mercedes", price: 80000, color: "red" },
    { id: 2, title: "Porsche", price: 90000, color: "blue" },
    { id: 3, title: "Tesla", price: 45000, color: "white" },
  ];
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

export default App;
