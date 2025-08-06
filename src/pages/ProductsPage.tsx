import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  Squares2X2Icon,
  ListBulletIcon,
  StarIcon,
  ShoppingCartIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import { Product, ProductCategory, ProductFilters } from '../types';

const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  
  const [filters, setFilters] = useState<ProductFilters>({
    category: undefined,
    subcategory: '',
    minPrice: undefined,
    maxPrice: undefined,
    rating: undefined,
    inStock: undefined,
    search: ''
  });

  // Mock product data
  const mockProducts: Product[] = [
    {
      id: '1',
      sellerId: 'seller1',
      name: 'High-Quality Steel Screws',
      description: 'Premium grade steel screws for construction projects. Available in various sizes.',
      category: 'fasteners',
      subcategory: 'screws',
      price: 250,
      currency: 'PKR',
      unit: 'pack',
      stock: 100,
      images: ['https://picsum.photos/300/200?random=1'],
      specifications: [
        { key: 'Material', value: 'Steel' },
        { key: 'Size', value: 'M8 x 50mm' },
        { key: 'Grade', value: '8.8' }
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
      sellerId: 'seller2',
      name: 'Portland Cement',
      description: 'High-quality Portland cement for construction and building projects.',
      category: 'raw-materials',
      subcategory: 'cement',
      price: 850,
      currency: 'PKR',
      unit: 'bag',
      stock: 50,
      images: ['https://picsum.photos/300/200?random=2'],
      specifications: [
        { key: 'Type', value: 'Portland' },
        { key: 'Weight', value: '50kg' },
        { key: 'Strength', value: '53 Grade' }
      ],
      isApproved: true,
      isActive: true,
      rating: 4.8,
      reviewCount: 45,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '3',
      sellerId: 'seller3',
      name: 'Electric Drill Machine',
      description: 'Professional electric drill machine with variable speed control.',
      category: 'tools-equipment',
      subcategory: 'drills',
      price: 15000,
      currency: 'PKR',
      unit: 'piece',
      stock: 15,
      images: ['https://picsum.photos/300/200?random=3'],
      specifications: [
        { key: 'Power', value: '800W' },
        { key: 'Chuck Size', value: '13mm' },
        { key: 'Speed', value: '0-3000 RPM' }
      ],
      isApproved: true,
      isActive: true,
      rating: 4.6,
      reviewCount: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  const categories: { value: ProductCategory; label: string; icon: string }[] = [
    { value: 'fasteners', label: 'Fasteners', icon: '🔩' },
    { value: 'raw-materials', label: 'Raw Materials', icon: '🧱' },
    { value: 'tools-equipment', label: 'Tools & Equipment', icon: '🛠️' },
    { value: 'machinery', label: 'Machinery', icon: '🚜' },
    { value: 'electrical', label: 'Electrical Items', icon: '⚡' },
    { value: 'plumbing', label: 'Plumbing', icon: '🚿' }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts(mockProducts);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    // Apply filters
    let filtered = products.filter(product => {
      if (filters.category && product.category !== filters.category) return false;
      if (filters.subcategory && !product.subcategory.toLowerCase().includes(filters.subcategory.toLowerCase())) return false;
      if (filters.minPrice && product.price < filters.minPrice) return false;
      if (filters.maxPrice && product.price > filters.maxPrice) return false;
      if (filters.rating && product.rating < filters.rating) return false;
      if (filters.inStock && product.stock === 0) return false;
      if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
      return true;
    });
    setFilteredProducts(filtered);
  }, [products, filters]);

  const handleFilterChange = (key: keyof ProductFilters, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: undefined,
      subcategory: '',
      minPrice: undefined,
      maxPrice: undefined,
      rating: undefined,
      inStock: undefined,
      search: ''
    });
  };

  const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card overflow-hidden group"
    >
      <div className="relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              const fallback = document.createElement('div');
              fallback.className = 'w-full h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg';
              fallback.textContent = product.name.substring(0, 20);
              parent.appendChild(fallback);
            }
          }}
        />
        <div className="absolute top-2 right-2 bg-primary-orange text-white px-2 py-1 rounded-full text-xs font-semibold">
          {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide">
            {product.category.replace('-', ' ')}
          </span>
          <div className="flex items-center">
            <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
            <span className="text-xs text-gray-400 ml-1">({product.reviewCount})</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-primary-charcoal mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary-orange">
              {product.price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500 ml-1">
              {product.currency}/{product.unit}
            </span>
          </div>
          
          <div className="flex space-x-2">
            <button className="p-2 text-gray-400 hover:text-primary-orange transition-colors">
              <EyeIcon className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-primary-orange transition-colors">
              <ShoppingCartIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );

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
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary-charcoal mb-4">
            Construction Products
          </h1>
          <p className="text-gray-600">
            Find the best construction materials and equipment from verified suppliers
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FunnelIcon className="w-5 h-5 mr-2" />
              Filters
            </button>

            {/* View Mode */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 ${viewMode === 'grid' ? 'bg-primary-orange text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <Squares2X2Icon className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 ${viewMode === 'list' ? 'bg-primary-orange text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <ListBulletIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 pt-6 border-t border-gray-200"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={filters.category || ''}
                    onChange={(e) => handleFilterChange('category', e.target.value || undefined)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                  >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category.value} value={category.value}>
                        {category.icon} {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Min Price
                  </label>
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.minPrice || ''}
                    onChange={(e) => handleFilterChange('minPrice', e.target.value ? Number(e.target.value) : undefined)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Price
                  </label>
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.maxPrice || ''}
                    onChange={(e) => handleFilterChange('maxPrice', e.target.value ? Number(e.target.value) : undefined)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                  />
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Min Rating
                  </label>
                  <select
                    value={filters.rating || ''}
                    onChange={(e) => handleFilterChange('rating', e.target.value ? Number(e.target.value) : undefined)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                  >
                    <option value="">Any Rating</option>
                    <option value="4">4+ Stars</option>
                    <option value="3">3+ Stars</option>
                    <option value="2">2+ Stars</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="inStock"
                    checked={filters.inStock || false}
                    onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                    className="h-4 w-4 text-primary-orange focus:ring-primary-orange border-gray-300 rounded"
                  />
                  <label htmlFor="inStock" className="ml-2 text-sm text-gray-700">
                    In Stock Only
                  </label>
                </div>

                <button
                  onClick={clearFilters}
                  className="text-sm text-primary-orange hover:text-orange-600 font-medium"
                >
                  Clear All Filters
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No products found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search criteria or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage; 