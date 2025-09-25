import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // Add smooth scroll functionality
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
        // Close mobile menu if open
        setIsMenuOpen(false);
      }
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1E1E1E] shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-white font-serif flex items-center">
          <img src="/logo-samuel-barbers.webp" alt="Samuel's Barbers Logo" className="h-14 md:h-16" />
        </a>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="mr-6">
            <ul className="flex space-x-8">
              {['About', 'Services', 'Gallery', 'Team', 'Testimonials', 'Contact'].map(item => <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white hover:text-[#B8860B] transition-colors duration-300" onClick={handleNavClick}>
                    {item}
                  </a>
                </li>)}
            </ul>
          </nav>
          <a href="https://samuelsbarbers.booksy.com/" target="_blank" rel="noopener noreferrer" className="bg-[#B8860B] text-white hover:bg-[#8B6914] py-2 px-6 rounded-full font-semibold transition-colors duration-300" aria-label="Book an appointment now at Samuel's Barbershop">
            Book Now
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-[#1E1E1E]">
          <ul className="flex flex-col items-center py-4">
            {['About', 'Services', 'Gallery', 'Team', 'Testimonials', 'Contact'].map(item => <li key={item} className="py-2">
                <a href={`#${item.toLowerCase()}`} className="text-white hover:text-[#B8860B] transition-colors duration-300" onClick={handleNavClick}>
                  {item}
                </a>
              </li>)}
            <li className="py-4">
              <a href="https://samuelsbarbers.booksy.com/" target="_blank" rel="noopener noreferrer" className="bg-[#B8860B] text-white hover:bg-[#8B6914] py-2 px-6 rounded-full font-semibold transition-colors duration-300" aria-label="Book an appointment now at Samuel's Barbershop">
                Book Now
              </a>
            </li>
          </ul>
        </div>}
    </header>;
}