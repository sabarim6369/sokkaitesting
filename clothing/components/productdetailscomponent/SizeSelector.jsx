import React from 'react';
import { toast } from 'react-toastify';

const SizeSelector = ({ availableSizes, selectedSize, onSizeSelect }) => {
  const allSizes = ['XS', 'S', 'M', 'L', 'XL'];

  const handleSizeSelect = (size) => {
    onSizeSelect(size);
    toast.info(`Size ${size} selected`);
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Select Size</h3>
      <div className="grid grid-cols-5 gap-2">
        {allSizes.map((size) => {
          const isAvailable = availableSizes.includes(size);
          const isSelected = selectedSize === size;
          return (
            <button
              key={size}
              onClick={() => isAvailable && handleSizeSelect(size)}
              className={`
                relative h-12 rounded-lg font-medium transition-all duration-200
                ${isSelected 
                  ? 'bg-black text-white ring-2 ring-black' 
                  : isAvailable 
                    ? 'bg-white text-gray-900 border border-gray-300 hover:border-black' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }
              `}
              disabled={!isAvailable}
            >
              {size}
              {!isAvailable && (
                <div className="absolute inset-0 bg-gray-100 bg-opacity-75 flex items-center justify-center rounded-lg">
                  <i className="fas fa-ban text-gray-400"></i>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SizeSelector;