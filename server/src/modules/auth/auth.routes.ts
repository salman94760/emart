import AuthController from "./auth.controller";
import express from "express";

const router = express.Router();

router.post("/register",AuthController.userRegister);
router.post("/login",AuthController.userLogin);

export default router;