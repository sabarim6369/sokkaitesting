function PaymentMethod({ value, label, selected, onChange }) {
  return (
    <label className="payment-option">
      <input
        type="radio"
        name="payment"
        value={value}
        checked={selected}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="payment-label">{label}</span>
    </label>
  );
}

export default PaymentMethod;