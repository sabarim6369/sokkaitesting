"use client";
import Head from "next/head";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Homepage.module.css";
import a1 from "../../public/images/login/a3.jpg";
import a2 from "../../public/images/login/a5.jpg";
import a3 from "../../public/images/homepage/a2.jpg";
import a4 from "../../public/images/homepage/a5.jpg";
import a5 from "../../public/images/homepage/a4.png";
import a6 from "../../public/images/cart/a1.jpg";
import a7 from "../../public/images/cart/a2.jpg";
import a8 from "../../public/images/cart/a3.jpg";
import a9 from "../../public/images/cart/a4.jpg";
import a10 from "../../public/images/cart/a5.jpg";
import a11 from "../../public/images/cart/a6.jpg";
import watch from "../../public/images/homepage/watch.jpg";
import Image from "next/image";
import LoaderComponent from '../loader1/loader';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const [currentPair, setCurrentPair] = useState(0);
  const searchRef = useRef(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        const fetchedProducts = response.data;
        console.log(fetchedProducts);

        setProducts(fetchedProducts);
        setFilteredProducts(filtered);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };
  const imagePairs1 = [watch, a1, watch];
  const imagePairs = [
    "https://st4.depositphotos.com/1007995/20729/i/450/depositphotos_207295690-stock-photo-handsome-leader-young-men-black.jpg",
  ];

  const nextImage = () => {
    setCurrentPair((prev) => (prev + 1) % imagePairs.length);
  };
  const nextImage1 = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePairs.length);
  };
  const prevImage1 = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + imagePairs.length) % imagePairs.length
    );
  };
  const prevImage = () => {
    setCurrentPair(
      (prev) => (prev - 1 + imagePairs.length) % imagePairs.length
    );
  };
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const interval = setInterval(nextImage, 2000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval1 = setInterval(nextImage1, 2000);
    return () => clearInterval(interval1);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>
      <header className="flex items-center justify-between px-4 py-4 shadow-md bg-white">
        {/* Brand Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-black">S</span>
          <span className="text-black">O</span>
          <span className="text-blue-600">K</span>
          <span className="text-black">K</span>
          <span className="text-black">A</span>
          <span className="text-black">I</span>
        </h1>

        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search for products, brands, and more"
          />
        </div>
        <div>
          <h1 className="hidden lg:block">hello</h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              className="text-gray-700 hover:text-blue-500 p-2"
              aria-label="Filter"
              onClick={toggleFilter}
            >
              <i className="fas fa-filter text-lg lg:text-2xl"></i>
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

          <button
            className="lg:hidden text-gray-700 text-lg"
            onClick={() => setShowSearch(!showSearch)}
            aria-label="Open search bar"
          >
            <i className="fas fa-search"></i>
          </button>

          {/* Wishlist Icon */}
          <Link href="/frontend/Products/wishlist">
            <button
              className="text-gray-700 hover:text-blue-500 p-2"
              aria-label="Wishlist"
            >
              <i className="fas fa-heart text-lg lg:text-2xl"></i>
            </button>
          </Link>

          <Link href="/frontend/cart">
            <button
              className="text-gray-700 hover:text-blue-500 p-2"
              aria-label="Cart"
            >
              <i className="fas fa-shopping-cart text-lg lg:text-2xl"></i>
            </button>
          </Link>
        </div>

        {showSearch && (
          <div
            ref={searchRef}
            className="fixed top-0 left-0 z-40 flex items-center bg-white w-full px-4 py-2 shadow-lg transition-all duration-300 ease-in-out"
          >
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-gray-100 text-sm px-4 py-2 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Search input"
            />
            <button
              className="text-gray-700 p-2"
              onClick={() => setShowSearch(false)}
              aria-label="Close search bar"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        )}
      </header>

      <main className={styles.main}>
      <section className="relative flex flex-col lg:flex-row justify-between items-center my-8 max-w-screen-lg mx-auto h-[100px] lg:h-[120px] text-center bg-[#f8f9fa] overflow-hidden">
  <div className="flex w-full items-center justify-between relative">
    <div className="text-xl lg:text-2xl font-bold text-[#333] z-10 px-4 text-left max-w-full lg:max-w-[50%] relative lg:left-0 lg:top-0 lg:transform-none lg:translate-y-0">
      FLAT 40% OFF ON SHIRTS
    </div>

    {/* Image Section */}
    <div className="relative w-full lg:w-[50%] h-[100px] lg:h-[120px] bg-[#ececec] flex items-center justify-end">
      {/* Left Arrow */}
      <button onClick={prevImage} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none p-2 text-xl cursor-pointer z-10 rounded-full transition-all ease-in-out duration-300 hover:bg-opacity-70">
        &#10094;
      </button>

      {/* Image */}
      <div className="relative overflow-hidden w-full h-full">
        {imagePairs.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${currentPair}-${index}`}
            className={`w-full h-full object-contain transition-opacity duration-500 ${index === currentPair ? "opacity-100" : "opacity-0 absolute"}`}
          />
        ))}
      </div>

      {/* Right Arrow */}
      <button onClick={nextImage} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none p-2 text-xl cursor-pointer z-10 rounded-full transition-all ease-in-out duration-300 hover:bg-opacity-70">
        &#10095;
      </button>
    </div>
  </div>
</section>








        <section className={styles.trendingSection}>
          <div className={styles.trendingHeader}>
            <h3 className={styles.trendingTitle}>Trending Beach Shorts</h3>
            <Link href="/frontend/Products/all">
              <button className={styles.exploreButton}>Explore</button>
            </Link>
          </div>
          <div className={styles.trendingItemsWrapper}>
            {products.map((product) => (
              <div className={styles.itemWrapper} key={product.id}>
                <img
                  src={product.images[0]?.url}
                  alt="Short 2"
                  className={styles.itemImage}
                />
                <div className={styles.offerBadge}>Up to 30% Off</div>
              </div>
            ))}
          </div>

          <div className={styles.offerSection}>
            <p className={styles.offerText}>Exclusive offers for you!</p>
            <button className={styles.shopNowButton}>Shop Now</button>
          </div>
        </section>
        <section className="flex flex-wrap items-center p-4 border shadow-md relative">
          {/* Left Arrow */}
          <button
            onClick={prevImage1}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 text-4xl bg-gray-200 p-2 rounded-full transition-all duration-300"
            aria-label="Previous Image"
          >
            &#10094; {/* Left arrow symbol */}
          </button>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative">
            <Image
              src={imagePairs1[currentImageIndex]}
              alt="Accessories"
              className="rounded-lg  object-cover"
              style={{
                width: "700px", // Fixed width
                height: "300px", // Fixed height
              }}
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextImage1}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 text-4xl bg-gray-200 p-2 rounded-full transition-all duration-300"
            aria-label="Next Image"
          >
            &#10095; {/* Right arrow symbol */}
          </button>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mt-4 lg:mt-0 p-6 bg-indigo-100 rounded-lg  border-l-4 border-indigo-500">
            <h4 className="xl:text-3xl text-xl font-semibold uppercase mb-2 text-indigo-700">
              Get Gift Accessories for Purchases Over
            </h4>
            <h5 className="text-2xl font-bold text-indigo-600 mb-4">5000 RS</h5>
            <p className="text-md text-gray-600 mb-4">
              Shop our latest collection of clothing and accessories to qualify
              for exclusive offers.
            </p>
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-indigo-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6l4 2m0 0l4-2-4-2m0 0V6"
                />
              </svg>
              <span className="ml-2 text-indigo-600 font-semibold">
                Limited Time Offer
              </span>
            </div>
          </div>
        </section>

        <section className={styles.newArrivals}>
          <div className={styles.newArrivalsHeader}>
            <h3>New Arrivals</h3>
            <Link href="/frontend/Products/all">
              <button className={styles.exploreButton}>Explore</button>
            </Link>
          </div>
          <div className={styles.arrivalsItems}>
            {products.map((product) => (
              <div className={styles.itemWrapper} key={product.id}>
                <img
                  src={product.images[0]?.url}
                  alt="Short 2"
                  className={styles.itemImage}
                />
                <div className={styles.offerBadge}>Up to 30% Off</div>
              </div>
            ))}
          </div>
          <div className={styles.offerText}>
            <p>Exclusive offers for you!</p>
            <button className={styles.offerButton}>Shop Now</button>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>SOKKAI - Men Made Better</p>
        <div className={styles.socialIcons}>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">WhatsApp</a>
          <a href="#">X</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;