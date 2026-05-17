const AdminSidebar = () => {
  return (
    <aside className="w-72 bg-black text-white flex flex-col fixed h-screen">
      {/* Logo */}
      <div className="p-8 border-b border-gray-800">
        <h1 className="text-3xl font-bold">SSSN</h1>

        <p className="text-gray-400 mt-1 text-sm">ActiveWear</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-6">
        <p className="text-gray-500 text-xs uppercase mb-4">Main Menu</p>

        <ul className="space-y-3">
          <li>
            <button className="w-full flex items-center gap-4 bg-white text-black px-5 py-4 rounded-2xl font-semibold">
              📊 Dashboard
            </button>
          </li>

          <li>
            <button className="w-full flex items-center gap-4 hover:bg-gray-900 px-5 py-4 rounded-2xl transition">
              📦 Products
            </button>
          </li>

          <li>
            <button className="w-full flex items-center gap-4 hover:bg-gray-900 px-5 py-4 rounded-2xl transition">
              🛒 Orders
            </button>
          </li>

          <li>
            <button className="w-full flex items-center gap-4 hover:bg-gray-900 px-5 py-4 rounded-2xl transition">
              👥 Customers
            </button>
          </li>

          <li>
            <button className="w-full flex items-center gap-4 hover:bg-gray-900 px-5 py-4 rounded-2xl transition">
              📈 Analytics
            </button>
          </li>

          <li>
            <button className="w-full flex items-center gap-4 hover:bg-gray-900 px-5 py-4 rounded-2xl transition">
              ⚙️ Settings
            </button>
          </li>
        </ul>
      </nav>

      {/* User */}
      <div className="p-6 border-t border-gray-800">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center font-bold">
            S
          </div>

          <div>
            <h3 className="font-semibold">Salman Khan</h3>

            <p className="text-gray-400 text-sm">Admin</p>
          </div>
        </div>

        <button className="w-full mt-6 bg-red-500 hover:bg-red-600 transition py-3 rounded-2xl font-semibold">
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
