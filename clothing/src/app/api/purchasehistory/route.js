import { User } from "../Model/Authentication";
import connectMongoDB from "../Connection";

export async function POST(request) {
  console.log("😍😍😍😍");

  try {
    await connectMongoDB();

    const { userId, products, totalAmount, timestamp, addressId } = await request.json(); 
console.log(addressId)
    
    const user = await User.findById(userId);

    if (!user) {
      return new Response(
        JSON.stringify({ error: "User not found" }),
        { status: 404 }
      );
    }

    
    const addressExists = user.address.some(
      (addr) => addr._id.toString() === addressId
    );

    if (!addressExists) {
      return new Response(
        JSON.stringify({ error: "Address not found" }),
        { status: 400 }
      );
    }

    if (!user.purchaseHistory) {
      user.purchaseHistory = [];
    }

    
    const purchaseItems = products.map((product) => ({
      productId: product.productId,
      quantity: product.quantity,
      totalPrice: product.totalPrice,
    }));

    
    user.purchaseHistory.push({
      products: purchaseItems,
      totalAmount,
      timestamp,
      addressId, 
    });

    
    await user.save();

    return new Response(
      JSON.stringify({ message: "Purchase history updated" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to save purchase history" }),
      { status: 500 }
    );
  }
}
