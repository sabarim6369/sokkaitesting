import React from 'react';
import { motion } from 'framer-motion';

const ProductReviews = ({ reviews, onSubmitReview, newReview, setNewReview }) => {
  return (
    <section className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Customer Reviews</h3>
      
      <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900">{review.username}</h4>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star ${
                        i < review.ratings ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    ></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{review.feedback}</p>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500">No reviews yet. Be the first to review!</p>
        )}
      </div>

      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h4 className="text-xl font-bold text-gray-900 mb-6">Write a Review</h4>
        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="username"
              value={newReview.username}
              onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
              Rating
            </label>
            <div className="flex items-center space-x-2 mt-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setNewReview({ ...newReview, rating })}
                  className="text-2xl focus:outline-none"
                >
                  <i
                    className={`fas fa-star ${
                      rating <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  ></i>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
              Your Review
            </label>
            <textarea
              id="comment"
              rows="4"
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              placeholder="Share your experience with this product..."
            ></textarea>
          </div>

          <button
            onClick={onSubmitReview}
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-200"
          >
            Submit Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductReviews;