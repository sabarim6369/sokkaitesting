"use client";
import React, { useState, useRef, useEffect } from "react";


export default function ClientHeader() {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center px-4 sm:px-6 py-4 bg-white text-black fixed top-0 left-0 w-full z-10 shadow-lg">
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
    </header>
  );
}