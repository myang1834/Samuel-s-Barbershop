import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Clock, X } from 'lucide-react';
interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  isLogo?: boolean;
}
interface CategoryProps {
  id: string;
  label: string;
  icon: React.ReactNode;
}
export function ServiceTabs() {
  const categories: CategoryProps[] = [{
    id: 'haircuts',
    label: 'Haircuts & Fades',
    icon: <Scissors size={20} />
  }, {
    id: 'additional',
    label: 'Additional Services',
    icon: <div size={20} />
  }];
  const allServices: Record<string, Service[]> = {
    haircuts: [{
      id: 'regular',
      title: 'Regular Haircut',
      description: 'Traditional haircut with clippers and scissors, includes neck shave.',
      price: '$40.00',
      duration: '40 min',
      image: "/haircut_fae.jpg"
    }, {
      id: 'skin-fade',
      title: 'Skin Fade',
      description: 'Precision fade that gradually blends to skin, for a clean, modern look.',
      price: '$45.00',
      duration: '40 min',
      image: "/fade.jpg"
    }, {
      id: 'tape-fade',
      title: 'Tape Fade',
      description: 'Gradual fade that leaves more length on the sides.',
      price: '$45.00',
      duration: '40 min',
      image: "/taper_fade.jpg"
    }, {
      id: 'kids',
      title: 'Kids Haircut Under 9 Years Old',
      description: 'Haircut for children under 9 years old, includes a special kid-friendly chair.',
      price: '$40.00',
      duration: '30 min',
      image: "/logo-samuel-barbers.webp",
      isLogo: true
    }, {
      id: 'line-up',
      title: 'Line Up',
      description: 'Quick service to clean up your hairline and maintain your style between cuts.',
      price: '$20.00',
      duration: '10 min',
      image: "/lineup.png"
    }],
    additional: [{
      id: 'haircut-beard',
      title: 'Haircut and Beard',
      description: 'Complete package with regular haircut and beard trimming and styling.',
      price: '$80.00',
      duration: '1h',
      image: "/haircut.jpg"
    }, {
      id: 'beard-trim',
      title: 'Beard Trim',
      description: 'Professional beard trimming and shaping to keep your facial hair looking its best.',
      price: '$40.00',
      duration: '30 min',
      image: "/beardtrim.png"
    }, {
      id: 'shave',
      title: 'Shave',
      description: 'Traditional straight razor shave with hot towels and premium shaving products.',
      price: '$40.00',
      duration: '30 min',
      image: "/shave.png"
    }, {
      id: 'eyebrow',
      title: 'Eyebrow',
      description: 'Eyebrow trimming and shaping for a clean, defined look.',
      price: '$10.00',
      duration: '10 min',
      image: "/logo-samuel-barbers.webp",
      isLogo: true
    }]
  };
  const [activeTab, setActiveTab] = useState('haircuts');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  return <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E1E1E]">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of professional barbering services to keep you
            looking your best.
          </p>
          <div className="w-24 h-1 bg-[#B8860B] mx-auto mt-4"></div>
        </div>
        {/* Category Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="inline-flex rounded-md shadow-sm bg-white">
            {categories.map(category => <button key={category.id} onClick={() => setActiveTab(category.id)} className={`relative px-4 py-3 flex items-center transition-all duration-300 whitespace-nowrap ${activeTab === category.id ? 'text-white' : 'text-gray-600 hover:text-[#1E1E1E]'}`}>
                {activeTab === category.id && <motion.div layoutId="activeTab" className="absolute inset-0 bg-[#1E1E1E] rounded-md" initial={false} transition={{
              type: 'spring',
              duration: 0.5
            }} />}
                <span className="relative flex items-center">
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </span>
              </button>)}
          </div>
        </div>
        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.3
        }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices[activeTab].map(service => <motion.div key={service.id} whileHover={{
            scale: 1.03
          }} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-72 overflow-hidden relative">
                  {service.isLogo ? <div className="w-full h-full flex items-center justify-center bg-black">
                      <img src={service.image} alt={service.title} className="w-32 h-32 object-contain" onClick={() => {
                  setSelectedImage(service.image);
                  setSelectedTitle(service.title);
                }} />
                    </div> : <img src={service.image} alt={service.title} className="w-full h-full object-cover object-center cursor-pointer" onClick={() => {
                setSelectedImage(service.image);
                setSelectedTitle(service.title);
              }} />}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-[#1E1E1E]">
                      {service.title}
                    </h3>
                    <span className="text-lg font-semibold text-[#B8860B]">
                      {service.price}
                    </span>
                  </div>
                  <div className="flex items-center mb-4 text-gray-500">
                    <Clock size={16} className="mr-1" />
                    <span>{service.duration}</span>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <div className="px-6 pb-4">
                  <a href="https://samuelsbarbers.booksy.com/" target="_blank" rel="noopener noreferrer" className="block w-full bg-[#1E1E1E] text-white text-center py-2 rounded-md hover:bg-[#002255] transition-colors duration-300">
                    Book Now
                  </a>
                </div>
              </motion.div>)}
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Image Lightbox */}
      {selectedImage && <div className="fixed inset-0 bg-[#1E1E1E] bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 text-white" onClick={() => setSelectedImage(null)} aria-label="Close image preview">
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full">
            <h3 className="text-white text-center text-xl mb-4">
              {selectedTitle}
            </h3>
            <img src={selectedImage} alt={selectedTitle || 'Haircut style'} className="max-w-full max-h-[80vh] object-contain mx-auto" onClick={e => e.stopPropagation()} />
          </div>
        </div>}
    </section>;
}