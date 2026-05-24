import ProductController from "./product.controller";
import express from "express";

const router = express.Router();

router.post("/add/product", ProductController.AddProduct);
router.post("/product", ProductController.Product);

export default router;