import { useState } from 'react';
import PaymentMethod from './PaymentMethod';
import axios from 'axios';


function PaymentSection({ onPaymentComplete, totalAmount, productIds, count, userId,orderData,addressId,pricedetails}) {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const couponDiscount = pricedetails?.couponDiscount || 0;
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
          addressId:addressId,
          couponDiscount
        };
    
        const response = await axios.post('/api/purchasehistory', purchaseHistory);
        console.log(pricedetails)
        alert("helli")
        if (response.status === 200) {
          alert("hiiii",couponDiscount)
          if (couponDiscount > 0) {
            alert("helllo")
            await axios.put('/api/coupun/validate', {
              userId,
              couponId: pricedetails.couponid, 
            });
          }
          
          axios.post('https://4069-2401-4900-67ae-55a0-e868-9dc7-331b-f8f4.ngrok-free.app/api/communication/invoice')
          onPaymentComplete();
          console.log('Purchase history saved successfully!');
        }
        else if(response.status==400){
          alert("not enough stock")
        }
        else {
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
