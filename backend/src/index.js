import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js"
import connectDB from "./config/db.config.js";
dotenv.config();

const app = express();
app.use(express.json());

// API routes
app.use("/api/auth", authRoute);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log("server started on port :", port);
});

connectDB();
