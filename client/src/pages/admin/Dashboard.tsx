import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/Context";
export default function Dashboard() {
  const navigate = useNavigate();
  const { StatsCards, checkAuth, user, userType } = useContext(AppContext);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const loadAuth = async () => {
      if (userType === "admin" && !user && !authChecked) {
        await checkAuth();
        setAuthChecked(true);
      }
    };

    loadAuth();
  }, [user, userType, authChecked]);
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <StatsCards
          text="Total Sales"
          count="₹45,000"
          month="+12% This Month"
          cssColor="green"
        />
        <StatsCards
          text="Orders"
          count="1,240"
          month="+8% This Week"
          cssColor="yellow"
        />
        <StatsCards
          text="Customers"
          count="890"
          month="+15% Growth"
          cssColor="primary"
        />
        <StatsCards
          text="Products"
          count="320"
          month="12 Low Stock"
          cssColor="red"
        />
      </div>

      <div className="bg-white rounded-3xl shadow-sm mt-10 p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Recent Orders</h2>

          <button className="font-semibold hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-4">Order ID</th>
                <th className="pb-4">Customer</th>
                <th className="pb-4">Product</th>
                <th className="pb-4">Amount</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              <tr>
                <td className="py-5 font-semibold">#1001</td>
                <td>Ali Khan</td>
                <td>T-Shirt</td>
                <td>₹1200</td>
                <td>
                  <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm">
                    Delivered
                  </span>
                </td>
              </tr>

              <tr>
                <td className="py-5 font-semibold">#1002</td>
                <td>Ahmed</td>
                <td>Lower</td>
                <td>₹1800</td>
                <td>
                  <span className="bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td className="py-5 font-semibold">#1003</td>
                <td>Rahul</td>
                <td>Capri</td>
                <td>₹950</td>
                <td>
                  <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm">
                    Shipped
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
