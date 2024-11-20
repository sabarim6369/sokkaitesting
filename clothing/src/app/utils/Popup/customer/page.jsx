"use client";
import React, { useEffect } from "react";
import { FaDownload } from "react-icons/fa";

const Popup = ({ onClose, view }) => {
  useEffect(() => {
    if (view) {
      console.log("view working fine");
    }
  }, [view]);
  const data = {
    customerName: "Alice Johnson",
    couponStatus: "Applied - 10% Discount",
    totalPrice: 12450,
    transactions: [
      {
        date: "2024-11-15",
        amount: 500,
        product: "Cotton T-Shirt",
      },
      {
        date: "2024-11-14",
        amount: 2500,
        product: "Denim Jeans",
      },
      {
        date: "2024-11-13",
        amount: 3000,
        product: "Winter Jacket",
      },
      {
        date: "2024-11-12",
        amount: 1200,
        product: "Sports Shoes",
      },
      {
        date: "2024-11-10",
        amount: 4000,
        product: "Leather Handbag",
      },
      {
        date: "2024-11-08",
        amount: 1250,
        product: "Silk Scarf",
      },
    ],
  };

  return (
    view && (
      <div className="flex justify-center fixed items-center min-h-screen overflow-hidden bg-[#0000007b] z-50  w-full p-4">
        <div className="bg-white w-11/12 max-w-3xl p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Purchase Summary
            </h2>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-red-600 text-xl"
            >
              &times;
            </button>
          </div>

          <div className="mb-4">
            <p className="text-lg">
              <span className="font-semibold">Customer Name:</span>{" "}
              {data.customerName}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Coupon Status:</span>{" "}
              {data.couponStatus}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Total Price:</span> ₹
              {data.totalPrice}
            </p>
          </div>

          <div className="max-h-60 overflow-y-auto border-t border-gray-300 pt-4">
            <h3 className="text-xl font-semibold mb-2">Transaction History</h3>
            {data.transactions.length > 0 ? (
              data.transactions.map((transaction, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-3 rounded-lg mb-3 shadow-sm"
                >
                  <p>
                    <span className="font-semibold">Date:</span>{" "}
                    {transaction.date}
                  </p>
                  <p>
                    <span className="font-semibold">Amount:</span> ₹
                    {transaction.amount}
                  </p>
                  <p>
                    <span className="font-semibold">Product:</span>{" "}
                    {transaction.product}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No transactions found.</p>
            )}
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={() => alert("Downloading...")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700"
            >
              <FaDownload />
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
