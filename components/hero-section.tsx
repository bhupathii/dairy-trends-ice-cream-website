'use client'

import { motion } from 'framer-motion'
import { IceCream, Sparkles, Heart } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen overflow-hidden gradient-hero">
      {/* Animated Background Blobs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 -left-32 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 -right-32 w-[500px] h-[500px] bg-golden/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink/30 rounded-full blur-3xl"
      />

      {/* Floating Ice Cream Decorations */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 right-[10%] hidden lg:block"
      >
        <div className="w-16 h-16 bg-pink rounded-full shadow-lg" />
      </motion.div>
      <motion.div
        animate={{ y: [20, -20, 20], rotate: [5, -5, 5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 left-[5%] hidden lg:block"
      >
        <div className="w-12 h-12 bg-golden rounded-full shadow-lg" />
      </motion.div>
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 right-[5%] hidden lg:block"
      >
        <div className="w-8 h-8 bg-brand-red/40 rounded-full shadow-lg" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-6"
            >
              <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
              <span className="text-sm font-medium text-chocolate">Premium Quality Ice Creams</span>
            </motion.div>

            {/* Logo Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-6 lg:hidden"
            >
              <Image
                src="/images/dairy-trends-logo.png"
                alt="Dairy Trends Ice Creams"
                width={200}
                height={100}
                className="mx-auto"
              />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-chocolate leading-tight mb-4"
              style={{ fontFamily: 'var(--font-fredoka)' }}
            >
              <span className="text-brand-red">Dairy Trends</span>
              <br />
              Ice Creams
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-golden mb-4"
              style={{ fontFamily: 'var(--font-fredoka)' }}
            >
              Taste the Trend of Happiness
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-chocolate/70 max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Fresh, creamy, and delicious ice creams made to bring joy in every scoop. 
              Experience the perfect blend of taste and happiness.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                onClick={() => scrollToSection('#flavours')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-red text-white px-8 py-4 rounded-full font-semibold text-lg btn-glow flex items-center justify-center gap-2"
              >
                <IceCream className="w-5 h-5" />
                Explore Flavours
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-golden text-chocolate px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
              >
                Order Now
              </motion.button>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              {[
                { icon: IceCream, label: '20+ Flavours', color: 'bg-brand-red' },
                { icon: Sparkles, label: 'Fresh Taste', color: 'bg-golden' },
                { icon: Heart, label: 'Family Favourite', color: 'bg-pink' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass px-5 py-3 rounded-2xl flex items-center gap-3 shadow-lg"
                >
                  <div className={`${stat.color} p-2 rounded-xl`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-chocolate">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Floating Background Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-brand-red/20 via-golden/20 to-pink/20"
            />
            
            {/* Main Ice Cream Image */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]">
                <Image
                  src="https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=600&h=600&fit=crop"
                  alt="Delicious Ice Cream Cone"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>

            {/* Floating Small Ice Creams */}
            <motion.div
              animate={{ y: [-20, 0, -20], rotate: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 lg:top-10 lg:right-10 w-20 h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-xl border-4 border-white"
            >
              <Image
                src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=200&h=200&fit=crop"
                alt="Vanilla Ice Cream"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, -20, 0], rotate: [10, -10, 10] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 lg:bottom-20 lg:left-0 w-16 h-16 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-xl border-4 border-white"
            >
              <Image
                src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&h=200&fit=crop"
                alt="Chocolate Ice Cream"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              animate={{ y: [-15, 5, -15] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-20 -right-4 lg:bottom-32 lg:-right-8 w-14 h-14 lg:w-20 lg:h-20 rounded-full overflow-hidden shadow-xl border-4 border-white"
            >
              <Image
                src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=200&h=200&fit=crop"
                alt="Mango Ice Cream"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection('#flavours')}
        >
          <span className="text-sm text-chocolate/60 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-chocolate/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-brand-red rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
