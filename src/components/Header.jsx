import { Link } from "react-router-dom";
import { header_navs } from "../constants/navigations";
import { Navigation } from "./Navigation";
import { Button } from "./Button";

export default function Header({ userName = null, setUser = () => {} }) {
  return (
    <header className="flex justify-between items-center px-5 text-xl font-bold text-stone-700 bg-stone-400 min-h-[60px]">
      <Navigation nav_list={[{ display: "Logo", route: "/" }]} />
      <Navigation nav_list={header_navs} responsive={true} />
      {userName ? (
        <Link to="./">
          {userName}{" "}
          <Button
            textContent="logout"
            handleClick={() => {
              setUser(null);
              localStorage.removeItem("token");
            }}
          />
        </Link>
      ) : (
        <Link to="./Login">
          <Button textContent="login" />
        </Link>
      )}
    </header>
  );
}
