export default function UserHomePage() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div>
            <h1 className="text-3xl font-bold text-black">
              SSSN
            </h1>

            <p className="text-sm text-gray-500">
              ActiveWear
            </p>
          </div>

          {/* Search */}
          <div className="hidden lg:flex flex-1 mx-12">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border border-gray-300 rounded-2xl px-6 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Menu */}
          <div className="flex items-center gap-6">

            <button className="relative">
              ❤️

              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            <button className="relative">
              🛒

              <span className="absolute -top-2 -right-3 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center font-bold">
                S
              </div>

              <div className="hidden md:block">
                <h3 className="font-semibold">
                  Salman
                </h3>

                <p className="text-sm text-gray-500">
                  Customer
                </p>
              </div>

            </div>

          </div>

        </div>
      </nav>

      {/* Hero Banner */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="uppercase tracking-[0.3em] text-gray-400 text-sm mb-5">
              New Arrival
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Premium
              <br />
              Street Fashion
            </h1>

            <p className="text-gray-300 text-lg leading-8 mt-8 max-w-xl">
              Explore the latest collection of lowers, capris,
              t-shirts, and activewear designed for comfort and style.
            </p>

            <div className="flex gap-4 mt-10">

              <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition">
                Shop Now
              </button>

              <button className="border border-gray-600 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition">
                View Collection
              </button>

            </div>

          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1523398002811-999ca8dec234"
              alt="Fashion"
              className="rounded-3xl h-[550px] w-full object-cover shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-4xl font-bold">
            Categories
          </h2>

          <button className="font-semibold hover:underline">
            View All
          </button>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {["T-Shirts", "Lowers", "Capris", "Shorts"].map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition"
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
                  Premium quality collection
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

            <button className="font-semibold hover:underline">
              View All
            </button>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl transition relative"
              >

                {/* Wishlist */}
                <button className="absolute top-5 right-5 bg-white w-12 h-12 rounded-full shadow-md">
                  ❤️
                </button>

                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                  alt="Product"
                  className="h-80 w-full object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold">
                    Premium Lower
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Comfortable everyday wear
                  </p>

                  <div className="flex items-center justify-between mt-5">

                    <span className="text-3xl font-bold">
                      ₹999
                    </span>

                    <button className="bg-black text-white px-5 py-3 rounded-2xl hover:opacity-90 transition">
                      Add Cart
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Wishlist + Cart */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Wishlist */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-3xl font-bold">
                Wishlist
              </h2>

              <span className="bg-red-100 text-red-500 px-4 py-2 rounded-full text-sm">
                3 Items
              </span>

            </div>

            <div className="space-y-5">

              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-5 border rounded-2xl p-4"
                >

                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                    alt=""
                    className="w-24 h-24 rounded-2xl object-cover"
                  />

                  <div className="flex-1">

                    <h3 className="font-bold text-lg">
                      Stylish T-Shirt
                    </h3>

                    <p className="text-gray-500 mt-1">
                      ₹799
                    </p>

                  </div>

                  <button className="bg-black text-white px-5 py-3 rounded-xl">
                    Add Cart
                  </button>

                </div>
              ))}

            </div>

          </div>

          {/* Cart */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-3xl font-bold">
                Cart Items
              </h2>

              <span className="bg-black text-white px-4 py-2 rounded-full text-sm">
                2 Items
              </span>

            </div>

            <div className="space-y-5">

              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-5 border rounded-2xl p-4"
                >

                  <img
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
                    alt=""
                    className="w-24 h-24 rounded-2xl object-cover"
                  />

                  <div className="flex-1">

                    <h3 className="font-bold text-lg">
                      Sports Lower
                    </h3>

                    <p className="text-gray-500 mt-1">
                      ₹1299
                    </p>

                  </div>

                  <button className="text-red-500 font-semibold">
                    Remove
                  </button>

                </div>
              ))}

            </div>

            <div className="border-t mt-8 pt-6 flex items-center justify-between">

              <h3 className="text-2xl font-bold">
                Total
              </h3>

              <h3 className="text-3xl font-bold">
                ₹2598
              </h3>

            </div>

            <button className="w-full mt-6 bg-black text-white py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition">
              Proceed To Checkout
            </button>

          </div>

        </div>
        {/* Cart */}
<div className="bg-white rounded-3xl p-8 shadow-sm">

  <div className="flex items-center justify-between mb-8">

    <h2 className="text-3xl font-bold">
      Cart Items
    </h2>

    <span className="bg-black text-white px-4 py-2 rounded-full text-sm">
      2 Items
    </span>

  </div>

  {/* Cart Products */}
  <div className="space-y-5">

    {[1, 2].map((item) => (
      <div
        key={item}
        className="flex items-center gap-5 border rounded-2xl p-4"
      >

        <img
          src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
          alt=""
          className="w-24 h-24 rounded-2xl object-cover"
        />

        <div className="flex-1">

          <h3 className="font-bold text-lg">
            Sports Lower
          </h3>

          <p className="text-gray-500 mt-1">
            ₹1299
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-3 mt-3">

            <button className="w-8 h-8 rounded-full border">
              -
            </button>

            <span className="font-semibold">
              1
            </span>

            <button className="w-8 h-8 rounded-full border">
              +
            </button>

          </div>

        </div>

        <button className="text-red-500 font-semibold">
          Remove
        </button>

      </div>
    ))}

  </div>

  {/* Coupon Section */}
  <div className="mt-8">

    <label className="font-semibold text-lg">
      Apply Coupon
    </label>

    <div className="flex gap-3 mt-4">

      <input
        type="text"
        placeholder="Enter coupon code"
        className="flex-1 border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black"
      />

      <button className="bg-black text-white px-6 rounded-2xl font-semibold hover:opacity-90 transition">
        Apply
      </button>

    </div>

    {/* Coupon Success */}
    <div className="bg-green-100 text-green-700 rounded-2xl px-5 py-4 mt-4">
      Coupon <span className="font-bold">SAVE20</span> applied successfully 🎉
    </div>

  </div>

  {/* Price Details */}
  <div className="border-t mt-8 pt-6 space-y-4">

    <div className="flex items-center justify-between text-gray-600">
      <span>Subtotal</span>
      <span>₹2598</span>
    </div>

    <div className="flex items-center justify-between text-gray-600">
      <span>Shipping</span>
      <span>₹99</span>
    </div>

    <div className="flex items-center justify-between text-green-600 font-semibold">
      <span>Discount</span>
      <span>-₹520</span>
    </div>

    <div className="flex items-center justify-between text-2xl font-bold border-t pt-5">
      <span>Total</span>
      <span>₹2177</span>
    </div>

  </div>

  {/* Checkout */}
  <button className="w-full mt-8 bg-black text-white py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition">
    Proceed To Checkout
  </button>

</div>
      </section>

    </div>
  );
}