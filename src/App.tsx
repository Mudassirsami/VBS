import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { NotificationProvider } from './context/NotificationContext';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Public Pages
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

// Protected Pages
import BuyerDashboard from './pages/dashboard/BuyerDashboard';
import SellerDashboard from './pages/dashboard/SellerDashboard';
import ProfilePage from './pages/ProfilePage';

// Components
import ProtectedRoute from './components/auth/ProtectedRoute';
import NotificationToast from './components/common/NotificationToast';

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductDetailPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />

                {/* Protected Routes */}
                <Route 
                  path="/dashboard/buyer" 
                  element={
                    <ProtectedRoute allowedRoles={['buyer', 'admin']}>
                      <BuyerDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/dashboard/seller" 
                  element={
                    <ProtectedRoute allowedRoles={['seller', 'admin']}>
                      <SellerDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/profile" 
                  element={
                    <ProtectedRoute allowedRoles={['buyer', 'seller', 'admin']}>
                      <ProfilePage />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </main>
            <Footer />
            <NotificationToast />
          </div>
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App; 