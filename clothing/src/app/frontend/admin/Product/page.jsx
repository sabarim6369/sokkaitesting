"use client";
import React, { useState, useEffect } from "react";
import SideBar from "@/app/utils/SideBar/page";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import Updateform from "@/app/utils/Popup/UpdateForm/page";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductsPage = () => {
  const [greeting, setGreeting] = useState("");
  const products = [
    {
      id: 1,
      name: "Stylish Jacket",
      price: "$49.99",
      totalPurchases: 120,
      available: true,
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQcsy4CVALNrsD0vbh8win4dxB0BtZqZzNF2OrPBOfW51AtSL7kThhHiSW5GnGDGPmapvgEqQ85kZK058qYpv6tzR_6j6trfGDsXeNBUt60rerQHmKYb4hCxw",
    },
    {
      id: 2,
      name: "Classic T-Shirt",
      price: "$19.99",
      totalPurchases: 200,
      available: false,
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSnQfxR8Pgyf5PCmeQplhwiUwEGG1Pf9HNgFEjliVokAZhfAkuNNIO1zBKt2hJceKS8tqIWxGlbZJFkFo_K2xYmKtGtaKFbpYJ2Q6lnDzE9",
    },
    {
      id: 3,
      name: "Stylish Jacket",
      price: "$49.99",
      totalPurchases: 120,
      available: true,
      image:
        "https://cdn.rajwadi.com/image/cache/data/peach-color-indowestern-in-silk-fabric-47113-297x408.jpg",
    },
    {
      id: 4,
      name: "Classic T-Shirt",
      price: "$19.99",
      totalPurchases: 200,
      available: false,
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSnQfxR8Pgyf5PCmeQplhwiUwEGG1Pf9HNgFEjliVokAZhfAkuNNIO1zBKt2hJceKS8tqIWxGlbZJFkFo_K2xYmKtGtaKFbpYJ2Q6lnDzE9",
    },
    {
      id: 5,
      name: "Stylish Jacket",
      price: "$49.99",
      totalPurchases: 120,
      available: true,
      image:
        "https://successmenswear.com/cdn/shop/files/Z1_550x.jpg?v=1714477615",
    },
    {
      id: 6,
      name: "Classic T-Shirt",
      price: "$19.99",
      totalPurchases: 200,
      available: false,
      image:
        "https://cdn.rajwadi.com/image/cache/data/peach-color-indowestern-in-silk-fabric-47113-297x408.jpg",
    },
    {
      id: 7,
      name: "Stylish Jacket",
      price: "$49.99",
      totalPurchases: 120,
      available: true,
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQcsy4CVALNrsD0vbh8win4dxB0BtZqZzNF2OrPBOfW51AtSL7kThhHiSW5GnGDGPmapvgEqQ85kZK058qYpv6tzR_6j6trfGDsXeNBUt60rerQHmKYb4hCxw",
    },
    {
      id: 8,
      name: "Classic T-Shirt",
      price: "$19.99",
      totalPurchases: 200,
      available: false,
      image:
        "https://successmenswear.com/cdn/shop/files/FW_550x.jpg?v=1702723086",
    },
    {
      id: 9,
      name: "Stylish Jacket",
      price: "$49.99",
      totalPurchases: 120,
      available: true,
      image:
        "https://successmenswear.com/cdn/shop/files/Z1_550x.jpg?v=1714477615",
    },
    {
      id: 10,
      name: "Classic T-Shirt",
      price: "$19.99",
      totalPurchases: 200,
      available: false,
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSnQfxR8Pgyf5PCmeQplhwiUwEGG1Pf9HNgFEjliVokAZhfAkuNNIO1zBKt2hJceKS8tqIWxGlbZJFkFo_K2xYmKtGtaKFbpYJ2Q6lnDzE9",
    },
    {
      id: 11,
      name: "Stylish Jacket",
      price: "$49.99",
      totalPurchases: 120,
      available: true,
      image:
        "https://successmenswear.com/cdn/shop/files/FW_550x.jpg?v=1702723086",
    },
    {
      id: 12,
      name: "Classic T-Shirt",
      price: "$19.99",
      totalPurchases: 200,
      available: false,
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSnQfxR8Pgyf5PCmeQplhwiUwEGG1Pf9HNgFEjliVokAZhfAkuNNIO1zBKt2hJceKS8tqIWxGlbZJFkFo_K2xYmKtGtaKFbpYJ2Q6lnDzE9",
    },
  ];
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [confirmName, setConfirmName] = useState("");
  const [showPopupUpdate, setPopupUpdate] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
      toast.success("Product deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete the product!");
    }
    setShowPopup(false);
    setSelectedProduct(null);
    setConfirmName("");
  };

  const openDeletePopup = (product) => {
    setShowPopup(true);
    setSelectedProduct(product);
    setConfirmName("");
  };
  const UpdateForm = () => {
    setPopupUpdate(true);
    console.log(showPopupUpdate);
  };
  const closePopup = () => {
    setShowPopup(false);
    setSelectedProduct(null);
    setConfirmName("");
  };

  return (
    <div className="relative">
      <ToastContainer />
      <SideBar />
      <div className="w-full font-Mona text-xl">
        <h1 className="text-2xl font-bold mt-9 xl:ml-[16.8%] text-black ml-3 font-Cabin mb-4">
          {greeting}, Vijay
        </h1>
        <div className="grid grid-cols-1 xl:ml-72 md:grid-cols-2 lg:grid-cols-3 xl:gap-6 gap-3 ml-3">
          {products.map((product) => (
            <div key={product.id}>
              <div className="bg-white shadow-lg border border-gray-300 rounded-lg p-6 flex flex-col items-center w-96 space-y-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-60 h-60 rounded-lg mb-4"
                />

                <div className="flex flex-col font-Cabin w-full space-y-2">
                  <div className="flex justify-between font-Cabin text-xl">
                    <span className="text-gray-500 text-xl font-semibold">
                      Name:
                    </span>
                    <span className="text-black text-xl font-bold">
                      {product.name}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500 text-xl font-semibold">
                      Price:
                    </span>
                    <span className="text-black text-xl font-bold">
                      {product.price}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500 text-xl font-semibold">
                      Stock Availability:
                    </span>
                    <span
                      className={`text-xl font-bold ${
                        product.available ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {product.available ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500 text-xl font-semibold">
                      Total Revenue:
                    </span>
                    <span className="text-black text-xl font-bold">
                      $
                      {parseInt(product.price.replace("$", "")) *
                        product.totalPurchases}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-4 mt-4">
                  <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                    <FaEdit onClick={UpdateForm} color="white" />
                  </button>
                  <button
                    onClick={() => openDeletePopup(product)}
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-700"
                  >
                    <FaTrashAlt color="white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-xl relative">
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <AiOutlineClose size={20} />
            </button>
            <h2 className="text-lg font-bold text-center mb-4">
              Confirm Deletion
            </h2>
            <p className="text-gray-600 mb-4">
              Type <b>{selectedProduct.name}</b> to confirm deletion.
            </p>
            <input
              type="text"
              value={confirmName}
              onChange={(e) => setConfirmName(e.target.value)}
              className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter product name"
            />
            <div className="flex justify-between">
              <button
                onClick={closePopup}
                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() =>
                  confirmName === selectedProduct.name
                    ? handleDelete(selectedProduct.id)
                    : toast.error("Product name does not match!")
                }
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <Updateform
        value={showPopupUpdate}
        onClose={() => setPopupUpdate(false)}
      />
    </div>
  );
};

export default ProductsPage;
