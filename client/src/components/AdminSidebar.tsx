import { useState } from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const [openProducts, setOpenProducts] = useState(false);

  const [openAttributes, setOpenAttributes] = useState(false);

  return (
    <aside className="w-72 bg-black text-white flex flex-col fixed h-screen overflow-y-auto">
      {/* Logo */}
      <div className="p-8 border-b border-gray-800">
        <h1 className="text-3xl font-bold">SSSN</h1>

        <p className="text-gray-400 mt-1 text-sm">ActiveWear</p>
      </div>

      {/* Main Menu */}
      <nav className="flex-1 p-6">
        <p className="text-gray-500 text-xs uppercase mb-4">Main Menu</p>

        <ul className="space-y-3">
          {/* Dashboard */}

          <li>
            <Link
              to="/dashboard"
              className="w-full flex items-center gap-4 bg-white text-black px-5 py-4 rounded-2xl font-semibold"
            >
              📊 Dashboard
            </Link>
          </li>

          {/* Products Dropdown */}
          <li>
            <button
              onClick={() => setOpenProducts(!openProducts)}
              className="
                w-full
                flex
                items-center
                justify-between
                hover:bg-gray-900
                px-5
                py-4
                rounded-2xl
                transition
              "
            >
              <span className="flex items-center gap-4">📦 Products</span>

              <span>{openProducts ? "⌃" : "⌄"}</span>
            </button>

            {openProducts && (
              <ul className="ml-12 mt-2 space-y-3">
                <li>
                  <Link
                    to="/product"
                    className="text-gray-400 hover:text-white transition"
                  >
                    All Products
                  </Link>
                </li>

                <li>
                  <Link
                    to="/add/product"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Add Product
                  </Link>
                </li>

                {/*<li>
                  <Link  to="/add/product" className="text-gray-400 hover:text-white transition">
                    Product Reviews
                  </Link>
                </li>*/}
              </ul>
            )}
          </li>

          {/* Orders */}
          <li>
            <button className="w-full flex items-center gap-4 hover:bg-gray-900 px-5 py-4 rounded-2xl transition">
              🛒 Orders
            </button>
          </li>

          {/* Customers */}
          <li>
            <button className="w-full flex items-center gap-4 hover:bg-gray-900 px-5 py-4 rounded-2xl transition">
              👥 Customers
            </button>
          </li>

          {/* Analytics */}
          <li>
            <button className="w-full flex items-center gap-4 hover:bg-gray-900 px-5 py-4 rounded-2xl transition">
              📈 Analytics
            </button>
          </li>
        </ul>
      </nav>

      {/* Product Attributes */}
      <nav className="p-6 border-t border-gray-800">
        <p className="text-gray-500 text-xs uppercase mb-4">
          Product Attributes
        </p>

        <ul className="space-y-3">
          <li>
            <button
              onClick={() => setOpenAttributes(!openAttributes)}
              className="
                w-full
                flex
                items-center
                justify-between
                hover:bg-gray-900
                px-5
                py-4
                rounded-2xl
                transition
              "
            >
              <span className="flex items-center gap-4">⚙️ Attributes</span>

              <span>{openAttributes ? "⌃" : "⌄"}</span>
            </button>

            {openAttributes && (
              <ul className="ml-12 mt-2 space-y-3">
                <li>
                  <Link
                    to="/sizes"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Sizes
                  </Link>
                </li>

                <li>
                  <Link
                    to="/colors"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Colors
                  </Link>
                </li>

                <li>
                  <Link
                    to="/gender"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Gender
                  </Link>
                </li>

                <li>
                  <Link
                    to="/mateial"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Material
                  </Link>
                </li>

                <li>
                  <Link
                    to="/tag"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Tags
                  </Link>
                </li>

                <li>
                  <Link
                    to="/category"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Category
                  </Link>
                </li>
              </ul>
            )}
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
              {localStorage.getItem("loginuser")}
            </h3>

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
