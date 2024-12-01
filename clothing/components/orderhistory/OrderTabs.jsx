const OrderTabs = ({ activeTab, onTabChange }) => {
    const tabs = [
      { id: 'all', label: 'All Orders', count: 5 },
      { id: 'delivered', label: 'Delivered', count: 2 },
      { id: 'in-transit', label: 'In Transit', count: 1 },
      { id: 'processing', label: 'Processing', count: 1 },
      { id: 'cancelled', label: 'Cancelled', count: 1 }
    ];
  
    return (
      <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex-1 min-w-[120px] px-6 py-4 text-sm font-medium relative transition-all
                ${activeTab === tab.id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              <span className="block">{tab.label}</span>
              <span className={`inline-block px-2 py-1 text-xs rounded-full mt-1
                ${activeTab === tab.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                {tab.count}
              </span>
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default OrderTabs;