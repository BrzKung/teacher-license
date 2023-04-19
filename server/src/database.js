import mongoose from "mongoose";

import { MONGODB_URI } from "./config.js";

async function connectDatabase() {
  const uri = MONGODB_URI; // Replace with your MongoDB connection string
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default connectDatabase;
