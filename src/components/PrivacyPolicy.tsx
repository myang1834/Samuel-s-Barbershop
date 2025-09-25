import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
export function PrivacyPolicy() {
  return <div className="w-full min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-[#1E1E1E] hover:text-[#B8860B] mb-6 transition-colors duration-300">
              <ChevronLeft size={20} className="mr-1" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#1E1E1E]">
              Privacy Policy
            </h1>
            <p className="text-gray-600 mb-8">
              Effective Date: October 25, 2023
            </p>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-6">
                At Samuel's Barbers, we are committed to protecting your privacy
                and ensuring the security of your personal information. This
                Privacy Policy outlines how we collect, use, and safeguard your
                data when you visit our website or use our services.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E1E1E]">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  phone number, and appointment details.
                </li>
                <li>
                  <strong>Payment Information:</strong> Credit card or other
                  payment details (processed securely through our payment
                  gateway).
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type,
                  device information, and browsing behavior on our website.
                </li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E1E1E]">
                2. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>To schedule and manage appointments.</li>
                <li>To process payments and provide receipts.</li>
                <li>To improve our services and website experience.</li>
                <li>
                  To communicate with you about promotions, updates, or
                  important notices.
                </li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E1E1E]">
                3. Sharing Your Information
              </h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to
                third parties. Your data may be shared with:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  Service providers (e.g., payment processors) who assist in
                  operating our business.
                </li>
                <li>Legal authorities if required by law.</li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E1E1E]">
                4. Data Security
              </h2>
              <p className="mb-6">
                We implement industry-standard security measures to protect your
                information from unauthorized access, alteration, or disclosure.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E1E1E]">
                5. Your Rights
              </h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Access, update, or delete your personal information.</li>
                <li>Opt-out of marketing communications.</li>
                <li>Request a copy of the data we hold about you.</li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E1E1E]">
                6. Cookies
              </h2>
              <p className="mb-6">
                Our website uses cookies to enhance your browsing experience.
                You can disable cookies in your browser settings, but this may
                affect website functionality.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E1E1E]">
                7. Changes to This Policy
              </h2>
              <p className="mb-6">
                We may update this Privacy Policy periodically. Any changes will
                be posted on this page with an updated effective date.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E1E1E]">
                8. Contact Us
              </h2>
              <p className="mb-6">
                If you have questions about this Privacy Policy, please contact
                us at:
                <br />
                <a href="mailto:samuelgoncalvezmoura@gmail.com" className="text-[#B8860B] hover:underline">
                  samuelgoncalvezmoura@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
}