import { User } from "../Model/Authentication";
import Product  from "../Model/Product";  // Assuming you have a Product model to manage products
import connectMongoDB from "../Connection";

export async function POST(request) {
  console.log("😍😍😍😍");

  try {
    await connectMongoDB();

    const { userId, products, totalAmount, timestamp, addressId } = await request.json();
    console.log(addressId);
    
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

    // Save the purchase history
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

    // Update the stock of each purchased product
    for (const product of products) {
      const productInDb = await Product.findById(product.productId);
      
      if (productInDb) {
        // Ensure that there is enough stock available
        if (productInDb.stock >= product.quantity) {
          productInDb.stock -= product.quantity; // Reduce stock
          await productInDb.save(); // Save updated product stock
          console.log(`Stock updated for product ${product.productId}`);
        } else {
          console.error(`Not enough stock for product ${product.productId}`);
          // Optionally return an error response if not enough stock is available
          return new Response(
            JSON.stringify({ error: `Not enough stock for product ${product.productId}` }),
            { status: 400 }
          );
        }
      } else {
        console.error(`Product not found for productId ${product.productId}`);
        return new Response(
          JSON.stringify({ error: `Product not found for productId ${product.productId}` }),
          { status: 404 }
        );
      }
    }

    return new Response(
      JSON.stringify({ message: "Purchase history updated and stock reduced" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to save purchase history or update stock" }),
      { status: 500 }
    );
  }
}
