import { Package, Truck, CheckCircle, Clock, ArrowRight, MapPin, Calendar, Star } from 'lucide-react';
import { useEffect } from 'react';

const statusConfig = {
  'delivered': { 
    icon: CheckCircle, 
    color: 'text-green-600',
    bgColor: 'bg-green-600',
    lightBg: 'bg-green-50',
    label: 'Delivered'
  },
  'in-transit': { 
    icon: Truck, 
    color: 'text-blue-600',
    bgColor: 'bg-blue-600',
    lightBg: 'bg-blue-50',
    label: 'In Transit'
  },
  'processing': { 
    icon: Clock, 
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-600',
    lightBg: 'bg-yellow-50',
    label: 'Processing'
  },
  'cancelled': { 
    icon: Package, 
    color: 'text-red-600',
    bgColor: 'bg-red-600',
    lightBg: 'bg-red-50',
    label: 'Cancelled'
  }
};

const OrderCard = ({ order }) => {
  const config = statusConfig[order.status] || {}; // Default to empty object if status is undefined
  const StatusIcon = config.icon || "pending";

  useEffect(() => {
    console.log("🔍🔍🔍");
    console.log(order.products[0].productId);
  }, [order]);

  if (!StatusIcon) {
    return <div>Error: Invalid status</div>; // Or a default message/component if the icon is missing
  }

  const status = order.status;

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden border border-gray-100 p-4">
      {/* Header Section */}
      <div className="flex items-center justify-between p-5 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <div className={`${config.lightBg || 'bg-gray-100'} p-3 rounded-full`}>
            <StatusIcon className={`w-7 h-7 ${config.color || 'text-gray-500'}`} />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-gray-900">Order #{order.id}</span>
              <span className={`px-3 py-1 text-xs rounded-full ${config.lightBg || 'bg-gray-200'} ${config.color || 'text-gray-600'}`}>
                {config.label || 'Unknown Status'}
              </span>
            </div>
            <div className="flex items-center text-xs text-gray-500 mt-1">
              <Calendar className="w-3 h-3 mr-1" />
              <span>{order.date}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500 mt-1">{order.products.length} item(s)</p>
        </div>
      </div>

      {/* Products Section */}
      <div className="p-5 space-y-4">
        {order.products.map((item) => {
          const { name, images, price, _id } = item.productId;
          const totalPrice = item.totalPrice;
          return (
            <div key={_id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="relative flex-shrink-0">
                <img 
                  src={images?.[0]?.url || '/default-image.jpg'}  // Fallback if no image exists
                  alt={name || 'Product Image'}  // Fallback name
                  className="w-20 h-20 object-cover rounded-lg border-2 border-gray-300 shadow-sm"
                />
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold">
                  {item.quantity}
                </div>
              </div>
              <div className="flex-grow min-w-0">
                <h4 className="font-medium text-gray-900 text-lg truncate">{name || 'Unnamed Product'}</h4>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-800">RS: {totalPrice}</span>
                  {order.status === 'delivered' && (
                    <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center space-x-1">
                      <Star className="w-4 h-4 mr-1" />
                      Rate Product
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Delivery Information Section */}
      <div className="flex items-center justify-between p-5 bg-gray-50 border-t border-gray-100 rounded-b-xl">
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="truncate max-w-[220px]">{order.deliveryAddress || 'No address provided'}</span>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors">
          <span>Track</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
