import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import FlavoursSection from '@/components/flavours-section'
import AboutSection from '@/components/about-section'
import ProductsSection from '@/components/products-section'
import WhyChooseUsSection from '@/components/why-choose-us-section'
import TestimonialsSection from '@/components/testimonials-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dairy Trends Ice Creams",
    "image": "https://example.com/images/dairy-trends-logo.png",
    "url": "https://example.com",
    "telephone": "+91 98250 10657",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "F-2, Shalin Complex, Sector-11",
      "addressLocality": "Gandhinagar",
      "addressRegion": "Gujarat",
      "postalCode": "382011",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.1094,
      "longitude": 78.3212
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://facebook.com/dairytrends",
      "https://instagram.com/dairytrends"
    ]
  }

  return (
    <main id="main-content" tabIndex={-1} className="relative overflow-x-hidden focus:outline-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Sticky Animated Navbar */}
      <Navbar />
      
      {/* Hero Section with Floating Elements */}
      <HeroSection />
      
      {/* Popular Flavours with Swiper Carousel */}
      <FlavoursSection />
      
      {/* About Dairy Trends */}
      <AboutSection />
      
      {/* Products Range with 3D Tilt Cards */}
      <ProductsSection />
      
      {/* Why Choose Us Features */}
      <WhyChooseUsSection />
      
      {/* Customer Testimonials Carousel */}
      <TestimonialsSection />
      
      {/* Contact Form and Info */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
