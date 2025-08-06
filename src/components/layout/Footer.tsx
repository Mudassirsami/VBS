import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon, 
  Mail, 
  MapPinIcon,
  Facebook,
  Instagram
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  const categories = [
    'Fasteners',
    'Raw Materials',
    'Tools & Equipment',
    'Machinery',
    'Electrical Items',
    'Plumbing',
  ];

  return (
    <footer className="bg-secondary-softBlack text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <img src="/assets/logo vbs.jpg" alt="VBS Logo" className="w-8 h-8 rounded-lg" />
              <span className="text-lg font-bold">VPS Supplier</span>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed">
              Your trusted B2B platform for construction materials and equipment. 
              Connecting buyers and sellers in the construction industry.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/share/1C64pS9tRf/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-orange transition-colors duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@vbs.visionbuilder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-orange transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold">Quick Links</h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary-orange transition-colors duration-300 text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold">Categories</h3>
            <ul className="space-y-1">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    to={`/products?category=${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-primary-orange transition-colors duration-300 text-xs"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <PhoneIcon className="w-4 h-4 text-primary-orange mt-0.5" />
                <div>
                  <p className="text-gray-300 text-xs">+92 349 1386083</p>
                  <p className="text-gray-300 text-xs">+92 349 1386083</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-primary-orange mt-0.5" />
                <p className="text-gray-300 text-xs">Abdullahnew1989@gmail.com</p>
              </div>
              
              <div className="flex items-start space-x-2">
                <MapPinIcon className="w-4 h-4 text-primary-orange mt-0.5" />
                <p className="text-gray-300 text-xs">
                  2nd Floor Iraqi Plaza<br />
                  Khwaza Khela Swat
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-gray-300 text-xs">
              © {currentYear} VPS Supplier. All rights reserved.
            </p>
            
            <div className="flex space-x-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-300 hover:text-primary-orange transition-colors duration-300 text-xs"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 