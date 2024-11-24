require("dotenv").config();
// const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
// const app = express();
// app.use(cors({ origin: "http://localhost:3000" }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
const connectMongoDB = async () => {
  console.log(process.env.MONGODB_URI);
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected successfully to MongoDB");
  } catch (error) {
    console.log("Error occurred during MongoDB connection: 😒", error);
    throw new Error("Could not connect to MongoDB");
  }
};
module.exports = connectMongoDB;
