export default function ProductDetailsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">SSSN</h1>

            <p className="text-sm text-gray-500">ActiveWear</p>
          </div>

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

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side Images */}
          <div>
            {/* Main Image */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
                alt="Product"
                className="w-full h-[650px] object-cover"
              />
            </div>

            {/* Small Images */}
            <div className="grid grid-cols-4 gap-4 mt-5">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-2xl overflow-hidden border-2 border-transparent hover:border-black cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
                    alt=""
                    className="w-full h-32 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Details */}
          <div>
            {/* Product Info */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="bg-black text-white px-4 py-2 rounded-full text-sm">
                  Best Seller
                </span>

                <button className="text-3xl">❤️</button>
              </div>

              <h1 className="text-5xl font-bold mt-6">Premium Sports Lower</h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-5">
                <div className="flex text-yellow-500 text-xl">⭐⭐⭐⭐⭐</div>

                <p className="text-gray-500">(120 Reviews)</p>
              </div>

              {/* Price */}
              <div className="flex items-center gap-5 mt-8">
                <h2 className="text-5xl font-bold">₹999</h2>

                <span className="text-2xl text-gray-400 line-through">
                  ₹1499
                </span>

                <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full font-semibold">
                  35% OFF
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-8 text-lg mt-8">
                Premium quality lower made with breathable fabric designed for
                everyday comfort, gym wear, and casual style.
              </p>

              {/* Sizes */}
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-5">Select Size</h3>

                <div className="flex gap-4">
                  {["S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      className="w-16 h-16 rounded-2xl border border-gray-300 hover:bg-black hover:text-white transition font-semibold"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-5">Select Color</h3>

                <div className="flex gap-4">
                  <button className="w-12 h-12 rounded-full bg-black border-4 border-gray-300" />

                  <button className="w-12 h-12 rounded-full bg-gray-500 border-4 border-gray-300" />

                  <button className="w-12 h-12 rounded-full bg-blue-500 border-4 border-gray-300" />
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-5">Quantity</h3>

                <div className="flex items-center gap-5">
                  <button className="w-14 h-14 rounded-2xl border text-2xl">
                    -
                  </button>

                  <span className="text-2xl font-bold">1</span>

                  <button className="w-14 h-14 rounded-2xl border text-2xl">
                    +
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">
                <button className="bg-black text-white py-5 rounded-2xl text-lg font-semibold hover:opacity-90 transition">
                  Add To Cart
                </button>

                <button className="border border-black py-5 rounded-2xl text-lg font-semibold hover:bg-black hover:text-white transition">
                  Buy Now
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-5 mt-12">
                <div className="bg-gray-100 rounded-2xl p-5">
                  <h4 className="font-bold">🚚 Free Delivery</h4>

                  <p className="text-gray-500 text-sm mt-2">
                    On orders above ₹999
                  </p>
                </div>

                <div className="bg-gray-100 rounded-2xl p-5">
                  <h4 className="font-bold">🔄 Easy Returns</h4>

                  <p className="text-gray-500 text-sm mt-2">
                    7 days return policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold">Related Products</h2>

          <button className="font-semibold hover:underline">View All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                alt=""
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">Sports Lower</h3>

                <p className="text-gray-500 mt-2">Premium ActiveWear</p>

                <div className="flex items-center justify-between mt-5">
                  <span className="text-2xl font-bold">₹999</span>

                  <button className="bg-black text-white px-5 py-3 rounded-2xl">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
