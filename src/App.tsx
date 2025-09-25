import React, { useEffect, createElement } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { SEO } from './components/SEO';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ServiceTabs } from './components/ServiceTabs';
import { Gallery } from './components/Gallery';
import { Team } from './components/Team';
import { InstagramFeed } from './components/InstagramFeed';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
export function App() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.async = true;
    script.src = '//www.instagram.com/embed.js';
    document.body.appendChild(script);
    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);
  return <HelmetProvider>
      <div className="w-full min-h-screen bg-white">
        <SEO />
        <Header />
        <Hero />
        <About />
        <ServiceTabs />
        <Gallery />
        <Team />
        <InstagramFeed />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </HelmetProvider>;
}