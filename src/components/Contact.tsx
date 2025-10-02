import React, { lazy } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
export function Contact() {
  return <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E1E1E]">
            Contact Samuel's Barbershop
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit our Belmont barbershop or get in touch to book your
            appointment. Serving Belmont, Arlington and nearby areas.
          </p>
          <div className="w-24 h-1 bg-[#B8860B] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#1E1E1E]">
                Get In Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#1E1E1E] rounded-full p-3 mr-4">
                    <MapPin size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-[#1E1E1E]">Location</h4>
                    <address className="text-gray-600 not-italic">
                      4a Trapelo Rd, Belmont, MA 02478
                    </address>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#B8860B] rounded-full p-3 mr-4">
                    <Phone size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-[#1E1E1E]">Phone</h4>
                    <p className="text-gray-600">(857) 236-6226</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#B8860B] rounded-full p-3 mr-4">
                    <Clock size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-[#1E1E1E]">Hours</h4>
                    <p className="text-gray-600">Monday: 12pm - 7pm</p>
                    <p className="text-gray-600">Tuesday: 8:30am - 7pm</p>
                    <p className="text-gray-600">Wednesday: 8:30am - 7pm</p>
                    <p className="text-gray-600">Thursday: 8:30am - 7pm</p>
                    <p className="text-gray-600">Friday: 8am - 7pm</p>
                    <p className="text-gray-600">Saturday: 8am - 5pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-bold mb-4 text-[#1E1E1E]">Quick Contact</h4>
                <div className="flex space-x-4">
                  <a href="tel:8572366226" className="bg-[#1E1E1E] text-white hover:bg-black py-3 px-6 rounded-full font-semibold inline-block transition-colors duration-300" aria-label="Call Samuel's Barbershop now">
                    Call Now
                  </a>
                  <a href="https://samuelsbarbers.booksy.com/" target="_blank" rel="noopener noreferrer" className="bg-[#B8860B] text-white hover:bg-[#8B6914] py-3 px-6 rounded-full font-semibold inline-block transition-colors duration-300" aria-label="Book an appointment now at Samuel's Barbershop">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[400px] lg:h-auto rounded-lg overflow-hidden shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188627.35359507115!2d-71.47641900546876!3d42.37870409999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3715ab0f20c4d%3A0x54b4d2f6e73b3e82!2sSamuel%E2%80%99s%20Barber%E2%80%99s%20%7C%20Professional%20Barber!5e0!3m2!1sen!2sus!4v1758258059719!5m2!1sen!2sus" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Samuel's Barbershop location map in Belmont, MA" aria-label="Google Maps showing Samuel's Barbershop location in Belmont, MA"></iframe>
          </div>
        </div>
      </div>
    </section>;
}