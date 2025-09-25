import React, { lazy } from 'react';
import { Scissors, Award, Clock } from 'lucide-react';
export function About() {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1E1E1E]">
            The finest family-owned barbershop in Massachusetts
          </h2>
          <div className="w-24 h-1 bg-[#B8860B] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="order-1 md:order-1">
            <img src="/abaout.webp" alt="Samuel's Barbers interior with barber chairs and staff" className="rounded-lg shadow-xl w-full h-auto object-cover" loading="lazy" />
          </div>
          <div className="order-2 md:order-2">
            <h3 className="text-2xl font-bold mb-6 text-[#1E1E1E]">
              Our Story
            </h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Samuel's Barbers is more than just a barbershop—we are a
                community hub. Our doors are open to everyone, creating a space
                where relationships are built across all paths of life. Come and
                meet our talented barbers, enjoy a premium grooming experience,
                and leave with more than just a great look—leave with a new
                friend.
              </p>
              <p>
                At Samuel's Barbers, we specialize in precision haircuts and
                expert beard grooming. Whether you're looking for a classic cut,
                a modern style, or a perfectly trimmed beard, our skilled
                barbers are here to deliver a look that suits your personality
                and lifestyle. Using the finest tools and techniques, we ensure
                every visit leaves you feeling confident and refreshed.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#1E1E1E] flex items-center justify-center mb-4">
              <Scissors size={24} className="text-white" aria-hidden="true" />
            </div>
            <h4 className="font-bold mb-2 text-[#1E1E1E]">Expert Barbers</h4>
            <p className="text-sm text-gray-600">
              Skilled professionals with years of experience
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#B8860B] flex items-center justify-center mb-4">
              <Award size={24} className="text-white" aria-hidden="true" />
            </div>
            <h4 className="font-bold mb-2 text-[#1E1E1E]">Quality Service</h4>
            <p className="text-sm text-gray-600">
              Premium products and attention to detail
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#1E1E1E] flex items-center justify-center mb-4">
              <Clock size={24} className="text-white" aria-hidden="true" />
            </div>
            <h4 className="font-bold mb-2 text-[#1E1E1E]">Convenient Hours</h4>
            <p className="text-sm text-gray-600">
              Open 6 days a week for your convenience
            </p>
          </div>
        </div>
      </div>
    </section>;
}