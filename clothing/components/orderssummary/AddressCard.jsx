function AddressCard({ address, selected, onSelect, onDeliverHere, showDeliverButton }) {
  return (
    <div 
      className={`address-card ${selected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <div className="address-header">
        <div className="name-section">
          <span className="name">{address.name}</span>
          {address.type && <span className="address-type">{address.type}</span>}
        </div>
        <span className="phone">{address.phone}</span>
      </div>
      <div className="address-content">
        <p>{address.address}</p>
        <p>{address.location}</p>
      </div>
      {selected && showDeliverButton && (
        <button 
          className="deliver-here-btn"
          onClick={(e) => {
            e.stopPropagation();
            onDeliverHere();
          }}
        >
          DELIVER HERE
        </button>
      )}
    </div>
  );
}

export default AddressCard;