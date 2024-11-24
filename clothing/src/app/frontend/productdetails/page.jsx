'use client'
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import '@fortawesome/fontawesome-free/css/all.min.css';
import a1 from "../../../../public/images/cart/a1.jpg";
import a2 from "../../../../public/images/cart/a2.jpg";
import a3 from "../../../../public/images/cart/a3.jpg";
import a4 from "../../../../public/images/cart/a4.jpg";
import a5 from "../../../../public/images/cart/a5.jpg";

const ProductsPage = () => {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  const similarProducts = [
    { id: 1, image: a1, name: "Never Mind Brown T-Shirt", price: 778, originalPrice: 899 },
    { id: 2, image: a2, name: "Mocha Coffee Riding Jacket", price: 778, originalPrice: 899 },
    { id: 3, image: a3, name: "Drop Shoulder White T-Shirt", price: 778, originalPrice: 899 },
    { id: 4, image: a4, name: "Minimal White Formal Shirt", price: 778, originalPrice: 899 },
  ];

  // Close search bar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false); // Close search bar if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      {/* Product Details */}
      <div className="mt-20 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Product Images */}
          <div className="space-y-4">
            <Image src={a1} alt="Main Product" className="rounded-lg" />
            <div className="grid grid-cols-3 gap-2">
              <Image src={a2} alt="Thumbnail" className="rounded-md" />
              <Image src={a3} alt="Thumbnail" className="rounded-md" />
              <Image src={a4} alt="Thumbnail" className="rounded-md" />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Peach Design Printed Shirt</h1>
            <div className="text-xl text-blue-500 mt-2">620 RS</div>
            <div className="text-lg text-gray-400 line-through">879 RS</div>
            <div className="mt-4">
              <span className="font-semibold text-gray-700">Sizes:</span>
              <div className="flex space-x-4 mt-2">
                <button className="px-4 py-2 border rounded-md hover:bg-gray-200">S</button>
                <button className="px-4 py-2 border rounded-md hover:bg-gray-200">M</button>
                <button className="px-4 py-2 border rounded-md hover:bg-gray-200">L</button>
                <button className="px-4 py-2 border rounded-md hover:bg-gray-200">XL</button>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <button className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow-lg">Order</button>
              <button className="px-6 py-2 border rounded-lg">Wishlist</button>
              <button className="px-6 py-2 border rounded-lg">Cart</button>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarProducts.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <Image src={product.image} alt={product.name} className="rounded-lg" />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <div className="text-lg text-blue-500">{product.price} RS</div>
              <div className="text-sm text-gray-400 line-through">{product.originalPrice} RS</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
