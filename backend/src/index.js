import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js"
import connectDB from "./config/db.config.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

// API routes
app.use("/api/auth", authRoute);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log("server started on port :", port);
});

connectDB();
