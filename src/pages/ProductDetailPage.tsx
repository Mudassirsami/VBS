import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  StarIcon,
  ShoppingCartIcon,
  HeartIcon,
  ShareIcon,
  TruckIcon,
  ShieldCheckIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import { Product } from '../types';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Mock product data
  const mockProduct: Product = {
    id: '1',
    sellerId: 'seller1',
    name: 'High-Quality Steel Screws',
    description: 'Premium grade steel screws for construction projects. These high-quality screws are made from durable steel and are perfect for various construction applications. Available in multiple sizes and finishes to meet your specific project requirements.',
    category: 'fasteners',
    subcategory: 'screws',
    price: 250,
    currency: 'PKR',
    unit: 'pack',
    stock: 100,
    images: [
      'https://picsum.photos/600/400?random=10',
      'https://picsum.photos/600/400?random=11',
      'https://picsum.photos/600/400?random=12',
      'https://picsum.photos/600/400?random=13'
    ],
    specifications: [
      { key: 'Material', value: 'High-Grade Steel' },
      { key: 'Size', value: 'M8 x 50mm' },
      { key: 'Grade', value: '8.8' },
      { key: 'Finish', value: 'Zinc Plated' },
      { key: 'Head Type', value: 'Hex Head' },
      { key: 'Thread Type', value: 'Coarse Thread' },
      { key: 'Packaging', value: '100 pieces per pack' },
      { key: 'Weight', value: '2.5 kg per pack' }
    ],
    isApproved: true,
    isActive: true,
    rating: 4.5,
    reviewCount: 23,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  useEffect(() => {
    setTimeout(() => {
      setProduct(mockProduct);
      setIsLoading(false);
    }, 1000);
  }, [id]);

  const handleQuantityChange = (value: number) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 1 && newQuantity <= product!.stock) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Add to cart functionality
    console.log('Added to cart:', { product, quantity });
  };

  const handleContactSupplier = () => {
    // Contact supplier functionality
    console.log('Contact supplier');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-orange"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600 mb-4">Product Not Found</h2>
          <p className="text-gray-500">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary-lightGrey">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-96 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-xl';
                    fallback.textContent = product.name.substring(0, 25);
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary-orange' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement('div');
                        fallback.className = 'w-full h-20 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-xs';
                        fallback.textContent = `${index + 1}`;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Product Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm text-gray-500 uppercase tracking-wide">
                  {product.category.replace('-', ' ')}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-500">{product.subcategory}</span>
              </div>
              
              <h1 className="text-3xl font-bold text-primary-charcoal mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium">{product.rating}</span>
                  <span className="text-gray-500 ml-1">({product.reviewCount} reviews)</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-green-600 font-medium">
                  {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-baseline space-x-2 mb-4">
                <span className="text-3xl font-bold text-primary-orange">
                  PKR {product.price.toLocaleString()}
                </span>
                <span className="text-gray-500">per {product.unit}</span>
              </div>
              
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4 mb-6">
                <label className="text-sm font-medium text-gray-700">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-3 py-2 text-gray-600 hover:text-primary-orange"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-3 py-2 text-gray-600 hover:text-primary-orange"
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-500">
                  {product.stock} available
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 btn-primary flex items-center justify-center"
                >
                  <ShoppingCartIcon className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
                <button
                  onClick={handleContactSupplier}
                  className="btn-secondary flex items-center justify-center"
                >
                  <EyeIcon className="w-5 h-5 mr-2" />
                  Contact Supplier
                </button>
              </div>

              {/* Additional Actions */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                <div className="flex space-x-4">
                  <button className="flex items-center text-gray-600 hover:text-primary-orange">
                    <HeartIcon className="w-5 h-5 mr-1" />
                    Wishlist
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-primary-orange">
                    <ShareIcon className="w-5 h-5 mr-1" />
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-primary-charcoal mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <TruckIcon className="w-5 h-5 text-primary-orange" />
                  <span className="text-gray-600">Fast Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ShieldCheckIcon className="w-5 h-5 text-primary-orange" />
                  <span className="text-gray-600">Quality Assured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <StarIcon className="w-5 h-5 text-primary-orange" />
                  <span className="text-gray-600">Verified Supplier</span>
                </div>
                <div className="flex items-center space-x-3">
                  <EyeIcon className="w-5 h-5 text-primary-orange" />
                  <span className="text-gray-600">Secure Payment</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-primary-charcoal mb-6">Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {product.specifications.map((spec, index) => (
                <div key={index} className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">{spec.key}</span>
                  <span className="text-gray-600">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="card p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-primary-charcoal">Customer Reviews</h2>
              <button className="btn-primary">Write a Review</button>
            </div>
            
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No reviews yet
              </h3>
              <p className="text-gray-500">
                Be the first to review this product
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetailPage; 