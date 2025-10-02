import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-[#1E1E1E] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img src="/logo-samuel-barbers.webp" alt="Samuel's Barbers Logo" className="h-16 mb-4" />
            </div>
            <p className="text-gray-300 mb-4">
              Providing quality haircuts and grooming services in Belmont, MA
              since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/p/Samuelsbarbers-61571978196335/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#B8860B] transition-colors duration-300" aria-label="Follow Samuel's Barbershop on Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/samuelsbarbers_07/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#B8860B] transition-colors duration-300" aria-label="Follow Samuel's Barbershop on Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#B8860B] transition-colors duration-300" aria-label="Follow Samuel's Barbershop on Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Gallery', 'Team', 'Contact'].map(item => <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-[#B8860B] transition-colors duration-300">
                      {item}
                    </a>
                  </li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Monday</span>
                <span>12pm - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Tuesday</span>
                <span>8:30am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Wednesday</span>
                <span>8:30am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Thursday</span>
                <span>8:30am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span>8am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>8am - 5pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-lg font-bold mb-2">Areas Served</h4>
              <p className="text-gray-300">
                Belmont, Arlington and nearby areas
              </p>
            </div>
          </div>
        </div>
      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Samuel's Barbershop. All rights reserved.</p>
          <p className="mt-2">
            <a href="tel:8572366226" className="hover:text-[#B8860B] transition-colors duration-300">
              (857) 236-6226
            </a>{' '}
            | 4a Trapelo Rd, Belmont, MA 02478
          </p>
        <p className="mt-2">
            <Link to="/privacy-policy" className="text-gray-300 hover:text-[#B8860B] transition-colors duration-300">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link to="/terms-of-use" className="text-gray-300 hover:text-[#B8860B] transition-colors duration-300">
              Terms of Use
            </Link>
          </p>
        <div className="mt-8">
          <p className="text-lg font-semibold">Made by Pagoda</p>
          <a href="https://www.getpagoda.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#B8860B] transition-colors duration-300">
            www.getpagoda.com
          </a>
        </div>
        </div>
      </div>
    </footer>;
}