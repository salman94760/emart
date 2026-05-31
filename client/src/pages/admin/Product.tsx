import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/Context";
const Product = () => {
  const { state, Product } = useContext(AppContext);

  useEffect(() => {
    Product();
  }, [state.allProductItems]);
  return (
    <div className="product-width-scroll bg-white rounded-3xl shadow-sm mt-10 p-8">
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 border-collapse">
          <thead>
            <tr className="text-gray-500 border-b items-center">
              <th className="border border-gray-300 p-3">Action</th>
              <th className="border border-gray-300 p-3">#id</th>
              <th className="border border-gray-300 p-3">Slug</th>
              <th className="border border-gray-300 p-3">Description</th>
              <th className="border border-gray-300 p-3">Price</th>
              <th className="border border-gray-300 p-3">Discount Price</th>
              <th className="border border-gray-300 p-3">Category</th>
              <th className="border border-gray-300 p-3">Brand</th>
              <th className="border border-gray-300 p-3">Quantity</th>
              <th className="border border-gray-300 p-3">SKU</th>
              <th className="border border-gray-300 p-3">Image</th>
              <th className="border border-gray-300 p-3">Sizes</th>
              <th className="border border-gray-300 p-3">Colors</th>
              <th className="border border-gray-300 p-3">Gender</th>
              <th className="border border-gray-300 p-3">Material</th>
              <th className="border border-gray-300 p-3">Status</th>
              <th className="border border-gray-300 p-3">Ratings</th>
              <th className="border border-gray-300 p-3">Tags</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {state?.allProductItems?.map((v, index) => (
              <tr key={index} className="text-gray-500 border-b items-center">
                <td className="border border-gray-300 p-3">
                  <Link to={`/edit/product/${v._id}`}>
                    <button className="btn btn-sm btn-outline-primary me-2">
                      ✏
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      if (window.confirm("Are you sure?")) {
                        // deleteMaterial(v._id);
                      }
                    }}
                    className="btn btn-sm btn-outline-danger me-2"
                  >
                    🗑
                  </button>
                </td>
                <td className="border border-gray-300 p-3">{v._id}</td>
                <td className="border border-gray-300 p-3">{v.slug}</td>
                <td className="border border-gray-300 p-3">{v.description}</td>
                <td className="border border-gray-300 p-3">{v.price}</td>
                <td className="border border-gray-300 p-3">{v.dprice}</td>
                <td className="border border-gray-300 p-3">{v.category}</td>
                <td className="border border-gray-300 p-3">{v.brand}</td>
                <td className="border border-gray-300 p-3">{v.qty}</td>
                <td className="border border-gray-300 p-3">{v.sku}</td>
                <td className="border border-gray-300 p-3">{v.image}</td>
                <td className="border border-gray-300 p-3">{v.size}</td>
                <td className="border border-gray-300 p-3">{v.color}</td>
                <td className="border border-gray-300 p-3">{v.gender}</td>
                <td className="border border-gray-300 p-3">{v.material}</td>
                <td className="border border-gray-300 p-3">{v.status}</td>
                <td className="border border-gray-300 p-3">{v.rating}</td>
                <td className="border border-gray-300 p-3">{v.tag}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
