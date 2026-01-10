import { header_navs } from "../constants/navigations";
import { Navigation } from "./Navigation";

export default function Header() {
  return (
    <header className="flex justify-between mx-5">
      <Navigation nav_list={[{ display: "Logo", route: "/" }]} />
      <Navigation nav_list={header_navs} />
    </header>
  );
}
