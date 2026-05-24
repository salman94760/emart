import { Outlet } from "react-router-dom";

import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

export default function AdminLayout() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex">
        <AdminSidebar />

        <main className="flex-1 ml-72">
          <AdminHeader />

          <Outlet />
        </main>
      </div>
    </>
  );
}
