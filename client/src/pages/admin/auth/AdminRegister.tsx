import { useContext, useState } from "react";
import { ContextHook } from "@hooks/ContextHook";
import { useNavigate } from "react-router-dom";
import AdminAuthSideBar from "@components/admin/AdminAuthSideBar";

type FormDataType = {
  name: "string";
  email: "string";
  phone: "string";
  password: "string";
  cpassword: "string";
};

export default function AdminRegister() {
  const navigate = useNavigate();
  const [data, setData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });
  const { toast, Register } = ContextHook();

  const handleChange = (e: React.ChangeEvent<HtmlInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.name) return toast.warning("Full name required");
    if (!data.email) return toast.warning("Email id required");
    if (!data.phone) return toast.warning("Phone required");
    if (data.phone.length < 10) return toast.warning("Phone not valid");
    if (!data.password) return toast.warning("Password required");
    if (data.password.length < 6)
      return toast.warning("Password length must be greater than 6");
    if (!data.cpassword) return toast.warning("Confirm password required");
    if (data.password !== data.cpassword)
      return toast.warning("Password & confirm password not matched");

    const payload = {
      ...data,
      type: "admin",
      created_at: Date.now(),
      updated_at: Date.now(),
    };

    try {
      const result = await Register(payload);
      if (result?.success) {
        toast.success("User Register Successfully");

        navigate("/admin/login");

        return;
      }

      toast.error(result?.message || "Something went wrong");
    } catch (error) {
      toast.error("Server Error", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-[40px] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side */}

        <AdminAuthSideBar
          header="Admin Registration"
          subheader="Create an admin account to manage products, orders, customers,
              inventory, banners, coupons, and reports."
        />

        {/* Right Side */}
        <div className="flex items-center justify-center p-8 lg:p-14 bg-gray-50">
          <div className="w-full max-w-xl">
            <div className="mb-10 text-center">
              <h2 className="text-5xl font-bold text-gray-900">Create Admin</h2>

              <p className="text-gray-500 mt-4 text-lg">
                Setup your admin dashboard account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  value={data.name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  value={data.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>

                <input
                  value={data.phone}
                  onChange={handleChange}
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>

                <input
                  value={data.password}
                  onChange={handleChange}
                  type="password"
                  name="password"
                  placeholder="Create password"
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm Password
                </label>

                <input
                  value={data.cpassword}
                  onChange={handleChange}
                  type="password"
                  name="cpassword"
                  placeholder="Confirm password"
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition"
              >
                Create Admin Account
              </button>
            </form>

            <p className="text-center text-gray-500 mt-8">
              Already have an admin account?{" "}
              <span className="font-semibold text-black cursor-pointer hover:underline">
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
