import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "../../../Model/AdminAuth";
import connectMongoDB from "@/app/api/Connection";

dotenv.config();
const secretKey = process.env.JWT_SECRET_TOKEN || "yourDefaultSecretKey";

export async function POST(request) {
  await connectMongoDB();
  console.log("POST method triggered");

  try {
    const { email, password } = await request.json();
    console.log("Received email and password:", email, password);

    // Find the admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return Response.json(
        { message: "Authentication failed: User not found" },
        { status: 404 }
      );
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return Response.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        userId: admin._id,
        email: admin.email,
        name: admin.name,
      },
      secretKey,
      { expiresIn: "7d" }
    );

    return Response.json(
      {
        message: "Admin login successful",
        token,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error during authentication:", err);
    return Response.json(
      {
        message: "Error in authentication",
        error: err.message,
      },
      { status: 500 }
    );
  }
}
