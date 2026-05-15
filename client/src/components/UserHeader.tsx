import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black">SSSN</h1>

        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/deals">Deals</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="border border-gray-300 px-5 py-2 rounded-xl hover:bg-gray-100 transition">
            Login
          </button>

          <button className="bg-black text-white px-5 py-2 rounded-xl hover:opacity-90 transition">
            Cart (2)
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
