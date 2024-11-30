'use client'

import React from 'react';
import { motion } from 'framer-motion';
import StarRating from './starRating';

const ReviewCard = ({ review, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold text-lg text-gray-900">{review.username}</h4>
        <StarRating rating={review.ratings} />
      </div>
      <p className="text-gray-700 text-sm line-clamp-3">{review.feedback}</p>
    </motion.div>
  );
};

export default ReviewCard;