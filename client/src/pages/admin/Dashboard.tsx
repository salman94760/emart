export default function Dashboard() {
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <p className="text-gray-500">Total Sales</p>

          <h2 className="text-4xl font-bold mt-3">₹45,000</h2>

          <p className="text-green-500 mt-2 font-medium">+12% This Month</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <p className="text-gray-500">Orders</p>

          <h2 className="text-4xl font-bold mt-3">1,240</h2>

          <p className="text-green-500 mt-2 font-medium">+8% This Week</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <p className="text-gray-500">Customers</p>

          <h2 className="text-4xl font-bold mt-3">890</h2>

          <p className="text-green-500 mt-2 font-medium">+15% Growth</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <p className="text-gray-500">Products</p>

          <h2 className="text-4xl font-bold mt-3">320</h2>

          <p className="text-red-500 mt-2 font-medium">12 Low Stock</p>
        </div>
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
