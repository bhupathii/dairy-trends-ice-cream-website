'use client'

import { useState, useEffect, useId } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'
import { navLinks } from '@/lib/data'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('/')
  const layoutId = useId()
  const router = useRouter()
  const pathname = usePathname()

  const getHash = (href: string) => href.includes('#') ? href.substring(href.indexOf('#')) : href

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track active section on scroll
  useEffect(() => {
    const targetIds = ['home', 'flavours', 'about', 'products', 'contact']
    const sections = targetIds.map(id => document.getElementById(id))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const targetId = entry.target.id
            setActiveLink(targetId === 'home' ? '/' : `/#${targetId}`)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    
    if (href === '/' || href === '/#home') {
      if (pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setActiveLink('/')
        window.history.pushState(null, '', '/')
      } else {
        router.push('/')
      }
      return
    }
    
    if (!href.includes('#')) {
      router.push(href)
      return
    }
    
    const hash = getHash(href)
    const element = hash ? document.getElementById(hash.substring(1)) : null
    
    if (!element) {
      router.push(href)
      return
    }

    setActiveLink(href)
    element.scrollIntoView({ behavior: 'smooth' })
    window.history.pushState(null, '', pathname === '/' ? hash : pathname + hash)
  }

  return (
    <>
      <motion.nav
        aria-label="Main Navigation"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled ? 'glass-navbar py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              onClick={(e) => scrollToSection(e, '/')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="focus-visible:outline-brand-red focus-visible:outline-2 focus-visible:outline-offset-4 rounded shrink-0"
              aria-label="Dairy Trends Home"
            >
              <Image
                src="/images/dairy-trends-logo.png"
                alt="Dairy Trends Ice Creams logo"
                width={176}
                height={56}
                className="h-12 w-auto md:h-14 object-contain"
                priority
              />
            </motion.a>

            {/* Desktop Navigation — with sliding pill indicator */}
            <LayoutGroup>
              <div className="hidden lg:flex items-center gap-1 bg-white/40 backdrop-blur-sm rounded-full px-2 py-1.5 border border-white/60 shadow-sm">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 focus-visible:outline-brand-red focus-visible:outline-2 ${
                      activeLink === link.href ? 'text-white' : 'text-chocolate hover:text-brand-red'
                    }`}
                  >
                    {activeLink === link.href && (
                      <motion.span
                        layoutId={layoutId}
                        className="absolute inset-0 rounded-full bg-brand-red shadow-sm"
                        style={{ originY: '0px' }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </LayoutGroup>

            {/* CTA Group */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-chocolate font-medium hover:bg-brand-red/8 transition-colors focus-visible:outline-brand-red focus-visible:outline-2 touch-target"
                aria-label="Call us at +91 98765 43210"
              >
                <div className="w-8 h-8 bg-brand-red/10 rounded-full flex items-center justify-center" aria-hidden="true">
                  <Phone className="w-4 h-4 text-brand-red" />
                </div>
                <span className="hidden xl:inline text-sm">+91 98765 43210</span>
              </motion.a>
              <motion.a
                href="/#contact"
                onClick={(e) => scrollToSection(e, '/#contact')}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="bg-brand-red text-white px-5 py-2.5 rounded-full font-semibold text-sm btn-glow focus-visible:outline-brand-red focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Franchise Enquiry
              </motion.a>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.88 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white touch-target focus-visible:outline-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 shadow-lg"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-controls={isMobileMenuOpen ? 'mobile-menu' : undefined}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-5 h-5" aria-hidden="true" />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-5 h-5" aria-hidden="true" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu — slide-in from right with blur backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-chocolate/40 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
              role="dialog"
              aria-label="Mobile Navigation"
              aria-modal="true"
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-cream shadow-2xl flex flex-col overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-chocolate/8">
                <Image
                  src="/images/dairy-trends-logo.png"
                  alt="Dairy Trends"
                  width={128}
                  height={40}
                  className="h-10 w-auto object-contain"
                  priority
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red focus-visible:outline-brand-red touch-target"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-1 px-4 pt-6 flex-1" role="menu">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 + 0.1 }}
                    role="menuitem"
                    className={`flex items-center px-4 py-3 rounded-2xl text-base font-medium transition-all duration-200 focus-visible:outline-brand-red focus-visible:outline-2 ${
                      activeLink === link.href
                        ? 'bg-brand-red text-white shadow-sm'
                        : 'text-chocolate hover:bg-brand-red/8 hover:text-brand-red'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              {/* Footer CTAs */}
              <div className="px-4 pb-8 pt-4 border-t border-chocolate/8 space-y-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 px-4 py-3 text-chocolate font-medium hover:text-brand-red transition-colors focus-visible:outline-brand-red focus-visible:outline-2 rounded-xl touch-target"
                >
                  <div className="w-9 h-9 bg-brand-red/10 rounded-full flex items-center justify-center" aria-hidden="true">
                    <Phone className="w-4 h-4 text-brand-red" />
                  </div>
                  +91 98765 43210
                </a>
                <motion.a
                  href="/#contact"
                  onClick={(e) => scrollToSection(e, '/#contact')}
                  whileTap={{ scale: 0.96 }}
                  className="block w-full bg-brand-red text-white px-6 py-3.5 rounded-2xl font-semibold text-center btn-glow focus-visible:outline-brand-red focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Franchise Enquiry
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
