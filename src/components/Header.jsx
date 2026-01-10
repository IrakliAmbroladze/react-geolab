import { Navigation } from "./Navigation";

export default function Header() {
  const header_navs = [
    { display: "Home", route: "/" },
    { display: "Profile", route: "/profile" },
    { display: "Settings", route: "/settings" },
  ];
  return (
    <header className="flex justify-between mx-5">
      <Navigation nav_list={[{ display: "Logo", route: "/" }]} />
      <Navigation nav_list={header_navs} />
    </header>
  );
}
