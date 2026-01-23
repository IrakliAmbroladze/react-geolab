import { Cloud } from "lucide-react";
import { WeatherCard } from "./WeatherCard";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Search } from "./Search";
import { Loader } from "./Loader";

export default function Weather() {
  const [currentCity, setCurrentCity] = useState("Tbilisi");
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const { VITE_WEATHER_API_KEY } = import.meta.env;

  const weatherData = [
    { title: "Humidity", result: `${weather?.main.humidity || "--"} %` },
    { title: "Wind Speed", result: `${weather?.wind.speed || "--"} m/s` },
    { title: "Pressure", result: weather?.main.pressure || "----" },
    {
      title: "Visibility",
      result: `${weather?.visibility / 10 || "----"} Meters`,
    },
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
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setWeather(null);
      }
    };
    fetchWeather();
  }, [currentCity, VITE_WEATHER_API_KEY]);

  const handleSearch = () => {
    setCurrentCity(searchRef.current.value);
    searchRef.current.value = "";
  };

  return (
    <div className="relative flex justify-center items-center h-full w-full bg-[url(assets/weather.jpg)] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-4xl w-full text-white">
        <h1 className="text-3xl font-bold text-center mb-5">
          Today's Weather Forecast
        </h1>
        <Search {...{ searchRef, handleSearch }} />
        <div className="min-h-[400px] border max-w-4xl w-full text-white bg-white/10 backdrop-blur-xs mt-[40px] rounded-md flex flex-col justify-between px-5 py-2">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <div className="flex justify-between items-center min-h-[100px]">
                <h2 className="text-3xl">
                  {weather?.name || "Please enter a valid city name"}
                </h2>
                <h3>
                  {weather ? (
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt="icon"
                    />
                  ) : (
                    <Cloud className="w-[100px] h-[100px] p-[20px]" />
                  )}
                </h3>
              </div>
              <div className="flex gap-5 items-center">
                <h2 className="text-5xl font-bold">
                  {Math.round(weather?.main.temp) || "--"}°
                </h2>
                <h3 className="text-4xl">
                  {weather?.weather[0].main || "----"}
                </h3>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
