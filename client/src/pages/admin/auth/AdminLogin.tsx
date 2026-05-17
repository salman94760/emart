import { useRef, useContext } from "react";
import { AppContext } from "../../../context/Context";
import { useNavigate } from "react-router-dom";
export default function AdminLogin() {
  const emailRef = useRef<HTMLInputElement>("");
  const passwordRef = useRef<HTMLInputElement>("");

  const navigate = useNavigate();

  const { toast, Login } = useContext(AppContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    try {
      const result = await Login({ email, password });
      if (result?.success === true) {
        toast.success("Login successfully");
        navigate("/dashboard");
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-[40px] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center bg-black text-white p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_white,_transparent_40%)]" />

          <div className="relative z-10">
            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-5">
              SSSN ActiveWear
            </p>

            <h1 className="text-6xl font-bold leading-tight">
              Admin
              <br />
              Dashboard
            </h1>

            <p className="text-gray-300 text-lg leading-8 mt-8 max-w-lg">
              Manage products, orders, inventory, customers, banners, coupons,
              reports and complete store operations.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-14">
              <div>
                <h2 className="text-4xl font-bold">10K+</h2>
                <p className="text-gray-400 text-sm mt-2">Orders</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">500+</h2>
                <p className="text-gray-400 text-sm mt-2">Products</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">24/7</h2>
                <p className="text-gray-400 text-sm mt-2">Monitoring</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-8 lg:p-14 bg-gray-50">
          <div className="w-full max-w-xl">
            <div className="mb-10 text-center">
              <h2 className="text-5xl font-bold text-gray-900">Admin Login</h2>

              <p className="text-gray-500 mt-4 text-lg">
                Login to access admin dashboard
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  ref={emailRef}
                  placeholder="Enter admin email"
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>

                <input
                  ref={passwordRef}
                  type="password"
                  placeholder="Enter password"
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black bg-white"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-black font-semibold hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition"
              >
                Login to Dashboard
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>

              <div className="relative flex justify-center text-sm">
                <span className="bg-gray-50 px-4 text-gray-500">
                  Secure Admin Access
                </span>
              </div>
            </div>

            <div className="bg-black text-white rounded-3xl p-6">
              <h3 className="text-2xl font-bold">Admin Features</h3>

              <div className="grid grid-cols-2 gap-4 mt-5 text-sm text-gray-300">
                <p>✔ Product Management</p>
                <p>✔ Orders Tracking</p>
                <p>✔ Inventory Control</p>
                <p>✔ Coupons & Offers</p>
                <p>✔ Customer Reports</p>
                <p>✔ Sales Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
