'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { IceCream, Star, ChevronDown, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const }
  }
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const, delay: 0.2 }
  }
}

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', href)
    }
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-cream flex items-center"
      aria-label="Hero section"
    >
      {/* Brand Specific Red/Yellow/Cream background layers */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft Yellow Top-Right Blur */}
        <div className="absolute top-0 right-0 w-[45%] h-[45%] bg-golden/20 rounded-full blur-[100px] -translate-y-12 translate-x-12" />
        
        {/* Soft Red Bottom-Left Blur */}
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-brand-red/10 rounded-full blur-[100px] -translate-x-12 translate-y-12" />
        
        {/* Yellow Diagonal Layer for accent border */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-[44%] bg-golden hidden lg:block"
          style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
        />
        
        {/* Red Diagonal Layer (Primary Background on right) */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-[43%] bg-gradient-to-br from-brand-red to-brand-red-dark hidden lg:block"
          style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[82vh]">

          {/* ── Left: Content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-4 text-chocolate"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-brand-red">Dairy Trends</span>
              <br />
              <span>Ice Creams</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl font-bold text-brand-red-dark mb-4 drop-shadow-sm"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Taste the Trend of Happiness
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-chocolate/80 max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Rich, thick, and premium ice creams crafted to bring pure joy to every occasion.
              Experience genuine Indian dessert excellence made with fresh milk and high quality ingredients.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollToSection('#products')}
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-2xl font-bold text-base btn-glow focus-visible:outline-brand-red focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <IceCream className="w-5 h-5" aria-hidden="true" />
                Explore Products
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center justify-center gap-2 bg-white text-chocolate px-8 py-4 rounded-2xl font-bold text-base border-2 border-chocolate/10 shadow-sm hover:border-golden hover:bg-golden/5 transition-all focus-visible:outline-brand-red focus-visible:outline-2"
              >
                Franchise Enquiry
              </motion.button>
            </motion.div>

            {/* Social proof stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              {[
                { value: '27+', label: 'Unique Products', bg: 'bg-brand-red/10', text: 'text-brand-red' },
                { value: '100%', label: 'Fresh Milk', bg: 'bg-golden/20', text: 'text-brand-red-dark' },
                { value: '10+', label: 'Years of Trust', bg: 'bg-white border border-chocolate/10', text: 'text-chocolate' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -3, scale: 1.03 }}
                  className={`${stat.bg} px-5 py-3 rounded-2xl border border-white/60 shadow-sm backdrop-blur-sm flex flex-col justify-center min-w-[120px]`}
                >
                  <div className={`text-xl font-extrabold ${stat.text}`}>{stat.value}</div>
                  <div className="text-xs font-bold text-chocolate/70 mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Hero Image ── */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative flex items-center justify-center order-1 lg:order-2 mt-4 lg:mt-0"
          >
            {/* Premium Floating Container for Product Image */}
            <motion.div
              className="relative z-10"
              animate={{ y: [-12, 12, -12] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-[48px] border-2 border-dashed border-golden/40 animate-[spin_40s_linear_infinite]" />
              
              <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[440px] lg:h-[440px] rounded-[40px] overflow-hidden border-8 border-white shadow-2xl bg-cream-deep">
                <Image
                  src="/ice-cream images/homee.jpeg"
                  alt="Dairy Trends Premium Ice Cream Scoop"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </motion.div>

            {/* Rating badge */}
            <motion.div
              aria-hidden="true"
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-10 -right-2 lg:-right-4 z-20 bg-white rounded-2xl px-4 py-2.5 shadow-xl border border-golden/30 flex items-center gap-2"
            >
              <Star className="w-4 h-4 fill-golden text-golden" />
              <span className="text-sm font-extrabold text-chocolate">4.9/5 Rating</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs font-bold text-chocolate/60 tracking-widest uppercase">Scroll</span>
        <motion.button
          onClick={() => scrollToSection('#flavours')}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="scroll-indicator pointer-events-auto focus-visible:outline-brand-red focus-visible:outline-2 rounded-full cursor-pointer bg-transparent border-2 border-chocolate/20 hover:border-brand-red/40 transition-colors"
          aria-label="Scroll to view flavours"
        >
          <ChevronDown className="w-4 h-4 text-chocolate/40" />
        </motion.button>
      </motion.div>
    </section>
  )
}
