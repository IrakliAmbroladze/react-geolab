import { Button } from "./Button";

export default function Weather() {
  return (
    <div className="flex justify-center items-center h-full w-full bg-[url(assets/weather.jpg)] bg-cover bg-center">
      <div className="max-w-4xl w-full text-white">
        <div className="flex gap-10 ">
          <input
            type="text "
            placeholder="Enter city ..."
            className="flex-1 border white rounded-md p-2.5"
          />
          <Button textContent="search" bgColor="#A9A9A9" />
        </div>
        <div className="min-h-[400px]"></div>
      </div>
    </div>
  );
}
