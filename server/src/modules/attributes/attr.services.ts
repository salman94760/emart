import Sizes from "./size.model";
import Color from "./color.model";
import Gender from "./gender.model";
import Material from "./material.model";
import Tag from "./tag.model";
import Category from "./category.model";

type AttributeData = {
  type: string;

  [key: string]: string;
};

type attributeData = {
  type: string;
};

type attributeDeleteData = {
	id:string,
  type: string;
};

const AttrServices = {
	insertAttr: async (data: AttributeData) => {
		let result = null;

		if (data.type === "size") {
			result = await Sizes.create({size: data.size});
		}

		if (data.type === "color") {
			result = await Color.create({color: data.color});
		}

		if (data.type === "gender") {
			result = await Gender.create({gender: data.gender});
		}

		if (data.type === "material") {
			result = await Material.create({material: data.material});
		}

		if (data.type === "tag") {
			result = await Tag.create({tag: data.tag});
		}

		if (data.type === "category") {
			result = await Category.create({category: data.category});
		}

		if (!result) {
			throw new Error("Attribute not inserted");
		}

		return result;
	},

	attributes : async (data:attributeData) => {
		let result = null;
		if(data.type === "size"){
			result = await Sizes.find();	
		}

		if(data.type === "color"){
			result = await Color.find();
		}

		if(data.type === "gender"){
			result = await Gender.find();
		}

		if(data.type === "material"){
			result = await Material.find();
		}

		if(data.type === "tag"){
			result = await Tag.find();
		}

		if(data.type === "category"){
			result = await Category.find();
		}

		return result;
	},	

	getAllAttributes : async () => {
		let result = null;

		const sizeArr = await Sizes.find();	
		const colorArr = await Color.find();
		const genderArr = await Gender.find();
		const materialArr = await Material.find();
		const tagArr = await Tag.find();
		const categoryArr = await Category.find();
		return {sizeArr,colorArr,genderArr,materialArr,tagArr,categoryArr};
	},

	deleteAttr : async (data:attributeDeleteData) => {
		let result = null;
		if(data.type === "size"){
			result = await Sizes.deleteOne({_id:data.id});
		}

		if(data.type === "color"){
			result = await Color.deleteOne({_id:data.id});
		}

		if(data.type === "gender"){
			result = await Gender.deleteOne({_id:data.id});
		}

		if(data.type === "material"){
			result = await Material.deleteOne({_id:data.id});
		}

		if(data.type === "tag"){
			result = await Tag.deleteOne({_id:data.id});
		}

		if(data.type === "category"){
			result = await Category.deleteOne({_id:data.id});
		}

		return result;
	}
};

export default AttrServices;