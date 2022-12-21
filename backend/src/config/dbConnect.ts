import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const dbConnect = () => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(process.env.MONGO_URI as string, {
    dbName: "easybus",
  });
};

export default dbConnect;
