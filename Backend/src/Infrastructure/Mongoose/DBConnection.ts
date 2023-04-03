import mongoose from "mongoose"

void (async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/DonPlay")
    console.log("database connect")
  } catch (ex) {
    console.log("Error connection DB")
  }
})()
