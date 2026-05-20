import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ProductsSection from '@/components/products-section'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata = {
  title: 'Our Products | Dairy Trends Ice Creams',
  description: 'Explore the full range of Dairy Trends premium ice creams: cones, cups, family tubs, traditional kulfi, and cassatas made with 100% fresh milk.',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Our Products | Dairy Trends Ice Creams',
    description: 'Explore the full range of Dairy Trends premium ice creams: cones, cups, family tubs, traditional kulfi, and cassatas made with 100% fresh milk.',
    url: 'https://example.com/products',
    images: [
      {
        url: '/images/dairy-trends-logo.png',
        width: 800,
        height: 600,
        alt: 'Dairy Trends Ice Creams Product Range',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Products | Dairy Trends Ice Creams',
    description: 'Explore the full range of Dairy Trends premium ice creams: cones, cups, family tubs, traditional kulfi, and cassatas made with 100% fresh milk.',
    images: ['/images/dairy-trends-logo.png'],
  },
}

export default function ProductsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Dairy Trends Ice Creams Product Catalog",
    "description": "Explore the full range of Dairy Trends premium ice creams including cones, cups, family tubs, and kulfis.",
    "url": "https://example.com/products",
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
    <main id="main-content" tabIndex={-1} className="overflow-x-hidden pt-20 bg-white focus:outline-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <ProductsSection limit={undefined} showViewAll={false} className="pt-4 lg:pt-8" isPageHeader={true} />
      
      {/* Franchise & Bulk Order Banner for Interlinking & E-E-A-T */}
      <section className="bg-cream-deep/30 py-16 border-t border-chocolate/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-chocolate mb-4">Interested in Wholesale or Franchise?</h2>
          <p className="text-chocolate/75 mb-8 max-w-xl mx-auto text-base">
            Join the Dairy Trends network! We offer attractive margins, state-of-the-art cold supply chain support, and a complete catalog of 27+ premium ice cream products for supermarkets, distributors, and events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-3.5 rounded-2xl font-bold shadow-md transition-colors"
            >
              Submit Franchise Enquiry
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919825010657"
              className="inline-flex items-center gap-2 border border-chocolate/20 hover:bg-chocolate/5 text-chocolate px-8 py-3.5 rounded-2xl font-bold transition-all"
            >
              <Phone className="w-5 h-5 text-brand-red" />
              Call Sales Team
            </a>
          </div>
          
          <p className="text-xs text-chocolate/40 mt-12 pt-8 border-t border-chocolate/5">
            Published by: Dairy Trends Editorial Team | Last Updated: May 20, 2026
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
