const mongoose = require("mongoose");

let cachedConnection = null;
let cachedConnectionPromise = null;

const connectDB = async () => {
  if (cachedConnection) {
    return cachedConnection;
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not set");
  }

  if (cachedConnectionPromise) {
    return cachedConnectionPromise;
  }

  try {
    cachedConnectionPromise = mongoose.connect(process.env.MONGO_URI);
    cachedConnection = await cachedConnectionPromise;
    console.log("MongoDB connected");
    return cachedConnection;
  } catch (error) {
    cachedConnectionPromise = null;
    console.error("MongoDB connection error:", error.message);
    throw error;
  }
};

module.exports = connectDB;
