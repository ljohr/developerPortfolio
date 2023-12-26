import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

const PORT = process.env.PORT || 4000;
const app = express;
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Running on PORT", PORT);
  } catch (error) {
    console.error("Connection error: ", error);
    throw error;
  }
};

connectDB();
