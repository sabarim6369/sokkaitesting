'use client'

import React, { useState } from "react";
import StarRating from './starRating';
import ReviewCard from './ReviewCard';

const ProductReviews = ({ reviews, onSubmitReview, newReview, setNewReview }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  return (
    <section className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-300 p-8">
      {/* Header with Review Stats */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
          Customer Reviews
        </h3>
        {reviews.length > 0 && (
          <div className="flex items-center justify-center gap-4">
            <StarRating
              rating={reviews.reduce((acc, rev) => acc + rev.ratings, 0) / reviews.length}
            />
            <span className="text-gray-600">
              {reviews.length} {reviews.length === 1 ? 'Review' : 'Reviews'}
            </span>
          </div>
        )}
      </div>

      {/* Scrollable Reviews Grid */}
      <div className="relative">
        <div className="max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Review Form */}
      <div className="mt-12 bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200">
        <h4 className="text-2xl font-semibold text-gray-800 mb-6">Write a Review</h4>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitReview();
          }}
          className="space-y-6"
        >
          {/* Name Input */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="username"
              value={newReview.username}
              onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Rating Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating
            </label>
            <StarRating
              rating={hoveredRating || newReview.rating}
              onRatingChange={(rating) => setNewReview({ ...newReview, rating })}
              onHover={setHoveredRating}
              onLeave={() => setHoveredRating(0)}
              interactive={true}
            />
          </div>

          {/* Comment Input */}
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
              Your Review
            </label>
            <textarea
              id="comment"
              rows="4"
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              placeholder="Share your experience with this product..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
};

export default ProductReviews;