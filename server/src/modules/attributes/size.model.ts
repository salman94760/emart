import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema(
	{
		size: {
			type:"String",
			required:true
		}
	},
	{
    	timestamps: true,
  	}
);

const Sizes = mongoose.model(
	"Sizes",
	sizeSchema
);

export default Sizes;