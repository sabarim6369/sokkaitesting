import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "../../../Model/AdminAuth";
import connectMongoDB from "@/app/api/Connection";

dotenv.config();
const secretKey = process.env.JWT_SECRET_TOKEN || "yourDefaultSecretKey";

export async function POST(request) {
  await connectMongoDB();

  try {
    const body = await request.json();
    const { name, email, password, phone } = body;

    console.log("Received data:", name, email, password, phone);

    const existingUser = await Admin.findOne({ email });
    if (existingUser) {
      return Response.json(
        {
          message: "User ID already exists",
          userid: existingUser,
        },
        { status: 401 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({
      name,
      email,
      password: hashedPassword,
      phone: String(phone),
    });

    await newAdmin.save();

    const token = jwt.sign(
      {
        email: newAdmin.email,
        name: newAdmin.name,
        role: newAdmin.role,
      },
      secretKey,
      { expiresIn: "7d" }
    );

    return Response.json(
      {
        message: "Admin registered successfully",
        token,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error during registration:", err);

    return Response.json(
      {
        message: "Error in registration",
        error: err.message,
      },
      { status: 500 }
    );
  }
}
