import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already taken"],
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("User", userSchema);
