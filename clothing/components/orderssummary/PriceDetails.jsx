function PriceDetails({ priceDetails, totalAmount }) {
  return (
    <div className="price-details">
      <h2>PRICE DETAILS</h2>
      <div className="price-row">
        <span>Price ({priceDetails.count} item)</span>
        <span>₹{priceDetails.price}</span>
      </div>
      <div className="price-row">
        <span>Delivery Charges</span>
        <span>
          <span className="original-price">₹{priceDetails.deliveryCharges.original}</span>
          <span className="free">FREE</span>
        </span>
      </div>
      <div className="price-row">
        <span className="platform-fee">
          Platform Fee
          <span className="info-icon">ⓘ</span>
        </span>
        <span>₹{priceDetails.platformFee}</span>
      </div>
      <div className="total-row">
        <span>Total Payable</span>
        <span>₹{totalAmount}</span>
      </div>
      <div className="savings-row">
        Your Total Savings on this order ₹{priceDetails.totalSavings}
      </div>
      <div className="security-note">
        <span className="shield-icon">🛡️</span>
        <p>
          Safe and Secure Payments. Easy returns.
          <br />
          100% Authentic products.
        </p>
      </div>
    </div>
  );
}

export default PriceDetails;