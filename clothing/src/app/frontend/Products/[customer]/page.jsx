'use client';
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import a1 from "../../../../../public/images/cart/a1.jpg";
import a2 from "../../../../../public/images/cart/a2.jpg";
import a3 from "../../../../../public/images/cart/a3.jpg";
import a4 from "../../../../../public/images/cart/a4.jpg";
import a5 from "../../../../../public/images/cart/a5.jpg";

const ProductCard = ({images, name, price, description, category,productId }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-full h-[90vh] mb-4">
    <Link href={`/frontend/productdetails/${productId}`} passHref>
      <img
         src={images[0]?.url} 
        alt={name}
        layout="fill"
        style={{ objectFit: "cover",width:"100%",height:"100%" }}
                className="rounded-none"
      />
       </Link>
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

    {price && (
      <span className="mt-2 text-sm text-blue-500 line-through">
        {price} RS
      </span>
    )}
  </div>
);

const ProductsPage = ({ params }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const unwrappedParams = React.use(params);

    const { customer } = unwrappedParams || {};  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get("/api/products");
          const fetchedProducts = response.data;
          console.log(fetchedProducts)
  
          const filtered = customer
            ? fetchedProducts.filter(product => product.category === customer)
            : fetchedProducts;
  
          setProducts(fetchedProducts);
          setFilteredProducts(filtered);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      fetchProducts();
    }, [customer]);

  return (
    <div className="p-6">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
        {customer ? customer.toUpperCase() : "Products"}
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
            key={product._id} 
            productId={product._id}
            images={product.images}
            name={product.name}
            description={product.description}
            price={product.price}
            category={product.category}
            />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
