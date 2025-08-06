import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BuildingStorefrontIcon,
  PlusIcon,
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../../context/AuthContext';
import { Product, Order } from '../../types';

const SellerDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'orders' | 'profile'>('overview');
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Enhanced mock data
  const mockProducts: Product[] = [
    {
      id: '1',
      sellerId: 'seller1',
      name: 'High-Quality Steel Screws',
      description: 'Premium grade steel screws for construction projects.',
      category: 'fasteners',
      subcategory: 'screws',
      price: 250,
      currency: 'PKR',
      unit: 'pack',
      stock: 100,
      images: ['https://picsum.photos/300/200?random=20'],
      specifications: [
        { key: 'Material', value: 'Steel' },
        { key: 'Size', value: 'M8 x 50mm' }
      ],
      isApproved: true,
      isActive: true,
      rating: 4.5,
      reviewCount: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      sellerId: 'seller1',
      name: 'Construction Cement',
      description: 'High-strength construction cement for building projects.',
      category: 'raw-materials',
      subcategory: 'cement',
      price: 850,
      currency: 'PKR',
      unit: 'bag',
      stock: 50,
      images: ['https://picsum.photos/300/200?random=21'],
      specifications: [
        { key: 'Type', value: 'Portland' },
        { key: 'Strength', value: '53 Grade' }
      ],
      isApproved: true,
      isActive: true,
      rating: 4.8,
      reviewCount: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '3',
      sellerId: 'seller1',
      name: 'Safety Helmets',
      description: 'Industrial safety helmets for construction workers.',
      category: 'safety-equipment',
      subcategory: 'helmets',
      price: 1200,
      currency: 'PKR',
      unit: 'piece',
      stock: 75,
      images: ['https://picsum.photos/300/200?random=22'],
      specifications: [
        { key: 'Material', value: 'ABS Plastic' },
        { key: 'Color', value: 'Yellow' }
      ],
      isApproved: false,
      isActive: true,
      rating: 4.2,
      reviewCount: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

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
    },
    {
      id: '2',
      buyerId: 'buyer2',
      sellerId: 'seller1',
      products: [{ productId: '2', quantity: 10, price: 850, total: 8500 }],
      totalAmount: 8500,
      status: 'confirmed',
      paymentStatus: 'paid',
      deliveryAddress: {
        street: '456 Oak Ave',
        city: 'Peshawar',
        state: 'KPK',
        zipCode: '25000',
        country: 'Pakistan'
      },
      deliveryMethod: 'express',
      estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '3',
      buyerId: 'buyer3',
      sellerId: 'seller1',
      products: [{ productId: '3', quantity: 2, price: 1200, total: 2400 }],
      totalAmount: 2400,
      status: 'completed',
      paymentStatus: 'paid',
      deliveryAddress: {
        street: '789 Pine Rd',
        city: 'Islamabad',
        state: 'ICT',
        zipCode: '44000',
        country: 'Pakistan'
      },
      deliveryMethod: 'standard',
      estimatedDelivery: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      actualDelivery: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  const stats = [
    {
      title: 'Total Products',
      value: products.length,
      icon: BuildingStorefrontIcon,
      color: 'bg-blue-500'
    },
    {
      title: 'Active Orders',
      value: orders.filter((o: Order) => o.status === 'pending' || o.status === 'confirmed').length,
      icon: ClockIcon,
      color: 'bg-yellow-500'
    },
    {
      title: 'Completed Orders',
      value: orders.filter((o: Order) => o.status === 'completed').length,
      icon: CheckCircleIcon,
      color: 'bg-green-500'
    },
    {
      title: 'Total Revenue',
      value: `PKR ${orders.reduce((sum: number, order: Order) => sum + order.totalAmount, 0).toLocaleString()}`,
      icon: CurrencyDollarIcon,
      color: 'bg-purple-500'
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockProducts);
      setOrders(mockOrders);
      setIsLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'paid': return 'bg-green-100 text-green-800';
      case 'failed': return 'bg-red-100 text-red-800';
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
            Seller Dashboard
          </h1>
          <p className="text-gray-600 text-sm">
            Welcome back, {user?.name}! Manage your products and orders.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-6 px-4">
              {[
                { id: 'overview', label: 'Overview', icon: BuildingStorefrontIcon },
                { id: 'products', label: 'Products', icon: PlusIcon },
                { id: 'orders', label: 'Orders', icon: ClockIcon },
                { id: 'profile', label: 'Profile', icon: BuildingStorefrontIcon }
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

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-semibold text-primary-charcoal">Recent Products</h3>
                  <button
                    onClick={() => setActiveTab('products')}
                    className="text-primary-orange hover:text-orange-600 font-medium text-sm"
                  >
                    View All
                  </button>
                </div>
                
                <div className="space-y-3">
                  {products.slice(0, 3).map((product) => (
                    <div key={product.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-10 h-10 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-primary-charcoal text-sm">{product.name}</p>
                        <p className="text-xs text-gray-600">PKR {product.price.toLocaleString()}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        product.isApproved ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {product.isApproved ? 'Approved' : 'Pending'}
                      </span>
                    </div>
                  ))}
                </div>
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
                      <div>
                        <p className="font-medium text-primary-charcoal text-sm">Order #{order.id}</p>
                        <p className="text-xs text-gray-600">
                          {order.products.length} items • PKR {order.totalAmount.toLocaleString()}
                        </p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'products' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold text-primary-charcoal">My Products</h3>
                <button className="btn-primary text-xs">
                  <PlusIcon className="w-3 h-3 mr-1" />
                  Add Product
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-3 font-medium text-gray-700 text-xs">Product</th>
                      <th className="text-left py-2 px-3 font-medium text-gray-700 text-xs">Category</th>
                      <th className="text-left py-2 px-3 font-medium text-gray-700 text-xs">Price</th>
                      <th className="text-left py-2 px-3 font-medium text-gray-700 text-xs">Stock</th>
                      <th className="text-left py-2 px-3 font-medium text-gray-700 text-xs">Status</th>
                      <th className="text-left py-2 px-3 font-medium text-gray-700 text-xs">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-3">
                          <div className="flex items-center space-x-3">
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-8 h-8 object-cover rounded-lg"
                            />
                            <div>
                              <p className="font-medium text-primary-charcoal text-sm">{product.name}</p>
                              <p className="text-xs text-gray-600">{product.description.substring(0, 40)}...</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-3">
                          <span className="text-gray-600 text-xs capitalize">{product.category.replace('-', ' ')}</span>
                        </td>
                        <td className="py-3 px-3">
                          <span className="font-medium text-sm">PKR {product.price.toLocaleString()}</span>
                        </td>
                        <td className="py-3 px-3">
                          <span className={`text-xs ${product.stock > 10 ? 'text-green-600' : 'text-red-600'}`}>
                            {product.stock} {product.unit}
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            product.isApproved ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {product.isApproved ? 'Approved' : 'Pending'}
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <div className="flex space-x-1">
                            <button className="p-1 text-gray-400 hover:text-primary-orange transition-colors">
                              <EyeIcon className="w-3 h-3" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                              <PencilIcon className="w-3 h-3" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
                              <TrashIcon className="w-3 h-3" />
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

        {activeTab === 'orders' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card p-4">
              <h3 className="text-base font-semibold text-primary-charcoal mb-4">Orders</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-3 font-medium text-gray-700 text-xs">Order ID</th>
                      <th className="text-left py-2 px-3 font-medium text-gray-700 text-xs">Items</th>
                      <th className="text-left py-2 px-3 font-medium text-gray-700 text-xs">Total</th>
                      <th className="text-left py-2 px-3 font-medium text-gray-700 text-xs">Status</th>
                      <th className="text-left py-2 px-3 font-medium text-gray-700 text-xs">Payment</th>
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
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(order.paymentStatus)}`}>
                            {order.paymentStatus}
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <div className="flex space-x-1">
                            <button className="text-primary-orange hover:text-orange-600 text-xs font-medium">
                              View
                            </button>
                            <button className="text-blue-600 hover:text-blue-700 text-xs font-medium">
                              Update
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

export default SellerDashboard; 