export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-72 bg-black text-white flex flex-col fixed h-screen">

        {/* Logo */}
        <div className="p-8 border-b border-gray-800">
          <h1 className="text-3xl font-bold">
            SSSN
          </h1>

          <p className="text-gray-400 mt-1 text-sm">
            ActiveWear
          </p>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-6">

          <p className="text-gray-500 text-xs uppercase mb-4">
            Main Menu
          </p>

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
              <h3 className="font-semibold">
                Salman Khan
              </h3>

              <p className="text-gray-400 text-sm">
                Admin
              </p>
            </div>

          </div>

          <button className="w-full mt-6 bg-red-500 hover:bg-red-600 transition py-3 rounded-2xl font-semibold">
            Logout
          </button>

        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-72">

        {/* Navbar */}
        <header className="bg-white shadow-sm px-10 py-6 flex items-center justify-between sticky top-0 z-40">

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Dashboard
            </h2>

            <p className="text-gray-500 mt-1">
              Welcome back 👋
            </p>
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

        {/* Dashboard Content */}
        <div className="p-10">

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <p className="text-gray-500">
                Total Sales
              </p>

              <h2 className="text-4xl font-bold mt-3">
                ₹45,000
              </h2>

              <p className="text-green-500 mt-2 font-medium">
                +12% This Month
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <p className="text-gray-500">
                Orders
              </p>

              <h2 className="text-4xl font-bold mt-3">
                1,240
              </h2>

              <p className="text-green-500 mt-2 font-medium">
                +8% This Week
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <p className="text-gray-500">
                Customers
              </p>

              <h2 className="text-4xl font-bold mt-3">
                890
              </h2>

              <p className="text-green-500 mt-2 font-medium">
                +15% Growth
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <p className="text-gray-500">
                Products
              </p>

              <h2 className="text-4xl font-bold mt-3">
                320
              </h2>

              <p className="text-red-500 mt-2 font-medium">
                12 Low Stock
              </p>
            </div>

          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-3xl shadow-sm mt-10 p-8">

            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">
                Recent Orders
              </h2>

              <button className="font-semibold hover:underline">
                View All
              </button>
            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="pb-4">Order ID</th>
                    <th className="pb-4">Customer</th>
                    <th className="pb-4">Product</th>
                    <th className="pb-4">Amount</th>
                    <th className="pb-4">Status</th>
                  </tr>
                </thead>

                <tbody className="divide-y">

                  <tr>
                    <td className="py-5 font-semibold">#1001</td>
                    <td>Ali Khan</td>
                    <td>T-Shirt</td>
                    <td>₹1200</td>
                    <td>
                      <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm">
                        Delivered
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-5 font-semibold">#1002</td>
                    <td>Ahmed</td>
                    <td>Lower</td>
                    <td>₹1800</td>
                    <td>
                      <span className="bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm">
                        Pending
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-5 font-semibold">#1003</td>
                    <td>Rahul</td>
                    <td>Capri</td>
                    <td>₹950</td>
                    <td>
                      <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm">
                        Shipped
                      </span>
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}