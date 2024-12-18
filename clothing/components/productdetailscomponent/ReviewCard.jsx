'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ThumbsUp, MessageCircle } from 'lucide-react';
import StarRating from './starRating';

const ReviewCard = ({ review, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-3 sm:mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <span className="text-sm sm:text-lg font-semibold text-gray-600">
              {review.username.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
              {review.username}
            </h4>
            <div className="flex items-center gap-2">
              <StarRating rating={review.ratings} size="sm" />
              <span className="text-xs sm:text-sm text-gray-500">
              {!isNaN(new Date(review.createdAt)) ? new Date(review.createdAt).toLocaleDateString() : new Date(review.date).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-gray-500 hover:text-blue-500 transition-colors">
            <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button className="text-gray-500 hover:text-blue-500 transition-colors">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">{review.feedback}</p>

      {review.images && review.images.length > 0 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {review.images.map((image, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            >
              <Image
                src={image.url}
                alt={`Review image ${idx + 1}`}
                width={100}
                height={100}
                className="rounded-lg object-contain w-full h-full"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
          ))}
        </div>
      )}

      {review.purchaseVerified && (
        <div className="mt-2 flex items-center gap-2">
          <span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded-full">
            Verified Purchase
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default ReviewCard;
