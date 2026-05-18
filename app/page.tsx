import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import FlavoursSection from '@/components/flavours-section'
import AboutSection from '@/components/about-section'
import ProductsSection from '@/components/products-section'
import WhyChooseUsSection from '@/components/why-choose-us-section'
import OffersSection from '@/components/offers-section'
import GallerySection from '@/components/gallery-section'
import TestimonialsSection from '@/components/testimonials-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
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
      
      {/* Special Offers with Gradient Background */}
      <OffersSection />
      
      {/* Masonry Gallery with Lightbox */}
      <GallerySection />
      
      {/* Customer Testimonials Carousel */}
      <TestimonialsSection />
      
      {/* Contact Form and Info */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
