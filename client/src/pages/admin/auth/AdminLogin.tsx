import { useNavigate } from "react-router-dom";
import AdminAuthSideBar from "@components/admin/AdminAuthSideBar";
import { ContextHook } from "@hooks/ContextHook";

import Rules from "@/utils/Rules";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export default function AdminLogin() {
  const navigate = useNavigate();

  const { toast, Login } = ContextHook();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Rules.LoginRule),
  });

  const onSubmit = async (data) => {
    try {
      const result = await Login(data);

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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const email = emailRef.current?.value;
  //   const password = passwordRef.current?.value;
  //   try {
  //     const result = await Login({ email, password });
  //     if (result?.success === true) {
  //       toast.success("Login successfully");
  //       navigate("/dashboard");
  //     } else {
  //       toast.error(result.message);
  //     }
  //   } catch (err: unknown) {
  //     toast.error("Something went wrong", err);
  //   }
  // };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-[40px] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side */}
        <AdminAuthSideBar
          header="Admin Dashboard"
          subheader="Manage products, orders, inventory, customers, banners, coupons, reports and complete store operations."
        />

        {/* Right Side */}
        <div className="flex items-center justify-center p-8 lg:p-14 bg-gray-50">
          <div className="w-full max-w-xl">
            <div className="mb-10 text-center">
              <h2 className="text-5xl font-bold text-gray-900">Admin Login</h2>

              <p className="text-gray-500 mt-4 text-lg">
                Login to access admin dashboard
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  {...register("email")}
                  placeholder="Enter admin email"
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black bg-white"
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>

                <input
                  {...register("password")}
                  type="password"
                  placeholder="Enter password"
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black bg-white"
                />
                {errors.password && <p>{errors.password.message}</p>}
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
