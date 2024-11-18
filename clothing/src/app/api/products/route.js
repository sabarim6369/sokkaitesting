import multer from "multer";
import Product from "../Model/Product";
console.log("File triggered");

const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png/;
  const mimeType = fileTypes.test(file.mimetype);
  const extname = fileTypes.test(file.originalname.toLowerCase());
  if (mimeType && extname) {
    return cb(null, true);
  }
  return cb(
    new Error("Invalid file type. Only JPG, JPEG, PNG are allowed."),
    false
  );
};

const upload = multer({ storage, fileFilter });

export async function POST(request) {
  try {
    const form = await request.formData();
    const name = form.get("name");
    const description = form.get("description");
    const price = form.get("price");
    const category = form.get("category");
    const stock = form.get("stock");
    const brand = form.get("brand");
    const files = form.getAll("images");

    if (!files || files.length === 0) {
      return Response.json(
        { error: "No files were uploaded" },
        { status: 400 }
      );
    }

    const images = await Promise.all(
      files.map(async (file) => {
        const buffer = await file.arrayBuffer(); // Convert file to buffer
        return {
          data: Buffer.from(buffer), // Create a Buffer from the ArrayBuffer
          contentType: file.type,
          alt: name,
        };
      })
    );

    const newProduct = new Product({
      name,
      description,
      price,
      category,
      stock,
      brand,
      images,
    });

    const savedProduct = await newProduct.save();
    return Response.json(savedProduct, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}

export async function GET() {
  try {
    const products = await Product.find();

    const productsWithImages = products.map((product) => {
      const productWithImages = product.toObject();
      productWithImages.images = productWithImages.images.map((image) => {
        return {
          ...image,
          data: image.data.toString("base64"),
        };
      });
      return productWithImages;
    });

    return Response.json(productsWithImages, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
export async function PUT(request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    console.log("ID : ", id);

    // Check if the ID is valid (you can uncomment this if you want validation)
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return Response.json({ error: "Invalid product ID" }, { status: 400 });
    // }

    const form = await request.formData();
    const name = form.get("name");
    const description = form.get("description");
    const price = form.get("price");
    const category = form.get("category");
    const stock = form.get("stock");
    const brand = form.get("brand");
    const files = form.getAll("images");

    let images = [];

    if (files && files.length > 0) {
      images = await Promise.all(
        files.map(async (file) => {
          const buffer = await file.arrayBuffer();
          return {
            data: Buffer.from(buffer),
            contentType: file.type,
            alt: name,
          };
        })
      );
    }

    const updatedData = {
      name,
      description,
      price,
      category,
      stock,
      brand,
      images, // Only include updated images if provided
      updatedAt: Date.now(),
    };

    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedProduct) {
      return Response.json({ error: "Product not found" }, { status: 404 });
    }

    return Response.json(updatedProduct, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
export async function DELETE(request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return Response.json({ error: "Product not found" }, { status: 404 });
    }
    return Response.json(
      { message: "Product deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
