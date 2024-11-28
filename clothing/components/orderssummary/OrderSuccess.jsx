'use client'
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import successAnimation from './success-animation.json';

function OrderSuccess() {
  return (
    <motion.div 
      className="order-success"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="success-animation">
        <Lottie 
          animationData={successAnimation}
          loop={false}
          style={{ width: 200, height: 200 }}
        />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Order Placed Successfully!
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <p className="success-message">Thank you for shopping with us.</p>
        <p className="order-message">
          Your order will be delivered soon.
          <br />
          You will receive an email confirmation shortly.
        </p>
        <motion.button 
          className="continue-shopping"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.reload()}
        >
          Continue Shopping
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default OrderSuccess;