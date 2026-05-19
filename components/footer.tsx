'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react'
import Image from 'next/image'
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

const PRODUCTS = ['Ice Cream Cups', 'Waffle Cones', 'Family Packs', 'Sundaes', 'Kulfi Range', 'Tubs']

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-chocolate overflow-hidden" aria-label="Site footer">
      {/* Top gradient bar */}
      <div className="h-1 w-full gradient-red-yellow" aria-hidden="true" />

      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-5%] left-[10%] w-80 h-80 bg-brand-red/10 rounded-full blur-[70px]" />
        <div className="absolute bottom-[-5%] right-[10%] w-72 h-72 bg-golden/8 rounded-full blur-[70px]" />
      </div>

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
            <div className="inline-block bg-white/95 p-3 rounded-2xl shadow-md mb-6">
              <div className="relative h-12 w-36">
                <Image
                  src="/images/dairy-trends-logo.png"
                  alt="Dairy Trends Ice Creams Logo"
                  fill
                  className="object-contain"
                  sizes="144px"
                />
              </div>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed text-sm">
              Dairy Trends Ice Creams brings you fresh, creamy, and delicious ice creams for every sweet moment.{' '}
              <span className="text-golden font-medium">Taste the trend of happiness!</span>
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
                  className={`w-10 h-10 bg-white/10 ${social.color} rounded-full flex items-center justify-center transition-all duration-200 focus-visible:outline-white focus-visible:outline-2 focus-visible:outline-offset-2 touch-target border border-white/10 hover:border-transparent`}
                  aria-label={`Visit our ${social.label} page`}
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-4 h-4 text-white" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={colVariants}>
            <h3 className="text-sm font-bold uppercase tracking-widest text-golden/80 mb-5">Quick Links</h3>
            <ul className="space-y-2.5" role="list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-white/55 hover:text-white text-sm transition-colors duration-200 focus-visible:outline-white focus-visible:outline-2 focus-visible:outline-offset-2 rounded group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-golden" aria-hidden="true" />
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Products */}
          <motion.div variants={colVariants}>
            <h3 className="text-sm font-bold uppercase tracking-widest text-golden/80 mb-5">Our Products</h3>
            <ul className="space-y-2.5" role="list">
              {PRODUCTS.map((item) => (
                <li key={item}>
                  <motion.button
                    type="button"
                    onClick={() => scrollToSection('#products')}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-white/55 hover:text-white text-sm transition-colors duration-200 focus-visible:outline-white focus-visible:outline-2 focus-visible:outline-offset-2 rounded group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-golden" aria-hidden="true" />
                    {item}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={colVariants}>
            <h3 className="text-sm font-bold uppercase tracking-widest text-golden/80 mb-5">Get In Touch</h3>
            <ul className="space-y-4" role="list">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 bg-brand-red/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                  <Phone className="w-4 h-4 text-brand-red-light" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-medium mb-0.5 uppercase tracking-wide">Call Us</p>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="text-white hover:text-golden text-sm transition-colors focus-visible:outline-white focus-visible:outline-2 rounded font-medium"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 bg-brand-red/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                  <Mail className="w-4 h-4 text-brand-red-light" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-medium mb-0.5 uppercase tracking-wide">Email Us</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-white hover:text-golden text-sm transition-colors focus-visible:outline-white focus-visible:outline-2 rounded break-all font-medium"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 bg-brand-red/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                  <MapPin className="w-4 h-4 text-brand-red-light" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-medium mb-0.5 uppercase tracking-wide">Visit Us</p>
                  <p className="text-white/80 text-sm leading-relaxed">{contactInfo.address}</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider + bottom bar */}
        <div className="border-t border-white/8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {currentYear} Dairy Trends Ice Creams. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <a
              href="#"
              className="text-white/40 hover:text-white/70 transition-colors focus-visible:outline-white focus-visible:outline-2 rounded"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-white/70 transition-colors focus-visible:outline-white focus-visible:outline-2 rounded"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
