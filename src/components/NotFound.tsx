import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
export function NotFound() {
  return <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center max-w-xl mx-auto">
        <img src="/0_0.png" alt="Talent Barbershop Logo" className="h-24 mb-8 mx-auto" />
        <h1 className="text-5xl font-bold text-[#003278] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-[#003278] mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex justify-center">
          <Link to="/" className="bg-[#C0111F] text-white hover:bg-[#9a0e19] py-3 px-8 rounded-full font-semibold flex items-center justify-center transition-colors duration-300 text-lg">
            <Home size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>
        <p className="mt-8 text-gray-500">
          If you need help, please call us at{' '}
          <a href="tel:8572372107" className="text-[#003278] hover:underline">
            (857) 237-2107
          </a>
        </p>
      </div>
    </div>;
}