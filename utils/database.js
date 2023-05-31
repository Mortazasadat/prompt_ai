/** @format */

import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MONGOdB is already connected!");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "Share_Prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   bufferCommands: true,
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      //   useNewUrlParser: true,
      //   useCreateIndex: true,
    });
    isConnected = true;
    console.log("MONGODB Connected!");
  } catch (error) {
    console.log(error);
  }
};
