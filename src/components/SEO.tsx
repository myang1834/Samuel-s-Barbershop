import React from 'react';
import { Helmet } from 'react-helmet-async';
interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
}
export function SEO({
  title = "Samuel's Barbershop | Professional Haircuts & Styling in Belmont, MA",
  description = "Samuel's Barbershop in Belmont, MA offers professional haircuts, hot towel shaves, and beard trims. Serving Belmont, Arlington and nearby areas. Kid-friendly barbershop with personalized service. Open 6 days a week. Call (857) 236-6226 to book your appointment today.",
  canonicalUrl = 'https://samuelsbarbershop.com',
  ogImage = '/social-share.png'
}: SEOProps) {
  return <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="barbershop Belmont, barbershop Arlington, haircut Belmont MA, beard trim, hot towel shave, men's grooming, fade, classic cut, kids haircut, family barbershop, barber near me, best barber Belmont" />
      <meta name="author" content="Samuel's Barbershop" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
      <meta name="theme-color" content="#1E1E1E" />
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Samuel's Barbershop" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BarberShop",
            "name": "Samuel's Barbershop",
            "image": "${ogImage}",
            "url": "${canonicalUrl}",
            "telephone": "(857) 236-6226",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4a Trapelo Rd",
              "addressLocality": "Belmont",
              "addressRegion": "MA",
              "postalCode": "02478",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 42.396743,
              "longitude": -71.181855
            },
            "areaServed": ["Belmont", "Arlington", "Cambridge", "Watertown", "Waltham"],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                "opens": "08:30",
                "closes": "21:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Friday",
                "opens": "08:00",
                "closes": "19:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "08:00",
                "closes": "17:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "00:00",
                "closes": "00:00"
              }
            ],
            "priceRange": "$$",
            "description": "Samuel's Barbershop in Belmont, MA offers professional haircuts, hot towel shaves, and beard trims. Serving Belmont, Arlington and nearby areas. Kid-friendly barbershop with personalized service.",
            "sameAs": [
              "https://www.facebook.com/samuelsbarbershop",
              "https://www.instagram.com/samuelsbarbershop"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Barbershop Services",
              "itemListElement": [
                {
                  "@type": "OfferCatalog",
                  "name": "Haircuts",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Classic Haircut",
                        "description": "Traditional haircut with clippers and scissors, includes a hot towel and neck shave."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Kid's Haircut",
                        "description": "Haircut for children under 12 years old."
                      }
                    }
                  ]
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Shaves & Beard",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Hot Towel Shave",
                        "description": "Traditional straight razor shave with hot towels and premium shaving products."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Beard Trim",
                        "description": "Precise beard shaping and trimming to keep your facial hair looking its best."
                      }
                    }
                  ]
                }
              ]
            }
          }
        `}
      </script>
    </Helmet>;
}