import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/vehicle-vista");

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected successfully");
});

mongoose.connection.on("error", (error) => {
  console.log("Connection Error:", error);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000!!");
});

app.use(express.json());

app.use("/server/user", userRouter);
app.use("/server/auth", authRouter);
