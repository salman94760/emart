export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Checkout
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Complete your order securely.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left Side */}
          <div className="lg:col-span-2 space-y-8">

            {/* Shipping Address */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">

              <h2 className="text-2xl font-bold mb-8">
                Shipping Address
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black md:col-span-2"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black md:col-span-2"
                />

                <input
                  type="text"
                  placeholder="Address"
                  className="border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black md:col-span-2"
                />

                <input
                  type="text"
                  placeholder="City"
                  className="border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="text"
                  placeholder="Postal Code"
                  className="border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black"
                />

              </div>

            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">

              <h2 className="text-2xl font-bold mb-8">
                Payment Method
              </h2>

              <div className="space-y-5">

                <label className="border rounded-2xl p-5 flex items-center gap-4 cursor-pointer hover:border-black transition">

                  <input type="radio" name="payment" />

                  <div>
                    <h3 className="font-bold">
                      Cash On Delivery
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      Pay when your order arrives
                    </p>
                  </div>

                </label>

                <label className="border rounded-2xl p-5 flex items-center gap-4 cursor-pointer hover:border-black transition">

                  <input type="radio" name="payment" />

                  <div>
                    <h3 className="font-bold">
                      Credit / Debit Card
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      Secure online payment
                    </p>
                  </div>

                </label>

                <label className="border rounded-2xl p-5 flex items-center gap-4 cursor-pointer hover:border-black transition">

                  <input type="radio" name="payment" />

                  <div>
                    <h3 className="font-bold">
                      UPI Payment
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      Pay using PhonePe, Google Pay, Paytm
                    </p>
                  </div>

                </label>

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div>

            <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-10">

              <h2 className="text-2xl font-bold mb-8">
                Order Summary
              </h2>

              {/* Products */}
              <div className="space-y-5">

                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <img
                      src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
                      alt=""
                      className="w-20 h-20 rounded-2xl object-cover"
                    />

                    <div className="flex-1">

                      <h3 className="font-bold">
                        Premium Lower
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">
                        Qty: 1
                      </p>

                    </div>

                    <span className="font-bold">
                      ₹1299
                    </span>

                  </div>
                ))}

              </div>

              {/* Coupon */}
              <div className="mt-8">

                <label className="font-semibold">
                  Coupon Code
                </label>

                <div className="flex gap-3 mt-3">

                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 border border-gray-300 rounded-2xl px-4 py-3 outline-none"
                  />

                  <button className="bg-black text-white px-5 rounded-2xl">
                    Apply
                  </button>

                </div>

              </div>

              {/* Price */}
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

              {/* Button */}
              <button className="w-full mt-8 bg-black text-white py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition">
                Place Order
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}