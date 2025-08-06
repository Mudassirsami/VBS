import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  Bars3Icon, 
  XMarkIcon, 
  UserCircleIcon,
  ShoppingCartIcon,
  BuildingStorefrontIcon
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const { user, logout, switchRole } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsUserMenuOpen(false);
  };

  const handleDashboardSwitch = (role: 'buyer' | 'seller') => {
    // Switch user role to match the dashboard they want to access
    switchRole(role);
    navigate(`/dashboard/${role}`);
    setIsUserMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">VPS</span>
            </div>
            <span className="text-lg font-bold text-primary-charcoal">
              VPS Supplier
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-primary-orange transition-colors duration-300 font-medium text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-orange transition-colors duration-300"
                >
                  <UserCircleIcon className="w-5 h-5" />
                  <span className="hidden sm:block font-medium text-sm">{user.name}</span>
                </button>

                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-200 py-1"
                    >
                      <div className="px-3 py-2 border-b border-gray-100">
                        <p className="text-xs font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                      
                      <div className="py-1">
                        <button
                          onClick={() => handleDashboardSwitch('buyer')}
                          className="flex items-center w-full px-3 py-2 text-xs text-gray-700 hover:bg-gray-100"
                        >
                          <ShoppingCartIcon className="w-3 h-3 mr-2" />
                          Buyer Dashboard
                        </button>
                        <button
                          onClick={() => handleDashboardSwitch('seller')}
                          className="flex items-center w-full px-3 py-2 text-xs text-gray-700 hover:bg-gray-100"
                        >
                          <BuildingStorefrontIcon className="w-3 h-3 mr-2" />
                          Seller Dashboard
                        </button>
                        <Link
                          to="/profile"
                          className="block px-3 py-2 text-xs text-gray-700 hover:bg-gray-100"
                        >
                          Profile
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-3 py-2 text-xs text-red-600 hover:bg-red-50"
                        >
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="btn-secondary text-xs px-3 py-1"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn-primary text-xs px-3 py-1"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1 rounded-md text-gray-700 hover:text-primary-orange hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-5 h-5" />
              ) : (
                <Bars3Icon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-orange hover:bg-gray-100 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {!user && (
                  <>
                    <Link
                      to="/login"
                      className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-orange hover:bg-gray-100 rounded-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="block px-3 py-2 text-sm font-medium text-primary-orange hover:bg-orange-50 rounded-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header; 