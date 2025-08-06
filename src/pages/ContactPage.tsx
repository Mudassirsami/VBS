import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNotification } from '../context/NotificationContext';
import { 
  PhoneIcon, 
  Mail, 
  MapPinIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const { addNotification } = useNotification();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      addNotification({
        title: 'Message Sent!',
        message: 'Thank you for contacting us. We will get back to you soon.',
        type: 'success'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsLoading(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: ['+92 349 1386083', '+92 349 1386083'],
      link: 'tel:+923491386083'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['Abdullahnew1989@gmail.com'],
      link: 'mailto:Abdullahnew1989@gmail.com'
    },
    {
      icon: MapPinIcon,
      title: 'Address',
      details: ['2nd Floor Iraqi Plaza', 'Khwaza Khela Swat'],
      link: '#'
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM'],
      link: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: FacebookIcon,
      url: 'https://www.facebook.com/share/1C64pS9tRf/?mibextid=wwXIfr',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'TikTok',
      icon: InstagramIcon,
      url: 'https://www.tiktok.com/@vbs.visionbuilder',
      color: 'bg-pink-600 hover:bg-pink-700'
    }
  ];

  return (
    <div className="min-h-screen bg-secondary-lightGrey">
      <div className="container-custom section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-charcoal mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any questions, inquiries, or support. 
            We're here to help you with all your construction supply needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-8"
          >
            <h2 className="text-2xl font-bold text-primary-charcoal mb-6">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="input-field"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="product">Product Information</option>
                    <option value="order">Order Support</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="input-field resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full flex justify-center items-center"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="card p-6"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary-charcoal mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">
                            {info.link && info.link !== '#' ? (
                              <a 
                                href={info.link}
                                className="hover:text-primary-orange transition-colors"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="card p-6"
            >
              <h3 className="text-lg font-semibold text-primary-charcoal mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center text-white transition-colors duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Bank Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="card p-6"
            >
              <h3 className="text-lg font-semibold text-primary-charcoal mb-4">
                Bank Details
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-700">Allied Bank</p>
                  <p className="text-gray-600 text-sm">Account 1: 14050010086482260017</p>
                  <p className="text-gray-600 text-sm">Account 2: 14050010086482260023</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16"
        >
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-primary-charcoal mb-6 text-center">
              Our Location
            </h2>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPinIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">2nd Floor Iraqi Plaza</p>
                <p className="text-gray-600">Khwaza Khela Swat</p>
                <p className="text-gray-600">KPK, Pakistan</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage; 