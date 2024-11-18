require("dotenv").config();
const mongoose = require("mongoose");

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
