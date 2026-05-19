'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'
import { navLinks } from '@/lib/data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    // Use passive event listener for scroll
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      // Accessibility: move focus to the section if it is interactive, 
      // or at least update the URL hash
      window.history.pushState(null, '', href)
    }
  }

  return (
    <>
      <motion.nav
        aria-label="Main Navigation"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass shadow-lg py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a 
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative h-12 w-36 md:h-14 md:w-44 focus-visible:outline-brand-red focus-visible:outline-2 focus-visible:outline-offset-4 rounded"
              aria-label="Dairy Trends Home"
            >
              <Image
                src="/images/dairy-trends-logo.png"
                alt="Dairy Trends Ice Creams logo"
                fill
                className="object-contain"
                priority
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1" role="menubar">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  role="menuitem"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-brand-red focus-visible:outline-2 ${
                    isScrolled 
                      ? 'text-chocolate hover:bg-brand-red/10 hover:text-brand-red' 
                      : 'text-chocolate hover:bg-white/40'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-chocolate font-medium focus-visible:outline-brand-red focus-visible:outline-2 rounded-md p-1 touch-target"
                aria-label="Call us at +91 98765 43210"
              >
                <Phone className="w-5 h-5 text-brand-red" aria-hidden="true" />
                <span className="hidden xl:inline">+91 98765 43210</span>
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-red text-white px-6 py-2.5 rounded-full font-semibold btn-glow transition-all focus-visible:outline-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 inline-flex items-center justify-center"
              >
                Order Now
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-brand-red text-white touch-target focus-visible:outline-brand-red focus-visible:outline-2 focus-visible:outline-offset-2"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-chocolate/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div 
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-cream shadow-2xl overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              role="dialog"
              aria-label="Mobile Navigation"
              aria-modal="true"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-6">
                <div className="flex flex-col gap-2" role="menu">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      role="menuitem"
                      className="text-left px-4 py-3 rounded-xl text-lg font-medium text-chocolate hover:bg-brand-red/10 hover:text-brand-red transition-colors focus-visible:outline-brand-red focus-visible:outline-2"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
                
                <div className="mt-auto space-y-4 pt-6 border-t border-brand-red/10">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 px-4 py-3 text-chocolate font-medium touch-target focus-visible:outline-brand-red focus-visible:outline-2 rounded-xl"
                  >
                    <Phone className="w-5 h-5 text-brand-red" aria-hidden="true" />
                    +91 98765 43210
                  </a>
                  <motion.a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, '#contact')}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-brand-red text-white px-6 py-3 rounded-full font-semibold btn-glow text-center inline-block focus-visible:outline-brand-red focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Order Now
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
