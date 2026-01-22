export const WeatherCard = ({ title, result }) => {
  return (
    <div className="border rounded-md flex-1 p-3">
      {title}
      <h2>{result}</h2>
    </div>
  );
};
