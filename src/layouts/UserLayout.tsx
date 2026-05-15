import { Outlet } from "react-router-dom";

import UserHeader from "../components/UserHeader";
import UserFooter from "../components/UserFooter";

export default function UserLayout() {
  return (
    <>
      <UserHeader />

      <main>
        <Outlet />
      </main>

      <footer className="bg-white border-t py-8">
        <UserFooter />
      </footer>
    </>
  );
}
