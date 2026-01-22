import { Cloud } from "lucide-react";
import { Button } from "./Button";

export default function Weather() {
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
          <div className="flex justify-between">
            <h2 className="text-5xl">Tbilisi</h2>
            <h3>
              <Cloud size="72px" />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
