import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Privacy Policy | Dairy Trends Ice Creams',
  description: 'Learn how Dairy Trends Ice Creams collects, uses, and protects your information when you visit our website, order in bulk, or contact us.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Dairy Trends Ice Creams',
    description: 'Learn how Dairy Trends Ice Creams collects, uses, and protects your information when you visit our website, order in bulk, or contact us.',
    url: 'https://example.com/privacy-policy',
    images: [
      {
        url: '/images/dairy-trends-logo.png',
        width: 800,
        height: 600,
        alt: 'Dairy Trends Ice Creams Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Dairy Trends Ice Creams',
    description: 'Learn how Dairy Trends Ice Creams collects, uses, and protects your information when you visit our website, order in bulk, or contact us.',
    images: ['/images/dairy-trends-logo.png'],
  },
}

export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy | Dairy Trends Ice Creams",
    "description": "Learn how Dairy Trends Ice Creams collects, uses, and protects your information.",
    "url": "https://example.com/privacy-policy",
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
      "name": "Dairy Trends Legal Department"
    },
    "datePublished": "2026-05-20",
    "dateModified": "2026-05-20"
  }

  return (
    <main id="main-content" tabIndex={-1} className="overflow-x-hidden min-h-screen bg-cream/20 pt-28 focus:outline-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <h1 
          className="text-4xl md:text-5xl font-black text-chocolate mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Privacy <span className="text-brand-red">Policy</span>
        </h1>
        <p className="text-chocolate/60 text-sm mb-12">Last Updated: May 20, 2026</p>
        
        <div className="prose prose-chocolate max-w-none space-y-8 text-chocolate/85">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-chocolate">1. Introduction</h2>
            <p className="leading-relaxed">
              At Dairy Trends Ice Creams, we value your privacy. This Privacy Policy details the types of information we collect, how we use it, and the safeguards we have in place to protect your personal details when you interact with our website, request bulk orders, or inquire about franchise partnerships.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-chocolate">2. Information We Collect</h2>
            <p className="leading-relaxed">
              We collect information that you voluntarily provide to us when filling out our Business Enquiry forms, subscribing to updates, or contacting us directly:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Details:</strong> Your name, company name (if applicable), email address, telephone number, and physical address.</li>
              <li><strong>Enquiry Details:</strong> Specific business requirements, preferred ice cream flavors, sizing quantities, or franchise locations.</li>
              <li><strong>Usage Data:</strong> Technical details such as your IP address, browser type, and navigation patterns gathered automatically during your visit.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-chocolate">3. How We Use Your Information</h2>
            <p className="leading-relaxed">
              We process your information solely to deliver high-quality services and maintain operational excellence:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To answer franchise applications and process commercial bulk orders.</li>
              <li>To update you on new product ranges, visual catalog releases, or promotional offers.</li>
              <li>To optimize website speed, security compliance, and user flow aesthetics.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-chocolate">4. Cookies and Tracking Technologies</h2>
            <p className="leading-relaxed">
              Our website uses basic cookies to enhance user sessions, cache layouts, and analyze traffic patterns. You can adjust your browser settings to disable cookies, though some interactive elements of the site might function differently as a result.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-chocolate">5. Security of Information</h2>
            <p className="leading-relaxed">
              We implement industry-standard administrative and technical security measures to protect your personal information. However, please be aware that no transmission of data over the internet can be guaranteed as 100% secure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-chocolate">6. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions regarding this Privacy Policy or how your personal details are handled, please reach out to us:
            </p>
            <p className="mt-2 font-semibold">
              Dairy Trends Ice Creams<br />
              Email: info@dairytrends.in<br />
              Corporate Office: Hyderabad, Telangana, India
            </p>
          </section>
        </div>
        
        <p className="text-xs text-chocolate/40 text-center mt-12 pt-8 border-t border-chocolate/5">
          Published by: Dairy Trends Legal Department | Last Updated: May 20, 2026
        </p>
      </div>

      <Footer />
    </main>
  )
}
