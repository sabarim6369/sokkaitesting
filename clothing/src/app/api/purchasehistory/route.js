import { User } from "../Model/Authentication";
import connectMongoDB from "../Connection";

export async function POST(request) {
  console.log("😍😍😍😍");

  try {
    await connectMongoDB();

    const { userId, products, totalAmount, timestamp } = await request.json();  // Properly parse the request body

    const user = await User.findById(userId);

    if (!user) {
      return new Response(
        JSON.stringify({ error: 'User not found' }),
        { status: 404 }
      );
    }

    if (!user.purchaseHistory) {
      user.purchaseHistory = [];
    }

    const purchaseItems = products.map(product => ({
      productId: product.productId,
      quantity: product.quantity,
      totalPrice: product.totalPrice
    }));

    user.purchaseHistory.push({
      products: purchaseItems,
      totalAmount,
      timestamp
    });

    await user.save();

    return new Response(
      JSON.stringify({ message: 'Purchase history updated' }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Failed to save purchase history' }),
      { status: 500 }
    );
  }
}
