'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';
import a1 from '../../../../public/images/cart/a1.jpg';
import a2 from '../../../../public/images/cart/a2.jpg';
import a3 from '../../../../public/images/cart/a3.jpg';
import a4 from '../../../../public/images/cart/a4.jpg';
import a5 from '../../../../public/images/cart/a5.jpg';

const ProductsPage = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [reviews, setReviews] = useState([
    { id: 1, username: 'John Doe', rating: 5, comment: 'Amazing quality and fit!' },
    { id: 2, username: 'Jane Smith', rating: 4, comment: 'Loved the material, worth the price.' },
  ]);
  const [newReview, setNewReview] = useState({ username: '', rating: 0, comment: '' });
  const reviewsRef = useRef(null); 

  const handleReviewSubmit = () => {
    if (newReview.username && newReview.rating > 0 && newReview.comment) {
      setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
      setNewReview({ username: '', rating: 0, comment: '' });
    }
  };

  const similarProducts = [
    { id: 1, image: a1, name: 'Never Mind Brown T-Shirt', price: 778, originalPrice: 879 },
    { id: 2, image: a2, name: 'Mocha Coffee Riding Jacket', price: 778, originalPrice: 879 },
    { id: 3, image: a3, name: 'Drop Shoulder White T-Shirt', price: 778, originalPrice: 879 },
    { id: 4, image: a4, name: 'Minimal White Formal Shirt', price: 778, originalPrice: 879 },
    { id: 5, image: a5, name: 'Minimal White Formal Shirt', price: 778, originalPrice: 879 },
  ];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const scrollToReviews = () => {
    if (reviewsRef.current) {
      reviewsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 mt-20">
      {/* Product Section */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-12">
        <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-4">
          {[a2, a3, a4, a5].map((image, idx) => (
            <Image
              key={idx}
              src={image}
              alt={`Thumbnail ${idx + 1}`}
              className="rounded-md object-cover"
              width={180}
              height={180}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Image
            src={a1}
            alt="Main Product"
            className="rounded-lg object-cover w-full max-w-md md:max-w-lg"
            width={400}
            height={600}
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-black mb-8">Peach Design Printed Shirt</h2>
          <div className="text-2xl font-semibold text-gray-800">620 RS</div>
          <div className="text-lg text-blue-700 line-through">879 RS</div>
          <div className="flex space-x-4 mb-4">
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <button
                key={size}
                className={`px-5 py-3 border rounded-lg text-sm font-medium ${
                  selectedSize === size
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-200 text-gray-800'
                }`}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <button className="w-full bg-black text-white py-4 rounded-lg text-lg font-semibold mb-4">
            ORDER
          </button>
          <div className="flex space-x-4">
            <button className="flex-grow bg-transparent border py-3 rounded-lg flex items-center justify-center text-sm font-medium text-black hover:bg-gray-100">
              <i className="fas fa-heart mr-2"></i> WISHLIST
            </button>
            <button className="flex-grow bg-transparent border py-3 rounded-lg flex items-center justify-center text-sm font-medium text-black hover:bg-gray-100">
              <i className="fas fa-shopping-cart mr-2"></i> CART
            </button>
          </div>
          <button
            onClick={scrollToReviews}
            className="w-full bg-black text-white py-4 rounded-lg text-lg font-semibold mb-4"
          >
            View Reviews
          </button>
        </div>
      </div>

      {/* Similar Products */}
      <h2 className="text-3xl font-bold text-black mb-6 text-center">Similar Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {similarProducts.map((product) => (
          <div key={product.id} className="text-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              className="rounded-lg mb-4 object-cover w-full"
              width={200}
              height={250}
            />
            <h3 className="text-lg font-medium text-black">{product.name}</h3>
            <div className="text-lg font-semibold text-gray-800 font-bold">{product.price} RS</div>
            <div className="text-sm text-blue-800 line-through">{product.originalPrice} RS</div>
          </div>
        ))}
      </div>

      {/* Ratings and Reviews */}
      <div
  ref={reviewsRef}
  className="mt-12 bg-gradient-to-b from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200"
>
  <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
    Ratings & Reviews
  </h3>
  <div className="space-y-6">
    {reviews.map((review) => (
      <div
        key={review.id}
        className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
      >
        <div className="mr-6 text-yellow-400">
          {Array(review.rating)
            .fill(0)
            .map((_, idx) => (
              <i key={idx} className="fas fa-star text-xl"></i>
            ))}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 text-lg mb-1">
            {review.username}
          </h4>
          <p className="text-gray-700 leading-relaxed">{review.comment}</p>
        </div>
      </div>
    ))}
  </div>
  <div className="mt-10">
    <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">
      Add a Review
    </h4>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <input
        type="text"
        placeholder="Your Name"
        value={newReview.username}
        onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
      />
      <select
        value={newReview.rating}
        onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value, 10) })}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
      >
        <option value={0} disabled>
          Select Rating
        </option>
        {[1, 2, 3, 4, 5].map((star) => (
          <option key={star} value={star}>
            {star} {star === 1 ? 'Star' : 'Stars'}
          </option>
        ))}
      </select>
    </div>
    <textarea
      placeholder="Write your review here..."
      value={newReview.comment}
      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
      className="w-full mt-6 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
    ></textarea>
    <button
      onClick={handleReviewSubmit}
      className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all"
    >
      Submit Review
    </button>
  </div>
</div>

    </div>
  );
};

export default ProductsPage;
