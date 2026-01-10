import { header_navs } from "../constants/navigations";
import { Navigation } from "./Navigation";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-5 text-xl font-bold text-stone-700 bg-stone-400 h-[60px]">
      <Navigation nav_list={[{ display: "Logo", route: "/" }]} />
      <Navigation nav_list={header_navs} />
    </header>
  );
}
