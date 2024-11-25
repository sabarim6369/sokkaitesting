'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import '@fortawesome/fontawesome-free/css/all.min.css';
import a1 from "../../../../../public/images/cart/a1.jpg";
import a2 from "../../../../../public/images/cart/a2.jpg";
import a3 from "../../../../../public/images/cart/a3.jpg";
import a4 from "../../../../../public/images/cart/a4.jpg";
import a5 from "../../../../../public/images/cart/a5.jpg";

// ProductCard component remains the same
const ProductCard = ({ image, name, price, originalPrice }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-full h-[90vh] mb-4">
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="rounded-none"
      />
    </div>

    <h2 className="text-lg font-medium text-black">{name.toUpperCase()}</h2>

    <div className="flex items-center space-x-2 mt-1">
      <span className="text-xl font-bold text-black">
        {price} RS
      </span>
      <button className="mt-1 text-gray-500 hover:text-red-500">
        <i className="fas fa-heart"></i>
      </button>
    </div>

    {originalPrice && (
      <span className="mt-2 text-sm text-blue-500 line-through">
        {originalPrice} RS
      </span>
    )}
  </div>
);

const ProductsPage = ({ params }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);

  // Use React.use() to unwrap the params promise
  const unwrappedParams = React.use(params);

  // Access customer once unwrapped
  const { customer } = unwrappedParams || {};  

  useEffect(() => {
    const fetchProducts = async () => {
      if (customer === "wishlist") {
        const wishlistData = [
          { id: 1, image: a1, name: "Wishlist Item 1", price: 500, originalPrice: 600 },
          { id: 2, image: a2, name: "Wishlist Item 2", price: 400, originalPrice: 500 },
        ];
        setProducts(wishlistData);
      } else if (customer === "shirts") {
        const shirtsData = [
          { id: 1, image: a3, name: "Maroon Royal Shirt", price: 778, originalPrice: 899 },
          { id: 2, image: a4, name: "Chinese White Kurta", price: 778, originalPrice: 899 },
        ];
        setProducts(shirtsData);
      } else if (customer === "somecategory") {
        const someData = [
          { id: 1, image: a5, name: "Some Item", price: 999 },
          { id: 2, image: a3, name: "Another Item", price: 799 },
        ];
        setProducts(someData);
      } else {
        const defaultData = [
          { id: 1, image: a1, name: "Product 1", price: 500 },
          { id: 2, image: a2, name: "Product 2", price: 600 },
        ];
        setProducts(defaultData);
      }
    };

    if (customer) {
      fetchProducts();
    }
  }, [customer]); 

  return (
    <div className="p-6">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
        {customer ? customer.toUpperCase() : "Products"}
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            originalPrice={product.originalPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
