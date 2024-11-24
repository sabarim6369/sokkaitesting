'use client'
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import '@fortawesome/fontawesome-free/css/all.min.css';
import a1 from "../../../../public/images/cart/a1.jpg";
import a2 from "../../../../public/images/cart/a2.jpg";
import a3 from "../../../../public/images/cart/a3.jpg";
import a4 from "../../../../public/images/cart/a4.jpg";
import a5 from "../../../../public/images/cart/a5.jpg";

const ProductCard = ({ image, name, price, originalPrice }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-full h-80">
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
    <h2 className="mt-4 text-lg font-semibold text-gray-800">{name}</h2>
    <div className="flex items-center space-x-2 mt-2">
      <span className="text-lg font-bold text-black sm:text-xl md:text-2xl">
        {price} RS
      </span>
      <button className="ml-2 text-gray-600 hover:text-red-500">  <i className="fas fa-heart"></i></button>
    </div>
    {originalPrice && (
      <div className="mt-1 text-sm text-blue-400 line-through">
        {originalPrice} RS
      </div>
    )}
  </div>
);

const ProductsPage = () => {
  const [showSearch, setShowSearch] = useState(false); // State to toggle search bar visibility
  const searchRef = useRef(null); // Ref for the search bar container

  const products = [
    { id: 1, image: a1, name: "Maroon Royal Shirt", price: 778, originalPrice: 899 },
    { id: 2, image: a2, name: "Chinese White Kurta", price: 778, originalPrice: 899 },
    { id: 3, image: a3, name: "Burgundy Royal Shirt", price: 778, originalPrice: 899 },
    { id: 4, image: a4, name: "Chinese White Shirt", price: 778, originalPrice: 899 },
    { id: 5, image: a5, name: "Powder Blue Formal Shirt", price: 778, originalPrice: 899 },
    { id: 6, image: a5, name: "Powder Blue Formal Shirt", price: 778, originalPrice: 899 },
    { id: 7, image: a5, name: "Powder Blue Formal Shirt", price: 778, originalPrice: 899 },
    { id: 8, image: a5, name: "Powder Blue Formal Shirt", price: 778, originalPrice: 899 },
    { id: 9, image: a5, name: "Powder Blue Formal Shirt", price: 778, originalPrice: 899 },
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
    
    {/* <header className="flex items-center px-4 sm:px-6 py-4 bg-white text-black fixed top-0 left-0 w-full z-10 shadow-lg">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold flex-1">
        <span className="text-black">SO</span>
        <span className="text-blue-500">K</span>
        <span className="text-black">KA</span>
        <span className="text-yellow-500">I</span>
      </h1>

      <div className="flex-grow flex justify-end items-center space-x-4">
        <button
          className={`lg:hidden text-gray-700 text-lg sm:text-xl ${showSearch ? "hidden" : ""}`}
          onClick={() => setShowSearch(true)}
          aria-label="Open search bar"
        >
          <i className="fas fa-search"></i>
        </button>

        {showSearch && (
          <div
            ref={searchRef}
            className="flex-shrink-0 sm:w-2/5 md:w-1/3 lg:w-1/4 max-w-[calc(100%-100px)]"
          >
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-gray-100 text-sm sm:text-base lg:text-lg px-4 py-2 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Search input"
            />
          </div>
        )}

        <div className="hidden lg:flex flex-shrink-0 w-1/4 max-w-xs">
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-gray-100 text-sm sm:text-base lg:text-lg px-4 py-2 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search input large"
          />
        </div>

        <div className="flex space-x-4 text-gray-700 text-lg sm:text-xl">
          <button className="hover:text-blue-500" aria-label="Wishlist">
            <i className="fas fa-heart"></i>
          </button>
          <button className="hover:text-blue-500" aria-label="Cart">
            <i className="fas fa-shopping-cart"></i>
          </button>
          <button className="hover:text-blue-500" aria-label="User Profile">
            <i className="fas fa-user"></i>
          </button>
        </div>
      </div>
    </header> */}
      <div className="mt-20 p-6">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">SHIRTS</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
    </div>
  );
};

export default ProductsPage;
