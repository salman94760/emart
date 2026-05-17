const AdminHeader = () => {
  return (
    <header className="bg-white shadow-sm px-10 py-6 flex items-center justify-between sticky top-0 z-40">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>

        <p className="text-gray-500 mt-1">Welcome back 👋</p>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-2xl px-5 py-3 outline-none w-72"
        />

        <button className="bg-black text-white px-6 py-3 rounded-2xl font-semibold">
          + Add Product
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
