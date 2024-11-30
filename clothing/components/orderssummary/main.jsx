import { useState, useEffect } from 'react';
import AddressForm from './AddressForm';
import AddressCard from './AddressCard';
import PaymentSection from './PaymentSection';
import OrderSuccess from './OrderSuccess';
import PriceDetails from './PriceDetails';
import './order.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import { useOrderContext } from '../cart/OrderContext';
import Loader from "../loader/loader"; // Import your loader component

const App = () => {
  const router = useRouter();
  const { orderData, setOrderData } = useOrderContext();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [currentStep, setCurrentStep] = useState('address');
  const [addresses, setAddresses] = useState([]);
  const [orderSummary, setOrderSummary] = useState(orderData);
  const [totalSavings, setTotalSavings] = useState(0);
  const [addressToEdit, setAddressToEdit] = useState(null);
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const userId = decodedToken?.id;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedOrderData = localStorage.getItem('orderData');
    if (storedOrderData) {
      setOrderData(JSON.parse(storedOrderData)); 
    }
  }, [setOrderData]);

  useEffect(() => {
    if (orderData) {
      localStorage.setItem('orderData', JSON.stringify(orderData));
    }
  }, [orderData]);

  useEffect(() => {
    setOrderSummary(orderData); 
  }, [orderData]);

  useEffect(() => {
    const getAllAddresses = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get(`/api/address?userId=${userId}`);
        setAddresses(response.data.address);
      } catch (err) {
        console.error("Error fetching addresses:", err);
      }
      setLoading(false); // Stop loading
    };

    if (userId) {
      getAllAddresses();
    }
  }, [orderData?.userId]);

  const priceDetails = orderSummary ? {
    count: orderData?.items?.length || 0,
    price: orderSummary.total,
    deliveryCharges: { original: 49, current: 500 },
    platformFee: 0,
    totalSavings: orderSummary.savings,
  } : {
    count: 0,
    price: 0, 
    deliveryCharges: { original: 0, current: 0 },
    platformFee: 0,
    totalSavings: 0,
  };

  const handleAddAddress = async (newAddress) => {
    setLoading(true); // Start loading
    try {
      const response = await axios.post('/api/address', { userId: userId, ...newAddress });
      if (response.status === 200) {
        setAddresses([...addresses, newAddress]);
        alert("Address added successfully!");
        window.location.reload();
      } else {
        alert(response.data.error || "Failed to add address.");
      }
    } catch (error) {
      console.error("Error adding address:", error);
      alert("An error occurred while adding the address.");
    }
    setLoading(false); // Stop loading
    setShowAddressForm(false);
  };

  const handleEditAddress = async (editedAddress) => {
    if (!addressToEdit || !addressToEdit._id) {
      alert("Cannot update: Invalid address selected.");
      return;
    }

    setLoading(true); // Start loading
    try {
      const response = await axios.put('/api/address', { 
        userId, 
        addressId: addressToEdit._id, 
        ...editedAddress 
      });

      if (response.status === 200) {
        const updatedAddresses = addresses.map(addr =>
          addr._id === addressToEdit._id ? { ...addr, ...editedAddress } : addr
        );
        setAddresses(updatedAddresses);
        alert("Address updated successfully!");
      } else {
        alert(response.data.error || "Failed to update address.");
      }
    } catch (error) {
      console.error("Error editing address:", error);
      alert("An error occurred while updating the address.");
    }
    setLoading(false); // Stop loading
    setShowAddressForm(false);
    setAddressToEdit(null);
  };

  const handleDeliverHere = () => {
    setCurrentStep('payment');
  };

  const handleEdit = (address) => {
    setAddressToEdit(address);
    setShowAddressForm(true); 
  };

  const handlePaymentComplete = () => {
    setCurrentStep('success');
  };

  const totalAmount = priceDetails.price + priceDetails.platformFee;

  return (
    <div className="app-container">
      <div className="main-content">
        {loading ? (
          <Loader /> // Show the loader while loading is true
        ) : (
          <>
            {currentStep === "success" ? (
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
                        {addresses.map((addr) => (
                          <AddressCard
                            key={addr._id}
                            address={addr}
                            selected={selectedAddress === addr._id}
                            onSelect={() => setSelectedAddress(addr._id)}
                            onDeliverHere={handleDeliverHere}
                            showDeliverButton={currentStep === "address"}
                            onEdit={() => handleEdit(addr)}
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
                        addressToEdit={addressToEdit}
                        onSubmit={addressToEdit ? handleEditAddress : handleAddAddress}
                        onCancel={() => {
                          setShowAddressForm(false);
                          setAddressToEdit(null);
                        }}
                        userid={userId}
                      />
                    )}
                  </div>
                </div>

                {currentStep === "payment" && (
                  <div className="payment-options">
                    <h2 className="section-title">
                      <span className="number">3</span> PAYMENT OPTIONS
                    </h2>
                    <PaymentSection
                      onPaymentComplete={handlePaymentComplete}
                      totalAmount={totalAmount}
                      productIds={orderData.items.map((item) => item.productId)}
                      count={orderData.items.length || 0}
                      userId={userId}
                      orderData={orderData.items}
                      addressId={selectedAddress || null}
                    />
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>

      {currentStep !== "success" && (
        <PriceDetails priceDetails={priceDetails} totalAmount={totalAmount} />
      )}
    </div>
  );
};

export default App;