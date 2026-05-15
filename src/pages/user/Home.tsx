export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-black">
            ShopEase
          </h1>

          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Categories</a>
            <a href="#">Deals</a>
            <a href="#">Contact</a>
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

      {/* Hero Section */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-5">
              New Collection 2026
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Discover
              <br />
              Premium Fashion
            </h1>

            <p className="text-gray-300 text-lg mt-8 leading-8 max-w-xl">
              Explore the latest fashion trends, premium products,
              and unbeatable deals from top brands around the world.
            </p>

            <div className="flex gap-4 mt-10">

              <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition">
                Shop Now
              </button>

              <button className="border border-gray-500 px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition">
                Explore
              </button>

            </div>

          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
              alt="Fashion"
              className="rounded-3xl shadow-2xl h-[600px] w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 bg-white text-black rounded-2xl p-5 shadow-xl">
              <h3 className="font-bold text-xl">
                Summer Sale
              </h3>

              <p className="text-gray-600 mt-1">
                Up to 50% OFF
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold">
            Shop By Category
          </h2>

          <button className="text-black font-semibold hover:underline">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {["Men", "Women", "Shoes", "Accessories"].map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                alt={item}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {item}
                </h3>

                <p className="text-gray-500 mt-2">
                  Explore premium collection
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl font-bold">
              Featured Products
            </h2>

            <button className="text-black font-semibold hover:underline">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl transition"
              >
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                  alt="Product"
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">

                  <h3 className="text-xl font-bold">
                    Premium Sneakers
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Modern stylish sneakers
                  </p>

                  <div className="flex items-center justify-between mt-5">

                    <span className="text-2xl font-bold">
                      $120
                    </span>

                    <button className="bg-black text-white px-5 py-2 rounded-xl hover:opacity-90 transition">
                      Add
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-black text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Subscribe To Our Newsletter
          </h2>

          <p className="text-gray-400 text-lg mt-5">
            Get updates about latest collections and exclusive offers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-2xl px-6 py-4 text-white border border-gray-700 bg-transparent outline-none"
            />

            <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition">
              Subscribe
            </button>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

          <h1 className="text-2xl font-bold">
            ShopEase
          </h1>

          <p className="text-gray-500 mt-4 md:mt-0">
            © 2026 ShopEase. All rights reserved.
          </p>

        </div>
      </footer>

    </div>
  );
}