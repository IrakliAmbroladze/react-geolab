import { Cloud } from "lucide-react";
import { Button } from "./Button";
import { WeatherCard } from "./WeatherCard";

export default function Weather() {
  const weatherData = [
    { title: "Humidity", result: "x" },
    { title: "Wind Speed", result: "x" },
    { title: "Pressure", result: "x" },
    { title: "Visibility", result: "x" },
  ];
  return (
    <div className="relative flex justify-center items-center h-full w-full bg-[url(assets/weather.jpg)] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-4xl w-full text-white">
        <div className="flex gap-10 ">
          <input
            type="text"
            placeholder="Enter city ..."
            className="flex-1 border border-white rounded-md p-2.5 text-white"
          />
          <Button textContent="search" bgColor="#A9A9A9" />
        </div>
        <div className="min-h-[400px] border max-w-4xl w-full text-white bg-white/10 backdrop-blur-xs mt-[40px] rounded-md">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl ">Tbilisi</h2>
            <h3>
              <Cloud size="72px" />
            </h3>
          </div>
          <div className="flex gap-5 items-center">
            <h2 className="text-5xl font-bold">2°</h2>
            <h3 className="text-4xl">Light snow</h3>
          </div>
          <div className="border flex justify-between gap-4">
            {weatherData.map((item) => (
              <WeatherCard
                title={item.title}
                result={item.result}
                key={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
