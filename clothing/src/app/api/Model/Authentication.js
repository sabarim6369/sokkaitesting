import mongoose from "mongoose";


const addressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, enum: ['HOME', 'WORK', 'OTHER'], default: 'HOME' }
});


const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String },
  phone: { type: String },
  password: { type: String },
  address: { type: [addressSchema], default: [] }, 
  role: { type: String, default: 'customer' }
});

const Address = mongoose.models.Address || mongoose.model("Address", addressSchema);
const User = mongoose.models.User || mongoose.model("User", userSchema);

export { User, Address };
