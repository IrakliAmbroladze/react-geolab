import { Link, Outlet } from "react-router-dom";

export default function Settings() {
  return (
    <section className="w-full h-full grid place-content-center">
      <aside>
        <ul>
          <li>
            <Link to="billing">Billing</Link>
          </li>
        </ul>
      </aside>
      <main>
        <Outlet />
      </main>
    </section>
  );
}
