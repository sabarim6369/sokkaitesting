'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';
import a1 from '../../../../public/images/cart/a1.jpg';
import a2 from '../../../../public/images/cart/a2.jpg';
import a3 from '../../../../public/images/cart/a3.jpg';
import a4 from '../../../../public/images/cart/a4.jpg';
import a5 from '../../../../public/images/cart/a5.jpg';

const ProductsPage = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [showReviews, setShowReviews] = useState(false); // State for toggling reviews
  const [reviews, setReviews] = useState([
    { id: 1, username: 'John Doe', rating: 5, comment: 'Amazing quality and fit!' },
    { id: 2, username: 'Jane Smith', rating: 4, comment: 'Loved the material, worth the price.' },
  ]);
  const [newReview, setNewReview] = useState({ username: '', rating: 0, comment: '' });

  const handleReviewSubmit = () => {
    if (newReview.username && newReview.rating > 0 && newReview.comment) {
      setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
      setNewReview({ username: '', rating: 0, comment: '' });
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const toggleReviews = () => {
    setShowReviews((prev) => !prev);
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
            onClick={toggleReviews}
            className="w-full bg-gray-200 py-2 rounded-lg text-lg font-semibold mt-4"
          >
            {showReviews ? 'Hide Reviews' : 'View Reviews'}
          </button>
        </div>
      </div>

      {/* Ratings and Reviews */}
      {showReviews && (
        <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-black mb-6">Ratings & Reviews</h3>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="flex bg-white p-4 rounded-lg shadow-sm">
                <div className="mr-4 text-yellow-400">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, idx) => (
                      <i key={idx} className="fas fa-star"></i>
                    ))}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{review.username}</h4>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <h4 className="text-lg font-medium text-gray-800 mb-2">Add a Review</h4>
            <input
              type="text"
              placeholder="Your Name"
              value={newReview.username}
              onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
              className="w-full mb-2 p-2 border rounded-lg"
            />
            <textarea
              placeholder="Your Review"
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              className="w-full mb-2 p-2 border rounded-lg"
            />
            <div className="flex items-center mb-2">
              <select
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value, 10) })}
                className="p-2 border rounded-lg w-20"
              >
                <option value={0}>Rating</option>
                {[1, 2, 3, 4, 5].map((star) => (
                  <option key={star} value={star}>
                    {star}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={handleReviewSubmit}
              className="bg-black text-white py-2 px-4 rounded-lg"
            >
              Submit Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
