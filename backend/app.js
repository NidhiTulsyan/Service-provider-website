import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from "./routers/UserRoutes.js";
dotenv.config();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/user",userRouter)

app.get("/", (req, res) => {
  res.send("hello, world!");
});

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("connected to datbase successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`server is running at ${port} at http://localhost:${port}`);
});
