import { useContext, useEffect, useState } from "react";
import AddProductInputField from "../../components/products/AddProductInputField";
import { AppContext } from "../../context/Context";

type FormDataType = {
  pname: "string";
  slug: "string";
  description: "string";
  price: "string";
  dprice: "string";
  category: "string";
  brand: "string";
  qty: "integer";
  sku: "string";
  size: "string";
  color: "string";
  gender: "string";
  material: "string";
  tag: "string";
};

const AddProduct = () => {
  const { toast, state, handleFetchAllAttr, AddProduct } =
    useContext(AppContext);
  const [attr, setAttr] = useState([]);
  const [pdata, setPdata] = useState<FormDataType>({
    pname: "",
    slug: "",
    description: "",
    price: "",
    dprice: "",
    category: "",
    brand: "",
    qty: 0,
    sku: "",
    size: "",
    color: "",
    gender: "",
    material: "",
    tag: "",
  });

  useEffect(() => {
    handleFetchAllAttr();
  }, []);

  useEffect(() => {
    if (state?.allAttrItems) {
      setAttr(state.allAttrItems);
    }
  }, [state.allAttrItems]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setPdata({ ...pdata, [e.target.name]: e.target.value });
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    const result = await AddProduct(pdata);
    if (result.success === true) {
      toast.success("Product Added successfully");
      setPdata({
        pname: "",
        slug: "",
        description: "",
        price: "",
        dprice: "",
        category: "",
        brand: "",
        qty: 0,
        sku: "",
        size: "",
        color: "",
        gender: "",
        material: "",
        tag: "",
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm mt-10 p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Add Product</h2>
      </div>

      <div className="overflow-x-auto">
        <form onSubmit={handleProductSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <AddProductInputField
              pvalue={pdata.pname}
              pfunc={handleChange}
              label="Product Name"
              name="pname"
              fieldtype="text"
              placeholder="Enter product name"
            />
            <AddProductInputField
              pvalue={pdata.slug}
              pfunc={handleChange}
              label="Slug"
              name="slug"
              fieldtype="text"
              placeholder="Enter product slug"
            />
            <AddProductInputField
              pvalue={pdata.description}
              pfunc={handleChange}
              label="Description"
              name="description"
              fieldtype="text"
              placeholder="Enter product description"
            />
            <AddProductInputField
              pvalue={pdata.price}
              pfunc={handleChange}
              label="Price"
              name="price"
              fieldtype="text"
              placeholder="Enter product price"
            />
            <AddProductInputField
              pvalue={pdata.dprice}
              pfunc={handleChange}
              label="Discount Price"
              name="dprice"
              fieldtype="text"
              placeholder="Enter product discounted price"
            />

            <div className="p-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category
              </label>

              <select
                value={pdata.category}
                onChange={handleChange}
                name="category"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black bg-white"
              >
                <option value="">Select category</option>
                {attr?.categoryArr?.map((cat, index) => {
                  return (
                    <option key={index} value={cat.category}>
                      {cat.category}
                    </option>
                  );
                })}
              </select>
            </div>

            <AddProductInputField
              pvalue={pdata.brand}
              pfunc={handleChange}
              label="Brand"
              name="brand"
              fieldtype="text"
              placeholder="Enter brand"
            />

            <AddProductInputField
              pvalue={pdata.qty}
              pfunc={handleChange}
              label="Stock Quantity"
              name="qty"
              fieldtype="number"
              placeholder="Enter product quantity"
            />
            <AddProductInputField
              pvalue={pdata.sku}
              pfunc={handleChange}
              label="SKU"
              name="sku"
              fieldtype="text"
              placeholder="Enter product SKU"
            />

            <div className="p-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Sizes
              </label>

              <select
                value={pdata.size}
                onChange={handleChange}
                name="size"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black bg-white"
              >
                <option value="">Select size</option>
                {attr?.sizeArr?.map((size, index) => {
                  return (
                    <option key={index} value={size.size}>
                      {size.size}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="p-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Colors
              </label>

              <select
                value={pdata.color}
                onChange={handleChange}
                name="color"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black bg-white"
              >
                <option value="">Select color</option>
                {attr?.colorArr?.map((color, index) => {
                  return (
                    <option key={index} value={color.color}>
                      {color.color}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="p-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Gender
              </label>

              <select
                value={pdata.gender}
                onChange={handleChange}
                name="gender"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black bg-white"
              >
                <option value="">Select gender</option>
                {attr?.genderArr?.map((gen, index) => {
                  return (
                    <option key={index} value={gen.gender}>
                      {gen.gender}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="p-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Fabric/Material
              </label>

              <select
                value={pdata.material}
                onChange={handleChange}
                name="material"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black bg-white"
              >
                <option value="">Select material</option>
                {attr?.materialArr?.map((mat, index) => {
                  return (
                    <option key={index} value={mat.material}>
                      {mat.material}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="p-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tags
              </label>

              <select
                value={pdata.tag}
                onChange={handleChange}
                name="tag"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:ring-2 focus:ring-black bg-white"
              >
                <option value="">Select tag</option>
                {attr?.tagArr?.map((tag, index) => {
                  return (
                    <option key={index} value={tag.tag}>
                      {tag.tag}
                    </option>
                  );
                })}
              </select>
            </div>

            <AddProductInputField
              label="Product Images"
              name="image"
              fieldtype="file"
              placeholder="Enter product image"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
