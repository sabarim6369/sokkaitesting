'use client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState, useEffect } from 'react';
import a1 from "../../../../public/images/homepage/a5.jpg"
import a2 from "../../../../public/images/cart/a1.jpg"
import a3 from "../../../../public/images/cart/a2.jpg"
import a4 from "../../../../public/images/cart/a3.jpg"
import a5 from "../../../../public/images/cart/a4.jpg"
import a6 from "../../../../public/images/cart/a5.jpg"
import a7 from "../../../../public/images/cart/a6.jpg"
import Image from "next/image";
import "./cart.css";

export default function Cart() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showPurchaseButton, setShowPurchaseButton] = useState(true); 
  const [showMobileFooter, setShowMobileFooter] = useState(true); // Track mobile footer visibility
  const images = [a1, a2, a3, a4, a5, a6, a7];

  const handleCheckboxChange = (itemId, price) => {
    setSelectedItems((prevSelected) => {
      if (prevSelected.includes(itemId)) {
        return prevSelected.filter(id => id !== itemId);
      } else {
        return [...prevSelected, itemId];
      }
    });
  };

  const handleNavigateBack = () => {
    setShowPurchaseButton(false); 
  };

  const calculateTotal = () => {
    const prices = {
      1: 624,
      2: 750,
      3: 500,
      4: 400,
      5: 900,
      6: 200,
      7: 320,
      8: 150,
      9: 500,
    };
    return selectedItems.reduce((total, itemId) => total + prices[itemId], 0);
  };

  // Detect scroll position to hide mobile footer when reaching the price section
  useEffect(() => {
    const handleScroll = () => {
      const priceSection = document.getElementById('price-section');
      const mobileFooter = document.getElementById('mobile-footer');
      if (priceSection && mobileFooter) {
        const priceSectionTop = priceSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        // Hide the mobile footer when the price section is in view
        if (priceSectionTop <= windowHeight) {
          setShowMobileFooter(false);
        } else {
          setShowMobileFooter(true);
        }
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}


      {/* CART Heading */}
      <div className="flex flex-col md:flex-row justify-between p-4 pt-20">
        <div className="flex-1 overflow-y-auto max-h-[calc(100vh-160px)] space-y-6 pr-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <div
              key={item}
              className="flex items-center border rounded-md p-4 bg-gray-50 sm:h-32 md:h-40 lg:h-48 overflow-hidden relative shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <input
                type="checkbox"
                className="custom-checkbox text-blue-500 absolute top-2 right-2"
                checked={selectedItems.includes(item)}
                onChange={() => handleCheckboxChange(item, 624)}
              />
              <Image
                src={images[index % images.length]} // Use modulo to cycle images
                alt={`product-${item}`}
                className="w-20 sm:w-24 h-20 sm:h-24 object-cover rounded-md shadow-md"
              />
              <div className="ml-4 flex-1">
                <h2 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 hover:text-blue-500">
                  GREY TRACK PANTS
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mt-1">SIZE: 34</p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">COUNT: 1</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
                    624 RS
                  </p>
                  <p className="text-blue-800 font-bold text-xs sm:text-sm md:text-base lg:text-lg line-through text-gray-500">
  879 RS
</p>

                </div>
                <p className="text-green-800 font-bold text-xs sm:text-sm md:text-base lg:text-lg mt-1">
  SAVED 255 RS
</p>

              </div>

              {/* Icons Section */}
              <div className="flex flex-col items-center space-y-2 ml-4">
                <button className="text-gray-700 hover:text-blue-500 text-xl sm:text-2xl transform hover:scale-110 transition-all duration-300">
                  <i className="fas fa-heart"></i>
                </button>
                <button className="text-gray-700 hover:text-red-500 text-xl sm:text-2xl transform hover:scale-110 transition-all duration-300">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Fixed Sections */}
        <div className="mt-6 md:mt-0 md:ml-8 md:w-1/3 space-y-6">
          {/* Coupon Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <label className="block text-sm text-gray-700 mb-2">Enter Coupon Code:</label>
            <input
              type="text"
              placeholder="Enter the coupon code..."
              className="border px-4 py-2 w-full mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base lg:text-lg"
            />
            <button className="bg-black text-white px-6 py-2 rounded-md w-full text-sm sm:text-base lg:text-lg hover:bg-gray-800 transition-all duration-300">
              APPLY COUPON
            </button>
            <button className="mt-4 text-blue-500 underline w-full hidden md:block text-sm sm:text-base lg:text-lg">
              AVAILABLE COUPONS
            </button>
          </div>

          {/* Price Section */}
          <div id="price-section" className="bg-gray-50 p-6 rounded-lg text-sm sm:text-base lg:text-lg shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between">
              <span>Total MRP</span>
              <span>{calculateTotal()} RS</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-500">-413 RS</span>
            </div>
            <div className="flex justify-between">
              <span>Coupon Discount</span>
              <span className="text-green-500">-200 RS</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charge</span>
              <span>30 RS</span>
            </div>
            <div className="flex justify-between font-bold text-lg sm:text-xl lg:text-2xl mt-2">
              <span>Grand Total</span>
              <span>{calculateTotal() + 30} RS</span>
            </div>
            <p className="text-green-500 text-sm sm:text-base lg:text-lg mt-1">SAVINGS 583 RS</p>

          </div>

          {/* Purchase Button */}
          <div className="mt-6">
            <button className="bg-black text-white px-8 py-3 rounded-md w-full text-lg font-bold sm:text-xl lg:text-2xl hover:bg-gray-800 transition-all duration-300">
              PURCHASE NOW
            </button>
          </div>
        </div>
      </div>

      {/* Mobile-specific buttons for Coupon and Purchase */}
      <div className={`block md:hidden fixed bottom-4 left-4 w-full px-6 ${showMobileFooter ? "" : "hidden"}`}>
        <div className="space-y-4">
          <button className="bg-black text-white px-6 py-3 rounded-md w-full text-lg font-bold sm:text-xl">
            PURCHASE
          </button>
        </div>
      </div>

      {/* Fixed Price Section for Mobile */}
      <div id="mobile-footer" className={`block md:hidden fixed bottom-0 left-0 w-full bg-gray-50 p-4 z-20 ${showMobileFooter ? "" : "hidden"}`}>
        <div className="flex justify-between">
          <span>Total MRP</span>
          <span>{calculateTotal()} RS</span>
        </div>
        <div className="flex justify-between">
          <span>Grand Total</span>
          <span>{calculateTotal() + 30} RS</span>
        </div>
        <button className="bg-black text-white px-8 py-3 rounded-md w-full text-lg font-bold sm:text-xl mt-4">
          PURCHASE
        </button>
      </div>
    </div>
  );
}
