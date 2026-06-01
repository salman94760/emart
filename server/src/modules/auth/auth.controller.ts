 import AuthServices from "./auth.services"; 
import { Request, Response } from "express";
const AuthController = {
	userRegister : async (req:Request,res:Response) => {
		try{
			const result = await AuthServices.registerUser(req.body);
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

	userLogin: async (
  req: Request,
  res: Response
) => {
  try {
    const result =
      await AuthServices.loginUser(req.body);

res.cookie("token", result.token, {
  httpOnly: true,
  secure: false, // localhost development
  sameSite: "lax",
  maxAge: 3 * 60 * 60 * 1000,
});

    res.status(200).json({
      success: true,
      user: result.user,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
}
}

export default AuthController;