import bcrypt from "bcryptjs";
import	jwt 	from "jsonwebtoken";
import User from "../user/user.model";

type RegisterUserData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  type?: "user" | "admin";
};

type LoginUserData = {
  email: string;
  password: string;
};

const AuthServices = {
	registerUser : async (data:RegisterUserData) =>{
		let token = "";
		const {name,email,phone,password,type} = data;

		const exists = await User.findOne({email});

		if (exists) {
      		throw new Error("User already exists");
      	}

      	const hashPassword = await bcrypt.hash(password,10);

      	const newUser = await User.create({
      		name,email,phone,password:hashPassword,type
      	});

      	if(newUser){
      		token = jwt.sign(
      			{
      				userId:newUser._id
      			},
      			process.env.JWT_SECRET as string,
      			{
      				expiresIn:"2h"
      			}
      		)
      	}

      	return {
      		token,
      		user:newUser
      	}
	},

	loginUser: async (
  data: LoginUserData
) => {
  const { email, password } = data;

  const user = await User.findOne({
    email,
  });

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!isMatch) {
    throw new Error("Password not matched");
  }

  const token = jwt.sign(
    {
      userId: user._id,
    },

    process.env.JWT_SECRET as string,

    {
      expiresIn: "3h",
    }
  );

  
          return {
  success: true,
  token,
  user: {
    _id: user._id,
    userType: user.type,
    email: user.email,
    name: user.name,
  },
};
}
}

export default AuthServices;