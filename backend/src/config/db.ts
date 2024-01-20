import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    // if(!process.env.MONGO_URI) throw new Error("No MONGO_URI provided");
    const conn = await mongoose.connect("mongodb://localhost:27017/TaskManager");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;