import { useContext, useEffect, useState } from "react";
import AddProductInputField from "@components/admin/products/AddProductInputField";
import { AppContext } from "../../context/Context";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Rules from "@/utils/Rules";

const AddProduct = () => {
  const { toast, state, handleFetchAllAttr, AddProduct } =
    useContext(AppContext);

  const attr = state?.allAttrItems;

  useEffect(() => {
    handleFetchAllAttr();
  }, []);

  const {
    register: product,
    handleSubmit: handleProductSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Rules.ProductRules),
  });

  const onSubmit = async (data: any) => {
    try {
      const result = await AddProduct(data);

      if (result?.success) {
        toast.success("Product Added Successfully");
        reset();
      } else {
        toast.error(result?.message);
      }
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm mt-10 p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Add Product</h2>
      </div>

      <div className="overflow-x-auto">
        <form onSubmit={handleProductSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <AddProductInputField
              pfunc={product("pname")}
              perror={errors}
              label="Product Name*"
              name="pname"
              fieldtype="text"
              placeholder="Enter product name"
            />

            <AddProductInputField
              pfunc={product("slug")}
              perror={errors}
              label="Slug"
              name="slug"
              fieldtype="text"
              placeholder="Enter product slug"
            />
            <AddProductInputField
              pfunc={product("description")}
              perror={errors}
              label="Description*"
              name="description"
              fieldtype="text"
              placeholder="Enter product description"
            />
            <AddProductInputField
              pfunc={product("price")}
              perror={errors}
              label="Price*"
              name="price"
              fieldtype="text"
              placeholder="Enter product price"
            />
            <AddProductInputField
              pfunc={product("dprice")}
              perror={errors}
              label="Discount Price"
              name="dprice"
              fieldtype="text"
              placeholder="Enter product discounted price"
            />

            <div className="p-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category*
              </label>

              <select
                {...product("category")}
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
              {errors.category && (
                <p className="text-red-500 font-bold text-left px-5 py-2.5">
                  {errors.category.message}
                </p>
              )}
            </div>

            <AddProductInputField
              pfunc={product("brand")}
              perror={errors}
              label="Brand*"
              name="brand"
              fieldtype="text"
              placeholder="Enter brand"
            />

            <AddProductInputField
              pfunc={product("qty")}
              perror={errors}
              label="Stock Quantity*"
              name="qty"
              fieldtype="number"
              placeholder="Enter product quantity"
            />
            <AddProductInputField
              pfunc={product("sku")}
              perror={errors}
              label="SKU"
              name="sku"
              fieldtype="text"
              placeholder="Enter product SKU"
            />

            <div className="p-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Sizes*
              </label>

              <select
                {...product("size")}
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
              {errors.size && (
                <p className="text-red-500 font-bold text-left px-5 py-2.5">
                  {errors.size.message}
                </p>
              )}
            </div>

            <div className="p-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Colors*
              </label>

              <select
                {...product("color")}
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
              {errors.color && (
                <p className="text-red-500 font-bold text-left px-5 py-2.5">
                  {errors.color.message}
                </p>
              )}
            </div>

            <div className="p-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Gender*
              </label>

              <select
                {...product("gender")}
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
              {errors.gender && (
                <p className="text-red-500 font-bold text-left px-5 py-2.5">
                  {errors.gender.message}
                </p>
              )}
            </div>

            <div className="p-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Fabric/Material*
              </label>

              <select
                {...product("material")}
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
              {errors.material && (
                <p className="text-red-500 font-bold text-left px-5 py-2.5">
                  {errors.material.message}
                </p>
              )}
            </div>

            <div className="p-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tags
              </label>

              <select
                {...product("tag")}
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
              {errors.tag && (
                <p className="text-red-500 font-bold text-left px-5 py-2.5">
                  {errors.tag.message}
                </p>
              )}
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
