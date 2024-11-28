import {Wishlist} from "../Model/customerdata"
import connectMongoDB from "../Connection";
export async function POST(request) {
  await connectMongoDB();

  try {
    const { userId, productId } = await request.json();
    console.log("consoling the productid ",productId)
    console.log("Received UserId:", userId);

    
    let user = await Wishlist.findOne({ userid: userId });

    if (!user) {
      console.log("User not found, creating a new user...");

      
      user = new Wishlist({ userid: userId, products: [] });
    }

    
    const productInCart = user.products.find(
      (item) => item.toString() === productId
    );

    if (!productInCart) {
      
      user.products.push( productId );
    }

    
    await user.save();

    return Response.json(
      { message: "Product added to wishlist", cart: user.products },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding product to wishlist:", error);
    return Response.json({ error: error.message }, { status: 400 });
  }
}
export async function DELETE(request) {
  await connectMongoDB();
  try {
    const { userId, productId } = await request.json();
    const user = await User.findOne({ userId });

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    user.wishlist = user.wishlist.filter((id) => id.toString() !== productId);
    await user.save();

    return Response.json(
      { message: "Product removed from wishlist", wishlist: user.wishlist },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}