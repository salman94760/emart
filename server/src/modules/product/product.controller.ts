import ProductServices from "./product.services";
import { Request, Response } from "express";

const ProductController = {
	AddProduct : async (req:Request,res:Response) => {
		try{
			const result = await ProductServices.Add(req.body);
			res.status(201).json({
        		success: true,
        		data: result,
      		});
		}catch(err:any){
			res.status(400).json({
        		success: false,
        		message: err.message,
      		});
		}
	},

	Product : async (req:Request,res:Response) => {
		try{
			const result = await ProductServices.productList();
			res.status(201).json({
        		success: true,
        		data: result,
      		});
		}catch(err:any){
			res.status(400).json({
        		success: false,
        		message: err.message,
      		});	
		}
	}
};

export default ProductController;