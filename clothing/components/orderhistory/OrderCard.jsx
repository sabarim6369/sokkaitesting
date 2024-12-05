import { Package, Truck, CheckCircle, Clock, ArrowRight, MapPin, Calendar, Star } from 'lucide-react';
import { useEffect } from 'react';
import { useRouter } from "next/navigation";
import axios from 'axios';

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
  'dispatched': { 
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
  const config = statusConfig[order.status] || {}; 
  const StatusIcon = config.icon || "pending";
  const router = useRouter();

  useEffect(() => {
    console.log(order);
    console.log("😎😎😎😎", config);
    console.log(order.products[0].productId);
  }, [order]);

  if (!StatusIcon) {
    return <div>Error: Invalid status</div>; 
  }

  const handleProducts = async(id) => {
    router.push(`/frontend/productdetails/${id}`);
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 p-6 space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <div className={`${config.lightBg || 'bg-gray-100'} p-3 rounded-full`}>
            <StatusIcon className={`w-8 h-8 ${config.color || 'text-gray-500'}`} />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-semibold text-gray-900">Order #{order.id}</span>
              <span className={`px-4 py-2 text-xs rounded-full ${config.lightBg || 'bg-gray-200'} ${config.color || 'text-gray-600'}`} >
                {order.status || 'Unknown Status'}
              </span>
            </div>
            <div className="flex items-center text-xs text-gray-500 mt-2">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{order.date}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500 mt-1">{order.products.length} item(s)</p>
        </div>
      </div>

      {/* Products Section */}
      <div className="p-4 space-y-6">
        {order.products.map((item) => {
          const { name, images, price, _id } = item.productId;
          const totalPrice = item.totalPrice;
          return (
            <div 
              key={_id} 
              className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all cursor-pointer"  
              onClick={() => handleProducts(_id)}>
              <div className="relative flex-shrink-0">
                <img 
                  src={images?.[0]?.url || '/default-image.jpg'}  // Fallback if no image exists
                  alt={name || 'Product Image'}  // Fallback name
                  className="w-20 h-20 object-cover rounded-lg border-2 border-gray-200 shadow-md"
                />
                <div className="absolute -top-4 -right-2 text-xs text-gray-600">
                  <span className="font-semibold">Qty:</span> {item.quantity}
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
      <div className="flex items-center justify-between p-4 bg-gray-50 border-t border-gray-100 rounded-b-xl">
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="truncate max-w-[220px] md:max-w-[300px] text-ellipsis overflow-hidden">
            {order.address 
              ? `${order.address.name}, ${order.address.address}, ${order.address.location}` 
              : 'No address provided'}
          </span>
        </div>
        <button className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-all duration-300">
          <span>Track</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
