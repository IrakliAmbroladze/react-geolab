import { Link } from "react-router-dom";

export const Navigation = ({ nav_list, direction = "row" }) => {
  return (
    <nav>
      <ul
        className={`flex justify-between gap-2 ${direction === "row" ? "flex-row" : "flex-col"}`}
      >
        {nav_list.map((nav, index) => (
          <li key={index} className="hover:text-stone-500">
            <Link to={nav.route}>{nav.display}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
