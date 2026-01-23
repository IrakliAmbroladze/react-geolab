import { Cloud } from "lucide-react";
import { Button } from "./Button";
import { WeatherCard } from "./WeatherCard";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function Weather() {
  const [currentCity, setCurrentCity] = useState("Tbilisi");
  const [weather, setWeather] = useState(null);
  const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const { VITE_WEATHER_API_KEY } = import.meta.env;

  const weatherData = [
    { title: "Humidity", result: "x" },
    { title: "Wind Speed", result: "x" },
    { title: "Pressure", result: "x" },
    { title: "Visibility", result: "x" },
  ];
  const searchRef = useRef(null);
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(WEATHER_API_URL, {
          params: {
            q: currentCity,
            appid: VITE_WEATHER_API_KEY,
            units: "metric",
          },
        });
        setWeather(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeather();
  }, [currentCity, VITE_WEATHER_API_KEY]);
  console.log(weather);

  const handleSearch = () => {
    setCurrentCity(searchRef.current.value);
    searchRef.current.value = "";
  };

  return (
    <div className="relative flex justify-center items-center h-full w-full bg-[url(assets/weather.jpg)] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-4xl w-full text-white">
        <div className="flex gap-10 ">
          <input
            type="text"
            placeholder="Enter city ..."
            className="flex-1 border border-white rounded-md p-2.5 text-white"
            ref={searchRef}
          />
          <Button
            textContent="search"
            bgColor="#A9A9A9"
            handleClick={handleSearch}
          />
        </div>
        <div className="min-h-[400px] border max-w-4xl w-full text-white bg-white/10 backdrop-blur-xs mt-[40px] rounded-md flex flex-col justify-between p-2.5">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl ">{currentCity}</h2>
            <h3>
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt="icon"
              />
            </h3>
          </div>
          <div className="flex gap-5 items-center">
            <h2 className="text-5xl font-bold">2°</h2>
            <h3 className="text-4xl">Light snow</h3>
          </div>
          <div className=" flex justify-between gap-4">
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
