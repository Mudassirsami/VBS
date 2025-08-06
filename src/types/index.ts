// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: 'buyer' | 'seller' | 'admin';
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface SellerProfile {
  id: string;
  userId: string;
  companyName: string;
  businessType: string;
  address: string;
  documents: Document[];
  isApproved: boolean;
  rating: number;
  totalOrders: number;
  completedOrders: number;
}

export interface BuyerProfile {
  id: string;
  userId: string;
  companyName?: string;
  address: string;
  preferences: string[];
}

// Product Types
export interface Product {
  id: string;
  sellerId: string;
  name: string;
  description: string;
  category: ProductCategory;
  subcategory: string;
  price: number;
  currency: string;
  unit: string;
  stock: number;
  images: string[];
  specifications: ProductSpecification[];
  isApproved: boolean;
  isActive: boolean;
  rating: number;
  reviewCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductSpecification {
  key: string;
  value: string;
}

export type ProductCategory = 
  | 'fasteners'
  | 'raw-materials'
  | 'tools-equipment'
  | 'machinery'
  | 'structural-components'
  | 'doors-windows'
  | 'electrical'
  | 'plumbing'
  | 'interior-finishing'
  | 'wood-work'
  | 'glass-aluminum'
  | 'exterior-landscaping'
  | 'safety-equipment';

// Order Types
export interface Order {
  id: string;
  buyerId: string;
  sellerId: string;
  products: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  deliveryAddress: Address;
  deliveryMethod: DeliveryMethod;
  estimatedDelivery: Date;
  actualDelivery?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
  total: number;
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'completed';

export type PaymentStatus = 
  | 'pending'
  | 'paid'
  | 'failed'
  | 'refunded';

export type DeliveryMethod = 
  | 'standard'
  | 'express'
  | 'pickup';

// Address Type
export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

// Review Types
export interface Review {
  id: string;
  orderId: string;
  productId: string;
  buyerId: string;
  sellerId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

// Document Types
export interface Document {
  id: string;
  name: string;
  type: string;
  url: string;
  uploadedAt: Date;
  isVerified: boolean;
}

// Filter Types
export interface ProductFilters {
  category?: ProductCategory;
  subcategory?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  inStock?: boolean;
  sellerId?: string;
  search?: string;
}

// Dashboard Stats
export interface DashboardStats {
  totalOrders: number;
  activeOrders: number;
  completedOrders: number;
  totalRevenue: number;
  averageRating: number;
  totalProducts: number;
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  isRead: boolean;
  createdAt: Date;
}

// Contact Form
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Auth Types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  role: 'buyer' | 'seller';
}

export interface AuthContextType {
  user: User | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  switchRole: (role: 'buyer' | 'seller') => void;
  isLoading: boolean;
} 