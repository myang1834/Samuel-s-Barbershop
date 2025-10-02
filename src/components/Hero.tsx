import React from 'react';
export function Hero() {
  return <section id="home" className="relative h-screen w-full bg-[#000000]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70" style={{
      backgroundImage: "url('/IMG_6066.JPG')"
    }} aria-hidden="true"></div>
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow-lg">
          Samuel's Barbershop | Professional Haircuts & Styling in Belmont, MA
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl text-shadow-md">
          Classic cuts and modern styles by skilled barbers in Belmont, MA.
          Serving Belmont, Arlington and nearby areas.
        </p>
        <a href="https://samuelsbarbers.booksy.com/" target="_blank" rel="noopener noreferrer" className="bg-[#B8860B] text-white hover:bg-[#8B6914] py-3 px-8 rounded-full font-semibold flex items-center justify-center transition-colors duration-300 text-lg" aria-label="Book an appointment now at Samuel's Barbershop">
          Book Now
        </a>
      </div>
    </section>;
}