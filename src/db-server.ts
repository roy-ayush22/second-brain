require("dotenv").config();
import mongoose from "mongoose";

const dbURL: string = process.env.MONGO_URL as string;

const dbConnection = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("connected to db!!");
  } catch (err) {
    console.log("connection to db failed", err);
  }
};

export default dbConnection;
