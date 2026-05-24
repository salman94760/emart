import AttrServices from "./attr.services"; 
import { Request, Response } from "express";

const AttrController = {
	AddAttr : async (req:Request,res:Response) => {
		try{
			const result = await AttrServices.insertAttr(req.body);
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

	Attributes : async (req:Request,res:Response) => {
		try{
			const attrtype = req.query.type;
			const result = await AttrServices.attributes({type:req.query.type as string});
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

	AllAttributes : async (req:Request,res:Response) => {
		try{
			const attrtype = req.query.type;
			const result = await AttrServices.getAllAttributes();
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

	AttrDeletes : async (req:Request,res:Response) => {
		try{
			const result = await AttrServices.deleteAttr({type: req.query.type as string,id:String(req.params.id)});
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

export default AttrController;