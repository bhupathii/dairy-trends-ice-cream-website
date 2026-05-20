import AboutSection from '@/components/about-section'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Star, Heart, Award } from 'lucide-react'

export const metadata = {
  title: 'About Us | Dairy Trends Premium Ice Cream',
  description: 'Learn about Dairy Trends Ice Creams, our history of trust, quality ingredients, and commitment to delivering the creamiest local treats in India.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Dairy Trends Ice Creams",
    "description": "Learn about Dairy Trends Ice Creams history, quality standards, and franchise network.",
    "url": "https://example.com/about",
    "publisher": {
      "@type": "Organization",
      "name": "Dairy Trends Editorial Team",
      "logo": {
        "@type": "ImageObject",
        "url": "https://example.com/images/dairy-trends-logo.png"
      }
    },
    "author": {
      "@type": "Organization",
      "name": "Dairy Trends Editorial Team"
    },
    "datePublished": "2026-05-20",
    "dateModified": "2026-05-20"
  }

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-cream-light text-chocolate flex flex-col focus:outline-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      
      {/* Intro Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-brand-red/10 via-cream-deep/30 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-red font-black text-sm uppercase tracking-widest bg-brand-red/10 px-4 py-1.5 rounded-full mb-6 inline-block">
            Our Heritage
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-chocolate mb-6 leading-tight">
            Crafting Joy in Every Creamy Scoop
          </h1>
          <p className="text-lg text-chocolate/80 leading-relaxed max-w-2xl mx-auto">
            At Dairy Trends, ice cream is not just a dessert—it is an art form. Over the past decade, we have dedicated ourselves to crafting premium treats that bring smiles to families, retailers, and dessert lovers across the country.
          </p>
        </div>
      </section>

      {/* Main Content & Rich Copy for E-E-A-T & Word Count */}
      <section className="py-12 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-chocolate">
          <div className="space-y-8 text-chocolate/80 leading-relaxed text-base">
            <h2 className="text-2xl font-black text-chocolate mt-0 flex items-center gap-2">
              <Star className="w-6 h-6 text-golden fill-golden" />
              Our Quality Promise
            </h2>
            <p>
              Every single product in the Dairy Trends lineup starts with the finest, locally-sourced ingredients. We select premium milk from verified dairy farms, ensuring that our base mix is thick, creamy, and completely wholesome. We believe that premium ice cream should never cut corners, which is why we avoid artificial fillers and focus on rich, dairy-forward flavors.
            </p>
            <p>
              From our royal Rajbhog rich with saffron and crushed almonds to our decadent Trend Cookies loaded with real chocolate cookie chunks, each recipe is continuously tested and refined. Our culinary artisans combine traditional Indian dessert wisdom with modern, state-of-the-art production systems to keep every batch consistent and safe.
            </p>

            <h2 className="text-2xl font-black text-chocolate flex items-center gap-2">
              <Heart className="w-6 h-6 text-brand-red fill-brand-red/20" />
              A History of Shared Smiles
            </h2>
            <p>
              What started as a small local venture has blossomed into a trusted name with over 27+ premium ice cream products. We support a growing network of local distributors, convenience stores, and scoop-shop owners who share our vision of offering top-tier desserts at affordable prices. Our success is built on mutual trust, reliability, and our speed of delivering frozen happiness.
            </p>
            <p>
              Whether it is a child enjoying a Butterscotch Mega Cone on a sunny afternoon, a family sharing a Kashmiri Kulfi tub after dinner, or a major wedding catered with our specialties, we are honoured to be part of your sweet celebrations.
            </p>

            <h2 className="text-2xl font-black text-chocolate flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-red" />
              Looking Ahead
            </h2>
            <p>
              As we expand our distribution channels, our focus remains firmly on innovation and sustainability. We are continuously designing new, exciting taste profiles and packaging options to reduce our environmental footprint while preserving the unmatched taste of our dairy.
            </p>

            <div className="bg-cream-deep/40 p-8 rounded-3xl border border-chocolate/5 text-center mt-12">
              <h3 className="text-xl font-bold text-chocolate mb-3">Partner With Dairy Trends</h3>
              <p className="mb-6 max-w-xl mx-auto text-sm">
                Interested in starting a franchise or placing bulk orders for your store, supermarket, or event? Contact our sales team today to learn more about our partner benefits and pricing.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-colors"
              >
                Get Franchise / Bulk Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <p className="text-xs text-chocolate/40 text-center mt-12 pt-8 border-t border-chocolate/5">
              Published by: Dairy Trends Editorial Team | Last Updated: May 20, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Visual Component Section */}
      <AboutSection priority={true} />
      
      <Footer />
    </main>
  )
}
