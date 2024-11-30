import React from "react";
import { motion } from "framer-motion";

const ProductReviews = ({ reviews, onSubmitReview, newReview, setNewReview }) => {
  return (
    <section className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-300 p-8">
      {/* Header */}
      <h3 className="text-4xl font-semibold text-gray-800 text-center mb-12">
        Customer Reviews
      </h3>

      {/* Reviews Section */}
      <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-lg text-gray-900">{review.username}</h4>
                <div className="flex items-center space-x-1">
                  {/* Render Star Ratings */}
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star ${
                        i < review.ratings ? "text-yellow-400" : "text-gray-300"
                      }`}
                    ></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-sm">{review.feedback}</p>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500 italic">
            No reviews yet. Be the first to share your thoughts!
          </p>
        )}
      </div>

      {/* Review Form */}
      <div className="mt-12 bg-gray-100 p-8 rounded-xl shadow-md border border-gray-200">
        <h4 className="text-3xl font-semibold text-gray-800 mb-6">Write a Review</h4>
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
              onChange={(e) =>
                setNewReview({ ...newReview, username: e.target.value })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Rating Input */}
          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
              Rating
            </label>
            <div className="flex space-x-2 mt-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  type="button"
                  key={rating}
                  onClick={() => setNewReview({ ...newReview, rating })}
                  className={`text-2xl focus:outline-none transition-all duration-300 ${
                    rating <= newReview.rating ? "text-yellow-400" : "text-gray-300"
                  } hover:text-yellow-500`}
                >
                  <i className="fas fa-star"></i>
                </button>
              ))}
            </div>
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
              onChange={(e) =>
                setNewReview({ ...newReview, comment: e.target.value })
              }
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
