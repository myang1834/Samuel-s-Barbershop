import React, { useState, lazy } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const images = [{
    url: "/WhatsApp-Image-2025-01-21-at-20.30.22-1.webp",
    alt: "Barber giving a precision haircut to a young client at Samuel's Barbers in Belmont"
  }, {
    url: "/WhatsApp-Image-2025-01-21-at-20.30.25-1.webp",
    alt: "Barber performing a beard trim with straight razor at Samuel's Barbers in Belmont"
  }, {
    url: "/WhatsApp-Image-2025-01-21-at-20.30.24.webp",
    alt: "Interior view of Samuel's Barbers in Belmont showing multiple barbers at work"
  }, {
    url: "/WhatsApp-Image-2025-01-21-at-20.30.22.webp",
    alt: "Barber carefully cutting a young client's hair at Samuel's Barbers in Belmont"
  }, {
    url: "/WhatsApp-Image-2025-01-21-at-20.30.22-2.webp",
    alt: "Full shop view of Samuel's Barbers in Belmont with multiple barber stations"
  }, {
    url: "/WhatsApp-Image-2025-01-21-at-20.30.26-1.webp",
    alt: "Waiting area with Samuel's Barbers logo wall and couch at the Belmont location"
  }, {
    url: "/WhatsApp-Image-2025-01-21-at-20.30.26-3.webp",
    alt: "Barber performing a precise haircut on a young client at Samuel's Barbers"
  }, {
    url: "/WhatsApp-Image-2025-01-21-at-20.30.26-2.webp",
    alt: "Barber in cap providing beard trimming services at Samuel's Barbers in Belmont"
  }, {
    url: "/WhatsApp-Image-2025-01-21-at-20.30.25.webp",
    alt: "Barber in cap working on a client's beard at Samuel's Barbers shop"
  }, {
    url: "/WhatsApp-Image-2025-01-21-at-20.30.25-3.webp",
    alt: "Barber with cap providing detailed haircut services at Samuel's Barbers"
  }, {
    url: "/WhatsApp-Image-2025-01-21-at-20.30.52.webp",
    alt: "Side view of a clean taper fade haircut at Samuel's Barbers in Belmont"
  }, {
    url: "/WhatsApp-Image-2025-01-21-at-20.30.28.webp",
    alt: "Two barbers working together on a young client's haircut at Samuel's Barbers"
  }, {
    url: "/WhatsApp-Image-2025-01-21-at-20.30.27.webp",
    alt: "Barber taking a photo of client's fresh haircut and beard trim at Samuel's Barbers"
  }, {
    url: "/WhatsApp-Image-2025-01-21-at-20.30.27-1.webp",
    alt: "Interior of Samuel's Barbers showing premium barber chairs with gold accents"
  }, {
    url: "/WhatsApp-Image-2025-01-21-at-20.30.26.webp",
    alt: "Barber using a massage gun for post-haircut neck treatment at Samuel's Barbers"
  }];
  // Display only the first 6 images when not expanded
  const displayedImages = isExpanded ? images : images.slice(0, 6);
  return <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E1E1E]">
            Our Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of our recent haircuts and styles at Samuel's Barbers
            in Belmont, MA.
          </p>
          <div className="w-24 h-1 bg-[#B8860B] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {displayedImages.map((image, index) => <div key={index} className="aspect-square overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:transform hover:scale-105" onClick={() => setSelectedImage(image.url)}>
              <img src={image.url} alt={image.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>)}
        </div>
        {/* See More / See Less Button */}
        <div className="flex justify-center mt-8">
          <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-2 bg-[#1E1E1E] hover:bg-black text-white py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
            {isExpanded ? <>
                See Less <ChevronUp size={18} />
              </> : <>
                See More <ChevronDown size={18} />
              </>}
          </button>
        </div>
        {/* Lightbox */}
        {selectedImage && <div className="fixed inset-0 bg-[#1E1E1E] bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button className="absolute top-4 right-4 text-white" onClick={() => setSelectedImage(null)} aria-label="Close image preview">
              <X size={32} />
            </button>
            <img src={selectedImage} alt="Enlarged haircut from Samuel's Barbers" className="max-w-full max-h-[90vh] object-contain" />
          </div>}
      </div>
    </section>;
}