'use client'
import { useState,useEffect } from 'react';
import AddressForm from './AddressForm';
import AddressCard from './AddressCard';
import PaymentSection from './PaymentSection';
import OrderSuccess from './OrderSuccess';
import PriceDetails from './PriceDetails';
import './order.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
const  App=()=> {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userId = decodedToken?.id; 
    
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [currentStep, setCurrentStep] = useState('address'); // address, payment, success
  const [addresses, setAddresses] = useState([]);
  const [orderSummary, setOrderSummary] = useState(null);
  useEffect(() => {
    const getAllAddresses = async () => {
      try {
        const response = await axios.get(`/api/address?userId=${userId}`);
        console.log(response.data.address)
        setAddresses(response.data.address);
      } catch (err) {
        console.log("Some error occurred", err);
      }
    };

    if (userId) {
      getAllAddresses();
    }
  }, [userId]);
  useEffect(() => {
    // Retrieve the order summary from localStorage
    const storedOrderSummary = localStorage.getItem('orderDetails');
    console.log("storedOrderSummary",storedOrderSummary)

    if (storedOrderSummary) {
        console.log("storedOrderSummary",storedOrderSummary)
      setOrderSummary(JSON.parse(storedOrderSummary));
    }
  }, []);
  const priceDetails = orderSummary ? {
    price: orderSummary.totalAmount,
    deliveryCharges: { original: 49, current: orderSummary.deliveryCharge },
    platformFee: 3,
    totalSavings: orderSummary.discount + orderSummary.couponDiscount
  } : {
    price: 0,
    deliveryCharges: { original: 0, current: 0 },
    platformFee: 0,
    totalSavings: 0
  };

  const handleAddAddress = async (newAddress) => {
    try {
  alert("before response")
      const response = await axios.post("/api/address", { userId, ...newAddress });
  console.log("ishbvif;vbfsbv")
      if (response.status === 200) {
        setAddresses([...addresses, newAddress]);
        alert("Address added successfully!");
      } else {
        alert(response.data.error || "Failed to add address.");
      }
    } catch (error) {
      console.error("Error adding address:", error);
      alert("An error occurred while adding the address.");
    }
  
    setShowAddressForm(false);
  };
  

  const handleDeliverHere = () => {
    setCurrentStep('payment');
  };

  const handlePaymentComplete = () => {
    setCurrentStep('success');
  };

  const totalAmount = priceDetails.price + priceDetails.platformFee;

  return (
    <div className="app-container">
      <div className="main-content">
        {currentStep === 'success' ? (
          <OrderSuccess />
        ) : (
          <>
            <div className="delivery-section">
              <h2 className="section-title">
                <span className="number">2</span> DELIVERY ADDRESS
              </h2>
              
              <div className="addresses-list">
                {!showAddressForm ? (
                  <>
                    {addresses.map((addr, index) => (
                      <AddressCard
                        key={addr._id}
                        address={addr}
                        selected={selectedAddress === index}
                        onSelect={() => setSelectedAddress(index)}
                        onDeliverHere={handleDeliverHere}
                        showDeliverButton={currentStep === 'address'}
                      />
                    ))}
                    
                    <button 
                      className="add-address-btn"
                      onClick={() => setShowAddressForm(true)}
                    >
                      <span className="plus-icon">+</span> Add a new address
                    </button>
                  </>
                ) : (
                  <AddressForm 
                    onSubmit={handleAddAddress}
                    onCancel={() => setShowAddressForm(false)}
                  />
                )}
              </div>
            </div>

            {currentStep === 'payment' && (
              <div className="payment-options">
                <h2 className="section-title">
                  <span className="number">3</span> PAYMENT OPTIONS
                </h2>
                <PaymentSection 
                  onPaymentComplete={handlePaymentComplete}
                  totalAmount={totalAmount}
                />
              </div>
            )}
          </>
        )}
      </div>

      {currentStep !== 'success' && (
        <PriceDetails 
          priceDetails={priceDetails}
          totalAmount={totalAmount}
        />
      )}
    </div>
  );
}

export default App;