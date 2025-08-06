import React from 'react';
import { motion } from 'framer-motion';
import { 
  BuildingStorefrontIcon,
  UsersIcon,
  ShieldCheckIcon,
  TruckIcon,
  StarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '1000+', label: 'Verified Suppliers' },
    { number: '5000+', label: 'Products Available' },
    { number: '10000+', label: 'Happy Customers' },
    { number: '99%', label: 'Satisfaction Rate' }
  ];

  const values = [
    {
      icon: ShieldCheckIcon,
      title: 'Trust & Reliability',
      description: 'We ensure all suppliers are verified and products meet quality standards.'
    },
    {
      icon: UsersIcon,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We provide excellent support and service.'
    },
    {
      icon: TruckIcon,
      title: 'Fast Delivery',
      description: 'Reliable delivery options with real-time tracking for your convenience.'
    },
    {
      icon: StarIcon,
      title: 'Quality Assurance',
      description: 'All products are quality-checked and backed by our satisfaction guarantee.'
    }
  ];

  const team = [
    {
      name: 'Abdullah',
      role: 'Founder & CEO',
      email: 'Abdullahnew1989@gmail.com',
      phone: '+92 349 1386083'
    }
  ];

  return (
    <div className="min-h-screen bg-secondary-lightGrey">
      <div className="container-custom section-padding">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-charcoal mb-6">
            About VPS Supplier
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            VPS Supplier is your trusted B2B platform connecting construction professionals 
            with quality suppliers. We bridge the gap between buyers and sellers in the 
            construction industry, ensuring reliable transactions and exceptional service.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary-orange mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card p-8"
          >
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
              <BuildingStorefrontIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary-charcoal mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To revolutionize the construction supply chain by providing a secure, 
              efficient, and transparent B2B marketplace that connects verified suppliers 
              with qualified buyers, ensuring quality products and reliable service delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="card p-8"
          >
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
              <StarIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary-charcoal mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the leading B2B platform in the construction industry, 
              setting standards for quality, reliability, and customer satisfaction 
              while fostering sustainable business relationships.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-charcoal mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our relationships with customers and partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="card p-6 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-charcoal mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-charcoal mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals behind VPS Supplier who are committed to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary-charcoal mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-orange font-medium mb-4">{member.role}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>{member.email}</p>
                  <p>{member.phone}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="card p-8 bg-gradient-primary text-white"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Choose VPS Supplier?</h2>
            <p className="text-xl text-orange-100">
              We provide comprehensive solutions for all your construction supply needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Verified Suppliers Only',
              'Quality Assured Products',
              'Secure Payment Processing',
              'Fast & Reliable Delivery',
              '24/7 Customer Support',
              'Competitive Pricing'
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircleIcon className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                <span className="text-orange-100">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage; 