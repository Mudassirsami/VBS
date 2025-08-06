import React from 'react';
import { motion } from 'framer-motion';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-secondary-lightGrey">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-charcoal mb-4">
              Terms and Conditions
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="card p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary-charcoal mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using VPS Supplier's B2B platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-charcoal mb-4">
                2. Description of Service
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                VPS Supplier provides a B2B marketplace platform that connects construction material suppliers with buyers. Our services include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Product listing and catalog management</li>
                <li>Order processing and management</li>
                <li>Payment processing and security</li>
                <li>Customer support and dispute resolution</li>
                <li>Quality assurance and verification services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-charcoal mb-4">
                3. User Accounts and Registration
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To use our services, you must register for an account. You agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-charcoal mb-4">
                4. Seller Responsibilities
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sellers on our platform must:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Provide accurate product information and pricing</li>
                <li>Maintain adequate inventory levels</li>
                <li>Ensure product quality and safety standards</li>
                <li>Process orders promptly and efficiently</li>
                <li>Provide timely customer support</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-charcoal mb-4">
                5. Buyer Responsibilities
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Buyers on our platform must:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Provide accurate delivery and billing information</li>
                <li>Make timely payments for orders</li>
                <li>Inspect products upon delivery</li>
                <li>Report any issues within the specified timeframe</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-charcoal mb-4">
                6. Payment and Fees
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                VPS Supplier charges platform fees for transactions. These fees are:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Clearly disclosed before transaction completion</li>
                <li>Deducted from the total transaction amount</li>
                <li>Non-refundable except as required by law</li>
                <li>Subject to change with 30 days notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-charcoal mb-4">
                7. Quality Assurance
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We strive to maintain high quality standards but cannot guarantee that all products will meet your specific requirements. Buyers are responsible for verifying product specifications and suitability for their intended use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-charcoal mb-4">
                8. Dispute Resolution
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                In case of disputes between buyers and sellers:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Parties should attempt to resolve issues directly first</li>
                <li>VPS Supplier may mediate disputes at our discretion</li>
                <li>Our decision in mediation is final and binding</li>
                <li>Legal disputes will be resolved in Pakistani courts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-charcoal mb-4">
                9. Privacy and Data Protection
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We are committed to protecting your privacy. Our data collection and usage practices are outlined in our Privacy Policy, which is incorporated into these terms by reference.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-charcoal mb-4">
                10. Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                VPS Supplier's liability is limited to the amount of fees paid in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-charcoal mb-4">
                11. Termination
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Either party may terminate this agreement with 30 days written notice. Upon termination, all outstanding obligations must be fulfilled, and account access will be suspended.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-charcoal mb-4">
                12. Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of the platform constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-charcoal mb-4">
                13. Contact Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about these terms, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>VPS Supplier</strong><br />
                  Email: Abdullahnew1989@gmail.com<br />
                  Phone: +92 349 1386083<br />
                  Address: 2nd Floor Iraqi Plaza, Khwaza Khela Swat
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage; 