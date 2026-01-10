import { Link } from "react-router-dom";

export default function Header() {
  const header_navs = [
    { display_name: "Home", route_name: "/" },
    { display_name: "Profile", route_name: "/profile" },
    { display_name: "Settings", route_name: "/settings" },
  ];
  return (
    <header>
      <Link to="/">Logo</Link>
      <nav>
        <ul>
          {header_navs.map((nav, index) => (
            <li key={index}>
              <Link to={nav.route_name}>{nav.display_name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
