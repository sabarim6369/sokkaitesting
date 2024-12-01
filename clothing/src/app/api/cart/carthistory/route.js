import connectMongoDB from "../../Connection";
import { User } from '../../Model/Authentication'; 

export async function GET(request) {
  try {
    await connectMongoDB();
console.log("hello bhai")
const url = new URL(request.url);
const userId = url.searchParams.get('userId');
    if (!userId) {
      return new Response(JSON.stringify({ error: 'User ID is required' }), { status: 400 });
    }

    const user = await User.findById(userId)
      .populate('purchaseHistory.products.productId') 
      .populate('purchaseHistory.addressId'); 

    // if (!user) {
    //   return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    // }

    return new Response(JSON.stringify({ purchaseHistory: user.purchaseHistory }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
