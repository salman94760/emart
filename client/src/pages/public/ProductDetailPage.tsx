export default function ProductDetailPage() {
  const product = {
    name: "Black Oversized T-Shirt",
    price: 899,
    oldPrice: 1299,
    description:
      "Premium oversized t-shirt made with soft cotton fabric for gym, streetwear and everyday comfort.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray"],
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 p-8">
        {/* Product Image */}
        <div>
          <div className="rounded-3xl overflow-hidden h-[600px] bg-gray-200">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            SSSN ActiveWear
          </p>

          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center gap-4 mt-6">
            <h2 className="text-4xl font-bold text-black">₹{product.price}</h2>

            <span className="text-2xl text-gray-400 line-through">
              ₹{product.oldPrice}
            </span>
          </div>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            {product.description}
          </p>

          {/* Sizes */}
          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-4">Select Size</h3>

            <div className="flex gap-4 flex-wrap">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className="border border-gray-300 px-6 py-3 rounded-2xl hover:bg-black hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-4">Select Color</h3>

            <div className="flex gap-4 flex-wrap">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className="border border-gray-300 px-6 py-3 rounded-2xl hover:bg-black hover:text-white transition"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-4">Quantity</h3>

            <input
              type="number"
              defaultValue={1}
              min={1}
              className="border border-gray-300 rounded-2xl px-5 py-4 w-32 outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10 flex-wrap">
            <button className="bg-black text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition">
              Add To Cart
            </button>

            <button className="border border-black text-black px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-black hover:text-white transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
