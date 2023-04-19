import { config as loadENV } from "dotenv";

loadENV();

export const PORT = process.env.PORT || 3001;
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017";
