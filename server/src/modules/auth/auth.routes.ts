import AuthController from "./auth.controller";
import express from "express";
import {authMiddleware} from "../../middleware/authMiddleware";

const router = express.Router();
router.get(
  "/check-auth",
  authMiddleware,
  (req, res) => {
  	console.log(req);
    res.status(200).json({
      success: true,
      user: (req as any).user
    });
  }
);
router.post("/register",AuthController.userRegister);
router.post("/login",AuthController.userLogin);

export default router;