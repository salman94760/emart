import { Link } from "react-router-dom";
export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: "Black Oversized T-Shirt",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Gym Active Hoodie",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Sport Cargo Joggers",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Premium Track Suit",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Training Shorts",
      price: 699,
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "SSSN Classic Tee",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">SSSN ActiveWear</h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Premium streetwear & activewear collection for modern lifestyle.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white rounded-3xl shadow-sm p-6 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4">
            <select className="border border-gray-300 rounded-2xl px-5 py-3 outline-none">
              <option>Category</option>
              <option>T-Shirts</option>
              <option>Hoodies</option>
              <option>Joggers</option>
            </select>

            <select className="border border-gray-300 rounded-2xl px-5 py-3 outline-none">
              <option>Size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>

            <select className="border border-gray-300 rounded-2xl px-5 py-3 outline-none">
              <option>Color</option>
              <option>Black</option>
              <option>White</option>
              <option>Gray</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 rounded-2xl px-5 py-3 outline-none w-full md:w-72"
          />
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              to={`/product-detail/${product.id}`}
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800">
                  {product.name}
                </h2>

                <div className="flex items-center justify-between mt-4">
                  <p className="text-2xl font-bold text-black">
                    ₹{product.price}
                  </p>

                  <button className="bg-black text-white px-5 py-3 rounded-2xl font-semibold hover:opacity-90 transition">
                    Add Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
