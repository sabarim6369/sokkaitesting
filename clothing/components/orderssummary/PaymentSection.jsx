'use client'
import { useState } from 'react';
import PaymentMethod from './PaymentMethod';

function PaymentSection({ onPaymentComplete, totalAmount }) {
  const [paymentMethod, setPaymentMethod] = useState('cod'); // Default to COD

  const handlePayment = () => {
    if (paymentMethod) {
      onPaymentComplete();
    }
  };

  const paymentMethods = [
    { value: 'upi', label: 'UPI' },
    { value: 'card', label: 'Credit/Debit Card' },
    { value: 'netbanking', label: 'Net Banking' },
    { value: 'cod', label: 'Cash on Delivery' }
  ];

  return (
    <div className="payment-section">
      <div className="payment-methods">
        {paymentMethods.map(method => (
          // Disable all methods except COD
          <PaymentMethod
            key={method.value}
            {...method}
            selected={paymentMethod === method.value}
            onChange={setPaymentMethod}
            disabled={method.value !== 'cod'} // Disable if it's not COD
          />
        ))}
      </div>
      
      <button 
        className="payment-btn"
        disabled={!paymentMethod}
        onClick={handlePayment}
      >
        Pay ₹{totalAmount}
      </button>
    </div>
  );
}

export default PaymentSection;
