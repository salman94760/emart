export default function RegisterPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">
      {/* Left Side */}
      <div className="hidden lg:flex flex-col justify-center bg-black text-white p-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_white,_transparent_40%)]" />

        <div className="relative z-10 max-w-lg">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-300 mb-4">
            Shopping Store
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Create Your
            <br />
            Shopping Account
          </h1>

          <p className="text-gray-300 text-lg leading-8">
            Join thousands of shoppers and enjoy premium products, exclusive
            offers, and fast checkout experience.
          </p>

          <div className="flex gap-6 mt-12">
            <div>
              <h2 className="text-3xl font-bold">50K+</h2>
              <p className="text-gray-400 text-sm mt-1">Products</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">1M+</h2>
              <p className="text-gray-400 text-sm mt-1">Orders</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">99%</h2>
              <p className="text-gray-400 text-sm mt-1">Happy Users</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center p-6 sm:p-10 lg:p-16 bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900">Register</h2>

            <p className="text-gray-500 mt-3">
              Create your account and start shopping today.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Create password"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm password"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" className="mt-1 rounded" />

              <p>I agree to the Terms & Conditions and Privacy Policy.</p>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition"
            >
              Create Account
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>

            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-gray-500">OR</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="border border-gray-300 rounded-2xl py-3 font-medium hover:bg-gray-100 transition">
              Google
            </button>

            <button className="border border-gray-300 rounded-2xl py-3 font-medium hover:bg-gray-100 transition">
              Facebook
            </button>
          </div>

          <p className="text-center text-gray-500 mt-8">
            Already have an account?{" "}
            <span className="font-semibold text-black cursor-pointer hover:underline">
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
