import mongoose from "mongoose";

const ColorSchema = new mongoose.Schema(
	{
		color:{
			type:"String",
			required:true
		}
	},
	{
		timestamps:true
	}
);

const Color = mongoose.model(
	"Color",
	ColorSchema
);

export default Color;