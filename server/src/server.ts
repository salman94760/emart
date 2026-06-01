import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectDB from "./config/mongooseDb";

import authRoutes from "./modules/auth/auth.routes";
import attrRoutes from "./modules/attributes/attr.routes";
import productRoutes from "./modules/product/product.routes";

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use(attrRoutes);
app.use(productRoutes);

const PORT = process.env.PORT || 4002;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});