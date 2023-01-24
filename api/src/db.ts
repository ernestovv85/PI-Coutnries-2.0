import mongoose, { connect } from "mongoose";

export async function startConnection() {
  mongoose.set("strictQuery", true);
  await connect("mongodb://127.0.0.1:27017/countries");
  console.log("Database is connected to");
}
