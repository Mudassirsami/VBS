import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BuildingStorefrontIcon,
  ShoppingCartIcon,
  ShieldCheckIcon,
  TruckIcon,
  StarIcon,
  UsersIcon,
  ChartBarIcon,
  CogIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: BuildingStorefrontIcon,
      title: 'B2B Marketplace',
      description: 'Connect with verified suppliers and buyers in the construction industry'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure Transactions',
      description: 'Safe and secure payment processing with admin oversight'
    },
    {
      icon: TruckIcon,
      title: 'Fast Delivery',
      description: 'Reliable delivery options with real-time tracking'
    },
    {
      icon: StarIcon,
      title: 'Quality Assurance',
      description: 'Verified products with ratings and reviews'
    }
  ];

  const categories = [
    { name: 'Fasteners', icon: CogIcon, count: '500+' },
    { name: 'Raw Materials', icon: BuildingStorefrontIcon, count: '1000+' },
    { name: 'Tools & Equipment', icon: CogIcon, count: '800+' },
    { name: 'Machinery', icon: CogIcon, count: '200+' },
    { name: 'Electrical Items', icon: CogIcon, count: '600+' },
    { name: 'Plumbing', icon: CogIcon, count: '400+' }
  ];

  const stats = [
    { number: '1000+', label: 'Verified Suppliers' },
    { number: '5000+', label: 'Products Available' },
    { number: '10000+', label: 'Happy Customers' },
    { number: '99%', label: 'Satisfaction Rate' }
  ];

  const testimonials = [
    {
      name: 'Ahmed Khan',
      role: 'Construction Manager',
      company: 'Khan Construction Co.',
      content: 'VPS Supplier has revolutionized our procurement process. The quality of materials and reliable delivery has exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Project Director',
      company: 'Johnson Builders Ltd.',
      content: 'The platform is incredibly user-friendly and the customer support is outstanding. Highly recommended for any construction project.',
      rating: 5
    },
    {
      name: 'Muhammad Ali',
      role: 'Site Engineer',
      company: 'Ali Engineering Works',
      content: 'Fast delivery and competitive prices. VPS Supplier has become our go-to platform for all construction materials.',
      rating: 5
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Register & Verify',
      description: 'Create your account and get verified as a supplier or buyer in minutes.',
      icon: UsersIcon
    },
    {
      step: '02',
      title: 'Browse & Select',
      description: 'Explore thousands of products across multiple categories and find what you need.',
      icon: ShoppingCartIcon
    },
    {
      step: '03',
      title: 'Secure Payment',
      description: 'Make secure payments with our protected transaction system and admin oversight.',
      icon: ShieldCheckIcon
    },
    {
      step: '04',
      title: 'Fast Delivery',
      description: 'Get your materials delivered to your site with real-time tracking.',
      icon: TruckIcon
    }
  ];

  const faqs = [
    {
      question: 'How do I register as a supplier?',
      answer: 'Simply click on "Join as Supplier" and fill out the registration form. Our team will verify your business credentials within 24 hours.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and secure online payment methods. All transactions are protected by our secure payment system.'
    },
    {
      question: 'How long does delivery take?',
      answer: 'Delivery times vary by location and product availability. Most orders are delivered within 3-7 business days with real-time tracking.'
    },
    {
      question: 'What if I receive damaged goods?',
      answer: 'We have a comprehensive return and refund policy. Contact our customer support within 48 hours of delivery for damaged items.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-orange via-orange-500 to-orange-600 text-white overflow-hidden shadow-xl">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container-custom section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
                Your Trusted
                <span className="block text-yellow-300">Construction Supply Partner</span>
              </h1>
              <p className="text-xl text-orange-100 leading-relaxed max-w-xl">
                Empowering your projects with quality materials, secure transactions, and reliable delivery—trusted by professionals across the industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link to="/products" className="btn-primary bg-white text-primary-orange hover:bg-gray-100 shadow-md font-semibold text-lg px-8 py-3 rounded-lg transition-all duration-200">
                  Browse Products
                </Link>
                <Link to="/register" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-orange font-semibold text-lg px-8 py-3 rounded-lg transition-all duration-200">
                  Join as Supplier
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 border border-white/30 shadow-2xl w-full max-w-xs">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-extrabold text-yellow-300 drop-shadow-lg">{stat.number}</div>
                      <div className="text-sm text-orange-100 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="section-padding bg-secondary-lightGrey">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-primary-charcoal mb-4 tracking-tight">
              Why Choose VPS Supplier?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide a comprehensive B2B platform that connects construction professionals 
              with quality suppliers and reliable delivery services.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-primary-orange group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-orange to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary-charcoal mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className="section-padding bg-gradient-to-br from-orange-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-primary-charcoal mb-4">
              Explore Our Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find everything you need for your construction projects in our comprehensive categories.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group border-b-4 border-primary-orange"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-orange to-yellow-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-base font-semibold text-primary-orange bg-orange-100 px-4 py-1 rounded-full shadow">
                    {category.count}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary-charcoal mb-2">
                  {category.name}
                </h3>
                <Link 
                  to={`/products?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-primary-orange hover:text-orange-600 font-medium inline-flex items-center transition-colors duration-200"
                >
                  Browse Products
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-orange via-orange-500 to-yellow-400 text-white shadow-inner">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-extrabold mb-6 drop-shadow-lg">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join thousands of construction professionals who trust VPS Supplier for their material needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="btn-primary bg-white text-primary-orange hover:bg-gray-100 shadow-md font-semibold text-lg px-8 py-3 rounded-lg transition-all duration-200">
                Register Now
              </Link>
              <Link to="/contact" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-orange font-semibold text-lg px-8 py-3 rounded-lg transition-all duration-200">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-primary-charcoal mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with VPS Supplier in just four simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-primary-orange" />
                </div>
                <h3 className="text-xl font-semibold text-primary-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-orange to-yellow-400 transform translate-x-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-primary-charcoal mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what construction professionals have to say about VPS Supplier.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-primary-charcoal">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-sm text-primary-orange font-medium">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-primary-charcoal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our platform and services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold text-primary-charcoal mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-r from-primary-orange to-yellow-400 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-extrabold mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Subscribe to our newsletter for the latest updates, new products, and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-primary-orange font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-charcoal mb-2">Call Us</h3>
              <p className="text-gray-600">+92 300 1234567</p>
              <p className="text-gray-600">+92 301 7654321</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <EnvelopeIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-charcoal mb-2">Email Us</h3>
              <p className="text-gray-600">info@vpssupplier.com</p>
              <p className="text-gray-600">support@vpssupplier.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-charcoal mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Business District</p>
              <p className="text-gray-600">Karachi, Pakistan</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 