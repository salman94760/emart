import mongoose from "mongoose";

const Productschema = new mongoose.Schema(
	{
		pname: {type:"string",required:true},
		slug: {type:"string",required:true},
		description: {type:"string",required:true},
		price: {type:"string",required:true},
		dprice: {type:"string",required:true},
		category: {type:"string",required:true},
		brand: {type:"string",required:true},
		qty: {type:"number",required:true},
		sku: {type:"string",required:true},
		size: {type:"string",required:true},
		color: {type:"string",required:true},
		gender: {type:"string",required:true},
		material: {type:"string",required:true},
		tag: {type:"string",required:true},
		image: {type:"string",required:false},
	},
	{
		timestamps:true
	}
);

const Product = mongoose.model(
	"Product",
	Productschema
);

export default Product;