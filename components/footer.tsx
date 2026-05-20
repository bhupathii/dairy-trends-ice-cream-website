'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { navLinks, contactInfo } from '@/lib/data'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
}

const colVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } }
}

const SOCIAL_LINKS = [
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-brand-red' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-brand-red' },
  { icon: Twitter, href: '#', label: 'Twitter / X', color: 'hover:bg-brand-red' },
  { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-brand-red' },
]

const FOOTER_QUICK_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Product Catalog', href: '/products' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
]

const PRODUCTS = ['Cones Range', 'Sundae Cups', 'Family Tubs', 'Kulfis & Sticks', 'Specialities']

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const router = useRouter()
  const pathname = usePathname()

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.includes('#')) {
      return // Allow standard link navigation
    }
    const hash = href.includes('#') ? href.substring(href.indexOf('#')) : href
    const element = hash ? document.getElementById(hash.substring(1)) : null
    if (element) {
      e.preventDefault()
      element.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', pathname === '/' ? hash : pathname + hash)
    }
  }

  return (
    <footer className="relative bg-[#3B1F1B] overflow-hidden" aria-label="Site footer">
      {/* Visual Accent Borders (Yellow and Red double borders) */}
      <div className="h-1.5 w-full bg-golden" aria-hidden="true" />
      <div className="h-1 w-full bg-brand-red" aria-hidden="true" />

      {/* Subtle organic red glow inside chocolate footer */}
      <div className="absolute right-0 bottom-0 w-[30%] h-[30%] bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pt-16 pb-12"
        >

          {/* Brand Column */}
          <motion.div variants={colVariants} className="lg:col-span-1">
            <div className="inline-block bg-white/95 p-3 rounded-2xl shadow-md mb-6 border border-white/20">
              <Image
                src="/images/dairy-trends-logo.png"
                alt="Dairy Trends Ice Creams Logo"
                width={144}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-white/70 mb-6 leading-relaxed text-sm">
              Dairy Trends Ice Creams brings you fresh, creamy, and premium ice creams for every sweet moment.{' '}
              <span className="text-golden font-bold">Taste the trend of happiness!</span>
            </p>

            {/* Social Icons */}
            <div className="flex gap-2.5" role="list" aria-label="Social media links">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  role="listitem"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className={`w-12 h-12 bg-white/10 ${social.color} rounded-full flex items-center justify-center transition-all duration-200 focus-visible:outline-white focus-visible:outline-2 focus-visible:outline-offset-2 touch-target border border-white/10 hover:border-transparent`}
                  aria-label={`Visit our ${social.label} page`}
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5 text-white" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={colVariants}>
            <h3 className="text-xs font-black uppercase tracking-widest text-golden mb-5">Quick Links</h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-white/70 hover:text-golden text-sm transition-colors duration-200 focus-visible:outline-white focus-visible:outline-2 focus-visible:outline-offset-2 rounded group font-bold"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-golden" aria-hidden="true" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Products */}
          <motion.div variants={colVariants}>
            <h3 className="text-xs font-black uppercase tracking-widest text-golden mb-5">Our Products</h3>
            <ul className="space-y-2.5" role="list">
              {PRODUCTS.map((item) => (
                <li key={item}>
                  <Link
                    href="/products"
                    className="flex items-center gap-2 text-white/70 hover:text-golden text-sm transition-colors duration-200 focus-visible:outline-white focus-visible:outline-2 focus-visible:outline-offset-2 rounded group font-bold"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-golden" aria-hidden="true" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={colVariants}>
            <h3 className="text-xs font-black uppercase tracking-widest text-golden mb-5">Get In Touch</h3>
            <ul className="space-y-4" role="list">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 bg-brand-red/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5 border border-brand-red/10" aria-hidden="true">
                  <Phone className="w-4 h-4 text-brand-red-light" />
                </div>
                <div>
                  <p className="text-white/65 text-[10px] font-black uppercase tracking-wide">Call Us (Office)</p>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="text-white hover:text-golden text-sm transition-colors focus-visible:outline-white focus-visible:outline-2 rounded font-bold"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 bg-brand-red/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5 border border-brand-red/10" aria-hidden="true">
                  <Mail className="w-4 h-4 text-brand-red-light" />
                </div>
                <div>
                  <p className="text-white/65 text-[10px] font-black uppercase tracking-wide">Email Us</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-white hover:text-golden text-sm transition-colors focus-visible:outline-white focus-visible:outline-2 rounded break-all font-bold"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 bg-brand-red/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5 border border-brand-red/10" aria-hidden="true">
                  <MapPin className="w-4 h-4 text-brand-red-light" />
                </div>
                <div>
                  <p className="text-white/65 text-[10px] font-black uppercase tracking-wide">Factory Address</p>
                  <p className="text-white/80 text-xs leading-relaxed font-semibold">{contactInfo.address}</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider + bottom bar */}
        <div className="border-t border-white/8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/65 text-xs font-bold">
            &copy; {currentYear} Dairy Trends Ice Creams (Pradhara Dairy Pvt Ltd). All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs font-bold">
            <a
              href="/privacy-policy"
              className="text-white/65 hover:text-white/90 transition-colors focus-visible:outline-white focus-visible:outline-2 rounded"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/65 hover:text-white/90 transition-colors focus-visible:outline-white focus-visible:outline-2 rounded"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
