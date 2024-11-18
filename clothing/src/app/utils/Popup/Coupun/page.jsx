"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import couponCode from "coupon-code";
import { FaCheckCircle, FaClipboard, FaTimes, FaMagic } from "react-icons/fa";

const CouponPopup = ({ value, onClose }) => {
  const [couponData, setCouponData] = useState({
    couponName: "",
    discountPrice: "",
    couponCode: "",
  });
  useEffect(() => {
    if (value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [value]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCouponData({ ...couponData, [name]: value });
  };

  const generateCoupon = () => {
    const generatedCode = couponCode.generate();
    setCouponData({ ...couponData, couponCode: generatedCode });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(couponData.couponCode);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://your-api-endpoint.com/coupons",
        {
          name: couponData.couponName,
          price: couponData.discountPrice,
          code: couponData.couponCode,
        }
      );
      console.log("Coupon created successfully:", response.data);
    } catch (error) {
      console.error("Error creating coupon:", error);
    }
  };

  return (
    value && (
      <div className="bg-gray-600 bg-opacity-50 fixed inset-0 flex justify-center items-center z-50">
        <div
          className="bg-white p-8 rounded-lg shadow-lg w-96"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-black">
              Generate Coupon
            </h2>
            <button onClick={onClose} className="text-black">
              <FaTimes />
            </button>
          </div>
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-black">Coupon Name</label>
              <input
                type="text"
                name="couponName"
                value={couponData.couponName}
                onChange={handleInputChange}
                className="mt-2 p-2 border w-full"
              />
            </div>

            <div>
              <label className="block text-black">Discount Price</label>
              <input
                type="text"
                name="discountPrice"
                value={couponData.discountPrice}
                onChange={handleInputChange}
                className="mt-2 p-2 border w-full"
              />
            </div>

            <div>
              <label className="block text-black">Coupon Code</label>
              <div className="flex items-center mt-2">
                <input
                  type="text"
                  name="couponCode"
                  value={couponData.couponCode}
                  onChange={handleInputChange}
                  className="p-2 border w-full"
                />
                <button
                  onClick={generateCoupon}
                  className="ml-2 p-2 bg-blue-500 text-white"
                >
                  <FaMagic />
                </button>
                <button
                  onClick={copyToClipboard}
                  className="ml-2 p-2 bg-green-500 text-white"
                >
                  <FaClipboard />
                </button>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="mt-4 w-full bg-green-500 text-white p-2"
            >
              <FaCheckCircle className="mr-2" />
              Create Coupon
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CouponPopup;
