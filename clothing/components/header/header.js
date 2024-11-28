"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from 'next/link';

export default function ClientHeader() {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

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
    <header className="flex items-center px-4 sm:px-6 py-4 bg-white text-black top-0 left-0 w-full z-10 shadow-lg relative">
      <h1
        className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold flex-1 ${showSearch ? 'hidden' : ''}`}
      >
        <span className="text-black">SO</span>
        <span className="text-blue-500">K</span>
        <span className="text-black">KA</span>
        <span className="text-yellow-500">I</span>
      </h1>

      <div className="flex-grow flex justify-end items-center space-x-4 relative">
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
            className="absolute top-0 left-0 w-full h-full bg-white z-20 flex items-center justify-center"
          >
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-gray-100 text-sm sm:text-base lg:text-lg px-4 py-2 rounded-full w-4/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

        <div className="flex items-center space-x-4 text-gray-700 text-lg sm:text-xl lg:space-x-8 lg:text-2xl">
          {/* Filter Dropdown */}
          <div className="relative">
            <button
              className="hover:text-blue-500"
              aria-label="Filter"
              onClick={toggleFilter}
            >
              <i className="fas fa-filter"></i>
            </button>
            {isFilterOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <ul className="text-gray-700 text-base">
                  <li className="hover:bg-gray-100">
                    <Link
                      href="/frontend/Products/shirts"
                      className="block px-4 py-2"
                    >
                      Shirts
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link
                      href="/frontend/Products/trousers"
                      className="block px-4 py-2"
                    >
                      Trousers
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link
                      href="/frontend/Products/pants"
                      className="block px-4 py-2"
                    >
                      Pants
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Home Button */}
          <button className="hover:text-blue-500" aria-label="Home">
            <Link href="/">
              <i className="fas fa-home"></i>
            </Link>
          </button>

          {/* Wishlist Button */}
          <button className="hover:text-blue-500" aria-label="Wishlist">
            <Link href="/frontend/Products/wishlist">
              <i className="fas fa-heart"></i>
            </Link>
          </button>

          {/* Cart Button */}
          <button className="hover:text-blue-500" aria-label="Cart">
            <Link href="/frontend/cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </button>

          {/* User Profile Button */}
          <button className="hover:text-blue-500" aria-label="User Profile">
            <Link href="/frontend/profile">
              <i className="fas fa-user"></i>
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}
