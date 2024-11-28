import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactStars from 'react-stars';

const ReviewSection = ({ reviews, newReview, setNewReview, handleReviewSubmit, reviewsRef }) => {
  const averageRating = reviews.length > 0
    ? (reviews.reduce((acc, review) => acc + review.ratings, 0) / reviews.length).toFixed(1)
    : '0.0';

  return (
    <div ref={reviewsRef} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
      <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Customer Reviews</h3>
      
      <div className="mb-8 p-6 bg-gray-50 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">{averageRating}</div>
            <ReactStars
              count={5}
              value={Number(averageRating)}
              size={24}
              color2={'#ffd700'}
              edit={false}
            />
            <div className="text-gray-600 mt-2">{reviews.length} reviews</div>
          </div>
          <div className="flex-1 ml-8">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = reviews.filter(review => review.ratings === star).length;
              const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
              return (
                <div key={star} className="flex items-center mb-2">
                  <div className="w-12 text-sm text-gray-600">{star} stars</div>
                  <div className="flex-1 mx-4 h-3 rounded-full bg-gray-200">
                    <div
                      className="h-3 rounded-full bg-yellow-400"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <div className="w-12 text-sm text-gray-600">{count}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4">
        <AnimatePresence>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">{review.username}</h4>
                    <div className="text-sm text-gray-500">
                      {new Date(review.date).toLocaleDateString()}
                    </div>
                  </div>
                  <ReactStars
                    count={5}
                    value={review.ratings}
                    size={20}
                    color2={'#ffd700'}
                    edit={false}
                  />
                </div>
                <p className="text-gray-700">{review.feedback}</p>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500">No reviews yet. Be the first to review!</p>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-12 bg-gray-50 p-6 rounded-xl">
        <h4 className="text-xl font-bold text-gray-900 mb-6">Write a Review</h4>
        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="username"
              value={newReview.username}
              onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rating
            </label>
            <ReactStars
              count={5}
              value={newReview.rating}
              onChange={(newRating) => setNewReview({ ...newReview, rating: newRating })}
              size={24}
              color2={'#ffd700'}
            />
          </div>

          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
              Your Review
            </label>
            <textarea
              id="comment"
              rows="4"
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Share your experience with this product..."
            ></textarea>
          </div>

          <button
            onClick={handleReviewSubmit}
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-200"
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;