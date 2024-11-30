import { useState } from 'react';
import PaymentMethod from './PaymentMethod';
import axios from 'axios';

function PaymentSection({ onPaymentComplete, totalAmount, productIds, count, userId,orderData,addressId}) {
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const handlePayment = async () => {
    if (paymentMethod) {
      try {
        const products = orderData.map((product) => ({
          productId: product._id, 
          quantity: product.quantity, 
          totalPrice: product.price * product.quantity, 
        }));
    
    
        const purchaseHistory = {
          userId,
          products,  
          totalAmount:totalAmount,
          timestamp: new Date(),
          addressId:addressId
        };
    
        const response = await axios.post('/api/purchasehistory', purchaseHistory);
        if (response.status === 200) {
          axios.post('https://4069-2401-4900-67ae-55a0-e868-9dc7-331b-f8f4.ngrok-free.app/api/communication/invoice')
          onPaymentComplete();
          console.log('Purchase history saved successfully!');
        } else {
          console.error('Failed to save purchase history');
        }
      } catch (error) {
        console.error('Error saving purchase history:', error);
      }
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
