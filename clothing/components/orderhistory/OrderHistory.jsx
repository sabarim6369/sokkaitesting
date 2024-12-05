'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import OrderCard from './OrderCard';
import OrderTabs from './OrderTabs';
import SearchBar from './SearchBar';
import OrderStats from './OrderStats';
import { jwtDecode } from 'jwt-decode';
import { getUserIdFromToken } from '@/app/utils/token/token';
const OrderHistory = () => {
  
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = getUserIdFromToken(); 
    const fetchOrders = async () => {

      try {
        setLoading(true);
        const response = await axios.get(`/api/cart/carthistory?userId=${userId}`);
        console.log("helloooo😍😍😍😍😍😍y")
        console.log(response.data)
        setOrders(response.data.purchaseHistory);
        setFilteredOrders(response.data.purchaseHistory); // Initialize filtered orders
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    
      fetchOrders();
    
  }, []);

  useEffect(() => {
    const filtered = orders.filter(order => {
      const matchesTab = activeTab === 'all' || order.status === activeTab;
      const matchesSearch = (order.id?.toString()?.toLowerCase().includes(searchQuery.toLowerCase())) ||
      order.products.some(product =>
        product.productId?.name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
      return matchesTab && matchesSearch;
    });
    setFilteredOrders(filtered);
  }, [activeTab, searchQuery, orders]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
          <span className="text-sm text-gray-500">Showing {filteredOrders.length} orders</span>
        </div>

        <OrderStats orders={orders} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <OrderTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="space-y-4">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <OrderCard key={order._id} order={order} />
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=300"
                alt="No orders"
                className="w-32 h-32 object-cover mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-medium text-gray-900">No Orders Found</h3>
              <p className="text-sm text-gray-500 mt-1">We couldn't find any orders matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;