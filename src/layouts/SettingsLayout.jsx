import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { settings_navs } from "../constants/navigations";

export default function SettingsLayout() {
  return (
    <section className="w-full h-full grid grid-cols-[200px_1fr] place-items-stretch">
      <aside className="h-full flex items-center bg-blue-200 rounded-md px-5">
        <Navigation nav_list={settings_navs} direction="column" />
      </aside>
      <main>
        <Outlet />
      </main>
    </section>
  );
}
