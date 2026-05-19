'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { IceCream, Star, ChevronDown } from 'lucide-react'
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
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: 'easeOut' as const, delay: 0.2 }
  }
}

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
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
      className="relative min-h-screen overflow-hidden bg-white flex items-center"
      aria-label="Hero section"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 lg:pt-32 w-full">
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
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-baloo)' }}
            >
              <span className="text-gradient-brand">Dairy Trends</span>
              <br />
              <span className="text-chocolate">Ice Creams</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold text-golden mb-4"
              style={{ fontFamily: 'var(--font-baloo)' }}
            >
              Taste the Trend of Happiness
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-chocolate/65 max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Fresh, creamy, and delicious ice creams crafted to bring joy in every scoop.
              Experience the perfect blend of taste and happiness — for everyone, every occasion.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollToSection('#flavours')}
                className="inline-flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 rounded-2xl font-semibold text-base btn-glow focus-visible:outline-brand-red focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <IceCream className="w-5 h-5" aria-hidden="true" />
                Explore Flavours
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm text-chocolate px-8 py-4 rounded-2xl font-semibold text-base border border-chocolate/15 shadow-sm hover:border-golden hover:bg-golden/5 transition-all focus-visible:outline-brand-red focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Order Now
              </motion.button>
            </motion.div>

            {/* Social proof stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {[
                { value: '43+', label: 'Flavours', bg: 'bg-brand-red/10', text: 'text-brand-red' },
                { value: '5★', label: 'Rated', bg: 'bg-golden/20', text: 'text-chocolate-mid' },
                { value: '100%', label: 'Fresh', bg: 'bg-pink/50', text: 'text-chocolate-mid' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -3, scale: 1.03 }}
                  className={`${stat.bg} px-5 py-2.5 rounded-2xl border border-white/60 shadow-sm backdrop-blur-sm`}
                >
                  <div className={`text-lg font-bold ${stat.text}`}>{stat.value}</div>
                  <div className="text-xs font-medium text-chocolate/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Hero Image ── */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative flex items-center justify-center order-1 lg:order-2 mt-8 lg:mt-0"
          >
            {/* Rotating gradient ring - removed to clean up design */}
            {/* Inner cream circle - removed */}

            {/* Main hero image — static */}
            <motion.div
              className="relative z-10"
            >
              <div className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[440px] lg:h-[440px]">
                <Image
                  src="https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=600&h=600&fit=crop"
                  alt="Delicious strawberry and vanilla ice cream cone from Dairy Trends"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 340px, 440px"
                />
              </div>
            </motion.div>

            {/* Rating badge */}
            <motion.div
              aria-hidden="true"
              animate={{ y: [-8, 4, -8] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute bottom-16 -right-2 lg:-right-6 z-20 bg-white rounded-2xl px-3 py-2 shadow-xl border border-golden/20 flex items-center gap-2"
            >
              <Star className="w-4 h-4 fill-golden text-golden" />
              <span className="text-sm font-bold text-chocolate">4.9/5</span>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-medium text-chocolate/50 tracking-widest uppercase">Scroll</span>
        <motion.button
          onClick={() => scrollToSection('#flavours')}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="scroll-indicator focus-visible:outline-brand-red focus-visible:outline-2 rounded-full cursor-pointer bg-transparent border-2 border-chocolate/20 hover:border-brand-red/40 transition-colors"
          aria-label="Scroll to explore flavours"
        >
          <ChevronDown className="w-4 h-4 text-chocolate/40" />
        </motion.button>
      </motion.div>
    </section>
  )
}
