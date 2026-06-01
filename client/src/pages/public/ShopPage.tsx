import { useEffect } from "react";
import { ContextHook } from "@hooks/ContextHook";
import { Link } from "react-router-dom";

export default function ShopPage() {
  const { state, toast, Product, Loader, loader } = ContextHook();
  useEffect(() => {
    if (!state.allProductItems) {
      Product();
    }
  }, []);



  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">SSSN ActiveWear</h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Premium streetwear & activewear collection for modern lifestyle.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white rounded-3xl shadow-sm p-6 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4">
            <select className="border border-gray-300 rounded-2xl px-5 py-3 outline-none">
              <option>Category</option>
              <option>T-Shirts</option>
              <option>Hoodies</option>
              <option>Joggers</option>
            </select>

            <select className="border border-gray-300 rounded-2xl px-5 py-3 outline-none">
              <option>Size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>

            <select className="border border-gray-300 rounded-2xl px-5 py-3 outline-none">
              <option>Color</option>
              <option>Black</option>
              <option>White</option>
              <option>Gray</option>
            </select>

            <select className="border border-gray-300 rounded-2xl px-5 py-3 outline-none">
              <option>Gender</option>
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
              <option>Others</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 rounded-2xl px-5 py-3 outline-none w-full md:w-72"
          />
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {state?.allProductItems?.map((product) => (
            <Link
              to={`/product-detail/${product._id}`}
              key={product._id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.pname}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800">
                  {product.pname}
                </h2>

                <div className="flex items-center justify-between mt-4">
                  <p className="text-2xl font-bold text-black">
                    ₹{product.price}
                  </p>

                  <button className="bg-black text-white px-5 py-3 rounded-2xl font-semibold hover:opacity-90 transition">
                    Add Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
