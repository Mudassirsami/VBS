import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-secondary-lightGrey">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary-charcoal mb-8">
              Privacy Policy
            </h1>
            
            <div className="space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-primary-charcoal mb-4">
                  1. Information We Collect
                </h2>
                <p className="mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  make a purchase, or contact us for support.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Personal information (name, email, phone number)</li>
                  <li>Business information (company name, address)</li>
                  <li>Payment information (processed securely through our payment partners)</li>
                  <li>Communication records</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary-charcoal mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Improve our services and develop new features</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary-charcoal mb-4">
                  3. Information Sharing
                </h2>
                <p className="mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy.
                </p>
                <p className="mb-4">
                  We may share information with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Service providers who assist in our operations</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary-charcoal mb-4">
                  4. Data Security
                </h2>
                <p className="mb-4">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary-charcoal mb-4">
                  5. Your Rights
                </h2>
                <p className="mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint with supervisory authorities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary-charcoal mb-4">
                  6. Cookies and Tracking
                </h2>
                <p className="mb-4">
                  We use cookies and similar technologies to enhance your experience, analyze usage, 
                  and provide personalized content.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary-charcoal mb-4">
                  7. Changes to This Policy
                </h2>
                <p className="mb-4">
                  We may update this privacy policy from time to time. We will notify you of any changes 
                  by posting the new policy on this page and updating the "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary-charcoal mb-4">
                  8. Contact Us
                </h2>
                <p className="mb-4">
                  If you have any questions about this privacy policy, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> Abdullahnew1989@gmail.com</p>
                  <p><strong>Phone:</strong> +92 349 1386083</p>
                  <p><strong>Address:</strong> 2nd Floor Iraqi Plaza, Khwaza Khela Swat</p>
                </div>
              </section>

              <div className="border-t pt-6 mt-8">
                <p className="text-sm text-gray-500">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage; 