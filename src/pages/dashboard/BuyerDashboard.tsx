import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCartIcon,
  ClockIcon,
  CheckCircleIcon,
  PlusIcon,
  EyeIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../../context/AuthContext';
import { useNotification } from '../../context/NotificationContext';
import { Order, OrderStatus } from '../../types';

const BuyerDashboard: React.FC = () => {
  const { user } = useAuth();
  const { addNotification } = useNotification();
  const [activeTab, setActiveTab] = useState<'overview' | 'orders' | 'requests' | 'profile'>('overview');
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data
  const mockOrders: Order[] = [
    {
      id: '1',
      buyerId: 'buyer1',
      sellerId: 'seller1',
      products: [{ productId: '1', quantity: 5, price: 250, total: 1250 }],
      totalAmount: 1250,
      status: 'pending',
      paymentStatus: 'pending',
      deliveryAddress: {
        street: '123 Main St',
        city: 'Swat',
        state: 'KPK',
        zipCode: '19200',
        country: 'Pakistan'
      },
      deliveryMethod: 'standard',
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  const stats = [
    {
      title: 'Total Orders',
      value: orders.length,
      icon: ShoppingCartIcon,
      color: 'bg-blue-500'
    },
    {
      title: 'Pending Orders',
      value: orders.filter(o => o.status === 'pending').length,
      icon: ClockIcon,
      color: 'bg-yellow-500'
    },
    {
      title: 'Completed Orders',
      value: orders.filter(o => o.status === 'completed').length,
      icon: CheckCircleIcon,
      color: 'bg-green-500'
    },
    {
      title: 'Total Spent',
      value: `PKR ${orders.reduce((sum, order) => sum + order.totalAmount, 0).toLocaleString()}`,
      icon: ShoppingCartIcon,
      color: 'bg-purple-500'
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setOrders(mockOrders);
      setIsLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-orange"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary-lightGrey">
      <div className="container-custom section-padding">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary-charcoal mb-1">
            Buyer Dashboard
          </h1>
          <p className="text-gray-600 text-sm">
            Welcome back, {user?.name}! Manage your orders and product requests.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-6 px-4">
              {[
                { id: 'overview', label: 'Overview', icon: ShoppingCartIcon },
                { id: 'orders', label: 'My Orders', icon: ClockIcon },
                { id: 'requests', label: 'Product Requests', icon: PlusIcon },
                { id: 'profile', label: 'Profile', icon: ShoppingCartIcon }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center py-3 px-1 border-b-2 font-medium text-xs ${
                      activeTab === tab.id
                        ? 'border-primary-orange text-primary-orange'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-1" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card p-4"
                  >
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full ${stat.color}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="ml-3">
                        <p className="text-xs font-medium text-gray-600">{stat.title}</p>
                        <p className="text-lg font-semibold text-primary-charcoal">{stat.value}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="card p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold text-primary-charcoal">Recent Orders</h3>
                <button
                  onClick={() => setActiveTab('orders')}
                  className="text-primary-orange hover:text-orange-600 font-medium text-sm"
                >
                  View All
                </button>
              </div>
              
              <div className="space-y-3">
                {orders.slice(0, 3).map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-orange rounded-lg flex items-center justify-center">
                        <ShoppingCartIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-primary-charcoal text-sm">Order #{order.id}</p>
                        <p className="text-xs text-gray-600">
                          {order.products.length} items • PKR {order.totalAmount.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                      <button className="p-1 text-gray-400 hover:text-primary-orange transition-colors">
                        <ChatBubbleLeftIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'orders' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card p-4">
              <h3 className="text-base font-semibold text-primary-charcoal mb-4">My Orders</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-3 font-medium text-gray-700 text-xs">Order ID</th>
                      <th className="text-left py-2 px-3 font-medium text-gray-700 text-xs">Items</th>
                      <th className="text-left py-2 px-3 font-medium text-gray-700 text-xs">Total</th>
                      <th className="text-left py-2 px-3 font-medium text-gray-700 text-xs">Status</th>
                      <th className="text-left py-2 px-3 font-medium text-gray-700 text-xs">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-3">
                          <span className="font-medium text-primary-charcoal text-sm">#{order.id}</span>
                        </td>
                        <td className="py-3 px-3">
                          <span className="text-gray-600 text-xs">{order.products.length} items</span>
                        </td>
                        <td className="py-3 px-3">
                          <span className="font-medium text-sm">PKR {order.totalAmount.toLocaleString()}</span>
                        </td>
                        <td className="py-3 px-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <div className="flex space-x-1">
                            <button className="p-1 text-gray-400 hover:text-primary-orange transition-colors">
                              <EyeIcon className="w-3 h-3" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-primary-orange transition-colors">
                              <ChatBubbleLeftIcon className="w-3 h-3" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'requests' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold text-primary-charcoal">Product Requests</h3>
                <button className="btn-primary text-xs">
                  <PlusIcon className="w-3 h-3 mr-1" />
                  New Request
                </button>
              </div>
              <div className="text-center py-8">
                <div className="text-gray-400 text-4xl mb-3">📋</div>
                <h3 className="text-lg font-semibold text-gray-600 mb-1">
                  No product requests yet
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Submit a request for products you need and we'll connect you with suppliers.
                </p>
                <button className="btn-primary text-xs">
                  <PlusIcon className="w-3 h-3 mr-1" />
                  Submit Request
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'profile' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card p-4">
              <h3 className="text-base font-semibold text-primary-charcoal mb-4">Profile Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" value={user?.name || ''} className="input-field text-sm" readOnly />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" value={user?.email || ''} className="input-field text-sm" readOnly />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" value={user?.phone || ''} className="input-field text-sm" readOnly />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Role</label>
                  <input type="text" value={user?.role || ''} className="input-field text-sm" readOnly />
                </div>
              </div>
              <div className="mt-4">
                <button className="btn-primary text-xs">Edit Profile</button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BuyerDashboard; 