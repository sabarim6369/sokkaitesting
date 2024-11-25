import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String },
  phone: { type: String },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
