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
      className="relative min-h-screen overflow-hidden gradient-hero flex items-center"
      aria-label="Hero section"
    >
      {/* Parallax background blobs — subtle, not distracting */}
      <motion.div
        aria-hidden="true"
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-brand-red/8 blur-[80px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full bg-golden/15 blur-[80px]" />
        <div className="absolute top-[30%] right-[20%] w-[30vw] h-[30vw] max-w-[350px] max-h-[350px] rounded-full bg-pink/25 blur-[60px]" />
      </motion.div>

      {/* Decorative floating orbs */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [-8, 8, -8], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[15%] right-[8%] hidden lg:block w-16 h-16 bg-gradient-to-br from-golden to-golden-light rounded-full shadow-lg shadow-golden/30 pointer-events-none"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [8, -12, 8] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-[25%] left-[6%] hidden lg:block w-10 h-10 bg-brand-red/80 rounded-full shadow-lg shadow-brand-red/30 pointer-events-none"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [-12, 4, -12], rotate: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute top-[55%] right-[4%] hidden xl:block w-7 h-7 bg-pink-deep rounded-full shadow-md pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 lg:pt-32 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[82vh]">

          {/* ── Left: Content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Eyebrow badge */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-6">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-white/60">
                <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" aria-hidden="true" />
                <span className="text-sm font-semibold text-chocolate tracking-wide">Premium Quality Ice Creams</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-fredoka)' }}
            >
              <span className="text-gradient-brand">Dairy Trends</span>
              <br />
              <span className="text-chocolate">Ice Creams</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold text-golden mb-4"
              style={{ fontFamily: 'var(--font-fredoka)' }}
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
            {/* Rotating gradient ring */}
            <motion.div
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] rounded-full pointer-events-none"
              style={{
                background: 'conic-gradient(from 0deg, rgba(215,25,32,0.15), rgba(255,204,0,0.2), rgba(255,232,240,0.3), rgba(215,25,32,0.15))',
              }}
            />

            {/* Inner cream circle */}
            <div
              aria-hidden="true"
              className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-to-br from-cream/80 via-pink/40 to-cream pointer-events-none"
            />

            {/* Main hero image — floating */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
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

            {/* Floating accent bubbles */}
            <motion.div
              aria-hidden="true"
              animate={{ y: [-18, 0, -18], rotate: [-8, 8, -8] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 -right-2 lg:top-8 lg:right-4 w-20 h-20 lg:w-28 lg:h-28 rounded-2xl overflow-hidden shadow-xl border-2 border-white z-20"
            >
              <Image
                src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=200&h=200&fit=crop"
                alt=""
                fill
                className="object-cover"
                sizes="112px"
              />
            </motion.div>

            <motion.div
              aria-hidden="true"
              animate={{ y: [0, -16, 0], rotate: [6, -6, 6] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-2 -left-2 lg:bottom-14 lg:left-0 w-16 h-16 lg:w-24 lg:h-24 rounded-2xl overflow-hidden shadow-xl border-2 border-white z-20"
            >
              <Image
                src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&h=200&fit=crop"
                alt=""
                fill
                className="object-cover"
                sizes="96px"
              />
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
