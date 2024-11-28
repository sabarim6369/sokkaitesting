import mongoose from "mongoose";

// Product schema
const productSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true, 
      trim: true 
    },
    description: { 
      type: String, 
      required: true 
    },
    price: { 
      type: Number, 
      required: true, 
      min: 0 
    },
    originalprice:{
      type:Number,
      required:true,
      min:0
    },
    category: { 
      type: String, 
      required: true 
    },
    stock: { 
      type: Number, 
      required: true, 
      default: 0 
    },
    brand: { 
      type: String, 
      required: true 
    },
    images: [
      {
        url: { type: String, required: true }, 
        public_id: { type: String, required: true }
      }
    ],
    reviews: [  // Reviews are optional when the product is created
      {
        username: { 
          type: String, 
          required: true 
        },
        ratings: {
          type: Number,
          min: 0,
          max: 5, 
          required: true,
        },
        feedback: {
          type: String,
          trim: true,
          required: true,
        },
        createdAt: { 
          type: Date, 
          default: Date.now 
        },
      }
    ],
    numReviews: {
      type: Number,
      default: 0 // Initial value of 0 when the product is created
    },
    total_revenue: {
      type: Number,
      default: 0
    },
    createdAt: { 
      type: Date, 
      default: Date.now 
    },
    updatedAt: { 
      type: Date, 
      default: Date.now 
    },
  },
  { timestamps: true }
);

// Model for the product schema
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;