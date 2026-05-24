import Product from "./product.model";
type FormProductData = {

  pname: string;

  slug: string;

  description: string;

  price: string;

  dprice: string;

  category: string;

  brand: string;

  qty: number;

  sku: string;

  size: string;

  color: string;

  gender: string;

  material: string;

  tag: string;

  image?: string;
};

const ProductServices = {
	Add : async (data:FormProductData) => {
		const result = await Product.create(data);
		return result;
	},

  productList : async () => {
    const result = await Product.find();
    return result;
  }
};

export default ProductServices;