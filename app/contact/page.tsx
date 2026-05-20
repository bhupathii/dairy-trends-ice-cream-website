import ContactSection from '@/components/contact-section'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact Us | Dairy Trends Premium Ice Cream',
  description: 'Contact Dairy Trends Ice Creams for franchise inquiries, bulk orders, feedback, or custom events. Get in touch with our Gandhinagar sales team today.',
}

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Dairy Trends Ice Creams",
    "description": "Get in touch with the Dairy Trends team for wholesale, franchise, and event support.",
    "url": "https://dairytrends.in/contact",
    "publisher": {
      "@type": "Organization",
      "name": "Dairy Trends Editorial Team",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dairytrends.in/images/dairy-trends-logo.png"
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
    <main className="min-h-screen bg-cream-light text-chocolate flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Intro Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-brand-red/10 via-cream-deep/30 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-red font-black text-sm uppercase tracking-widest bg-brand-red/10 px-4 py-1.5 rounded-full mb-6 inline-block">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-chocolate mb-6 leading-tight">
            Connect With Our Team
          </h1>
          <p className="text-lg text-chocolate/80 leading-relaxed max-w-2xl mx-auto">
            Have questions about franchise options, retail partnerships, bulk ordering for large celebrations, or simply want to share your feedback? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Corporate Info & Rich Copy for E-E-A-T & Word Count */}
      <section className="py-12 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-chocolate/80 leading-relaxed text-base">
              <h2 className="text-2xl font-black text-chocolate mt-0">
                Partner with Dairy Trends
              </h2>
              <p>
                At Dairy Trends Ice Creams, we believe in building strong, lasting relationships with our distributors, franchise owners, and local retail partners. When you partner with us, you get access to our complete portfolio of 27+ high-margin products, marketing materials, and high-performance cold chain logistics support.
              </p>
              <p>
                Our team is dedicated to providing swift responses and prompt delivery services. Fill out our business enquiry form below, and a regional business development manager will contact you within 24 business hours to discuss pricing, distribution setups, and local support options.
              </p>
              <p>
                For urgent enquiries, bulk event catering requests, or immediate feedback, feel free to call our main customer support line or write directly to our corporate email address listed here.
              </p>
              
              <div className="pt-6 border-t border-chocolate/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-chocolate/50 uppercase">Call Our Office</p>
                    <a href="tel:+919825010657" className="font-extrabold text-chocolate hover:text-brand-red transition-colors">+91 98250 10657</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-chocolate/50 uppercase">Email Us</p>
                    <a href="mailto:info@dairytrends.in" className="font-extrabold text-chocolate hover:text-brand-red transition-colors">info@dairytrends.in</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-chocolate/50 uppercase">Headquarters</p>
                    <p className="font-bold text-chocolate">F-2, Shalin Complex, Sector-11, Gandhinagar, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cream-deep/30 p-8 rounded-3xl border border-chocolate/5 space-y-6">
              <h3 className="text-lg font-bold text-chocolate flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-red" />
                Office Hours
              </h3>
              <ul className="space-y-3 text-sm text-chocolate/80">
                <li className="flex justify-between border-b border-chocolate/10 pb-2">
                  <span>Monday - Saturday</span>
                  <span className="font-bold">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-chocolate/10 pb-2">
                  <span>Sunday</span>
                  <span className="font-bold text-brand-red">Closed</span>
                </li>
              </ul>
              
              <div className="bg-white p-6 rounded-2xl border border-chocolate/5 text-center shadow-sm">
                <p className="text-xs font-bold text-chocolate/60 mb-3">Want to explore our menu first?</p>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-brand-red hover:text-brand-red-dark font-extrabold text-sm transition-colors group"
                >
                  Browse Full Ice Cream Catalog
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          <p className="text-xs text-chocolate/40 text-center mt-12 pt-8 border-t border-chocolate/5">
            Published by: Dairy Trends Editorial Team | Last Updated: May 20, 2026
          </p>
        </div>
      </section>

      {/* Visual Component Section containing Form & Captcha */}
      <ContactSection />

      <Footer />
    </main>
  )
}
