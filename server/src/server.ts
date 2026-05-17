import express  from "express";
import cors  	from "cors";
import dotenv  	from "dotenv";
import connectDB from "./config/mongooseDb";

import authRoutes from "./modules/auth/auth.routes";


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 4002;

app.listen(PORT,()=>{
	console.log(`Server running on PORT ${PORT}`);
})