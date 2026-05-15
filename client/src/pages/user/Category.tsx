export default function CategoryPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">SSSN</h1>

            <p className="text-sm text-gray-500">ActiveWear</p>
          </div>

          {/* Search */}
          <div className="hidden lg:flex flex-1 mx-12">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border border-gray-300 rounded-2xl px-6 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <button className="relative text-2xl">
              ❤️
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            <button className="relative text-2xl">
              🛒
              <span className="absolute -top-2 -right-3 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-gray-400 text-sm">
            Premium Collection
          </p>

          <h1 className="text-6xl font-bold mt-5">T-Shirts Collection</h1>

          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Explore premium quality t-shirts designed for comfort, fashion, and
            everyday wear.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar Filters */}
          <aside className="bg-white rounded-3xl p-8 shadow-sm h-fit sticky top-28">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Filters</h2>

              <button className="text-sm font-semibold text-red-500">
                Clear
              </button>
            </div>

            {/* Category */}
            <div className="mb-10">
              <h3 className="font-bold text-lg mb-5">Categories</h3>

              <div className="space-y-4">
                {["T-Shirts", "Lowers", "Capris", "Shorts"].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <input type="checkbox" />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-10">
              <h3 className="font-bold text-lg mb-5">Sizes</h3>

              <div className="flex flex-wrap gap-3">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="w-14 h-14 rounded-2xl border border-gray-300 hover:bg-black hover:text-white transition font-semibold"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-10">
              <h3 className="font-bold text-lg mb-5">Price Range</h3>

              <input type="range" className="w-full" />

              <div className="flex justify-between text-gray-500 mt-3">
                <span>₹500</span>
                <span>₹5000</span>
              </div>
            </div>

            {/* Colors */}
            <div>
              <h3 className="font-bold text-lg mb-5">Colors</h3>

              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-black border-4 border-gray-300" />

                <button className="w-10 h-10 rounded-full bg-red-500 border-4 border-gray-300" />

                <button className="w-10 h-10 rounded-full bg-blue-500 border-4 border-gray-300" />

                <button className="w-10 h-10 rounded-full bg-gray-500 border-4 border-gray-300" />
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="lg:col-span-3">
            {/* Top Bar */}
            <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
              <div>
                <h2 className="text-3xl font-bold">All Products</h2>

                <p className="text-gray-500 mt-2">Showing 12 products</p>
              </div>

              {/* Sorting */}
              <select className="border border-gray-300 rounded-2xl px-5 py-3 outline-none">
                <option>Latest</option>
                <option>Price Low To High</option>
                <option>Price High To Low</option>
                <option>Best Selling</option>
              </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition relative"
                >
                  {/* Wishlist */}
                  <button className="absolute top-5 right-5 bg-white w-12 h-12 rounded-full shadow-md">
                    ❤️
                  </button>

                  {/* Badge */}
                  <span className="absolute top-5 left-5 bg-black text-white px-4 py-2 rounded-full text-sm">
                    New
                  </span>

                  {/* Image */}
                  <img
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
                    alt=""
                    className="w-full h-80 object-cover"
                  />

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold">Premium T-Shirt</h3>

                    <p className="text-gray-500 mt-2">Comfortable daily wear</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mt-4">
                      <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>

                      <span className="text-gray-500 text-sm">(24)</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3 mt-5">
                      <span className="text-3xl font-bold">₹999</span>

                      <span className="text-gray-400 line-through">₹1499</span>
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <button className="bg-black text-white py-3 rounded-2xl font-semibold hover:opacity-90 transition">
                        Add Cart
                      </button>

                      <button className="border border-black py-3 rounded-2xl font-semibold hover:bg-black hover:text-white transition">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-4 mt-14">
              <button className="w-12 h-12 rounded-2xl bg-white shadow-sm">
                1
              </button>

              <button className="w-12 h-12 rounded-2xl bg-black text-white shadow-sm">
                2
              </button>

              <button className="w-12 h-12 rounded-2xl bg-white shadow-sm">
                3
              </button>

              <button className="px-6 h-12 rounded-2xl bg-white shadow-sm">
                Next →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
