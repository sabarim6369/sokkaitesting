import { useState } from "react";
import PaymentMethod from "./PaymentMethod";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PaymentSection({
  AddressString,
  onPaymentComplete,
  totalAmount,
  productIds,
  count,
  userId,
  orderData,
  addressId,
  pricedetails,
}) {
  const [paymentMethod, setPaymentMethod] = useState("cod");
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
          totalAmount: totalAmount,
          timestamp: new Date(),
          addressId: addressId,
          couponDiscount,
        };
        //  const address=
        const response = await axios.post(
          "/api/purchasehistory",
          purchaseHistory
        );
        console.log("Product data : ", orderData);
        console.log("products     :", products);
        console.log("Address String : ", AddressString);
        console.log(pricedetails);
        if (response.status === 200) {
          if (couponDiscount > 0) {
            await axios.put("/api/coupun/validate", {
              userId,
              couponId: pricedetails.couponid,
            });
          }
          try {
            const WhatsappResponse = await axios.post(
              "https://adminsokkai.vercel.app/api/communication/invoice",
              {
                products: orderData,
                address: AddressString,
              }
            );

            console.log("WhatsApp response:", WhatsappResponse.data);
            localStorage.removeItem("orderData");
          } catch (error) {
            console.error("Error sending WhatsApp message:", error);
          }
          onPaymentComplete();
          console.log("Purchase history saved successfully!");
        } else if (response.status == 400) {
          toast.warning("not enough stock");
        } else {
          console.error("Failed to save purchase history");
        }
      } catch (error) {
        console.error("Error saving purchase history:", error);
      }
    }
  };

  const paymentMethods = [
    { value: "upi", label: "UPI" },
    { value: "card", label: "Credit/Debit Card" },
    { value: "netbanking", label: "Net Banking" },
    { value: "cod", label: "Cash on Delivery" },
  ];

  return (
    <div className="payment-section">
      <div className="payment-methods">
        {paymentMethods.map((method) => (
          <PaymentMethod
            key={method.value}
            {...method}
            selected={paymentMethod === method.value}
            onChange={setPaymentMethod}
            disabled={method.value !== "cod"}
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
      <ToastContainer />
    </div>
  );
}

export default PaymentSection;