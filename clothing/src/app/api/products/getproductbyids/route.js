import Product from "../../Model/Product";
import { NextResponse } from "next/server"; 
import connectMongoDB from "../../Connection";

await connectMongoDB();

export async function POST(request) {  // Use POST instead of GET
  try {
    console.log("Received request to fetch products by IDs");

    const { ids } = await request.json(); // Extract ids from the body

    // Ensure ids are valid
    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: "Product IDs are required." }, { status: 400 });
    }

    // Fetch the products with the specified IDs
    const products = await Product.find({
      _id: { $in: ids },
    });

    // Check if no products are found
    if (!products || products.length === 0) {
      return NextResponse.json({ error: "Products not found." }, { status: 404 });
    }

    // Return the fetched products as a JSON response
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
