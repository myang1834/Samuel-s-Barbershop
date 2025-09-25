import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
export function TermsOfUse() {
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
              Terms of Use
            </h1>
            <p className="text-gray-600 mb-8">
              Effective Date: October 25, 2023
            </p>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-6">
                Welcome to Samuel's Barbers. By accessing or using our website
                and services, you agree to comply with these Terms of Use.
                Please read them carefully.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E1E1E]">
                1. Acceptance of Terms
              </h2>
              <p className="mb-6">
                By using our website or booking an appointment, you agree to
                these Terms of Use and our Privacy Policy.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E1E1E]">
                2. Services
              </h2>
              <p className="mb-6">
                We provide professional barbering services, including haircuts,
                beard grooming, and styling. All services are subject to
                availability.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E1E1E]">
                3. Appointments and Cancellations
              </h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Appointments can be booked online or in person.</li>
                <li>
                  Please notify us at least 24 hours in advance if you need to
                  cancel or reschedule.
                </li>
                <li>
                  Late arrivals may result in shortened service time or
                  rescheduling.
                </li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E1E1E]">
                4. Payments
              </h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Payment is due at the time of service.</li>
                <li>
                  We accept cash, credit/debit cards, and other approved payment
                  methods.
                </li>
                <li>All sales are final unless otherwise stated.</li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E1E1E]">
                5. User Conduct
              </h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Use our website for any unlawful purpose.</li>
                <li>
                  Disrupt or interfere with the functionality of our website.
                </li>
                <li>Share false or misleading information.</li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E1E1E]">
                6. Intellectual Property
              </h2>
              <p className="mb-6">
                All content on our website (e.g., logos, text, images) is the
                property of Samuel's Barbers and is protected by copyright laws.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E1E1E]">
                7. Limitation of Liability
              </h2>
              <p className="mb-6">
                Samuel's Barbers is not liable for any damages arising from the
                use of our website or services, including but not limited to
                indirect, incidental, or consequential damages.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E1E1E]">
                8. Governing Law
              </h2>
              <p className="mb-6">
                These Terms of Use are governed by the laws of Massachusetts.
                Any disputes will be resolved in the courts of Middlesex County,
                Massachusetts.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E1E1E]">
                9. Changes to Terms
              </h2>
              <p className="mb-6">
                We reserve the right to update these Terms of Use at any time.
                Changes will be effective immediately upon posting on our
                website.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1E1E1E]">
                10. Contact Us
              </h2>
              <p className="mb-6">
                For questions or concerns regarding these Terms of Use, please
                contact us at:
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