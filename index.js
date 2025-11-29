import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbConfig.js";

// Dotenv configure
dotenv.config();

const app = express();

const port = process.env.PORT;

// Default middleware
app.use(express.json());

app.use(cors());

// Database Connection
connectDB();

// Default route
app.get("/", (req, res) => {
  res.status(200).json("Welcome to Recipe backend");
});

app.listen(port, () => {
  console.log("Server running in ", port);
});
